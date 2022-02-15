
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function Contact() {

    const [contacts, setContacts] = useState(null);
   
    useEffect(() => {
        fetch('http://localhost:8080/contacts')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setContacts(data)
            })
    }, []);

   

    return (

        <div>
            <div>
                <h2>Contacts</h2>
            </div>

            <Link to={"/add"}>Add New Contact</Link>
            <div>
                <br />
               
                    {contacts &&
                        contacts.map(item => (


                            <li key={item.id}><Link to={`/info/${item.id}`}>Name - {item.name} </Link> </li>


                        ))}

             
            </div>
        </div>

    )

}

export default Contact