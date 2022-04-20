import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function SearchBar({ queryInput, getUsers }) {
  return (
    <div className="form-container">
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          {/* <form> */}
          <TextField
            d
            id="outlined-basic"
            label="Your Fav Gifs"
            variant="outlined"
            onChange={queryInput}
          />
          {/* <input type="search" className="search-bar" onChange={queryInput} /> */}
          {/* <button onClick={getUsers}>Submit</button> */}
          <Button variant="contained" onClick={getUsers}>
            Submit
          </Button>
          {/* </form> */}
        </Stack>
      </Box>
    </div>
  );
}
