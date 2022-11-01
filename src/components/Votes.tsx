import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocVotes, setChocVotes] = useState(0);
  const [vanVotes, setVanVotes] = useState(0);
  const [strawVotes, setStrawVotes] = useState(0);
  const [chocDivWidth, setChocDivWidth] = useState(0);
  const [vanDivWidth, setVanDivWidth] = useState(0);
  const [strawDivWidth, setStrawDivWidth] = useState(0);
  let totalVotes = chocVotes + vanVotes + strawVotes;
  let chocWidth = ((chocVotes / totalVotes) * 100).toFixed(1);
  let vanWidth = ((vanVotes / totalVotes) * 100).toFixed(1);
  let strawWidth = ((strawVotes / totalVotes) * 100).toFixed(1);

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button
          onClick={() => {
            setChocVotes((prev) => prev + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVanVotes((prev) => prev + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setStrawVotes((prev) => prev + 1);
          }}
        >
          Strawberry
        </button>
      </div>
      <p>
        Chocolate: {chocVotes} ({chocWidth}%)
      </p>
      <div className="chocolate" style={{ width: `${chocWidth}%` }}></div>
      <p>
        Vanilla: {vanVotes} ({vanWidth}%)
      </p>
      <div className="vanilla" style={{ width: `${vanWidth}%` }}></div>
      <p>
        Strawberry: {strawVotes} ({strawWidth}%)
      </p>
      <div className="strawberry" style={{ width: `${strawWidth}%` }}></div>
    </section>
  );
};

export default Votes;
