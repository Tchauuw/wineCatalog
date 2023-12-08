import React from 'react'

import Review from './Review'
import ReviewList from './ReviewList'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'

const App = () => {
    return<BrowserRouter>
        <Layout>
        <Routes>
            <Route path="view" element={<Review />} />
            <Route index="true" element={<ReviewList />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
    </BrowserRouter>
}

export default App