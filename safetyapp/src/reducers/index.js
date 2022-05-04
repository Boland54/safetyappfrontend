import { combineReducers } from 'redux';

import reports from './reports';
import auth from './auth';

export const reducers = combineReducers({ reports, auth });
