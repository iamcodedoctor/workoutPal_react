import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Exercises } from "./pages";
import { Layout } from "./Components";
import ScrollToTop from "./utils/helper/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/exercises" element={<Exercises />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
