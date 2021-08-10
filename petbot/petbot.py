import tweepy
import logging
from config import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_KEY, ACCESS_SECRET
from pymongo import MongoClient
from pymongo.errors import BulkWriteError
from datetime import datetime

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

class MyStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        tweet= api.get_status(status.id)
        conversations(tweet.in_reply_to_status_id)
        return True
    
    def on_error(self, status_code):
        if status_code == 420:
            #returning False in on_error disconnects the stream
            return False

def connection():
    client=MongoClient("mongodb://localhost:27017/")
    db=client["petapp"]
    return db

def conversations(tweet_id):
    db = connection()
    if tweet_id is not None:
        tweet= api.get_status(tweet_id)
        if not tweet.retweeted :
            try:
                tweet.retweet()
                db.pets.insert_one({
                    "tweet_id": tweet_id,
                    "tweet": tweet.text,
                    'pics':tweet_media(tweet),
                    "retweet": True,
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

user = api.verify_credentials()
myStreamListener = MyStreamListener()
myStream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
myStream.filter(track=['@rescatando_paws'])