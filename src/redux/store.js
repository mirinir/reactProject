import {createStore, applyMiddleware, combineReducers } from 'redux'
import { getInvestmentPool  } from './middleware/crud'
import { getAllClients  } from './middleware/crud'
import { getAllStores } from './middleware/crud'
// import reducer from '../redux/reducer/getAllClient.reducer'
import  get  from './reducer/get.reducer'

const reducer = combineReducers({
    get:get,

})

const store = createStore(
    reducer,
    applyMiddleware(
        getInvestmentPool,
        getAllClients,
        getAllStores
        )
   
    
)
window.store = store
export default store

store.dispatch({ type: 'EXTRACT_JWT'})