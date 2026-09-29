import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Home() {
  return (

    <main>

      <h1>
        REACT + MUI
      </h1>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h2">
          MUI looks good.
          </Typography>
          <Typography variant="p" component="p">
          You can perhaps see why this is a popular package.
          </Typography>
          <EmailOutlinedIcon/>
        </Box>
      </Container>

    </main>

  );
}
