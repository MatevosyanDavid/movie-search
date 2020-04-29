import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import LazyImage from 'lazy-image-reactjs';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useHistory, useLocation } from 'react-router-dom';

import { getTitle } from 'utils';
import img from 'assets/code.jpg';
import { addFavorites } from 'store/actions';

import './index.css';

function Card ({
  id,
  title, 
  poster,
  backdrop,
  overview,
  voteCount,
  popularity,
  isFavorites,
  releaseDate,
  isMovieInfo,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div 
      className={classNames({
        'card': !isMovieInfo,
        'movie-info': isMovieInfo,
      })}
    >
      <LazyImage
        alt={title}
        dataSrc={img}
        onClick={() => !isMovieInfo && history.push(`${pathname}/${id}`)}
        src={!isMovieInfo ? poster : backdrop}
      />
      <div className="card-info">
        <h5>{getTitle(title)}</h5>
        <p>Vote Count: {voteCount}</p>
        <p>Popularity: {popularity}</p>
        <p>Release: {releaseDate}</p>
        {
          !isMovieInfo
            ? isFavorites
              ? <BsHeartFill
                fill="red"
                className="favorite"
                onClick={() => {
                  dispatch(addFavorites({ id, isFavorites: false }));
                }}
              />
              : <BsHeart
                fill="white"
                className="favorite"
                onClick={() => {
                  dispatch(addFavorites({ id, isFavorites: true }));
                }}
              />
            : null
        }
        { isMovieInfo && <p>{overview}</p> }
      </div>
    </div>
  )
}

export default Card;
