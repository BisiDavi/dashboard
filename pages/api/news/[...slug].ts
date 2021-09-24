import newsAxiosInstance from "../../../axiosInstances/newsAxiosInstance";

export default async function NewsHandler(req, res) {
    const { method } = req;
    const { slug } = req.query;
    const category = slug[0];
    const query = slug[1];
    console.log("query", query);
    const endpoint = query
        ? `/top-headlines?country=us&category=${category}&q=${query}&pageSize=20`
        : `/top-headlines?country=us&category=${category}&pageSize=20`;
    switch (method) {
        case "GET": {
            console.log("req NewsHandler", req.query);
            let result;
            await newsAxiosInstance
                .get(endpoint)
                .then((response) => {
                    result = response.data;
                })
                .catch((error) => {
                    result = error;
                });
            console.log("result newsAxiosInstance", result);
            if (result.articles) {
                return res.status(200).json({
                    success: true,
                    result,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    result,
                });
            }
        }
    }
}
