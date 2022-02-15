
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'


function ContactForm() {
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')
  const [pno, setpno] = useState('')
  const history = useHistory();

const handelSubmit = (e) =>{
  e.preventDefault();
  const contact = {name,mail,pno};
  fetch('http://localhost:8080/contacts',{
    method:'post',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(contact)

  }).then(()=>{
    history.push('/');
  })
  console.log(contact)
}

  return (

    
    <div>


      <form onSubmit={handelSubmit}>

        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <label htmlFor="">E-mail</label>
        <input type="text" value={mail} onChange={(e) => setmail(e.target.value)} />
        <label htmlFor="">Tp-no</label>
        <input type="text" value={pno} onChange={(e) => setpno(e.target.value)} />
        <button >add</button>
      </form>
      <br />
      <Link to={"/"}>Go to Contact list</Link>
    </div>
  )

}


export default ContactForm