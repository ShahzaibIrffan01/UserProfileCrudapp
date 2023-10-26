import React ,{useState,useEffect} from "react";
import './UserProfileCard.css'
// import Data from "./CardData";

function UserProfileCard() {
  const [userData, setUserData] = useState([]);
     const [name, setName] = useState('');
     const [age, setAge] = useState('');
     const [email, setEmail] = useState('');
     const [profilePhoto, setProfilePhoto] = useState('');
 
     useEffect(() => {
     
       console.log('User data updated:', userData);
         }, [userData]);
 
     const addUser = () => {
       if (name && age && email && profilePhoto) {
         const newUser = {
           name,
           age,
           email,
           profilePhoto,
         };
 
         setUserData([...userData, newUser]);
   
         setName('');
         setAge('');
         setEmail('');
         setProfilePhoto('');
       } else {
         alert('Please fill in all fields.');
       }
     };
 
     const removeUser = (index) => {
       const updatedData = [...userData];
       updatedData.splice(index, 1);
       setUserData(updatedData);
     };
  return(
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
         <button className='btn1' type="button" onClick={addUser}>Add User</button>
        </form>
      </div>
     
      
      
      <div className="output">
        
        <div className="card">

      <ul>
           {userData.map((user, index) => (
             
             <li key={index}>
              <div className="cardbak">
              <div className="image">
               <img className="image1" src={user.profilePhoto} alt={`${user.name}'s profile`} />
              </div>
              
               <div className="cardcontent">
                 <h2>{user.name}</h2>
                 <p>Age: {user.age}</p>
                 <p>Email: {user.email}</p>
               <button className="btn" onClick={() => removeUser(index)}>Remove</button>
               </div>
              </div>
             </li>
            
            ))}
         </ul>
            </div>
      </div>
      
      
     
    </div> //card container
  )
}
export default UserProfileCard;  