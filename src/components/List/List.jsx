/* eslint-disable react/no-unused-prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import Item from '../Item/Item';
import './list.scss';

const List = (props) => {
  const { data } = props;
  if (!data) {
    return <h3> Somthing wrong</h3>;
  }
  return (
    <div className="List">
      {data.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}

    </div>

  );
};
List.defaultProps = {
  choiseMovie: PropTypes.func,
  getReiting: PropTypes.func,
  increase: PropTypes.func,
  sort: PropTypes.func,

};
List.propTypes = {
  choiseMovie: PropTypes.func,
  getReiting: PropTypes.func,
  increase: PropTypes.func,
  sort: PropTypes.func,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(List);
