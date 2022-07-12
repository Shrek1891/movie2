/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import API_KEY from '../services/const';

const App = (props) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/`);
      const newData = await response.json();
      props.setItemList(newData);
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Main
      />
      <Footer />

    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  setItemList: ({ results }) => {
    const action = { type: 'SET_ITEMS_LIST', payload: results };
    dispatch(action);
  },
});

const mapStateToProps = (state) => ({
  valueNew: state.valueNew,
  data: state.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
