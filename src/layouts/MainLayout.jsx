import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import HeroComponent from '../components/HeroComponent'

export default function MainLayout() {
  return (
    <>
        <nav className=' w-full bg-linear-to-tr from-[#4e2946] via-[#4e2946] to-[#f58634] '>
            <Header />
            <HeroComponent />
        </nav>

        <main>
            <Outlet />
        </main>

        <footer>

        </footer>
    </>
  )
}
