import { Link } from "react-router-dom"
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
function Index() {
    return (
        <div>
            <h1>IronBeers</h1>
            <div>

                <img src={beers} alt="beers" />
                <div>
                    <h2>
                        <Link to="/beers">All Beers!</Link>
                    </h2>
                    <p className="w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </div>



                <img src={randomBeer} alt="beers" />
                <div>
                    <h2>
                        <Link to="/randomBeer">Random Beer!</Link>
                    </h2>
                    <p className="w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </div>



                <img src={newBeer} alt="beers" />
                <div>
                    <h2>
                        <Link to="/newBeer">New Beer!</Link>
                    </h2>
                    <p className="w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </div>



            </div>

        </div>
    )
}

export default Index;