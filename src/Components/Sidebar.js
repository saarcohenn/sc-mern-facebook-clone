import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
// import { useStateValue } from '../StateProvider';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src={"https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/92381468_10216556651860824_8120100934010273792_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=ve6aY1gyHMYAX9NZ2C-&_nc_ht=scontent.fsdv3-1.fna&oh=ad3fd643e552b08944a8e7505cceadf4&oe=5FAB09EB"} title={"Saar"} />

            <SidebarRow Icon={LocalHospitalIcon} title={'COVID-19 Information Center'} />

            <SidebarRow Icon={EmojiFlagsIcon} title={'Pages'} />

            <SidebarRow Icon={PeopleIcon} title={'Friends'} />

            <SidebarRow Icon={ChatIcon} title={'Messenger'} />

            <SidebarRow Icon={StorefrontIcon} title={'Marketplace'} />

            <SidebarRow Icon={VideoLibraryIcon} title={'Videos'} />

            <SidebarRow Icon={ExpandMoreOutlined} title={'More'} />

        </div>
    )
}

export default Sidebar;
