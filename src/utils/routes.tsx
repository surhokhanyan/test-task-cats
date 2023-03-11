import {CATS, HOME} from "./urils";
import Home from "../components/home/Home";
import Cats from "../components/cats/Cats";
import React, {ReactElement} from "react";
import Loading from "../components/loading/Loading";

type Routes = {
    id: number,
    path: string,
    name: string,
    element: ReactElement
}

const LazyCats = React.lazy(()=> import("../components/cats/Cats"))

export const routes:Routes[] = [
    {id: Math.random(), path: HOME, name: "home", element: <Home/>},
    {id: Math.random(), path: CATS, name: "cats", element: <React.Suspense fallback={<Loading/>}><LazyCats/></React.Suspense>}
]