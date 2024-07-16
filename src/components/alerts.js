import React  from "react";

import {MdErrorOutline} from "react-icons/md";



function AlertRed(props) {
    return (
        <>
          <div className="alerts">
            <div className="alert-container" st>
                <div className="alert-red" style={{backgroundColor:props.color}}>
                    <div className="alert_icon">
                        <MdErrorOutline size={30} color="red"/>
                    </div>
                    <div className="alert_text">
                        <a style={{color:'red' , whiteSpace:'nowrap'}}>{props.alert_text}</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export {AlertRed}; 