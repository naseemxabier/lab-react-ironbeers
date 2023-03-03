import Header from "../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"

function RandomBeer() {
    const [randomBeer, setrandomBeer] = useState([])
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((result) => {
                setrandomBeer(result.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <Header />
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img src={randomBeer.image_url} className="card-img-top" alt={randomBeer.name} />
                <div className="card-body">
                    <h5 className="card-title">Name: {randomBeer.name}</h5>
                    <p className="card-text">{randomBeer.tagline}</p>
                    <p className="card-text"><strong>First brewed on</strong> {randomBeer.first_brewed}</p>
                    <p className="card-text"><strong>Attenuation level:</strong> {randomBeer.attenuation_level}</p>
                    <p className="card-text"><strong>Description:</strong> {randomBeer.description}</p>
                    <p className="card-text"><strong>Contributed by</strong> {randomBeer.contributed_by}</p>

                </div>
            </div>
        </div>
    )
}

export default RandomBeer;