
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import LoadingCricle from '@components/LoadingCircle';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getAgency } from 'utils/api/agencies.js';

export default function Agency() {
    const [agencyDetails, setAgencyDetails] = useState();

    const router = useRouter();
    const { id } = router.query;

    // load the agency details using the id from the router.
    useEffect(() => {
        getAgency(id).then((data) => {
            console.log(data);
            setAgencyDetails(data);
        })
    }, [id])

    return <>
        <NavBar />
        {!agencyDetails ? 
        <LoadingCricle /> 
        : 
        <Container sx={{ paddingTop: 2 }}>
            <Grid container>
                <Grid item xs={2}>
                    <img 
                        alt={agencyDetails.name} 
                        src={agencyDetails.image_url} 
                        style={{
                            width: `120px`
                        }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h3" gutterBottom>
                        {`${agencyDetails.name} (${agencyDetails.abbrev})`}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        }       
    </>
}