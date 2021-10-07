import { axiosRandomImageInstance } from "../../axiosInstances/axiosInstance";

export default async function RandomImagesApiHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET": {
            let data;
            await axiosRandomImageInstance
                .get("/search?query=nature&per_page=3")
                .then((response) => {
                    data = response.data;
                    return data;
                })
                .catch((error) => {
                    data = error;
                    return data;
                });
            if (data.message) {
                return res.status(400).json({
                    success: false,
                    data,
                });
            } else if (data.photos.length > 0) {
                return res.status(201).json({
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
