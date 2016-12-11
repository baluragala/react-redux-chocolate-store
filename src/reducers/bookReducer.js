import * as actionTypes from '../actionTypes'

const initialState = {
  books:[]
}
export default (state=initialState,action) => {
  
  switch(action.type){
    case actionTypes.CREATE_BOOK:
      var books=state.books;
      books.push(action.book);
      return Object.assign({},state,{books})
    default:
      return state;
  }
}