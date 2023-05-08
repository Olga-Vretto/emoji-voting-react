import React from 'react';

import "./Results.css"

function Results({ showResults, setShowResults, maxResult }) {

  const handleResults = () => {
    setShowResults(!showResults);
  }

  return (
    <div>
      <button className="results-btn" onClick={handleResults}>
        Show Results
      </button>
      {showResults && (
        <div className="results">
          {maxResult ? (
            <>
              <img className="img" src={maxResult.src} alt="winner" />
              <h2 className="txt">Our winner!</h2>
            </>
          ) : (
            <p className='txt'>Please, leave your vote.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Results;
