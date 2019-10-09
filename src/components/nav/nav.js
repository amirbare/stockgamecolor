import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";


function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));



export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
<>
    <nav>
  <NavLink to="/nasdaq">Nasdaq</NavLink>
    <NavLink to="/nyse">Nyse</NavLink>

</nav>

    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="NYSE" to="/nyse" {...a11yProps(0)} />
          <LinkTab label="NASDAQ" href="/nasdaq" {...a11yProps(1)} />

          
          
        </Tabs>
      </AppBar>
   
 
    </div>
    </>
  );
}



// function Header()
// {


//   return(

// <nav>
//   <NavLink to="/nasdaq">Nasdaq</NavLink>
//     <NavLink to="/nyse">Nyse</NavLink>

// </nav>
  

//   )
// }

// export default Header; 