import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_REPORT, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, reports: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        reports: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, reports: action.payload.data };
    case FETCH_REPORT:
      return { ...state, report: action.payload.report };
    case LIKE:
      return { ...state, reports: state.reports.map((report) => (report._id === action.payload._id ? action.payload : report)) };
    case COMMENT:
      return {
        ...state,
        reports: state.reports.map((report) => {
          if (report._id == +action.payload._id) {
            return action.payload;
          }
          return report;
        }),
      };
    case CREATE:
      return { ...state, reports: [...state.reports, action.payload] };
    case UPDATE:
      return { ...state, reports: state.reports.map((report) => (report._id === action.payload._id ? action.payload : report)) };
    case DELETE:
      return { ...state, reports: state.reports.filter((report) => report._id !== action.payload) };
    default:
      return state;
  }
};

