import Layout from './components/Layout'
import { useCreateUser } from './hooks/useCreateUser'

function App() {
  //Automatically save user to database when they log in
  useCreateUser()
  return (
    <>
      <Layout />
    </>
  )
}

export default App
