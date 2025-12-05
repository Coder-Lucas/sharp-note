import * as react from "react";
import HeaderSlider from "#/header/header.slider.tsx";
import styles from "#/header/header.module.scss";

const Header: react.FC = () => {
    return (<>
        <header className={styles.header}>
            <ul className={styles.headerList}>
                <li className={styles.headerItem}>首页</li>
                <li className={styles.headerItem}>设置</li>
                <li className={styles.headerItem}>关于</li>
                <li className={styles.headerItem}>-</li>
                <HeaderSlider></HeaderSlider>
            </ul>
        </header>
    </>);
};

export default Header;
