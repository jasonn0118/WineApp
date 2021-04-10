import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegionsAPI } from '../redux/action/regionActions';

const useStyles = makeStyles((theme) => ({
  listItem: {
    textAlign: "center",
    border: "0.5px solid lightgray"
  },
}));

function Regions() {
  const classes = useStyles();
  const { regions, loading } = useSelector((state) => ({
    regions: state.regions.regions,
    loading: state.regions.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegionsAPI());
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Regions</h1>
      </Grid>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid item xs={12}>
          <List component='nav'>
            {regions.map((region, index) => (
                <ListItem key={region} className={classes.listItem} button component={Link} to={`/regions/${region}`}>
                  <ListItemText primary={region} />
                </ListItem>
            ))}
          </List>
        </Grid>
      )}
    </Grid>
  );
}

export default Regions;
