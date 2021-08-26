import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import Button from './Button';

const ShowData = ({company, duties, title, dates, buttonJobs}) => {
  return (
    <>
      <section className="section">
        <div class="title">
          <h2>Experience</h2>
          <div class="underline"></div>
        </div>
        <div class="jobs-center">
          <div class="btn-containr">
            <Button {...buttonJobs} />
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} class="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default ShowData;
