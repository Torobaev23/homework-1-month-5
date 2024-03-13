import {Routes, Route} from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage.jsx";
import Create from "./pages/Create.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <>

            <Routes>
                <Route path='/' element={<Footer/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='about' element={<Create/>}/>

                    <Route path='*' element={<h4>Ошибка 404: Страница не найдена</h4>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
