import Review from './Review'
import ReviewList from './ReviewList'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import AddReview from './AddReview'
import { Login, Logout } from './Auth'
import { useState } from 'react'

const App = () => {

    const [user, setUser] = useState({
        isLoggedIn: false,
        username: "",
    });

    const handleLogin = (username) => {
        setUser({
          isLoggedIn: true,
          username: username,
        });
      };
    
      const handleLogout = () => {
        setUser({
          isLoggedIn: false,
          username: "",
        });
      };

    return<BrowserRouter>
        <Layout user={user} onLogout={handleLogout} onLogin={handleLogin}>
            <Routes>
                <Route index="true" element={<ReviewList />} />
                <Route path="*" element={<NotFound />} />
                <Route path="view/:slug" element={<Review />} />
                <Route path="/:category" element={<ReviewList />} />
                <Route path="/add" element={<AddReview />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}

export default App