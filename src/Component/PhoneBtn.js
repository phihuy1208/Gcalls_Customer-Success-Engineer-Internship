import React from "react";

function PhoneBtn( { call, cancel , onClick }) {
    return (
        <React.Fragment>
            {call && 
                <span className="btn phone call" onClick={onClick}>
                    <i className="fa-solid fa-phone"></i>
                </span>
            }

            {cancel && 
                <span className="btn phone cancel" onClick={onClick}>
                    <i className="fa-solid fa-phone"></i>
                </span>}
        </React.Fragment>
    )
}

export default PhoneBtn;