import axiosInstance from "../../api/axiosInstance";

export default async function CompareCoinApi(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            try {
                const compareCoins = await axiosInstance.get(
                    "/sparkline?ids=BTC,ETH&start=2021-08-21T00%3A00%3A00Z",
                );
                return res.status(201).json({
                    success: true,
                    compareCoins,
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
