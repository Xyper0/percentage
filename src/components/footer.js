import React from "react";
import '../stylesheet/comps/footer.css';
import { FaTelegram } from "react-icons/fa";


export default function Footer() {
    const openTelegram = () => {
        window.open("https://t.me/m0_alq")
    }
    return (
        <>
        <div className="footer">
            <div className="footer-text">
                <a>This simple website was developed by <span onClick={openTelegram}>{'{ Mohammed AlQahtani }'} <FaTelegram size={18} style={{verticalAlign:'text-bottom'}} />
                </span></a>
            </div>
        </div>
        </>
    )
}