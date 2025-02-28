import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

function MainRouter() {
    const MyRouter = createBrowserRouter(
        createRoutesFromElements(
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
        )
    )
    return (
        <RouterProvider router={MyRouter} />
    )
}

export default MainRouter