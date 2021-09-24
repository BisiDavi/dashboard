import ContentLoader from "react-content-loader";

const NewsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={500}
        height="100%"
        title="Loading news..."
        viewBox="0 0 500 300"
        backgroundColor="#dccbcb"
        foregroundColor="#524747"
        {...props}
    >
        <rect x="20" y="10" rx="3" ry="3" width="100" height="10" />
        <rect x="380" y="10" rx="3" ry="3" width="100" height="10" />
        <rect x="50" y="30" rx="0" ry="0" width="400" height="60%" />
        <rect x="50" y="230" rx="3" ry="3" width="400" height="20" />
        <rect x="20" y="270" rx="3" ry="3" width="100" height="10" />
        <rect x="380" y="270" rx="3" ry="3" width="100" height="10" />
    </ContentLoader>
);

export default NewsLoader;
