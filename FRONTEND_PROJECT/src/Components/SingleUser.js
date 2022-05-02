import React from 'react';
import '../Styles/SingleUser.css';
import '../Styles/UserDetails.css';
import UNavbar from "../Components/userdetailheader";
import {useParams,Link,} from 'react-router-dom';
import Footer from "../Components/footer";
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
                    <div class="container" key={user.id}>
                    <div class="image">
                            <img src={user.avatar}/>
                    </div>
                    <div class="text">
                          {/* <p>User ID:  {user.id}</p> */}
                          <p>First Name : {user.first_name}</p>
                          <p>Last Name : {user.last_name}</p>
                          <p>Email id  : {user.email}</p>
                    </div>
                  </div>   
			)}
            <Link to='/users'><h1 style={{textAlign: "center"}}>Go back</h1></Link>
		</>
	)
}
export default SingleUser;
