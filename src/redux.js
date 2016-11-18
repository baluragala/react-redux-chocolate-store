import {createStore} from 'redux'

const reducer = (state, action) => {
  console.log('I am reducer');
}

const store = createStore(reducer);

console.log(store)

store.dispatch({type:'MAKE_COHOCOLATE'})

store.subscribe(()=>{ console.log('I am subscriber')})