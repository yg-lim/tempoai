import { useState } from "react";
import { apiService } from "./services/apiService";

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrlInput(event.target.value);
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setPrediction("");

    try {
      const jobData = await apiService.parseJobPosting(urlInput);
      const response = await apiService.predictSalary(jobData);
      setPrediction(response.prediction);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("An error occurred while fetching the prediction.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h1>Salary Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Job Posting URL:
          <input type="text" value={urlInput} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          {prediction.split("\n").map((chunk, index) => {
            return <p key={index}>{chunk}</p>;
          })}
        </div>
      )}
    </>
  );
}

export default App;
