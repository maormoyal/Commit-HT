// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';
import styles from './app.module.css';

import FormPage from './pages/form/Form';
import User from './pages/user/User';
import Navigation from './components/navigator/Navigation';

export function App() {
  return (
    <>
      <div role="navigation">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
