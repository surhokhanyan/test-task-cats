import React, {useLayoutEffect} from 'react';
import css from "./Categories.module.scss";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getCategories} from "../../store/slices/categoriesSlice";
import {getCategoryId} from "../../store/slices/catsSlice";

const Categories = () => {

    const dispatch = useAppDispatch();

    useLayoutEffect(()=>{
        dispatch(getCategories())
    }, [dispatch])

    const {categories, error} = useAppSelector(state => state.categories)

    const {categoryId} = useAppSelector(state => state.cats)

    return (
        <ul className={css.categories}>
            {error && <span>{error}</span>}
            {
                categories.map(({id, name})=>{
                    return(
                        <li
                            key={id}
                            className={categoryId === id ? css.active : null}
                            onClick={()=> dispatch(getCategoryId(id))}
                        >
                            {name}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Categories;