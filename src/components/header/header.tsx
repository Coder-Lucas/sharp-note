import * as react from "react";
import HeaderLink from "#header/header.link.tsx";
import styles from "#header/header.module.scss";

const Header = (): react.JSX.Element => {
    return (<>
        <header className={styles.header}>
            <ul className={styles.headerList}>
                <li className={styles.headerItem}>
                    <HeaderLink to="/">首页</HeaderLink>
                </li>
                <li className={styles.headerItem}>
                    <HeaderLink to="/settings">设置</HeaderLink>
                </li>
                <li className={styles.headerItem}>
                    <HeaderLink to="/about">关于</HeaderLink>
                </li>
                <li className={styles.headerItem}>
                    <HeaderLink to="/help">帮助</HeaderLink>
                </li>
            </ul>
        </header>
    </>);
};

export default Header;
