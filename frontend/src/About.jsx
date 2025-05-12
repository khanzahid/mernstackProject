import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function About() {
    const [about, setAbout] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            aboutDAta();
        }, 1000);
    }, []);

    const aboutDAta = async () => {
        const res = await axios.get('/api/about')
        setAbout(res.data)
        setLoading(false)
    }

  return (
    <>
        <h2>{about?.Page_Title}</h2>
        <table className="table table-primary table-striped w-200">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {loading && <tr className='text-center'><td colSpan="3"><span className="spinner-border spinner-border-sm text-center" role="status" aria-hidden="true"></span> Loading...</td></tr>}
                <tr>
                    <td>{about?.name}</td>
                    <td>{about?.age}</td>
                    <td>{about?.country}</td>
                </tr>
            </tbody>        
        </table>
    </>
  )
}
