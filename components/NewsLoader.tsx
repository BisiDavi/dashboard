import ContentLoader from "react-content-loader";

const NewsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#dccbcb"
        foregroundColor="#524747"
        {...props}
    >
        <rect x="20" y="10" rx="3" ry="3" width="100" height="10" />
        <rect x="360" y="10" rx="3" ry="3" width="100" height="10" />
        <rect x="40" y="30" rx="0" ry="0" width="400" height="60" />
        <rect x="20" y="100" rx="3" ry="3" width="100" height="10" />
        <rect x="360" y="100" rx="3" ry="3" width="100" height="10" />
    </ContentLoader>
);

export default NewsLoader;
