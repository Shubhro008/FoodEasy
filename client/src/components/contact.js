import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core/";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core/";
import { CardMedia } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "animate.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <h1
        style={{ fontFamily: "Alata", paddingTop: "1rem" }}
        className="animate__animated animate__fadeIn"
      >
        Write Your <FavoriteIcon style={{ color: "red" }} /> Feedback
      </h1>
      <form className="sign-in-form">
                {/* <h2 className="title" style={{ fontFamily: "poppins" }}>
                  Sign in
                </h2> */}
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    // onChange={handleSignInData}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    name="Name"
                    type="text"
                    placeholder="Name"
                    // onChange={handleSignInData}
                  />
                </div>
                <div className="input-field" style={{height : "150px"}}>
                  <i className="fas" />
                  {/* <div
                  style={{
                    border: "0 solid #FFF",
                    borderLeftColor: "#acacac"
                  }}
                > */}
                  {/* <textarea
                    name="feedback"
                    // type={inputType}
                    placeholder="Feedback"
                    // onChange={handleSignInData}
                  /> */}
<TextField
          id="outlined-multiline-static"
          // label="Description"
          multiline
          rows={4}
          // defaultValue="Feedback"
          placeholder="Feedback"
          variant="standard"
 InputProps={{
        disableUnderline: true,
      }}
        />
                  {/* </div> */}
                </div>
                <input type="submit" value="Submit" className="btn solid" />
                {/* <Link to="/forget" style={{ fontFamily: "Poppins" }}>
                  Forgot Password?
                </Link> */}
              </form>
    </>
  );
};

export default Contact;
