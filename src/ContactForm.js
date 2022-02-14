
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function ContactForm() {
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')


  return (

    <div>


      <form >

        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <label htmlFor="">E-mail</label>
        <input type="text" value={mail} onChange={(e) => setmail(e.target.value)} />
        <button >add</button>
      </form>
      <br />
      <Link to={"/"}>Go to Contact list</Link>
    </div>
  )

}


export default ContactForm