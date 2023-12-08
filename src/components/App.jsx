import React from 'react'

import Review from './Review'
import ReviewList from './ReviewList'
import Layout from './Layout'

const App = () => {
    return <Layout>
        <Review />
        <ReviewList />
    </Layout>
}

export default App