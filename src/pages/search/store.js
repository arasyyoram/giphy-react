import { createStore } from "redux";
import { queryReducer } from "./reducers";

const store = createStore(queryReducer, { query: "" });

export default store;
