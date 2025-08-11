import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import SaloonWebTemplate from '../pages/SaloonWebTemplate'
import PrivacyPolicy from '../pages/PrivacyPolicy'

function MainRouter() {
    const MyRouter = createBrowserRouter(
        createRoutesFromElements(
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='saloon-template' element={<SaloonWebTemplate />} />
                    <Route path='salon-template' element={<SaloonWebTemplate />} />
                    <Route path='privacy-policy' element={<PrivacyPolicy />} />
                </Route>
        )
    )
    return (
        <RouterProvider router={MyRouter} />
    )
}

export default MainRouter