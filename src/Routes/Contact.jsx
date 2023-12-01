import React from 'react'
import Form from '../components/Form'

const Contact = (props) => {

  console.log(props);

  return (
    <div className='mt-10' >
      <h2 className='text-left text-2xl font-bold'>Want to know more?</h2>
      <p className='text-left'>Send us your questions and we will contact you</p>
      <Form/>
   </div>

   
  )
}

export default Contact