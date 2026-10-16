import { useState } from "react";
import { MOVIE_LIST } from '../utils/movies'
import isNumber from '../utils/isNumber'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function MovieFilterForm({ movies, setMovies }) {
  // State variable for the search field and year field
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  // State variable for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`year: ${year}`);
    console.log(`search: ${search}`);
    filterMovies();
    validateSearch();
  };

  // Function to filter the movies based on the search and year fields
  const filterMovies = () => {
    // make a copy of the original movie list
    let filteredMovieList = [...MOVIE_LIST];

    // check if the search field is empty
    if (search.trim() !== "") {
      // loop through the movies and check if the name
      // includes the search value
      filteredMovieList = filteredMovieList.filter((movieData) => {
        return movieData.name
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      });
    }
    //check if the year field is empty
    if (year.trim() !== "") {
      // loop through the movies and check is the year matches
      filteredMovieList = filteredMovieList.filter((movieData) => {
        return movieData.year === parseInt(year.trim());
      });
    }
    // render the filtered movielist
    setMovies(filteredMovieList);
  };

  // Validate Year
  const validateSearch = () => {
    console.log("validateSearch");
    console.log(isNumber(year));
    // if the year is empty
    if (year.trim().length === 0) {
      setErrorMessage("");
      return;
    }
    // check if the year isn't valid.
    if (!isNumber(year) || year.trim().length !== 4) {
      setErrorMessage(`"${year}" is not a valid year`);
      return;
    }

    // this will only execute if the year is a number
    setErrorMessage("");
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="search-field"
            label="search..."
            variant="standard"
            sx={{ width: "100%" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="year-field"
            label="year"
            variant="standard"
            sx={{ width: "100%" }}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained">
            Filter
          </Button>
        </Grid>
        <Grid item xs={10}>
          {/* Add the error message here*/}
          {errorMessage !== "" && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
        </Grid>
      </Grid>
    </form>
  );
}
