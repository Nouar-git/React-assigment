import React from "react";

export default function OrderBYGradeButton(props) {
    return (
        <div>
            <button className="btn btn-info ms-3" onClick={() => {props.orderBYGradeButton()}}>Betygsordning</button>
        </div>
    )
}