import ContentLoader from "react-content-loader";

const NewsLoader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        title="Loading news..."
        viewBox="0 0 500 300"
        backgroundColor="#dccbcb"
        foregroundColor="#524747"
        {...props}
    >
        <rect x="0%" y="3%" rx="3" ry="3" width="25%" height="10" />
        <rect x="75%" y="3%" rx="3" ry="3" width="25%" height="10" />
        <rect x="8%" y="12%" rx="0" ry="0" width="85%" height="60%" />
        <rect x="8%" y="78%" rx="3" ry="3" width="85%" height="10%" />
        <rect x="0%" y="93%" rx="3" ry="3" width="25%" height="10" />
        <rect x="75%" y="93%" rx="3" ry="3" width="25%" height="10" />
    </ContentLoader>
);

export default NewsLoader;
