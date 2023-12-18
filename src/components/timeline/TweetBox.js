import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox-Input">
          <Avatar />
          <input placeholder="今どうしてる" type="text"></input>
        </div>
        <input
          className="tweetbox-imageInput"
          placeholder="画像urlを入力してください"
          type="text"
        ></input>
        <Button className="tweetbox-TweetButton" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
