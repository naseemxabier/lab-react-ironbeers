import Header from "../components/Header"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';

function Details() {
    const {beerId} =useParams();

    const [oneBeer, setBeer] = useState({})
    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {

                setBeer(response.data)
                
            })
            .catch(err => console.log(err))
    }, []) 

    return (
        <div>
            <Header />
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img src={oneBeer.image_url} className="card-img-top" alt={oneBeer.name} />
                <div className="card-body">
                    <h5 className="card-title">Name: {oneBeer.name}</h5>
                    <p className="card-text">{oneBeer.tagline}</p>
                    <p className="card-text"><strong>First brewed on</strong> {oneBeer.first_brewed}</p>
                    <p className="card-text"><strong>Contributed by:</strong> {oneBeer.contributed_by}</p>
                    <p className="card-text"><strong>Attenuation level:</strong> {oneBeer.attenuation_level}</p>
                    <p className="card-text"><strong>Description:</strong> {oneBeer.description}</p>
                    

                </div>
            </div>
        </div>)
}
export default Details;