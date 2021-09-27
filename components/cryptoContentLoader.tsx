import { Grid, Card } from "@material-ui/core";
import { coinRateStyles } from "@styles/CoinRate.style";
import ContentLoader from "react-content-loader";

export const CryptoLoader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height={124}
        viewBox="0 0 476 124"
        alt="Loading coins details ..."
        backgroundColor="#dccbcb"
        foregroundColor="#524747"
        {...props}
    >
        <rect x="20" y="92%" rx="3" ry="3" width="25%" height="8" />
        <circle cx="85%" cy="28%" r="10%" />
        <rect x="5%" y="35%" rx="3" ry="3" width="70" height="8" />
        <rect x="5%" y="70%" rx="3" ry="3" width="90%" height="8" />
        <rect x="70%" y="92%" rx="3" ry="3" width="25%" height="8" />
    </ContentLoader>
);

export default function CryptoContentLoader() {
    const array6 = new Array(6).fill(0);
    const classes = coinRateStyles();

    return (
        <Grid container spacing={3}>
            {array6.map((_, index) => (
                <Grid item xs={12} sm={6} xl={2} lg={2} md={4} key={index}>
                    <Card className={classes.cryptoCard}>
                        <CryptoLoader />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
