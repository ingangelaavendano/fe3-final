import React from 'react'
import UserList from '../components/UserList'

const Home = () => {
  return (
    <main className='body' >
      <h1 className="text-5xl font-semibold pt-6">Home</h1>
      <div className='card-grid'>
        <UserList />
        
        
      </div>
    </main>
  )
}

export default Home