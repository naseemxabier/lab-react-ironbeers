import Header from "../components/Header"
import axios from "axios"
import { useState} from "react"
import {useNavigate } from "react-router-dom"

function NewBeer() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", tagline: "", description: "", first_brewed: "", brewer_tips: "", attenuation_level: "", contributed_by: "" });
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {name:form.name, tagline: form.tagline, description: form.description, first_brewed: form.first_brewed, brewer_tips:form.brewer_tips, attenuation_level: form.attenuation_level, contributed_by: form.contributed_by})
            .then((result) => {
                navigate("/beers")
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <Header />
            <div className="mx-auto w-50">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="floatingInput" value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">Tagline</label>
                        <input type="text" className="form-control" id="floatingInput" value={form.tagline} onChange={(e) => setForm({...form, tagline:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">Description</label>
                        <input type="text" className="form-control" id="floatingInput" value={form.description} onChange={(e) => setForm({...form, description:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">First brewed</label>
                        <input type="text" className="form-control" id="floatingInput" value={form.first_brewed} onChange={(e) => setForm({...form, first_brewed:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">Brewer tips</label>
                        <input type="text" className="form-control" id="floatingInput" value = {form.brewer_tips} onChange={(e) => setForm({...form, brewer_tips:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label">Attenuation level</label>
                        <input type="number" className="form-control" id="floatingInput" value = {form.attenuation_level} onChange={(e) => setForm({...form, attenuation_level:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput" className="form-label" value = {form.contributed_level} onChange={(e) => setForm({...form, contributed_by:e.target.value})}>Contributed By</label>
                        <input type="text" className="form-control" id="floatingInput" />
                    </div>

                    <button type="submit" className="btn btn-primary">Add a new beer!</button>
                </form>
            </div>
        </div>
    )
}

export default NewBeer;