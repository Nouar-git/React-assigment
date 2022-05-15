import React from "react";

export default function OrderByAlphaButton(props) {
    return (
        <div>
            <button className="btn btn-info" onClick={() => {props.orderByAlphaButton()}}>Alfabetisk ordning</button>
        </div>
    )
}