import { RouterProvider } from 'react-router' ; 
import { router } from './app.router.tsx' ; 
import './index.css'

function App() {

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-100'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
