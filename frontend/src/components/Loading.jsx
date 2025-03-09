import React from 'react';
import './Loading.css';

const Loading = ({ type = "spinner", message = "Loading wonders..." }) => {
  return (
    <div className="loading-container" aria-live="polite" aria-busy="true">
      {type === "spinner" && (
        <div className="spinner">
          <svg className="spinner-svg" viewBox="0 0 50 50">
            <circle
              className="spinner-track"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
            <circle
              className="spinner-fill"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {type === "dots" && (
        <div className="dots-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}

      {type === "progress" && (
        <div className="progress-loader">
          <div className="progress-bar"></div>
        </div>
      )}

      <p className="loading-text">{message}</p>
    </div>
  );
};

export default Loading;