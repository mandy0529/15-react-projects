import React from 'react';

const Button = ({value, setValue, buttonForJobs}) => {
  return (
    <div className="btn-container">
      {buttonForJobs.map((job, index) => (
        <button
          className={`job-btn ${index === value && 'active-btn'}`}
          key={job.id}
          onClick={() => setValue(index)}
        >
          {job}
        </button>
      ))}
    </div>
  );
};

export default Button;
