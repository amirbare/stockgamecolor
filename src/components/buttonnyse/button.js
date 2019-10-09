import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PostData from "../../data/nyse.json";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

let random = Math.floor(Math.random() * 3125) + 1;
let random1 = Math.floor(Math.random() * 3125) + 1;
let random2 = Math.floor(Math.random() * 3125) + 1;
let random3 = Math.floor(Math.random() * 3125) + 1;
let random4 = Math.floor(Math.random() * 3) + 1;

var one = 1;
var two = 2;
var three = 3;
var four = 4;
let symbol = PostData.filter(function(name) {
  return name.ID === random;
});

let symbol2 = PostData.filter(function(name) {
  return name.ID === random1;
});

let symbol3 = PostData.filter(function(name) {
  return name.ID === random2;
});

let symbol4 = PostData.filter(function(name) {
  return name.ID === random3;
});

let array = [symbol, symbol2, symbol3, symbol4];
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

const nextButtonStyle = {
  width: "100%",
  height: "40%",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2%",
  display: "flex"
};

export default function ContainedButtons() {
  const [color, setColor] = useState(0);
  const [color2, setColor2] = useState(0);
  const [color3, setColor3] = useState(0);
  const [color4, setColor4] = useState(0);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  // const id = target.id;
  // console.log(color);

  // function handleId (e) {
  //   console.log(e)

  //   console.log(e.target.value);
  //   console.log(e.currentTarget.value);
  //   if(e.currentTarget.value === "1")
  //   {
  //     setColor("green");

  //   }
  //   if(e.currentTarget.value === "2")
  //   {
  //     setColor("red");

  //   }
  // }
  const [symbolState, setSymbolState] = useState(array[random4]);

  function next() {
    setSymbolState(array[random4]);
    window.location.reload();
  }
  function handleChange(e, i) {

    // console.log(e.target.value);
    // console.log(e.currentTarget.value);
    // console.log(e)
    // console.log(i)

    // const id = symbol.target.id;
    // console.log("hello");
    if (array[random4] === e) {
      // alert("Correct, you guessed " + e[0].Name);
      setCount(count + 1);
      console.log(count);
      if (i === one) {
        setColor("green");
        // setColor2("red");
        // setColor3("red");
        // setColor4("red");
      } else if (i === two) {
        setColor2("green");
        // setColor("red");
        // setColor3("red");
        // setColor4("red");
      } else if (i === three) {
        setColor3("green");
        // setColor("red");
        // setColor2("red");
        // setColor4("red");
      } else if (i === four) {
        setColor4("green");
        // setColor("red");
        // setColor2("red");
        // setColor3("red");
      }
      // window.location.reload();
    } else {
      setCount2(count2 + 1);

      // alert("Incorrect, " + e[0].Name + " is not the right answer. Try again.");
      if (i === one) {
        setColor("red");
      } else if (i === two) {
        setColor2("red");
      } else if (i === three) {
        setColor3("red");
      } else if (i === four) {
        setColor4("red");
      }
    }
  }

  

  const classes = useStyles();

  return (
    <>
      <div>
        <Paper className={classes.root}>
          <Typography style={divStyle} variant="h5" component="h3">
            {array[random4].map((postDetail, index) => {
              return (
                <div>
                  <h1>Which stock in the NYSE is represented by {postDetail.Symbol}?</h1>
                </div>
              );
            })}
          </Typography>
        </Paper>
      </div>

      <div style={divStyle}>
        {/* <button value="1" onClick={handleId}>Button</button> */}

        <Button
          value="1"
          onClick={() => handleChange(symbol, one)}
          // onClick={handleId}
          variant="contained"
          color="primary"
          className={classes.button}
          key={PostData.id}
          id="1"
          // value={"red"}
          // onClick={() => { handleChange(symbol); handleId()}}
          // onClick={() => setColor("red")}
          style={{ backgroundColor: color }}
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
          value="2"
          onClick={() => handleChange(symbol2, two)}
          variant="contained"
          color="primary"
          className={classes.button}
          id="unique-id"
          // onClick={handleId}
          style={{ backgroundColor: color2 }}

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
          value="3"
          onClick={() => handleChange(symbol3, three)}
          variant="contained"
          color="primary"
          className={classes.button}
          // onClick={e => handleChange(e.target.value)}
          // value={"hello"}
          style={{ backgroundColor: color3 }}
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
          value="4"
          onClick={() => handleChange(symbol4, four)}
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ backgroundColor: color4 }}
        >
          {symbol4.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>
      </div>

      <div style={nextButtonStyle}>
        <Button
          value="4"
          onClick={() => next()}
          variant="contained"
          color="primary"
          className="nextButton"
          style={{ backgroundColor: "purple" }}
        >
          <div>
            <h1>Next Question</h1>
          </div>
        </Button>
      </div>

      <div style={nextButtonStyle}>
        <Button
          value="4"
          // onClick={() => next()}
          variant="contained"
          color="primary"
          className="nextButton"
          style={{ backgroundColor: "green" }}
        >
          <div>
            <h1>Correct Answers: {count}</h1>
          </div>
        </Button>
      </div>

      <div style={nextButtonStyle}>
        <Button
          value="4"
          // onClick={() => next()}
          variant="contained"
          color="primary"
          className="nextButton"
          style={{ backgroundColor: "Red" }}
        >
          <div>
            <h1>Wrong Answers: {count2}</h1>
          </div>
        </Button>
      </div>
    </>
  );
}
