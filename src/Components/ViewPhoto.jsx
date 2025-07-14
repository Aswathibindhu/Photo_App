import React, { useEffect, useState } from 'react'
import NavigationPhoto from './NavigationPhoto'
import axios from 'axios';

const ViewPhoto = () => {
    const [PhotoData, ChangePhoto] = useState(
        [

        ]
    )
    const containerStyle = {
        backgroundImage: 'url("https://img.freepik.com/premium-photo/chunkyglitter_1091945-772.jpg?semt=ais_hybrid&w=740")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };
    const FetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{
                     ChangePhoto(response.data)
            }
        ).catch()
    }
    useEffect(()=>{FetchData()},[])
    return (
        <div style={containerStyle}>
            <NavigationPhoto />
            <div className="container ">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="table-responsive">
                                <div class="container text-center">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Album Id</th>
                                                <th scope="col">Id</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">ThumbnailURL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {PhotoData.map(
                                                (value, index) => {
                                                    return (

                                                        <tr>
                                                            
                                                            <td>{value.albumId}</td>
                                                            <td>{value.id}</td>
                                                            <td>{value.title}</td>
                                                            <td>{value.url}</td>
                                                            <td>{value.thumbnailUrl}</td>
                                                        </tr>
    
                        
                        )
                                }
                            )}
                                            </tbody>
                                    </table>
                                           
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ViewPhoto