import React from 'react'

export default function Home({myData}) {
  return (
    <>
        <h2>My App</h2>
     <table className="table table-primary table-striped w-100">
        <thead>
            <tr>
                <th>Name</th>
                <th>Pic</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
        
        { myData?.map( (data, index) => (
          <tr key={index}>
                <td>{data?.name}</td>
                <td><img src={data?.avatar_url} width="50" height="50"/></td>
                <td>{data?.location}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
  )
}
