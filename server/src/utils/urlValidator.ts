export function isLeverJobPosting(url: string) {
  return /^https:\/\/jobs.lever.co\//.test(url);
}
