import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import DestinationDetailPage from './pages/DestinationDetailPage'
import JourneysPage from './pages/JourneysPage'
import JourneyDetailPage from './pages/JourneyDetailPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="journeys" element={<JourneysPage />} />
          <Route path="journeys/:slug" element={<JourneyDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="journal/:slug" element={<ArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
