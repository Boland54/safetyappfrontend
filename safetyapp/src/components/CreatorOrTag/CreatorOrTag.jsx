import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Report from '../Reports/Report/Report';
import { getReportsByCreator, getReportsBySearch } from '../../actions/reports';

const Creator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { reports, isLoading } = useSelector((state) => state.reports);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/memories')) {
      dispatch(getReportsBySearch({ tags: name }));
    } else {
      dispatch(getReportsByCreator(name));
    }
  }, []);

  if (!reports.length && !isLoading) return 'No reports';

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {reports?.map((report) => (
            <Grid key={report._id} item xs={12} sm={12} md={6} lg={3}>
              <Report report={report} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Creator;
