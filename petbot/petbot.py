import tweepy
from config import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_KEY, ACCESS_SECRET
from utils import save_tweet, classify_tweet

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

class MyStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        tweet= api.get_status(status.id)
        if tweet.in_reply_to_status_id is not None:
            mention_tweet= api.get_status(tweet.in_reply_to_status_id)
            if not mention_tweet.retweeted :
                try:
                    mention_tweet.retweet()
                    save_tweet(mention_tweet)
                    api.update_status(status = classify_tweet(tweet.text, tweet.in_reply_to_status_id), in_reply_to_status_id = tweet.id , auto_populate_reply_metadata=True)
                except Exception as e:
                    print(e)
        return True
    
    def on_error(self, status_code):
        if status_code == 420:
            #returning False in on_error disconnects the stream
            return False

user = api.verify_credentials()
myStreamListener = MyStreamListener()
myStream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
myStream.filter(track=['@buscapatitas'])