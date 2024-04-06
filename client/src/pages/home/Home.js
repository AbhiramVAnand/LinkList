// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./Home.css"
// import Link_component from "../../components/Link_component";


// export default function Home(){
//     return(
//         <div className='container'>
//             <div className='logout-button'>
//                 <button className='logout'>Logout</button>
//             </div>
//             <div className='content'>
//                 <div className='content-top'>
//                     <div className='title-discp'>
//                         <div className='title'>Link List</div>
//                         <div className='discp'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</div>
//                     </div>
//                     <div className='filter-button'>
//                         <div className='priority'>Priority</div>
//                         <div className='tag'>Tag</div>
//                     </div>
//                 </div>
//                 <div className='content-bottom'>
//                     <Link_component/>
//                     <Link_component/>
//                     <Link_component/>
//                 </div>
//             </div>
//                 {/* <Link_component/>, */}
//         </div>
            
//     );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../client'; // Assuming you have a supabase client initialized
import "./Home.css";
import Link_component from '../../components/Link_component';

export default function Home() {
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    fetchLinks();
  }, []);
  async function fetchLinks() {
    try {
      // Fetch data from the 'links' table
      
const { data, error } = await supabase
.from('links')
.select('*')
        

      if (error) {
        console.error('Error fetching links:', error.message);
        throw error;
      }

      console.log('Links data:',  data); // Log fetched data
      setLinks(  data);
    } catch (error) {
      console.error('Error fetching links:', error.message);
    }
  }

  // This will run once when the component mounts

  return (
    <div className='container'>
      <div className='logout-button'>
        <button className='logout' onClick={() => navigate('/logout')}>Logout</button>
      </div>
      <div className='content'> 
        <div className='content-top'>
          <div className='title-discp'>
            <div className='title'>LinkList</div>
            <div className='discp'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</div>
          </div>
          <div className='filter-button'>
            <div className='priority'>Priority</div>
            <div className='tag'>Tag</div>
          </div>
        </div>
        <div className='content-bottom'>
          {/* Render each link from the 'links' array */}
          {links.map(link => (
            <Link_component key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}






























// const Home = ({token}) => {
//   let navigate = useNavigate()
  
//   function handleLogout(){
//     sessionStorage.removeItem('token')
//     navigate('/')
//   }

//   return (
//     <div>
//       <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
//       <button onClick={handleLogout}>Logout</button>

//     </div>
//   )
// }

// export default Home

