import { Outlet } from "react-router-dom"
import { TopBanner } from "../components/TopBanner"
import { Header } from "../components/Header"

export const PublicLayout = () => {

    return (
        <>
            <TopBanner />
            <Header />
            <main>
                <Outlet />
            </main>

        </>
  )
}