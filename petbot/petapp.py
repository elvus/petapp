from flask import Flask, Response, render_template
from flask_cors import CORS
from bson.json_util import dumps
from utils import connection, listar_tweets

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app, resources={r"/api/*": {"origins":"*"}})

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/api/tweets")
def api_root(): 
    db=connection()
    response=dumps(db.pets.find({
        "status": None
    }))
    return Response(response=response, status=200, mimetype='application/json')

@app.route("/api/<path:q>",methods=['GET', 'POST'])
def query(q):
    response=dumps(listar_tweets(q))
    return Response(response=response, status=200, mimetype='application/json')

if __name__=="__main__":
        app.run()