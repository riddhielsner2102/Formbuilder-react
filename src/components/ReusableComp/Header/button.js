import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/button";
import { styled } from "@mui/material/styles";
//import cls from './theme.css';

const MuiButton = (props) => {
  let cssStyles = props.style ? props.style : "";
  var cssStyle = "";
  let defaultStyles = {
    backgroundColor: "rgb(77,73,152)",
    color: "white",
    textTransform: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    width: "70px",
    height: "22px",
    "& .MuiButton-root": {
      minWidth: "10px",
    },
  };

  if (cssStyles) cssStyle = props.style;
  else cssStyle = { border: "0.2px solid white" };

  const useCustomStyles = makeStyles({
    button: defaultStyles,
    custom: cssStyles,
  });

  const customClasses = useCustomStyles();

  const BootstrapButton = styled(Button)({
    backgroundColor: props.color ? props.color : "rgb(70, 160, 184)",
    borderColor: "none",
    "&:hover": {
      backgroundColor: props.color ? props.color : "rgb(70, 160, 184)",
      borderColor: props.color,
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      border: "none",
      backgroundColor: props.color ? props.color : "rgb(70, 160, 184)",
      outline: "none",
      borderColor: props.color,
    },
  });

  return (
    <BootstrapButton
      disableElevation
      disableRipple
      style={{ "min-height": "10px", "min-width": "10px" }}
      className={clsx(customClasses.button, customClasses.custom)}
      name={props.name}
      type={props.type}
      variant="contained"
      onClick={props.onClick}
      disabled={props.disabled}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.text}
    </BootstrapButton>
  );
};

export default MuiButton;
