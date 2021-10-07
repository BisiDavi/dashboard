import axiosInstance from "../../axiosInstances/axiosInstance";

export default async function CompareCoinApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            let data;
            await axiosInstance
                .get("/sparkline?ids=BTC,ETH&start=2021-08-21T00%3A00%3A00Z")
                .then((response) => {
                    data = response.data;
                })
                .catch((error) => {
                    data = error;
                    console.log("error", error);
                });
            //console.log("CompareCoinApi data", data);
            if (data.message) {
                res.status(400).json({
                    success: false,
                    data,
                });
            } else if (data.length > 0) {
                res.status(201).json({
                    success: true,
                    data,
                });
            }
            break;
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
