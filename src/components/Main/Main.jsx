/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import List from '../List';
import Info from '../Info';
import './main.scss';

const Main = (props) => {
  const {
    choiceMovie,
  } = props;
  return (
    <div className="Main">
      <div className="Main__table">
        <Filter
        />
        <List
        />
      </div>
      <div className="Info">
        {choiceMovie.length === 0 ? <h2>you dont choice anything</h2> : (
          <Info
            choiceMovie={choiceMovie}
          />
        ) }
      </div>

    </div>

  );
};

const mapStateToProps = (state) => ({
  choiceMovie: state.choiceMovie,
  data: state.data,
});

export default connect(mapStateToProps)(Main);
