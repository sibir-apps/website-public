import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AboutPage from './modules/about';
import ContactPage from './modules/contact';
import HomePage from './modules/home';
import TimevityPage from './modules/timevity';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apps" element={<Navigate replace to="/timevity" />} />
        <Route path="/timevity" element={<TimevityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
