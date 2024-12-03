
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to CareerHub</h1>
      <p>Your gateway to new career opportunities!</p>
      <Link to="/jobs">View Jobs</Link>
    </div>
  );
}

export default Home;
