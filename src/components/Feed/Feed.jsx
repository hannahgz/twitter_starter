import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox userProfile={props.userProfile} 
                setUserProfile={props.setUserProfile}
                setTweets={props.setTweets}
                tweets = {props.tweets}
                tweetText={props.tweetText}
                setTweetText={props.setTweetText}
                />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {
        props.tweets.map((currTweet) => 
          <Tweet tweet={currTweet} key={currTweet.id}/>
        )}
      </div>

    </div>
  )
}
