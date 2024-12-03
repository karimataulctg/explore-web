
import { useParams } from 'react-router-dom';

const jobDetailsData = {
  1: { title: "Software Engineer", description: "Develop and maintain software solutions." },
  2: { title: "Data Scientist", description: "Analyze and interpret complex data." },
};

function JobDetails() {
  const { jobId } = useParams();
  const job = jobDetailsData[jobId];

  return job ? (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  ) : (
    <p>Job not found.</p>
  );
}

export default JobDetails;
