import '../Styles/UserDetails.css';
import {Link} from "react-router-dom";

const UserDetails = ({ userData }) => {
    return (
        <div className="card" key={userData.id}>
          
          
          <Link to={`/user/${userData.id}`}>
            <div className="card__image"><img src={userData.avatar}/></div>
          </Link>
            <p className="card__title">{userData.first_name} {userData.last_name}</p>
            <div className="card__body">
            <div className='c_email'>Email id: {userData.email}</div>
            </div>
        
        </div>
    )
};

export default UserDetails;