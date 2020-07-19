import { createStore, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import promise from "redux-promise-middleware";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "BRAND":
      return { ...state, navigationData: action.payload };
    default:
      return state;
  }
};

const composeStoreWithMiddleware = applyMiddleware(promise)(createStore);

const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, { debug: true });
