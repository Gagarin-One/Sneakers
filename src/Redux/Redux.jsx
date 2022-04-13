import { createStore, applyMiddleware, combineReducers} from "redux";
import MainReducer from "./Reducers/MainReducer"
import  ThunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'


const Reducers = combineReducers({
  MainPage: MainReducer
})


const Store = createStore(Reducers,composeWithDevTools(applyMiddleware(ThunkMiddleware)))

export default Store