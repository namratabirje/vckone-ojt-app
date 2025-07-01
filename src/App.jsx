import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./styles/pages.css";
import "..\src\App.css";
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer/Footer';
import Header from './components/Headers/Header';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Namrata Narayan Birje"
          studentPhotoUrl="\Images\namu.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <div className="main-layout">
        <Header/>
        {/* <nav className="navbar">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/courses" className="nav-item">Courses</Link>
          <Link to="/chat" className="nav-item">Chatbot</Link>
        </nav> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            {/* <Route path="/chat" element={<ChatbotComponent />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <ChatbotComponent/>
        <Footer />
      </div>
    </Router>
    </>
  );
}
export default App;