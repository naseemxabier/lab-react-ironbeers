import Header from "../components/Header"
import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"


function Beers() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(result => {
               
                setBeers(result.data)
            }

            )
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Header />

            <div>
                {beers.map((beer) => (
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <img src={beer.image_url} className="card-img-top" alt={beer.name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {beer.name}</h5>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text"><strong>Contributed by:</strong> {beer.contributed_by}</p>
                            <Link to ={beer._id} class="btn btn-primary">Get more details!</Link>
                            
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default Beers;