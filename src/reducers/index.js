import { combineReducers } from 'redux';


const welcome_message = (state = 'also to Redux!', action) => {
  switch (action.type) {

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  welcome_message,
});

export default rootReducer;
