import React, { useState } from "react";
import './ideatorPage/linearStepper.css'
import { Typography, Button, Stepper, Step, StepLabel } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm, FormProvider } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Idea Details",
    ];
}


const IdeaDetails = () => {
    return (
        <>
            <div className="ideaFormContainer">
            <p>Program Name: <input type="text" name="program_name" placeholder="Enter the name of the program" required="true"/></p>
            <p>Idea Descreption: <input type="text" name="idea_desc" placeholder="Enter descreption of the idea" /></p>
            <p>Attach your file below: <input type="file" name="idea_file" placeholder="Submit the idea here" required="true"/></p>
            </div>
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <IdeaDetails />;

        default:
            return "unknown step";
    }
}

const LinearStepper = () => {
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            nickName: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };


    return (
        <div className="formContainer">
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};

                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}


                            <Button style={{ position: "relative", left: "46%", marginTop:"20px" }}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinearStepper;