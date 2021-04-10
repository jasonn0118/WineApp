import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchWinesAPI } from '../redux/action/wineActions';

const useStyles = makeStyles({
  listItem: {
    textAlign: 'center',
    border: "0.5px solid lightgray"
  },
});

function Wines() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { regionId } = useParams();
  const { wines, loading, error } = useSelector((state) => ({
    wines: state.wines.wines,
    loading: state.wines.loading,
    error: state.wines.error
  }));

  useEffect(() => {
    dispatch(fetchWinesAPI(regionId));
  }, [dispatch]);

  if(error){
    return <div>{error}</div>
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Wines</h1>
      </Grid>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Grid item xs={12}>
          <List component='nav'>
            {wines.length === 0 ? (
              <div>Nothing to display...</div>
            ) : (
              wines.map((wine, index) => (
                <ListItem
                  key={wine.id}
                  className={classes.listItem}
                  button
                  component={Link}
                  to={`/regions/${regionId}/wines/${wine.id}`}
                >
                  <ListItemText primary={wine.id} />
                </ListItem>
              ))
            )}
          </List>
        </Grid>
      )}
    </Grid>
  );
}

export default Wines;
