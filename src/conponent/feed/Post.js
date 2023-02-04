import React from "react";
import "./post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";

const data = {
  Name : "Rashid khan",
  username : "Rashid khan",
  verified : "yes",
  text : "My nars is Rashid khan",
  image : "https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg",
  avatar: "avatar"
} 

const Post = () => {
    return (
      <>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Rashid Khan" src={data.avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {data.displayName}{""}
                <span className="post__headerSpecial">
                  {data.verified && <VerifiedUserIcon className="post__badge" />} @
                  {data.username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{data.text}</p>
            </div>
          </div>
          <img src={data.image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      </>
    );
  }

export default Post;