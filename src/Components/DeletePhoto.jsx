import React from 'react'
import NavigationPhoto from './NavigationPhoto'

const DeletePhoto = () => {
     const containerStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        
    };
  return (
    <div style={containerStyle}>
        <NavigationPhoto/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <button className="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePhoto