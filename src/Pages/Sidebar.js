import React from 'react';

function Sidebar(){
    return (
       <div className="left-sidebar">
        <nav className="side-nav">
        <a className="active" aria-current="page" class="side-nav-links active" href="/">
            <p>Home</p></a>
            <div className="side-nav-div">
                <div className='unused'>
                    <p>PUBLIC</p>
                </div>
                <a className="active" class="side-nav-links" href="/Questions">
                    <img className='logo' src='https://cdn.icon-icons.com/icons2/3005/PNG/512/globe_americas_earth_icon_188225.png'></img>
                    <p> Questions </p>
                </a>
                <a className="active" class="side-nav-links" href="/Tags">
                    <p>Tags</p>
                </a>
                <a className="active" class="side-nav-links" href="/Users" >
                    <p>Users</p>
                </a>
            </div>
       </nav>
    </div>
    );
  }


export default Sidebar;
