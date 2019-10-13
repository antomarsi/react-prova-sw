import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sw from "./reducer";
import rootSaga from "./sagas";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "../routes/history";
import { loadState, saveState } from "../services/localstorage";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];
const persistedState = loadState();

const store = createStore(
  combineReducers({
    sw,
    router: connectRouter(history)
  }),
  persistedState,
  applyMiddleware(...middlewares)
);

store.subscribe(() => {
  saveState({
    sw: store.getState().sw
  });
});

sagaMiddleware.run(rootSaga);

export default store;
