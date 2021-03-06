import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCurrentWineAPI } from '../redux/action/wineActions';
import { baseUrl } from '../service/WinesService';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  content: {
    maxWidth: 450
  },
  media: {
      width: "100%",
    maxWidth: 200,
    height: 350,
    backgroundSize: 'auto',
  },
});

function Wine() {
  const dispatch = useDispatch();
  const { WineId } = useParams();
  const classes = useStyles();

  const { wine, loading } = useSelector((state) => ({
    wine: state.currentWine.wine,
    loading: state.currentWine.loading,
  }));
  useEffect(() => {
    dispatch(fetchCurrentWineAPI(WineId));
  }, [dispatch]);

  if (!wine.appellation) {
    return null;
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Wine Details</h1>
      </Grid>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid item xs={12}>
          <Card >
            <CardActionArea className={classes.root}>
              <CardMedia
                className={classes.media}
                image={`${baseUrl}/api/wines/${WineId}/image`}
                title={WineId}
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant='h3' component='h1'>
                  {WineId}
                </Typography>
                <Typography variant='body1' component='p'>
                  <b>Appellation:</b> {wine.appellation.name}
                </Typography>
                <Typography variant='body1' component='p'>
                  <b>Region:</b> {wine.appellation.region}
                </Typography>
                <Typography variant='body1' component='p'>
                  <b>Color:</b> {wine.type}
                </Typography>
                <Typography variant='body1' component='p'>
                  <b>Graphs:</b> {wine.grapes.join(', ')}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

export default Wine;
