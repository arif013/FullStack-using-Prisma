import React, { useState, useEffect } from 'react';
import './ApiFetched.css'

function ApiFetched() {
    const [data, setData] = useState(null);
    const api = `https://www.googleapis.com/books/v1/volumes?q=nonfiction`;

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='table-container'>
            <h2>API fetched Data of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.items && data.items.map((item) => (
                        <tr key={item.id}>
                            <>
                                <td>{item.volumeInfo.title}</td>
                                <td>{item.volumeInfo.authors}</td>
                                <td>{item.volumeInfo.categories}</td>
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ApiFetched;
