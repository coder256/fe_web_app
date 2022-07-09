import notFound from '../assets/notFound.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="404" className="not-found"/>
            <h3>Page not found</h3>
            <Link to="/"><button className="btn btn-primary">GO HOME</button></Link>
        </div>
    );
};

export default NotFound