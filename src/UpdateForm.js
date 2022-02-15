
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

function UpdateForm() {
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [pno, setpno] = useState('')
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:8080/contacts/' + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setname(data.name)
                setmail(data.mail)
                setpno(data.pno)
            })
    }, []);

    const handelSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/contacts/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name:name,
                mail:mail,
                pno:pno
            })

        }).then(() => {
            history.push('/');
        })
        
    }


    return (
        <div>
            <h2>UpdateForm </h2>

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

        </div>
    )
}

export default UpdateForm