import axios from 'axios';

const API = axios.create({ baseURL: 'https://safetyappbackend.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchReport = (id) => API.get(`/reports/${id}`);
export const fetchReports = (page) => API.get(`/reports?page=${page}`);
export const fetchReportsByCreator = (name) => API.get(`/reports/creator?name=${name}`);
export const fetchReportsBySearch = (searchQuery) => API.get(`/reports/search?searchQuery=${searchQuery.search || 'none'}`);
export const createReport = (newReport) => API.post('/reports', newReport);
export const likeReport = (id) => API.patch(`/reports/${id}/likeReport`);
export const comment = (value, id) => API.post(`/reports/${id}/commentReport`, { value });
export const updateReport = (id, updatedReport) => API.patch(`/reports/${id}`, updatedReport);
export const deleteReport = (id) => API.delete(`/reports/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
