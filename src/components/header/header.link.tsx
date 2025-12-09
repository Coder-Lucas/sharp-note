import * as react from "react";
import * as reactRouterDOM from "react-router-dom";
import styles from "#header/header.module.scss";

type TProps = {
    to: string;
    children: react.ReactNode;
    className?: string;
    end?: boolean;
};
const HeaderLink = ({to, children, className = "", end = true}: TProps): react.JSX.Element => {
    return (<>
        <reactRouterDOM.NavLink className={styles.headerLink.concat(" ", className).trim()} end={end} to={to}>{children}</reactRouterDOM.NavLink>
    </>);
};

export default HeaderLink;
