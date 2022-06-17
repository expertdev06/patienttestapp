import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { Navbar,Button, Image } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'



function LayOut({ children }) {
  const [sidebar, setSidebar] = useState(false);


  return (
    <>
     <Button className="toggel-btn" onClick={()=>setSidebar(!sidebar)}><FaBars/></Button>
      <div className='main-layout'>
     
        <div  className={sidebar ? 'sidebar active' : 'sidebar'}>
        
          <Navbar className="nav-menu">
           
            <ul>   
            <p  className="sidebarHeading">Patinet</p>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}


            </ul>
              <div className='helpBoxWrapper'>
                <h3 className="helpText">Need Our help ?</h3>
                <button type="button" class="btn">Contact Us</button>
              </div>
          </Navbar>
        </div>
        <div className='main-content'>
          <div className="searchbox">
              <FiSearch />
             <input type="text" placeholder="Search..." />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default LayOut;
