import * as constants from '../constatnts/constants';

export const setItemsList = (itemsList) => ({
  type: constants.SET_ITEMS_LIST,
  payload: itemsList,
});

export const onClickLikes = (id, types) => ({
  type: constants.CHANGE_LIKES,
  payload: { id, types },
});

export const sortByCatalog = () => ({
  type: constants.SUBMIT_FORM,
});

export const handelChangeInput = (e) => ({
  type: constants.CHANGE_VALUE_OF_INPUT,
  payload: e.target.value,
});

export const sort = (type) => ({
  type: constants.SORT_LIST,
  payload: type,
});

export const inc = (results, type) => ({
  type: constants.CHANGE_LIKES,
  payload: { results, type },
});

export const onTitleClick = (title) => ({
  type: constants.CLICK_ON_TITTLE,
  payload: title,
});

export const setRaitingChange = (results) => ({
  type: constants.CHANGE_RAITING,
  payload: results,
});
