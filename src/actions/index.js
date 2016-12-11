import * as actionTypes from '../actionTypes'
import axios from 'axios'

export function makeChocolates(ingredients){
  console.log('makeChocolates')
  return{
    type : actionTypes.MAKE_CHOCOLATE,
    ingredients : ingredients
  }
}

export function giftChocolates(chocolateId){
  console.log(chocolateId)
  return{
    type : actionTypes.GIFT_CHOCOLATE,
    chocolateId : chocolateId
  }
}

export function getUsers(){
  var action = {
    type:'GET_USERS',
    payload:axios.get('https://api.github.com/users')
  }
  console.log(action);
  return action;
}

export function createBook(book){
  return {
    type:actionTypes.CREATE_BOOK,
    book:book
  }
}

export function deleteBook(id){
  return {
    type:actionTypes.DELETE_BOOK,
    id:id
  }
}
