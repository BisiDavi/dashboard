import axiosInstance from "../../axiosInstances/axiosInstance";

export default async function CryptoRateApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            let data;
            await axiosInstance
                .get("/ticker?interval=1d&convert=USD&per-page=6&page=1")
                .then((response) => {
                    data = response.data;
                })
                .catch((error) => {
                    data = error;
                    console.log("CryptoRateApi error", error);

                });
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
