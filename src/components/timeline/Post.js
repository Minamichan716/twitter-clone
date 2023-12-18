import React from "react";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import "./Post.css";

function Post({ displayname, username, verified, text, image, avater }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {displayname}
              <span className="postheader-special">
                <VerifiedUserIcon className="post-badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
        <div className="post-footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
