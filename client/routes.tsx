import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App.tsx'
import About from './Pages/About.tsx'
import Games from './Pages/Games.tsx'
import Quiz from './Pages/Quiz.tsx'
import RateSpam from './Pages/RateSpam.tsx'
import Home from './Pages/Home.tsx'
import ErrorPage from './Pages/ErrorPage.tsx'
import SpamDetails from './components/RateSpam/SpamDetails.tsx'
export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="games" element={<Games />} />
    <Route path="quiz" element={<Quiz />} />
    <Route path="rate-spam/:id" element={<SpamDetails />} />
    <Route path="rate-spam" element={<RateSpam />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
