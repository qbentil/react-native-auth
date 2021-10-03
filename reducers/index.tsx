// import { combineReducers } from "redux";

import { combineReducers } from "redux"

const user = (state = {}, action) => {
    switch (action.type)
    {
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    user
})
export default rootReducer;