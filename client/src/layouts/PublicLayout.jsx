import { Outlet } from "react-router-dom"
import { TopBanner } from "../components/TopBanner"
import { Header } from "../components/Header"
import { HeaderTwo } from "../components/HeaderTwo"

export const PublicLayout = () => {

    return (
        <>
            <TopBanner />
            {/* <Header /> */}
            <HeaderTwo />
            <main>
                <Outlet />
            </main>

        </>
  )
}