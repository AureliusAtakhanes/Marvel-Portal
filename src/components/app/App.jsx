import AppHeader from "../appHeader/AppHeader";
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import SingleComicPage from "../pages/SingleComicPage";


const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/comics'} element={<ComicsPage />} />
                <Route path={'/comics/:comicId'} element={<SingleComicPage />} />
            </Routes>
        </div>
    )
}

export default App;

