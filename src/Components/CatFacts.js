import URL from "../settings";
import React, {useState, useEffect} from "react";

export default function CatFacts() {
  const url = URL + '/api/catfacts'
  const [catfactData, setCatfactData] = useState('')

  function getCatFact() {
    fetch(url, { headers: { 'Accept': 'application/json' } })
        .then(res => res.json())
        .then(data => {
          setCatfactData(data);
        })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getCatFact()
    }, 10000)
    return () => {
        clearInterval(interval);
    }
  }, [])

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h2>Cat Facts</h2>
            <h4>New cat fact every 10 sec:</h4>
            <h6>(Wait the first 10 seconds)</h6>
            <p>{JSON.stringify("Fact: " + catfactData.text)}</p>
            <p>{JSON.stringify("Created At: " + catfactData.createdAt)}</p>
            <p>{JSON.stringify(catfactData.time)}</p>
          </div>
        </div>
      </div>

  );

}