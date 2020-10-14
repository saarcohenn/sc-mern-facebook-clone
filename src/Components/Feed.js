import React from 'react';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                message="How you Doin'?!"
                profilePic='https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/92381468_10216556651860824_8120100934010273792_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=ve6aY1gyHMYAX9NZ2C-&_nc_ht=scontent.fsdv3-1.fna&oh=ad3fd643e552b08944a8e7505cceadf4&oe=5FAB09EB'
                timestamp='1603119999999'
                imgName='imgName'
                username='Saar Cohen'
            />
        </div>
    )
}

export default Feed;
