import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import ShowData from './showData';

const url = 'https://course-api.com/react-tabs-project';

const GetData = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const forJobs = {...jobs[value]};
  const buttonForJobs = jobs.map((job) => job.company);
  const buttonJobs = {value, setValue, buttonForJobs};
  return <ShowData {...forJobs} buttonJobs={buttonJobs} />;
};

export default GetData;
