import * as react from "react";
import * as reactDOM from "react-dom/client";
import Header from "#/header/header.tsx";
import Main from "#/main/main.tsx";
import styles from "#/app/app.module.scss";

const App: react.FC = () => {
    return (<react.StrictMode>
        <Header></Header>
        <Main></Main>
        <footer></footer>
    </react.StrictMode>);
};

document.body.classList.add(styles.root);
const root: reactDOM.Root = reactDOM.createRoot(document.body);
root.render(<App></App>);
