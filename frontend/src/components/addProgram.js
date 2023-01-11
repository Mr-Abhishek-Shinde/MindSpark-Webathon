import React from 'react';
import LinearStepper2 from "./LinearStepper2";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import './ideatorPage/submitIdeaPage/ideaForm.css'

function AddProgram() {

  return (
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
          {/* <div className="closeBtn2">
            <button className="closeBtn" onClick={props.setIdeaForm(false)}>Close</button>
          </div> */}
          <LinearStepper2 />
        </Paper>
      </Container>
    </>
  )
}

export default AddProgram;