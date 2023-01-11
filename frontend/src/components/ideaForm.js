import React, { useState } from "react";
import './linearStepper.css'
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
        "Basic information",
        "Idea Details",
    ];
}
const BasicForm = () => {

    return (
        <>
            <div className="ideaFormContainer">
            <p>First Name: <input type="text" name="first_name" placeholder="Enter First Name" /></p>
            <p>Last Name: <input type="text" name="last_name" placeholder="Enter Last Name" /></p>
            <p>Your Email: <input type="email" name="email" id="email" placeholder="Valid Email Address" /></p>
            <p>Phone Number: <input type="text" name="phone" id="ph" placeholder="Enter Phone No." maxlength="10" /></p>
            <p>Gender: <input type="text" name="gender" id="gender" placeholder="" /></p>
            <p>Age: <input type="number" name="age" id="age" placeholder="Enter Age" /></p>
            <p>Current Industry: <input type="text" name="industry" placeholder="Enter Your Industry Name" /></p>
            <p>Total years of experience: <input type="number" name="exp" id="exp" placeholder="in years"/></p>
            </div>
        </>
    );
};

const PaymentForm = () => {
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
            return <BasicForm />;

        case 1:
            return <PaymentForm />;

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

    const handleBack = () => {
        setActiveStep(activeStep - 1);
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

                            <Button style={{ position: "relative", left: "40%",marginTop:"20px" }}
                                className={classes.button}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>

                            <Button style={{ position: "relative", left: "46%", marginTop:"20px" }}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinearStepper;