import axiosInstance from "../../api/axiosInstance";

export default function CompareCoinApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            try {
                const compareCoins = axiosInstance.get(
                    "/sparkline?ids=BTC,ETH&start=2021-08-21T00%3A00%3A00Z",
                );

                res.status(201).json({
                    success: true,
                    compareCoins,
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
