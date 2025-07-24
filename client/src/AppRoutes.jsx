import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "./layouts/PublicLayout"
import { Home } from "./pages/public/Home"
import { District } from "./pages/public/District"
import { Municipality } from "./pages/public/Municipality"
import { Services } from "./pages/public/Services"
import { News } from "./pages/public/News"
import { Contact } from "./pages/public/Contact"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PublicLayout />}> 
            <Route index element={<Home />} />
            <Route path="/district" element={<District />} />
            <Route path="/municipality" element={<Municipality />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
  )
}