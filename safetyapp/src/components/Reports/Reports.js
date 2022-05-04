import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Report from './Report/Report';
import useStyles from './styles';

const Reports = ({ setCurrentId }) => {
  const { reports, isLoading } = useSelector((state) => state.reports);
  const classes = useStyles();

  if (!reports.length && !isLoading) return 'No reports';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {reports?.map((report) => (
          <Grid key={report._id} item xs={12} sm={12} md={6} lg={3}>
            <Report report={report} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Reports;
