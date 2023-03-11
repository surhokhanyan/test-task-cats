import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {routes} from "../../utils/routes";
import {HOME} from "../../utils/urils";

const Main = () => {
    return (
        <Routes>
            {
                routes.map(({id, path, element})=>{
                    return(
                        <Route
                            key={id}
                            path={path}
                            element={element}
                        />
                    )
                })
            }
            <Route path={"*"} element={<Navigate to={HOME}/>}/>
        </Routes>
    );
};

export default Main;