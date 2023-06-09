import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk'
import reducer from './reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // Esta app nos sirve para conectarnos con la extension redux del navegador 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))// esta linea nos permite hacer peticiones a una appi (servidor)
);

export default store;