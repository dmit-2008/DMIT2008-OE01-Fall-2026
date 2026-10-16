import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function MovieList({ movies }) {
  return (
    <List sx={{ width: `100%` }}>
      {/* filter no results OR display the number of movies filtered */}
      {movies.length === 0 ? (
        <ListItem>
          <ListItemText>
            <Typography variant="p" component="div">
              No results please search again.
            </Typography>
          </ListItemText>
        </ListItem>
      ) : (
        <ListItem>
          <ListItemText>
            <Typography variant="p" component="div">
              {movies.length} movie results
            </Typography>
          </ListItemText>
        </ListItem>
      )}

      {/* render the movie list */}
      {movies.map((movieData, index) => {
        return (
          <ListItem key={index}>
            <ListItemText>
              <Typography variant="p" component="div">
                {movieData.name} ({movieData.year})
              </Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}
