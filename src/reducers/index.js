import { combineReducers } from "redux"
import users from "./users"
import tweets from "./tweets"
import authedUsers from "./authedUsers"
import {loadingBarReducer} from "react-redux-loading"

export default combineReducers({
    authedUsers,
    users,
    tweets,
    loadingBar: loadingBarReducer
})