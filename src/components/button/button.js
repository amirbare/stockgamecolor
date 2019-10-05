import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PostData from "../../data/post.json";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

let random = Math.floor(Math.random() * 3421) + 1;
let random1 = Math.floor(Math.random() * 3421) + 1;
let random2 = Math.floor(Math.random() * 3421) + 1;
let random3 = Math.floor(Math.random() * 3421) + 1;
let superRandom = Math.floor(Math.random() * 3) + 1;

let symbol = PostData.filter(function (name) {
  return name.ID === random;
});

let symbol2 = PostData.filter(function (name) {
  return name.ID === random1;
});

let symbol3 = PostData.filter(function (name) {
  return name.ID === random2;
});

let symbol4 = PostData.filter(function (name) {
  return name.ID === random3;
});

let array = [symbol, symbol2, symbol3, symbol4]
// console.log(symbol);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const divStyle = {
  margin: "40px",

  display: "flex",
  justifyContent: "center"
};

export default function ContainedButtons() {
  const [color, setColor] = useState(0);


  console.log(color)
  function handleChange(sym) {
    if (array[superRandom] === sym) {
      alert("Correct, you guessed " + sym[0].Name);
      setColor("green");
      // window.location.reload();
      
    } else {
      alert("Incorrect, " + sym[0].Name + " is not the right answer. Try again.");
      setColor("red");

    }
  }

  

  const classes = useStyles();

  return (
    <>
      <div>
        <Paper className={classes.root}>
          <Typography style={divStyle} variant="h5" component="h3">
            {array[superRandom].map((postDetail, index) => {
              return (
                <div>
                  <h1>Which stock is represented by {postDetail.Symbol}?</h1>
                </div>
              );
            })}
          </Typography>
        </Paper>
      </div>

      <div style={divStyle}>
        <Button
          // value={symbol}
          onClick={() => handleChange(symbol)}
          variant="contained"
          color="primary"
          className={classes.button}
          key={PostData.id}
          id={PostData.id}
          value={"red"}
          // onClick={() => setColor("red")}
          style={{backgroundColor:color}}          
          >
        
          {symbol.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button
          value={symbol2}
          onClick={() => handleChange(symbol2)}
          variant="contained"
          color="primary"
          className={classes.button}
          id="unique-id"
        // onClick={showAlert}
        >
          {symbol2.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button
          value={symbol3}
          onClick={() => handleChange(symbol3)}
          variant="contained"
          color="primary"
          className={classes.button}
        // onClick={e => handleChange(e.target.value)}
        // value={"hello"}
        >
          {symbol3.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button
          value={symbol4}
          onClick={() => handleChange(symbol4)}
          variant="contained"
          color="primary"
          className={classes.button}>
          {symbol4.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>
      </div>
    </>
  );
}
