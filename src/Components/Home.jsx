import React from 'react'
import NavigationPhoto from './NavigationPhoto'

const Home = () => {
  return (
    <div>
        <NavigationPhoto/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <img src="https://media.istockphoto.com/id/512034218/photo/man-holding-his-camera-on-walkway-during-his-travel.jpg?s=612x612&w=0&k=20&c=CUndjNY_5sokWNdmRhu8O6DHDiA7F0fqlU_vrOBijEg=" class="card-img-top" alt="..." height={600} width={400}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}


export default Home