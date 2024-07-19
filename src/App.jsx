import Router from './routes'
import { Suspense } from 'react'
import Loading from './components/Loading'
import AuthContextProvider from './contexts/AuthContext'
import ReRenderContextProvider from './contexts/ReRenderContext'

function App() {

  return (
    <>
      <Suspense fallback={<Loading />} >
        <AuthContextProvider>
          <ReRenderContextProvider>
            <Router />
          </ReRenderContextProvider>
        </AuthContextProvider>
      </Suspense>
    </>
  )
}

export default App
