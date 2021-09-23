import newsAxiosInstance from "../../api/news/newsAxiosInstance";

export default async function NewsHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            let result;
            await newsAxiosInstance
                .get("/top-headlines?country=us&category=technology")
                .then((response) => {
                    result = response.data;
                })
                .catch((error) => {
                    result = error;
                });
            console.log("result newsAxiosInstance", result);
            if (result.articles) {
                res.status(200).json({
                    success: true,
                    result,
                });
            } else {
                res.status(400).json({
                    success: false,
                    result,
                });
            }
        }
    }
}
