import React from 'react'
import Layout from '../components/Layout'
import momentum from '../img/momentum-logo.png'
const index = () => {
    return (

        <Layout>
            <div>
                testss
            </div>
            <div class="columns">

                <div class="column is-half is-offset-one-quarter has-text-centered">
                    <img src={momentum} alt="Momentum" />
                </div>

            </div>
            <div class="container ">
                <div class="columns">
                    <div class="column is-family-monospace has-text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
                </div>
            </div>
        </Layout>

    )
}

export default index
