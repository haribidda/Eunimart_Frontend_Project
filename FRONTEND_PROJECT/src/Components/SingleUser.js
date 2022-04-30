import React from 'react';
import '../Styles/SingleUser.css';
import '../Styles/UserDetails.css';
import UNavbar from "../Components/userdetailheader";
import {useParams,Link,} from 'react-router-dom'
const SingleUser = () => {
	const params = useParams()

	const [user, setUser] = React.useState();

    React.useEffect(() => {
        (async () => {
          let userData;
          try {
            const response = await fetch(`https://reqres.in/api/users/${params.userId}`);
            userData = await response.json();
          } catch (error) {
            console.log(error);
            userData = [];
          }
          console.log(userData.data);
        
          setUser(userData.data);
        })();
      }, [params]);

	return (
		<>
			<UNavbar/>
			{user && (
				<div className="card1" style={{textAlign: "center"}} key={user.id}>
                  <div className="card1__image"><img src={user.avatar}/></div>
                  <p className="card__title">{user.id}</p>
                  <p className="card__title">{user.first_name} {user.last_name}</p>
                  <div className="card__body">
                  <div className='c_email'>Email id: {user.email}</div>
                  </div>
              </div>
			)}
            <Link to='/users'><h1 style={{textAlign: "center"}}>Go back</h1></Link>
		</>
	)
}

export default SingleUser;
