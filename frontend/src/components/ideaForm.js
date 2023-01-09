import React from 'react';
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import './ideaForm.css'

function IdeaForm(props) {

  return (props.trigger) ? (
    <>
      <CssBaseline />
      <Container component={Box} sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Paper component={Box} p={4} sx={{
          width: "80vw",
          height: "80vh",
          paddingTop: "15px",
        }}>
          <div className="closeBtn2">
            {/* <button className="closeBtn" onClick={props.setTrigger(false)}>Close</button> */}
          </div>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  ) : ""
}

export default IdeaForm