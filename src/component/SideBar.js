import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SideBar_style.css";


const  SideBar = ({toggleSidebar}) => {
const [readMore,setReadMore] = useState(false);
const [readmoreorless,setreadmoreorless] = useState("More");
   const readmore = () =>{
    setreadmoreorless(readmoreorless === "More" ?'Less':'More' );
        setReadMore(readmoreorless === "More" ? true:false  );
   }
 
  return (

    <div className={`sidebar ${readMore ? 'readmore' : ''}`}>
    <button onClick={toggleSidebar} style={{position:'absolute', left:'20px', top:'20px', border:'0',cursor:'pointer'}}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" className='icon circle-icon' />
        </button>
      <div className='content'>
           <div>
        <h2 style={{letterSpacing: "3px",lineHeight: "25px"}}>
          MAITREYA BUDHHA <br/>
          IN GESTURE OF <br/>
          FEARLESNESS <br/>
          (ABHAY MUDRA)
        </h2>
       </div>

       <div className='icon-container'>
       <FontAwesomeIcon icon="fa-solid fa-heart" className='icon circle-icon'/>
       <FontAwesomeIcon icon="fa-solid fa-share-nodes"  className='icon circle-icon'/>
       <FontAwesomeIcon icon="fa-solid fa-eye"  className='icon circle-icon'/>
       </div>
       <div className='count'>
        <span>0</span>
        <span>120</span>
        <span>27</span>
        
       </div>
       <div style={{color:"#717171"}}>
      Dynasty: ahichhchhatra <br/>
      Period: 200 CE <br/>
      Material: stone <br/>
      Location: National Museum 
    </div>

     <div>
      <h3>DESCRIPTION:</h3>
      <p style={{color:"#717171",margin: "0 auto", }}>Maitreya, the future Buddha to be, resides in the Tushita heaven as a 
        bodhisattva waiting to redeem humanity.    
        
        </p>
        {
          readMore && <p 
          style={{
            color: "#717171",
            fontSize: "16px", // Set a default font size
            maxWidth: "100%",
            boxSizing: "border-box",
            margin: "0 auto",
            // padding: "10px",
            justifyContent:"center",
          }}
          >In Buddhism, Maitreya is the eighth Buddha, 
          a successor of the seven historical Buddhas sapta-manushi 
          Buddhas. bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, 
          a successor of the seven historical Buddhas sapta-manushi 
          Buddhas.
          bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, 
          a successor of the seven historical Buddhas sapta-manushi 
          Buddhas</p>
        }
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color:"#984211", fontWeight:"bold"}}/> {` `}
        <button onClick={()=> readmore()} style={{border:"0", color:"#984211", fontWeight:"bold",background: "none", cursor:"pointer"}}><span>Read {readmoreorless}</span></button> 
     </div>  
     <div className='btn' style={{marginTop:"10px"}}>
     <button className='btn1'>ADD TO COLLECTION</button> {` `}
     <button className='btn2'>SOUVENIR</button>
     </div>
     
     </div>  
    
   </div>
  );
};

export default SideBar;
