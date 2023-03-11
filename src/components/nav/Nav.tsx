import React from 'react';
import css from "./Nav.module.scss";
import {routes} from "../../utils/routes";
import {Link, useLocation} from "react-router-dom";

const Nav = () => {

    const pathSplit = useLocation().pathname.split("/")[1]

    return (
        <nav className={css.nav}>
            <ul>
                {
                    routes.map(({id, path, name})=>{
                        return (
                            <li
                                key={id}
                                className={css.item}
                            >
                                <Link
                                    to={path}
                                    className={pathSplit === path ? css.active : null}
                                >
                                    {name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Nav;