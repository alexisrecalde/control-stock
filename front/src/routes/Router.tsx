import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/breadcrumbs" />
        </Routes>
    );
}
