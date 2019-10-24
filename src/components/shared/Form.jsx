import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => (
    <form>
        <label>Name</label>
        <input 
            placeholder="Name"
                    
        />

        <label>Gender</label>
        <select>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
        </select>

        <Link to="/">
            <button type="submit">Submit</button>
        </Link>
        {/* <Link to={cancelPath}>
            <button>Cancel</button>
        </Link> */}
        </form>
)

export default Form;