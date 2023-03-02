import React from 'react'
import '../styles/carouselStyles.css'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ "objectFit": "contain !important" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?burger" style={{ "height": "570px" }} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pastry" style={{ "height": "570px" }} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?barbeque" style={{ "height": "570px" }} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
