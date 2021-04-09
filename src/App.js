import { Button, Grid, makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import './App.css';
import RegionsPage from './page/RegionsPage';
import WineListPage from './page/WineListPage';

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

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <h1>Open Wine Database</h1>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.button}>
            <Button variant='contained' color='primary'>
              Back
            </Button>
            <Button variant='contained' color='primary'>
              Home
            </Button>
          </div>
        </Grid>
        <Grid item >
          <Switch>
            <Route exact path="/" component={RegionsPage} />
            <Route exact path="/regions" component={WineListPage} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
