import React from 'react';
import css from "./LoadMore.module.scss";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {loadMore} from "../../store/slices/catsSlice";

const LoadMore = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={css.btn}>
            <button
                onClick={() => dispatch(loadMore())}
            >load more</button>
        </div>
    );
};

export default LoadMore;