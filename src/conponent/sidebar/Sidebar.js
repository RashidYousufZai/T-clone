import React from 'react'
import "./sidebar.css"
import SidebarOption from "./SidebarOption";

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';



const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Top Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* SideBar Options */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
