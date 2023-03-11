import React, {useLayoutEffect} from 'react';
import css from "./Cats.module.scss";
import Categories from "../categories/Categories";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getCats} from "../../store/slices/catsSlice";
import LoadMore from "../LoadMore/LoadMore";
import Loading from "../loading/Loading";

const Cats = () => {

    const dispatch = useAppDispatch();

    const {cats, page, categoryId, isLoading, error} = useAppSelector(state => state.cats)

    useLayoutEffect(()=>{
        dispatch(getCats({page, categoryId}))
    }, [page, categoryId])

    return (
        <div className={css.main}>
            <Categories/>
            {error && <span>{error}</span>}
            <div className={css.cats}>
                {
                    isLoading ? <Loading/> :
                    cats.map(({id, url})=> {
                        return(
                            <div
                                key={id}
                                className={css.cat}
                            >
                                <img src={url} alt="Picture" loading={"lazy"}/>
                            </div>
                        )
                    })
                }
            </div>
            <LoadMore/>
        </div>
    );
};

export default Cats;