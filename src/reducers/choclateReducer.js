import * as actionTypes from '../actionTypes'

export default function(state={isFetching:false},action){
  switch(action.type){
    case "GET_USERS_PENDING":
        return Object.assign({},state,{isFetching:true});
    case "GET_USERS_FULFILLED":
        return Object.assign({},state,{users:action.payload.data},{isFetching:false});
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
        },{users:[],books:[],cars:[]});
      
    case actionTypes.GIFT_CHOCOLATE:
      var newChocolates=[]
      state.chocolates.forEach((ele,index,arr) => {
        if(ele.id === action.chocolateId){
          ele.soh -= 1;       
        }
        newChocolates.push(ele)
      })
      return Object.assign({} ,{isChocolatesMade:state.isChocolatesMade},{chocolates : newChocolates});
    case 'GET_USERS':
      return Object.assign({},state,{users:action.payload});
    default:
      return state;
  }
}