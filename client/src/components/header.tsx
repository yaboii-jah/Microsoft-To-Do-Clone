import { MdHomeFilled } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

import "./header.css"

export function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <MdHomeFilled size={25} color="#fff" />
                <span>To Do</span>
            </div>
            <div className="header-center">
                <div className="search-box">
                    <LiaSearchSolid size={20} color="#fff"/>
                    <input className="header-search-input" type="text"/>
                </div>
            </div>
            <div className="header-right">
                <IoSettingsOutline size={20} color="#fff"/>
                <div className="profile-container">
                    <span>J</span>
                </div>
            </div>
        </div>
    )
}