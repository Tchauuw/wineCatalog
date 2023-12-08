import React from 'react'

import Review from './Review'
import ReviewList from './ReviewList'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return<BrowserRouter>
        <Layout>
        <Routes>
            <Route path="view" element={<Review />} />
        </Routes>
        </Layout>
    </BrowserRouter>
}

export default App