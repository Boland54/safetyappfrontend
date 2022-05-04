import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getReport, getReportsBySearch } from '../../actions/reports';
import CommentSection from './CommentSection';
import useStyles from './styles';
import Map from './geolocated';

const Report = () => {
  const { report, reports, isLoading } = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getReport(id));
  }, [id]);

  useEffect(() => {
    if (report) {
      dispatch(getReportsBySearch({ search: 'none' }));
    }
  }, [report]);

  if (!report) return null;

  const openReport = (_id) => history.push(`/reports/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedReports = reports.filter(({ _id }) => _id !== report._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{report.title}</Typography>
          <Typography gutterBottom variant="body1" component="p">{report.message}</Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${report.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${report.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(report.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
<Map />
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection report={report} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={report.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={report.title} />
        </div>
      </div>
      {!!recommendedReports.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedReports}>
            {recommendedReports.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openReport(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Report;
