import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function ContactInfo() {
    const history = useHistory();
    const [contacts, setContacts] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:8080/contacts/' + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setContacts(data)
            })
    }, []);

    const handelClick = (id) => {
        fetch('http://localhost:8080/contacts/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

    }


    return (
        <div>


            {contacts && (

                <div>
                    <div><h2>Contact Info - {contacts.name}</h2></div>
                    <p>Name : {contacts.name} </p>
                    <p>E mail : {contacts.mail}</p>
                    <p>TP No : {contacts.pno}</p>
                    <p><button onClick={() => handelClick(contacts.id)}>Delete Contact</button></p>
                    <Link to={`/edit/${contacts.id}`}> Edit </Link>
                </div>
            )}
            <div><Link to={"/"}>Go to Contact list</Link></div>
        </div>
    )
}

export default ContactInfo