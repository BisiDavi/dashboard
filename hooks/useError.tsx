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

    function onError(siteError) {
        setError(siteError);
    }
    function displayError() {
        return <ErrorWrapper error={error.response.error} />;
    }
    return { onError, error, displayError };
}
