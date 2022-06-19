import React from "react";

import redPin from "../../Images/red-pin.jpeg";

export default function Card(props) {
    return (
        <div className="travel--card">
            <div>
                <img src={props.img} className="travel--card--img" />
            </div>
            <div>
                <div className="travel--location">
                    <img src={redPin} className="pin"/>
                    <p className="travel--location--text">{props.location}</p>
                    <p className="travel--location--google">
                        <a href={props.googleMapsUrl} className="travel--a">View on Google Maps</a>
                    </p>
                </div>
                <div className="travel--title">
                    <p>{props.title}</p>
                </div>
                <div className="travel--date">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <div className="travel--description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}