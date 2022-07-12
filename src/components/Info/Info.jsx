/* eslint-disable react/prop-types */
import React from 'react';
import './info.scss';

const Info = (props) => {
  const { choiceMovie } = props;
  const [result] = choiceMovie;
  const {
    vote_count: likes,
    poster_path: posterImg,
    release_date: release,
    overview, vote_average: rait,
    id,
  } = result;
  const currentRait = Math.ceil(rait / 2);
  const item = [1, 2, 3, 4, 5];
  const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterImg}`;
  return (
    <div key={id + 2}>
      <div className="Card__body">
        <div className="info__all">
          <h3>Info</h3>
          <span>
            Likes:
            {likes}
          </span>
          <div className="Star">
            {item.map((it) => (it <= currentRait ? <span className="full" data-rate={it} /> : <span className="empty" data-rate={it} />))}
          </div>
        </div>
        <div className="Card__info">
          <img src={url} alt="" />
          <p>
            release date :
            {release}
          </p>

          <p>
            overview :
            {overview}
          </p>

        </div>

      </div>
      <div />

    </div>
  );
};

export default Info;
