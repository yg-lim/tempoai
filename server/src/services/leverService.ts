import axios from "axios";

async function getJobPosting(url: string) {
  const response = await axios.get(url);
  return response.data;
}

export const leverService = {
  getJobPosting,
};
