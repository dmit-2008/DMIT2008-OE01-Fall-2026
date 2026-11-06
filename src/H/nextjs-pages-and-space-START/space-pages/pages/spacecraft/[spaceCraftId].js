import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getSpaceCraft } from 'utils/api/spaceCraft.js';    

export default function SpaceCraft() {
  const [spaceCraftDetails, setSpaceCraftDetails] = useState();
  const router = useRouter();
  const { spaceCraftId } = router.query;

  useEffect(() => {
    getSpaceCraft(spaceCraftId).then((data) => {
      setSpaceCraftDetails(data);
    });
  }, [spaceCraftId]);

  return  <>
    <NavBar />
    {!spaceCraftDetails ?
      <LoadingCircle />
    :
    <Container sx={{paddingTop:2}}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            {spaceCraftDetails.name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
            <SimpleDetailsCard 
                title={`${spaceCraftDetails.name} Details`}
                subDescription={spaceCraftDetails.description}
            />
        </Grid>
        <Grid item xs={4}>
            <SimpleDetailsCard 
                title={`${spaceCraftDetails.name} Configuration`}     
                subDescription={spaceCraftDetails.spacecraft_config.details}
            />
        </Grid>
        <Grid item xs={12}>
            <SimpleDetailsCard 
                title={"What it looks like"}
                description={
                    <img 
                    src={spaceCraftDetails.spacecraft_config.image_url} 
                    style={{width:"100%"}}
                     />
                }
            />

        </Grid>
      </Grid>
    </Container>
    }
  </>
}