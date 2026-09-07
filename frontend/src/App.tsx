import { RouterProvider } from 'react-router';
import { router } from './app.router.tsx';
import { AuthProvider } from './feature/auth/auth.context.tsx';
import './index.css'

function App() {

  return (
    <AuthProvider>
      <div className='min-h-screen flex items-center justify-center bg-blue-100'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  )
}

export default App
