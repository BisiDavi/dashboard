import { Grid } from "@material-ui/core";
import ContentLoader from "react-content-loader";
import ViewCard from "@components/ViewCard";

export const CryptoLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        alt="Loading coins details ..."
        backgroundColor="#dccbcb"
        foregroundColor="#524747"
        {...props}
    >
        <rect x="0" y="115" rx="3" ry="3" width="45" height="8" />
        <circle cx="180" cy="35" r="20" />
        <rect x="2" y="35" rx="3" ry="3" width="70" height="8" />
        <rect x="1" y="80" rx="3" ry="3" width="200" height="8" />
        <rect x="155" y="115" rx="3" ry="3" width="45" height="8" />
    </ContentLoader>
);

export default function CryptoContentLoader() {
    const array6 = new Array(6).fill(0);
    return (
        <Grid container spacing={2}>
            {array6.map((_, index) => (
                <Grid item xs={2} key={index}>
                    <ViewCard>
                        <CryptoLoader />
                    </ViewCard>
                </Grid>
            ))}
        </Grid>
    );
}
