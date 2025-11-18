import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { useIsFetching } from '@tanstack/react-query'

export default function Layout() {
  const isFetching = useIsFetching()

  return (
    <section className="flex h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">
        {Boolean(isFetching) && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-spamYellow bg-opacity-40">
            <LoadingSpinner />
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}
