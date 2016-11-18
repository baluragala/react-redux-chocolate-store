import * as actionTypes from '../actionTypes'

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