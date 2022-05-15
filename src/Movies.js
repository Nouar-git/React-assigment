import React from "react";

export default function Movies(props) {
    return (
        <li className="list-group-item">
            { props.item.title }
            <button className="btn btn-sm btn-danger float-end ms-2" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
            <span className="float-end" dangerouslySetInnerHTML={{__html: "<span class='mx-1'>&#x2B50</span>".repeat(props.item.rate)}} />
        </li>
    )
}