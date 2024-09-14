import axios from "axios";

async function getJobPosting(url: string) {
  const response = await axios.get("url");
  return response;
}

export const leverService = {
  getJobPosting,
};
