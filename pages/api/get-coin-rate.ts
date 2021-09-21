import axiosInstance from "../../api/axiosInstance";

export default function CryptoRateApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            try {
                const getCoins = axiosInstance.get(
                    "/ticker?interval=1d&convert=USD&per-page=6&page=1",
                );

                res.status(201).json({
                    success: true,
                    getCoins,
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    error,
                });
            }
            break;
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
