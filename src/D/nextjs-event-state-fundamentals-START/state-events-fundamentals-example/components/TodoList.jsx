import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// For the list of Todos
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// For the delete button
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Initial TODO list
const INITIAL_TODOS = [
  "create the list in mui",
  "get the text and update state",
  "make sure we understand lists",
];

export default function TodoList() {
  // State variable for the text input
  const [todoText, setTodoText] = useState("");

  // State variable for the list of todos
  const [allTodos, setAllTodos] = useState(INITIAL_TODOS);

  // Event handler for text change
  const onTodoTextChange = (event) => {
    console.log(event.target.value);
    setTodoText(event.target.value);
  };

  // Event handler for button click
  const onAddTodoClick = () => {
    console.log("Clicked!");
    // create a new list that has all the Todos and the new ones
    const newTodos = [...allTodos, todoText];
    console.log(newTodos);
    // set the Todolist
    setAllTodos(newTodos);
    // clear the text input
    setTodoText("");
  };

  // Removing an item from the list
  const removeTodo = (index) => {
    // make a copy of the list
    let tempTodos = [...allTodos];
    // use our knowledge of filter or splice to remove
    // the item at the index
    tempTodos.splice(index, 1);
    // set the updated list
    setAllTodos(tempTodos);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            id="standard-basic"
            label="New Todo?"
            variant="standard"
            onChange={onTodoTextChange}
            value={todoText}
          />
        </Grid>
        <Grid size={12}>
          <Button variant="contained" onClick={onAddTodoClick}>
            Add
          </Button>
        </Grid>
        {/* <Grid size={12}>
          Current input text: {todoText} <br/>
          Current TodoList: {allTodos.toString()}
        </Grid> */}
        {/* for the list of todos */}
        <List sx={{ width: `100%` }}>
          {allTodos.length === 0 && (
            <ListItem>
              <ListItemText primary="no todos yet!, feel free to add some." />
            </ListItem>
          )}
          {allTodos.map((todoItem, index) => {
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeTodo(index)}>
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemText>
                  <Typography variant="p" component="div">
                    {todoItem}
                  </Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Box>
  );
}
