import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectDetail } from '@/components/Routes/ProjectDetail'
import ErrorPage from './components/Routes/ErrorPage.jsx'
import { FormProvider } from './components/Form/FormContext.jsx'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/project/:projectId',
    element: <ProjectDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
)
