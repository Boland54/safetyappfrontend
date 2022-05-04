import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { likeReport, deleteReport } from '../../../actions/reports';
import useStyles from './styles';

const Report = ({ report, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(report?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedReport = report.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likeReport(report._id));

    if (hasLikedReport) {
      setLikes(report.likes.filter((id) => id !== userId));
    } else {
      setLikes([...report.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openReport = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/reports/${report._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openReport}
      >
        <CardMedia className={classes.media} image={report.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={report.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{report.name}</Typography>
          <Typography variant="body2">{moment(report.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === report?.creator || user?.result?._id === report?.creator) && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(report._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        )}

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{report.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{report.message.split(' ').splice(0, 20).join(' ')}</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === report?.creator || user?.result?._id === report?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deleteReport(report._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Report;
