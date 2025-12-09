import * as react from "react";
import * as reactDOM from "react-dom/client";
import * as reactRouterDOM from "react-router-dom";
import Header from "#header/header.tsx";
import Footer from "#footer/footer.tsx";
import Home from "#home/home.tsx";
import Settings from "#settings/settings.tsx";
import About from "#about/about.tsx";
import Help from "#help/help.tsx";
import styles from "#/app.module.scss";

const App = (): react.JSX.Element => {
    return (<react.StrictMode>
        <reactRouterDOM.BrowserRouter>
            <Header></Header>
            <reactRouterDOM.Routes>
                <reactRouterDOM.Route path="/" element={<Home></Home>}></reactRouterDOM.Route>
                <reactRouterDOM.Route path="/settings" element={<Settings></Settings>}></reactRouterDOM.Route>
                <reactRouterDOM.Route path="/about" element={<About></About>}></reactRouterDOM.Route>
                <reactRouterDOM.Route path="/help" element={<Help></Help>}></reactRouterDOM.Route>
            </reactRouterDOM.Routes>
            <Footer></Footer>
        </reactRouterDOM.BrowserRouter>
    </react.StrictMode>);
};

const rootElement = document.getElementById("root")!;
const root = reactDOM.createRoot(rootElement);
rootElement.className = styles.root;
root.render(<App></App>);
