import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { createReport, updateReport } from '../../actions/reports';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [reportData, setReportData] = useState({ title: '', message: '', selectedFile: '' });
  const report = useSelector((state) => (currentId ? state.reports.reports.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setReportData({ title: '', message: '', selectedFile: '' });
  };

  useEffect(() => {
    if (!report?.title) clear();
    if (report) setReportData(report);
  }, [report]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createReport({ ...reportData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateReport(currentId, { ...reportData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own reports and like other's reports.
        </Typography>
      </Paper>
    );
  }


  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${report?.title}"` : 'Creating a Report'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={reportData.title} onChange={(e) => setReportData({ ...reportData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={4} value={reportData.message} onChange={(e) => setReportData({ ...reportData, message: e.target.value })} />

        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setReportData({ ...reportData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="yellow" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
