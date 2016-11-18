import {createStore} from 'redux'

const reducer = (state={}, action) => {
  return { choclates :[
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
    }]
  }
}

const store = createStore(reducer);
//console.log(store)
store.subscribe(()=>{ 
  console.log('I am subscriber - I am interested in store change', store.getState()) 
})

store.dispatch({
                type : 'MAKE_CHOCOLATE',
                ingredients : ['Chocolate Liquor','Cocoa Butter','Sugar','Milk']
})

