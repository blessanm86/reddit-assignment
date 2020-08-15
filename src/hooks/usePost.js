import { useQuery } from "react-query";

import { fetchAndParse } from "../utils/api";
import { POST_API_URL } from "../config/api";

export default function usePost(id) {
  //Hard coding gist id instead post id
  id = "6a4dca9067ad7a296204e7c9ecd977b0";

  return useQuery(`postData.${id}`, async () => {
    const gist = await fetchAndParse(`${POST_API_URL}/${id}`);
    return JSON.parse(gist.files["unpopularopinion-dataset.json"].content);
  });
}
