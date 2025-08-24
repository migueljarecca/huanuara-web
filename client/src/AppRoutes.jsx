import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "./layouts/PublicLayout"
import { Home } from "./pages/public/Home"
// import { Services } from "./pages/public/Services"
// import { News } from "./pages/public/News"
// import { Contact } from "./pages/public/Contact"

import { History } from "./pages/public/district/History"
import { Location } from "./pages/public/district/Location"
import { Geography } from "./pages/public/district/Geography"
import { Tourism } from "./pages/public/district/Tourism"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PublicLayout />}> 
            <Route index element={<Home />} />

            {/* Subrutas de Distrito */}
            <Route path="district/history" element={<History />} />
            <Route path="district/location" element={<Location />} />
            <Route path="district/geography" element={<Geography />} />
            <Route path="district/tourism" element={<Tourism />} />

            {/* <Route path="/municipality" element={<Municipality />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Route>
    </Routes>
  )
}