import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/LoginPage';
import LoginPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;