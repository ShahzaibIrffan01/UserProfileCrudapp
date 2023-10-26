// // import React, { useState, useEffect } from 'react';

//  function UserProfileCard() {
//     const [userData, setUserData] = useState([]);
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [email, setEmail] = useState('');
//     const [profilePhoto, setProfilePhoto] = useState('');
 
//     useEffect(() => {
     
//       console.log('User data updated:', userData);
//         }, [userData]);
 
//     const addUser = () => {
//       if (name && age && email && profilePhoto) {
//         const newUser = {
//           name,
//           age,
//           email,
//           profilePhoto,
//         };
 
//         setUserData([...userData, newUser]);
   
//         setName('');
//         setAge('');
//         setEmail('');
//         setProfilePhoto('');
//       } else {
//         alert('Please fill in all fields.');
//       }
//     };
 
//     const removeUser = (index) => {
//       const updatedData = [...userData];
//       updatedData.splice(index, 1);
//       setUserData(updatedData);
//     };
 
//     return (
//       <div>
//         <h1>User Profiles</h1>
//         <div>
//           <label>Name: </label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Age: </label>
//           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Profile Photo: </label>
//           <input type="text" value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)} />
//         </div>
//         <button className='btn' onClick={addUser}>Add User</button>
 
//         <ul>
//           {userData.map((user, index) => (
//             <li key={index}>
//               <img src={user.profilePhoto} alt={`${user.name}'s profile`} />
//               <div>
//               <button onClick={() => removeUser(index)}>Remove</button>
//                 <h2>{user.name}</h2>
//                 <p>Age: {user.age}</p>
//                 <p>Email: {user.email}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
 
//   export default UserProfileCard;


// // 



// {Data.map((item)=>{
//     return (
//       <div className="card">
//     <div className="Image">
//       <img src={item.src} 
//       height="100%"
//       width="100%"
//       />
//     </div>
//     <div className="Info">
//       <div className="duration">{item.duration}</div>
//       <div className="date">{item.date}</div>
//     </div>
//     <div className="Details"> 
//     <div className="heading">{item.heading}</div>
//     <div className="description">{item.description}</div>
//     </div>
//     <div className="SellPoint">
//       <div className="buy">
//         <button className="buybutton">Buy Now</button>
//       </div>
//       <div className="Price">{item.Price}</div>
//     </div>
//   </div>
//     )
//   })}
 