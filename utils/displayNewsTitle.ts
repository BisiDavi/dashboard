export default function displayNewsTitle(newsCategory: string) {
    switch (newsCategory) {
        case "technology":
            return "Tech";
        case "sports":
            return "Sports";
        case "entertainment":
            return "Entertainment";
        case "business":
            return "Business";
        case "health":
            return "Health";
        default:
            return null;
    }
}
