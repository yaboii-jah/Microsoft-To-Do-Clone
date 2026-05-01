import { Header } from "../../components/header"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { PiHouse } from "react-icons/pi";
import { FaList } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LuFileSymlink } from "react-icons/lu";
import { RiTodoFill } from "react-icons/ri";
import "./tasks.css"

export function Tasks({type}: {type: string}) {
    return (
        <div className="tasks-container">
            <Header />
            <div className="main-content">
                <div className="left-drawer">
                    <div className="upper-drawer">
                        <div className="drawer-header">
                            <GiHamburgerMenu className="drawer-icon" size={18} color="#fff" />
                        </div>
                        <div className="drawer-navigation">
                            <div className="drawer-category">
                                <MdOutlineWbSunny size={18} color="#fff" />
                                <span>My Day</span>
                            </div>
                            <div className="drawer-category">
                                <CiStar size={18} color="#fff" />
                                <span>Important</span>
                            </div>
                            <div className="drawer-category">
                                <MdCalendarMonth size={18} color="#fff" />
                                <span>Planned</span>
                            </div>
                            <div className="drawer-category">
                                <BsPerson size={18} color="#fff" />
                                <span>Assigned to me</span>
                            </div>
                            <div className="drawer-category">
                                <PiHouse size={18} color="#fff" />
                                <span>Tasks</span>
                            </div>
                        </div>
                        
                        <div className="seperator">
                            <hr />
                        </div>

                        <div className="drawer-newlist">
                            <div className="drawer-category">
                                <FaList size={18} color="#fff" />
                                <span>Tasks</span>
                            </div>
                            <div className="newlist-category">
                                <div className="newlist-container">
                                    <IoAddOutline size={25} color="#78bafd"/>
                                    <input name="newlist-input" className="newlist-input" type="text" placeholder="New list"/>
                                </div>
                                <div className="add-group">
                                    <BiSolidBookAdd className="" size={20} color="#78bafd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-drawer">
                        <div className="add-group">
                            <CiMail className="" size={20} color="#ffffff" />
                        </div>
                        <div className="add-group">
                            <MdCalendarMonth className="" size={20} color="#ffffff" />
                        </div>
                        <div className="add-group">
                            <GoPeople className="" size={20} color="#ffffff" />
                        </div>
                        <div className="add-group">
                            <LuFileSymlink className="" size={20} color="#ffffff" />
                        </div>
                        <div className="add-group">
                            <RiTodoFill className="" size={20} color="#78bafd" />
                        </div>
                    </div>
                </div>
                <div className="tasks"></div>
            </div>
        </div>
    )
}