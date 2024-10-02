import React from "react";
import Link from "next/link";
const Navbar = () => {
    return(
        <div className="Navbar">
            <ul className="Nav ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Skills">Skills</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
            
        </div>
    )
}
export default Navbar;