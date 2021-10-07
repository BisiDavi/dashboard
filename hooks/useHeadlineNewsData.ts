import { useQuery } from "react-query";
import axios from "axios";

export default function useHeadlineNewsData(apiName, newsCategory, isQuery) {
    return useQuery(apiName, async () => {
        const { data } = await axios.get(`/api/news/${newsCategory}${isQuery}`);
        return data;
    });
}
