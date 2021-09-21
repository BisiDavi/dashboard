import { useState } from "react";
import { Paper, Grid, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    paper: {
        padding: 20,
        position: "relative",
    },
    errorText: {
        color: "red",
        textAlign: "center",
    },
    cancelButton: {
        backgroundColor: "#151413ad",
        color: "white",
        height: 25,
        width: 25,
        borderRadius: "50%",
        padding: 5,
        position: "absolute",
        right: -5,
        top: -5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    error: {
        marginTop: 20,
        height: 90,
    },
});

function ErrorWrapper({ error }) {
    const [showError, setShowError] = useState(true);
    const classes = useStyles();

    function hideError() {
        setShowError(false);
    }

    return (
        <>
            {showError && (
                <Grid className={classes.error} item xs={2}>
                    <Paper className={classes.paper} elevation={2}>
                        <div
                            onClick={hideError}
                            className={classes.cancelButton}
                        >
                            X
                        </div>
                        <Typography
                            className={classes.errorText}
                            component="h4"
                        >
                            Oops an error just occured, {error}
                        </Typography>
                    </Paper>
                </Grid>
            )}
        </>
    );
}

export default function useError() {
    const [error, setError] = useState(null);

    function onError(siteError) {
        console.log("useError error", siteError);
        setError(siteError);
    }
    function displayError() {
        let errorMessage;
        if (error.response) {
            errorMessage = error.response.data;
        } else if (error.request) {
            errorMessage = "Network Error";
        }
        return <ErrorWrapper error={errorMessage} />;
    }
    return { onError, error, displayError };
}
