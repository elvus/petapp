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
            'pics':tweet_media(tweet),
            "retweet": True,
            "status": None,
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