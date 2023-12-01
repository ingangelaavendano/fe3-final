import React from 'react'
import {Link} from "react-router-dom"



const Navbar = () => {
  
  return (
    <div className="bg-gray-100 flex">

        <div className='block'>
          <h3 className='text-3xl font-semibold pt-4'><span className='text-red-600 font-semibold'>D</span>H Odonto</h3>
        </div>
        <nav className='justify-end'>
            <Link to="/home"><h4 className='font-semibold'>Home</h4></Link>
            <Link to="/contacto"><h4 className='font-semibold'>Contact</h4></Link>
            <Link to="/favs"><h4 className='font-semibold'>Favs</h4></Link>
        </nav>

        
        <div className='pt-6'>
           <button>Toggle Theme</button>
        </div>


    </div>
    
  )
}

export default Navbar