import newsAxiosInstance from "../../../axiosInstances/newsAxiosInstance";

export default async function NewsHandler(req, res) {
    const { method } = req;
    const { slug } = req.query;
    switch (method) {
        case "GET": {
            console.log("req NewsHandler", req.query);
            let result;
            await newsAxiosInstance
                .get(`/top-headlines?country=us&category=${slug}`)
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
