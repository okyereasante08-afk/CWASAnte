import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';
import ExamPrep from './pages/ExamPrep.jsx';
import LearningHub from './pages/LearningHub.jsx';
import Concepts from './pages/Concepts.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/exam-prep" element={<ExamPrep />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/concepts" element={<Concepts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
