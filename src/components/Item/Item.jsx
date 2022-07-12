/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import './item.scss';
import PropTypes from 'prop-types';

const Item = (props) => {
  const {

    original_title: title,

    poster_path: posterImg,

    vote_count: likes,

    vote_average: raiting,
  } = props;

  // eslint-disable-next-line react/prop-types
  const {
    id, onTitleClick,
  } = props;

  const raitCurrent = Math.ceil(raiting / 2);
  const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterImg}`;

  const item = [1, 2, 3, 4, 5];

  const raitingChange = (e) => {
    let rait = e.target.dataset.rate;
    let node = e.target.parentElement;
    if (!rait) {
      rait = (+raitCurrent);
      node = e.target;
    }
    for (let index = 0; index < 5; index += 1) {
      if (e.target) {
        node.children[index].classList.remove('full');
        node.children[index].classList.add('empty');
      }
    }

    for (let index = 0; index < rait; index += 1) {
      node.children[index].classList.remove('empty');
      node.children[index].classList.add('full');
    }

    const result = { id, rait };
    props.setRaitingChange(result);
  };

  return (
    <div className="Card">
      <div className="body">
        <div className="likes_body">
          <div />
          <button
            label="likes"
            type="button"
            className="Like"
            onClick={() => props.inc(id, 'up')}
          />
          <button
            className="DisLike"
            type="button"
            label="likes"
            onClick={() => props.inc(id, 'down')}
          />
          <p> likes </p>
          <div className="border">{likes}</div>

        </div>
        <div className="title_body">
          <h3
            className="Title"
            onClick={() => onTitleClick(title)}
          >
            {title}
          </h3>
          <img src={url} alt="" />
        </div>

      </div>
      <div className="Stars">
        <div
          className="Star"
          onClick={(e) => raitingChange(e)}
        >

          {item.map((it) => (it <= raitCurrent ? <span className="full" data-rate={it} /> : <span className="empty" data-rate={it} />))}

        </div>
      </div>

    </div>

  );
};
Item.defaultProps = {
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
  id: PropTypes.number,
};
Item.propTypes = {
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
  id: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  inc: (results, type) => {
    const action = { type: 'CHANGE_LIKES', payload: { results, type } };
    dispatch(action);
  },
  sort: () => {
    const action = { type: 'SORT_LIST' };
    dispatch(action);
  },
  onTitleClick: (title) => {
    const action = { type: 'CLICK_ON_TITTLE', payload: title };
    dispatch(action);
  },
  setRaitingChange: (result) => {
    const action = { type: 'CHANGE_RAITING', payload: result };
    dispatch(action);
  },
});

export default connect(null, mapDispatchToProps)(Item);
