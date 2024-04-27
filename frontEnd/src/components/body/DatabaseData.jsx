import React, {useEffect, useState} from 'react'
import './ApiFetched.css'


function DatabaseData() {
    const [data, setData] = useState([])
    const api = `http://localhost:3000/api/books/get`
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // console.log(data[0])
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    },[]);
  return (
    // <div>DatabaseData</div>
    <div className='table-container'>
            <h2>Database fetched Data of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                            <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.genre}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
  )
}

export default DatabaseData