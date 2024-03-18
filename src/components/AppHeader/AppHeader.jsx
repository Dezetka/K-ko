import React from "react";

import { header } from "./Appheader.module.scss";

export const AppHeader = () => {
    return(
        <>
         <h2 className={header}>Dezetka-dev tasks</h2>;
         <hr></hr>;
        </>
    );      
}

