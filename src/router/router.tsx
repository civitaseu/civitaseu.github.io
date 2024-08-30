import { Routes, Route, BrowserRouter } from "react-router-dom"
import Overview from "pages/overview/overview"
import ReactGA from "react-ga4";

ReactGA.initialize("G-1EJXPM7BPD");

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Overview />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter