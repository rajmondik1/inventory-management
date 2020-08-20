import React from "react";

const Main = props => {
    return(
        <main className="flex-shrink-0" >
            {props.children}
        </main>
    );
};

export default Main;