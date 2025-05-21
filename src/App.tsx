import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DevelopersPage from './pages/DevelopersPage';
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
import AdminLayout from './components/AdminLayout';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import EditPage from './pages/admin/EditPage';
import { ProgressProvider } from './context/ProgressContext';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <UserProvider>
        <AuthProvider>
          <AudioProvider>
            <ProgressProvider>
              <Routes>
                {/* Add new routes */}
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <AboutPage />
                    </Layout>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Layout>
                      <LoginPage />
                    </Layout>
                  }
                />
                <Route
                  path="/developers"
                  element={
                    <Layout>
                      <DevelopersPage />
                    </Layout>
                  }
                />
                {/* Admin Routes */}
                <Route path="/admin/login" element={<LoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <DashboardPage />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                
                {/* Admin Edit Routes */}
                <Route
                  path="/admin/arabic/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="arabic" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/english/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="english" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/numbers/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="numbers" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/colors/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="colors" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/names/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="names" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/duas/:id/edit"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <EditPage resourceType="duas" />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                
                {/* Public Routes */}
                <Route
                  path="/"
                  element={
                    <Layout>
                      <HomePage />
                    </Layout>
                  }
                />
                <Route
                  path="/arabic"
                  element={
                    <Layout>
                      <ArabicAlphabetPage />
                    </Layout>
                  }
                />
                <Route
                  path="/arabic/:id"
                  element={
                    <Layout>
                      <LetterDetailPage type="arabic" />
                    </Layout>
                  }
                />
                <Route
                  path="/english"
                  element={
                    <Layout>
                      <EnglishAlphabetPage />
                    </Layout>
                  }
                />
                <Route
                  path="/english/:id"
                  element={
                    <Layout>
                      <LetterDetailPage type="english" />
                    </Layout>
                  }
                />
                <Route
                  path="/numbers"
                  element={
                    <Layout>
                      <NumbersPage />
                    </Layout>
                  }
                />
                <Route
                  path="/numbers/:id"
                  element={
                    <Layout>
                      <NumberDetailPage />
                    </Layout>
                  }
                />
                <Route
                  path="/colors"
                  element={
                    <Layout>
                      <ColorsPage />
                    </Layout>
                  }
                />
                <Route
                  path="/colors/:id"
                  element={
                    <Layout>
                      <ColorDetailPage />
                    </Layout>
                  }
                />
                <Route
                  path="/duas"
                  element={
                    <Layout>
                      <DuasPage />
                    </Layout>
                  }
                />
                <Route
                  path="/duas/:id"
                  element={
                    <Layout>
                      <DuaDetailPage />
                    </Layout>
                  }
                />
                <Route
                  path="/salah"
                  element={
                    <Layout>
                      <SalahGuidePage />
                    </Layout>
                  }
                />
                <Route
                  path="/prophets"
                  element={
                    <Layout>
                      <ProphetStoriesPage />
                    </Layout>
                  }
                />
                <Route
                  path="/prophets/:id"
                  element={
                    <Layout>
                      <StoryDetailPage />
                    </Layout>
                  }
                />
                <Route
                  path="/names"
                  element={
                    <Layout>
                      <AllahNamesPage />
                    </Layout>
                  }
                />
                <Route
                  path="/names/:id"
                  element={
                    <Layout>
                      <NameDetailPage />
                    </Layout>
                  }
                />
                <Route
                  path="/games"
                  element={
                    <Layout>
                      <GamesPage />
                    </Layout>
                  }
                />
              </Routes>
              <Toaster position="top-right" />
            </ProgressProvider>
          </AudioProvider>
        </AuthProvider>
      </UserProvider>
    </Router>
  );
}

export default App;