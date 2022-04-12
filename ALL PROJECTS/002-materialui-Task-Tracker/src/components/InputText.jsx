import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function InputText() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [show, setShow] = useState([]);

  const onClickButton = (e) => {
    e.preventDefault();

    const total = [text, day];

    setShow([...show, total]);
    setText("");
    setDay("");
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            placeholder="name"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <TextField
            required
            id="standard-required"
            label="Required"
            placeholder="password"
            variant="standard"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          />

          <Button type="submit" onClick={onClickButton} variant="contained">
            Save Task
          </Button>

          {show.map((item, index) => {
            return (
              <div>
                <h3>
                  {item[0]}=== {item[1]}
                </h3>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
}
