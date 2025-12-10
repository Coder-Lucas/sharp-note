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

const busuanziIdArr = [
    "busuanzi_site_pv",
    "busuanzi_site_uv",
    "busuanzi_today_pv",
    "busuanzi_today_uv"
].reverse();
const busuanziArr = [];
const root = Object.assign(document.createElement("div"), {
    className: styles.root,
    id: "root"
});
for (let id of busuanziIdArr) {
    busuanziArr.push(Object.assign(document.createElement("div"), {
        className: styles.busuanzi,
        id: id
    }));
}
document.body.insertAdjacentElement("afterbegin", root);
for (let busuanzi of busuanziArr) {
    document.body.insertAdjacentElement("afterbegin", busuanzi);
}
reactDOM.createRoot(root).render(<App></App>);
