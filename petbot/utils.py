from pymongo import MongoClient
from pymongo.errors import BulkWriteError
from datetime import datetime

def connection():
    client=MongoClient("mongodb://localhost:27017/")
    db=client["petapp"]
    return db

def save_tweet(tweet):
    db = connection()
    try:
        db.pets.insert_one({
            "tweet_id": tweet.id,
            "tweet": tweet.text,
            "tweet_url":"https://twitter.com/%s/status/%s"%(str(tweet.user.screen_name), str(tweet.id)),
            "usuario": tweet.user.screen_name,
            'pics':tweet_media(tweet),
            "retweet": True,
            "activo": True,
            "estado": None,
            "tweet_date": tweet.created_at,
            "create_at": datetime.now()
        })
    except Exception as e:
        print(e)

def tweet_media(tweet):
    media =[]
    if 'media' in tweet.entities:
        for image in  tweet.entities['media']:
            media.append(
                {
                    'media':image['media_url']
                }
            )
    return media

def classify_tweet(text, id):
    db = connection()
    estado = ""
    msg = ""
    if "busca hogar" in text.lower() or "adopcion" in text.lower():
        estado = "adopcion"
        msg = "Encontremos un hogar"
    elif "buscamos" in text.lower() or "se perdio" in text.lower() or "perdido" in text.lower():
        estado = "perdido"
        msg = "A encontrarlo"
    elif "ayuda" in text.lower():
        estado = "ayuda"
        msg = "Busquemos Ayuda"
    
    try:
        db.pets.update_one({"tweet_id": id},
        {"$set":{"estado": estado}})
    except Exception as e:
        print(e)
    
    return msg
