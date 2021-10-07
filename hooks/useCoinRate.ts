import { useQuery } from "react-query";
import axios from "axios";

export default function useCoinRate() {
    return useQuery("coinRate", async () => {
        const { data } = await axios.get("/api/get-coin-rate");
        return data;
    });
}
