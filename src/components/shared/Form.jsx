import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => (
    <form>
        <label>What's Your Name?</label>
        <br></br>
        <input 
            placeholder="Name"         
        />
        <br></br>
        <Link to="/">
            <button type="submit">Submit</button>
        </Link>
        {/* <Link to={cancelPath}>
            <button>Cancel</button>
        </Link> */}
        </form>
)

export default Form;