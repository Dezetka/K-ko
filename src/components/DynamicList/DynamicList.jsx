import PropTypes from 'prop-types'
import React from "react";

import { item }from './DynamicList.module.scss'

export const DynamicList = ({ n }) => {

    const ListItems= [];

    for(let i = 1; i <= n; i++) {
        ListItems.push(<li className={item}>List item {i}</li>);
    }

    return (
        <>
            <ul>
                {ListItems}
            </ul>

            <hr></hr>
        </>
    );
    
}
DynamicList.propTypes = {
    n: PropTypes.number.isRequired,
};

