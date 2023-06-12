import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../../../pages/auth/Login.screen';

export const AuthRoutes = () => (
	<Routes>
		<Route path={'/login'} element={<LoginScreen />} />
	</Routes>
);
