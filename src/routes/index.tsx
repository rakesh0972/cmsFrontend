import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../pages/auth/Login.screen';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AuthLayout } from '../layouts/Auth.layout';
import DashboardLayout from '../layouts/Dashboard.layout';

const MainRoute = () => {
	// const isLoggedIn = useSelector(
	//     (state: any) =>
	//         state.authReducer.isLoggedIn || !!state.authReducer.token,
	// )
	const isLoggedIn = true;
	const user = useSelector((state: any) => state.authReducer.user);
	const setDefaultPath = isLoggedIn ? '/dashboard' : '/auth'; 
	// const setDefaultPath = isLoggedIn ? '/dashboard' : '/login';
	const [redirection, setRedirection] = useState('/dashboard');
	return (
		<Routes>
			<Route
				path={'/auth/*'}
				element={!isLoggedIn ? <AuthLayout /> : <Navigate to={'/dashboard'} />}
			/>
			<Route
				path={'/dashboard/*'}
				element={isLoggedIn ? <DashboardLayout /> : <Navigate to={'/auth'} />}
			/>
			<Route path="*" element={<Navigate to={setDefaultPath} />} />
		</Routes>
	);
};

export default MainRoute;
