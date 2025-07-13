import React from 'react'
import NavigationPhoto from './NavigationPhoto'

const SearchPhoto = () => {
    const containerStyle = {
        backgroundImage: 'url("https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg")', // Replace with your image URL
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


                                <button className="btn btn-success">Search</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPhoto