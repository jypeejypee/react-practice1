import {createRoot} from "react-dom/client"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
)