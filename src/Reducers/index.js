import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';
import DbUserReducer from './DbUserReducer';
import EventsReducer from './EventsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  loading: LoadingReducer,
  dbUsers: DbUserReducer,
  events: EventsReducer,
});

export default rootReducer;