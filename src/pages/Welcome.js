import {Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <center>
        <h1>Welcome to the Demo Project</h1>
        <div><h2>Please login to continue</h2></div>
        <div><h2><Link to={'/login'}>Login</Link></h2></div>
      </center>
    </div>
  );
}

export default Welcome;