import axiosInstance from "../../api/axiosInstance";

export default async function CryptoRateApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            try {
                const getCoins = await axiosInstance.get(
                    "/ticker?interval=1d&convert=USD&per-page=6&page=1",
                );
								
                return res.status(201).json({
                    success: true,
                    getCoins,
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    error,
                });
            }
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
