import { Route, Routes} from "react-router-dom";
import { About } from "../pages/About";
import { Galery } from "../pages/Galery";
import { HomePage } from "../pages/Home";
import { Services } from "../pages/Services";

const Router = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<HomePage />} />
            <Route path={"/About"} element={<About />} />
            <Route path={"/Services"} element={<Services />} />
            <Route path={"/Galery"} element={<Galery />} />
            <Route path={"*"} element={<HomePage />} />
        </Routes>
    )
}

export default Router