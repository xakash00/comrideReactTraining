import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core"
import reducers from "./reducers/combineReducer";
import rootSaga from "./saga/rootSaga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;
