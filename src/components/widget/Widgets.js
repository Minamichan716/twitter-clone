import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
// import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        {/* <SearchIcon className="widgets-searchIcon" /> */}

        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets-widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1733820105073840486"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kimetsu_off"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/kimetsu_off"}
          options={{ text: "#reactjs is awesome", via: "kimetsu_off" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
