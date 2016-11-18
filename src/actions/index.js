import * as actionTypes from './actionTypes'

export function makeChocolates(ingredients){
  return{
    type : actionTypes.MAKE_CHOCOLATE,
    ingredients : ingredients
  }
}

export function giftChocolates(chocolateId){
  return{
    type : actionTypes.GIFT_COHOCOLATE,
    chocolateId : chocolateId
  }
}