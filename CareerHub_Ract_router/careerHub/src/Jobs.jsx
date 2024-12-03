
import { Link } from 'react-router-dom';

const jobList = [
  { id: 1, title: "Software Engineer" },
  { id: 2, title: "Data Scientist" },
];

function Jobs() {
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobList.map((job) => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
