
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={"/add"}>Add New Contact</Link>

            <br />
            <ul>
                {contacts &&
                    contacts.map(item => (


                        <li key={item.id}>Name - {item.name}   <br /> E-mail - {item.email} <br /><br /></li>


                    ))}

            </ul>
        </div>

    )

}

export default Contact