import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import {Routes,Route} from 'react-router-dom'
import Day3 from "../pages/Day3"
import Day5 from "../pages/Day5"
import Day6 from "../pages/Day6"
const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element ={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Day3" element={<Day3/>}></Route>
            <Route path="/Day5" element={<Day5/>}/>
            <Route path="/Day6" element={<Day6/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default AppRoutes