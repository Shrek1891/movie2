/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import * as constants from './constatnts/constants';

const initialState = {
  data: [],
  sortType: 'ABC',
  choiceMovie: [],
  value: '',
  bigData: [],
};

// eslint-disable-next-line default-param-last
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ITEMS_LIST: {
      return { ...state, data: action.payload, bigData: action.payload };
    }

    case constants.CHANGE_LIKES: {
      const id = action.payload.results;
      const newData = state.data.map((item) => {
        if (item.id === id) {
          if (action.payload.type === 'up') {
            item.vote_count += 1;
          } else {
            item.vote_count -= 1;
          }
        }
        return item;
      });
      return { ...state, data: newData };
    }
    case constants.SORT_LIST: {
      const newData = [...state.data];
      let newSortType;
      if (state.sortType === 'ABC') {
        newData.sort((a, b) => (a[action.payload] < b[action.payload] ? 1 : -1));
        newSortType = 'DEC';
      } else {
        newData.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1));
        newSortType = 'ABC';
      }
      return { ...state, data: newData, sortType: newSortType };
    }
    case constants.CLICK_ON_TITTLE: {
      const newDate = state.data.filter((item) => item.original_title === action.payload);
      return { ...state, choiceMovie: newDate };
    }
    case constants.CHANGE_RAITING: {
      let dataNew = [];
      dataNew = state.data.map((item) => {
        if (item.id === action.payload.id) {
          item.vote_average = action.payload.rait * 2;
        }
        return item;
      });
      return { ...state, data: dataNew };
    }
    case constants.CHANGE_VALUE_OF_INPUT: {
      return { ...state, value: action.payload };
    }
    case constants.SUBMIT_FORM: {
      let newData = state.data.filter((item) => item.original_title
        .toLowerCase().includes(state.value.toLowerCase().trim()));
      if (!state.value) {
        newData = state.bigData;
      }
      return { ...state, data: newData, value: '' };
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
