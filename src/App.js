import React from 'react'
import { useState } from 'react';
import SideBar from './component/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img2 from './image/img2.jpeg';
import statueImg from './image/img3.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import './App.css'
library.add(fas, faTwitter, faFontAwesome)
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`app-container ${showSidebar ? 'sidebar-visible' : ''}`}>
      <div className="background-image"> 
      <img 
       className='centered-image1' 
       src={img2} 
       style={{width:"100vw",height:"100vh", objectFit: 'cover'}}
       alt="background image"
       />
      <img 
      className={`centered-image2 ${showSidebar ? 'sidebarOpen' : ''}`}
      src={statueImg} 
      alt="statue Image"
      />
      </div>
      <div  className={`toggle-button ${showSidebar ? 'sidebar-visible' : ''}`} >
        <button onClick={toggleSidebar}>
          {
            showSidebar ?
            <FontAwesomeIcon icon="fa-solid fa-angles-left" style={{color:"#984211"}} /> :
            <FontAwesomeIcon icon="fa-solid fa-angles-right" style={{color:"#984211"}}  />
          }
           </button>
      </div>
      { showSidebar && <SideBar  toggleSidebar = {toggleSidebar} />}
    </div>
  );
  
}

export default App;
