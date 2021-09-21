import { useState } from "react";
import { Paper, Typography } from "@material-ui/core";

function ErrorWrapper({ error }) {
    return (
        <Paper elevation={2}>
            <Typography component="h4">
                Oops an error just occured, {error}
            </Typography>
        </Paper>
    );
}

export default function useError() {
    const [error, setError] = useState(null);

    console.log("error", error);

    function onError(siteError) {
        return setError(siteError);
    }
    function displayError() {
        return <ErrorWrapper error={error} />;
    }
    return { onError, error, displayError };
}
