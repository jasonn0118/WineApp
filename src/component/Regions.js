import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import * as WineService from '../service/WinesService';

function Regions() {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    WineService.fetchRegions().then((regions) => {
      setRegions(regions);
    });
  }, []);

  const handleSelectedRegion = (e, region) => {
    e.preventDefault();
    console.log(region, '>>>>>>>>REGION')
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {regions &&
          regions.map((region) => (
            <Grid item xs={12}>
              <a key={region} onClick={e => handleSelectedRegion(e, region)}>{region}</a>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default Regions;
