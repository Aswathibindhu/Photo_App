import React from 'react'
import NavigationPhoto from './NavigationPhoto'

const AddPhoto = () => {
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

            <NavigationPhoto />
            <center>
                <h1>Register</h1>
                <div className="container style={{ minHeight: '100vh'}}">
                    <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className=" row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Album ID</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">ID</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Title</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Enter the URL</label>
                                        <input type="file" name="" id="" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Enter the Thumbnai URL</label>
                                        <input type="file" name="" id="" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <button className="btn btn-success">Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default AddPhoto