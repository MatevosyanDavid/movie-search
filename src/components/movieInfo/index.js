import React from 'react';

import Card from 'components/cards';

import './index.css';

const MovieInfo = props => (
  <div className="info">
    <Card isMovieInfo {...props} />
    <div className="videos">
      { 
        props.videos.map(({ key: videoKey }) => {
          const url = `${process.env.REACT_APP_ENDPOINT_YOUTUBE}${videoKey}`;
          return (
            <div
              key={videoKey}
            >
              <iframe
                src={url}
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                title={videoKey}
                allow="accelerometer"
                className="videos-item"
              />
            </div>
          )
        })
      }
    </div>
  </div>
);

export default MovieInfo;
