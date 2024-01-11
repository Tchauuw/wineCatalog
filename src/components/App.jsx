import Review from "./Review";
import ReviewList from "./ReviewList";
import Layout from "./Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { Login, Logout } from "./Auth";
import { useState } from "react";
import AddReview from "./AddReview";

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

	return (
		<BrowserRouter>
			<Layout user={user} onLogout={handleLogout} onLogin={handleLogin}>
				<Routes>
					<Route index="true" element={<ReviewList />} />
					<Route path="*" element={<NotFound />} />
					<Route path="view/:slug" element={<Review />} />
					<Route path=":category" element={<ReviewList />}>
						<Route path="view/:slug" element={<Review />} />
					</Route>
					<Route path="/add" element={<AddReview user={user} />} />
					<Route
						path="/login"
						element={<Login user={user} onLogin={handleLogin} />}
					/>
					<Route path="/logout" element={<Logout user={user} />} />
				</Routes>
			</Layout>
			{!user && (
				<Navigate to={{ pathname: "/login" }} state={{ from: "/protected" }} />
			)}
		</BrowserRouter>
	);
};

export default App;
