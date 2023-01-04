import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "./pages";
import { Exercises, Layout } from "./Components";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/exercises" element={<Exercises />} />
                    
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
