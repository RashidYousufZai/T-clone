import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"RashidYousufZa3"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Rashid Khan"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={""}
          options={{ text: "#reactjs is awesome", via: "Rashid khan" }}
        />
      </div>
    </div>
  );
} 

export default Widgets;