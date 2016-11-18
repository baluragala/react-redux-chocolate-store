import * as actionTypes from '../actionTypes'

export default function(state={},action){
  console.log(action)
  switch(action.type){
    case actionTypes.MAKE_CHOCOLATE:
      return Object.assign({},state,{isChocolatesMade:true},{ chocolates :
          [
            {
              "id" : 1,
              "name":"Diary Milk",
              "brand" : "Cadbury",
              "size" : "small",
              "price" : "5",
              "soh" : 10
            },
            {
              "id" : 2,
              "name":"5 Star",
              "brand" : "Cadbury",
              "size" : "small",
              "price" : "5",
              "soh" : 10
            },
            {
              "id" : 3, 
              "name":"KitKat",
              "brand" : "Nestle",
              "size" : "small",
              "price" : "8",
              "soh" : 4
            }
          ]
        });
      
    case actionTypes.GIFT_CHOCOLATE:
      var newChocolates=[]
      state.chocolates.forEach((ele,index,arr) => {
        if(ele.id === action.chocolateId){
          ele.soh -= 1;       
        }
        newChocolates.push(ele)
      })
      return Object.assign({} ,{isChocolatesMade:state.isChocolatesMade},{chocolates : newChocolates});

    default:
      return state;
  }
}