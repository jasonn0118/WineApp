import { Route, Switch, useHistory } from 'react-router';
import { Button, Grid, makeStyles } from '@material-ui/core';
import './App.css';
import Wines from './component/Wines';
import Regions from './component/Regions';
import Wine from './component/Wine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  }
  const goHome = () => {
    history.push("/");
  }
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <h1>Open Wine Database</h1>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.button}>
            <Button variant='contained' color='primary' onClick={goBack}>
              Back
            </Button>
            <Button variant='contained' color='primary' onClick={goHome}>
              Home
            </Button>
          </div>
        </Grid>
        <Grid item >
          <Switch>
            <Route path="/regions/:regionId/wines/:WineId">
              <Wine />
            </Route>
            <Route path="/regions/:regionId">
              <Wines />
            </Route>
            <Route path="/">
              <Regions />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
