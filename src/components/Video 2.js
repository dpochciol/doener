import React from 'react';
import '../css/horizontal.css';
import EmbedYouTube from './EmbedYouTube'; 


const Video = () => {

  return(
      <div controls className="ui card horizontal">
        <EmbedYouTube />
      </div>
  )
}

export default Video;