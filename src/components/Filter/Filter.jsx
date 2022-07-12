/* eslint-disable react/prop-types */
import './filter.scss';
import React from 'react';
import { connect } from 'react-redux';

const Filter = (props) => {
  const {
    sort,
    handelChangeInput,
    valueNew,
    sortByCatalog,
  } = props;
  const submitOfForm = (e) => {
    e.preventDefault();
    sortByCatalog();
  };
  return (
    <>
      <div className="Sort">
        <h4>Sort Movies</h4>
        <div className="Btns">
          <button
            type="button"
            className="Button"
            onClick={() => {
              sort('vote_count');
            }}
          >
            by Likes
          </button>
          <button
            type="button"
            className="Button"
            onClick={() => sort('vote_average')}
          >
            by Raiting
          </button>
        </div>
      </div>
      <form
        className="Search"
        onSubmit={(e) => submitOfForm(e)}
      >
        <button
          type="submit"
          label="search"
          className="ButtonSearch"
        />
        <input
          type="text"
          id="search"
          placeholder="Search by name"
          onChange={(e) => handelChangeInput(e)}
          value={valueNew}
        />
      </form>
    </>
  );
};
const mapStateToProps = (state) => ({
  valueNew: state.value,

});

const mapDispatchToProps = (dispatch) => ({
  sort: (type) => {
    const action = { type: 'SORT_LIST', payload: type };
    dispatch(action);
  },
  handelChangeInput: (e) => {
    const action = { type: 'CHANGE_VALUE_OF_INPUT', payload: e.target.value };
    dispatch(action);
  },
  sortByCatalog: () => {
    const action = { type: 'SUBMIT_FORM' };
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
