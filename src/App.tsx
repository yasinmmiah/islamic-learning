import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArabicAlphabetPage from './pages/ArabicAlphabetPage';
import EnglishAlphabetPage from './pages/EnglishAlphabetPage';
import NumbersPage from './pages/NumbersPage';
import DuasPage from './pages/DuasPage';
import GamesPage from './pages/GamesPage';
import LetterDetailPage from './pages/LetterDetailPage';
import NumberDetailPage from './pages/NumberDetailPage';
import DuaDetailPage from './pages/DuaDetailPage';
import SalahGuidePage from './pages/SalahGuidePage';
import ProphetStoriesPage from './pages/ProphetStoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import ColorsPage from './pages/ColorsPage';
import ColorDetailPage from './pages/ColorDetailPage';
import AllahNamesPage from './pages/AllahNamesPage';
import NameDetailPage from './pages/NameDetailPage';
import Layout from './components/Layout';
import { ProgressProvider } from './context/ProgressContext';
import { AudioProvider } from './context/AudioContext';
import { UserProvider } from './context/UserContext';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import DevelopersPage from './pages/DevelopersPage';
import ShapesPage from './pages/ShapesPage';
import ShapeDetailPage from './pages/ShapeDetailPage';
import AnimalsPage from './pages/AnimalsPage';
import AnimalDetailPage from './pages/AnimalDetailPage';

function App() {
  return (
    <Router>
      <UserProvider>
        <AudioProvider>
          <ProgressProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/developers" element={<DevelopersPage />} />
                <Route path="/arabic" element={<ArabicAlphabetPage />} />
                <Route path="/arabic/:id" element={<LetterDetailPage type="arabic" />} />
                <Route path="/english" element={<EnglishAlphabetPage />} />
                <Route path="/english/:id" element={<LetterDetailPage type="english" />} />
                <Route path="/numbers" element={<NumbersPage />} />
                <Route path="/numbers/:id" element={<NumberDetailPage />} />
                <Route path="/colors" element={<ColorsPage />} />
                <Route path="/colors/:id" element={<ColorDetailPage />} />
                <Route path="/shapes" element={<ShapesPage />} />
                <Route path="/shapes/:id" element={<ShapeDetailPage />} />
                <Route path="/animals" element={<AnimalsPage />} />
                <Route path="/animals/:id" element={<AnimalDetailPage />} />
                <Route path="/duas" element={<DuasPage />} />
                <Route path="/duas/:id" element={<DuaDetailPage />} />
                <Route path="/salah" element={<SalahGuidePage />} />
                <Route path="/prophets" element={<ProphetStoriesPage />} />
                <Route path="/prophets/:id" element={<StoryDetailPage />} />
                <Route path="/names" element={<AllahNamesPage />} />
                <Route path="/names/:id" element={<NameDetailPage />} />
                <Route path="/games" element={<GamesPage />} />
              </Routes>
            </Layout>
          </ProgressProvider>
        </AudioProvider>
      </UserProvider>
    </Router>
  );
}

export default App;