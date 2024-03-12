import {Routes, Route} from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {

    return (
        <>

            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='about' element={<AboutUsPage/>}/>

                    <Route path='*' element={<h4>Ошибка 404: Страница не найдена</h4>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
