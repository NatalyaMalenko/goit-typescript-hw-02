import axios from "axios";
import toast from "react-hot-toast";
import { Photo } from "./types";

export interface FetchPhotoProps {
  searchTerm: string;
  currentPage: number;
}

async function fetchPhoto({
  searchTerm,
  currentPage,
}: FetchPhotoProps): Promise<Photo[]> {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "ThO6c8hGjxaRpsBEJJnw-7S-7J9qgHoVmrZOCMmXcVM",
        query: searchTerm,
        per_page: 9,
        page: currentPage,
      },
    });
    return response.data.results || [];
  } catch (error) {
    toast.error("Error! Please, reload page!");
    return [];
  }
}
export default fetchPhoto;
