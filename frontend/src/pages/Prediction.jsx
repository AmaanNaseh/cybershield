import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate

const Prediction = () => {
  const [threatLevel, setThreatLevel] = useState("");
  const [vulnerabilityScore, setVulnerabilityScore] = useState("");
  const [impactFactor, setImpactFactor] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePredict = async () => {
    try {
      const token = localStorage.getItem("token");

      // Send prediction request
      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          threat_level: threatLevel,
          vulnerability_score: vulnerabilityScore,
          impact_factor: impactFactor,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setResult(`Risk Category: ${res.data.risk_category}`);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Unauthorized! Please log in.");
        navigate("/login"); // Redirect to login page
      } else {
        alert(
          "An error occurred. Please try again by logging in after sometime."
        );
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-80 md:w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4">Cyber Risk Prediction</h2>
      <input
        type="number"
        placeholder="Threat Level"
        className="input-field"
        value={threatLevel}
        onChange={(e) => setThreatLevel(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Vulnerability Score"
        className="input-field"
        value={vulnerabilityScore}
        onChange={(e) => setVulnerabilityScore(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Impact Factor"
        className="input-field"
        value={impactFactor}
        onChange={(e) => setImpactFactor(e.target.value)}
        required
      />
      <button
        onClick={handlePredict}
        className="p-2 rounded-[7px] mx-auto w-full text-center hover:scale-105 bg-blue-700 hover:bg-blue-600 text-white font-bold text-md"
        disabled={isLoading}
      >
        {isLoading ? "Predicting..." : "Predict"}
      </button>
      {result && <p className="mt-4 font-semibold text-center">{result}</p>}
      <Link to={"/reports"}>
        <p className="my-2 mt-8 text-center w-fit mx-auto font-bold hover:border-b-[2px] border-black">
          View Reports
        </p>
      </Link>
    </div>
  );
};

export default Prediction;
