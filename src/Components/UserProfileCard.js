import React, { useState, useEffect } from "react";
import './UserProfileCard.css'
// import Data from "./CardData";

function UserProfileCard() {
  const [userObj, setUserObj] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');



  useEffect(() => {
    postUser("http://localhost:8000/user/add", userObj)
      .then(res => alert(res))
      .catch(err => console.log(err))
  }, [userObj]);

  const getUsers = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors"
      })
      console.log(response.json());
      return response.json();
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers("http://localhost:8000/user/get")
      .then(res => setUsersList(res))
      .catch(err => console.log(err))
  }, [])

  const postUser = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)
      })
      return response.json();
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleAddProfile = () => {
    if (name && age && email && profilePhoto) {
      setUserObj({ name, age, email, picture: profilePhoto, })
    } else {
      alert('Please fill in all fields.');
    }
  };

  // const removeUser = (index) => {
  //   const updatedData = [...userObj];
  //   updatedData.splice(index, 1);
  //   setUserObj(updatedData);
  // };
  return (
    <div className="cardcontainer">
      <div className="inputs">
        <form className="form">

          <div>
            <label>Name: </label>
            <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Age : </label>
            <input type="number" value={age} className="age" onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Email: </label>
            <input type="text" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Picture: </label>
            <input type="text" className="image" value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)} />
          </div>
          <button className='btn1' type="button" onClick={handleAddProfile}>Add User</button>
        </form>
      </div>



      <div className="output">

        <div className="card">

          <ul>
            {usersList.length ?
              usersList.map((user, index) => (

                <li key={index}>
                  <div className="cardbak">
                    <div className="image">
                      <img className="image1" src={user.profilePhoto} alt={`${user.name}'s profile`} />
                    </div>

                    <div className="cardcontent">
                      <h2>{user.name}</h2>
                      <p>Age: {user.age}</p>
                      <p>Email: {user.email}</p>
                      {/* <button className="btn" onClick={() => removeUser(index)}>Remove</button> */}
                    </div>
                  </div>
                </li>
              ))
              : <p>no data</p>
            }
          </ul>
        </div>
      </div>



    </div> //card container
  )
}
export default UserProfileCard;  