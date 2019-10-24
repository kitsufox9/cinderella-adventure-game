import React, { Component } from 'react'
import Layout from '../shared/Layout'
import Form from '../shared/Form'

class StartHere extends Component {
    render() {
        return(
            <div>
                <Layout>
                <h1>Choose Cinderella's Destiny!</h1>
                <Form />
                </Layout>
            </div>
        )
    }
}

export default StartHere;