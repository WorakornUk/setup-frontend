import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'

const Header = lazy(() => import('../layouts/Header'))
const Footer = lazy(() => import('../layouts/Footer'))
const HomePage = lazy(() => import('../pages/HomePage'))
const Wrestlers = lazy(() => import('../pages/Wrestlers'))
const Championships = lazy(() => import('../pages/Championships'))
const Shop = lazy(() => import('../pages/Shop'))
const Tickets = lazy(() => import('../pages/Tickets'))
const EventDetail = lazy(() => import('../pages/EventDetail'))
const Checkout = lazy(() => import('../pages/Checkout'))
const GenTicket = lazy(() => import('../pages/GenTicket'))

const router = createBrowserRouter([{
  path: '/',
  element: 
  <>
    <Header />
    <div className="min-h-[90vh]">
      <Outlet />
    </div>
    <Footer />
  </>,
  errorElement: <Navigate to='/' />,
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/wrestlers', element: <Wrestlers /> },
    { path: '/championships', element: <Championships /> },
    { path: '/shop', element: <Shop /> },
    { path: '/tickets', element: <Tickets /> },
    
    { path: '/events/:id', element: <EventDetail />},
    { path: '/checkout', element: <Checkout />},
    { path: '/ticket', element: <GenTicket />}
  ]
}

])

export default function Router() {
  return <RouterProvider router={router} />;
}
