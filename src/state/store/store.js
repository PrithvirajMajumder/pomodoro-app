import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "../reducers/index";

const logger = createLogger({
    collapsed: true,
    level: 'info',
});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
    reducers,
    middleware,
);

export default store;