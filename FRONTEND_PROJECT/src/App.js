import { useState, useEffect } from "react";
import "../src/Styles/App.css";
import UserCard from "./Components/UserDetails"
import Navbar from "./Components/header";
import Footer from "./Components/footer";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://reqres.in/api/users");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      console.log(userData.data);
      setAllUsers(userData.data);
      setUsers(userData.data);
    })();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <div className="cards-container">
      {
         users.map((user, index) => (
        <UserCard key={index} userData={user} />
        ))
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
