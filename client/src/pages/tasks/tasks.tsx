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
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { LuListMinus } from "react-icons/lu";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineGroup } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoIosRepeat } from "react-icons/io";
import "./tasks.css"

import { TaskDrawer } from "../../components/task_drawer";

export function Tasks({type}: {type: string}) {
    return (
        <div className="tasks-container">
            <title>My Day - To Do</title>

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
                <div className="tasks">
                    <div className="tasks-header">
                        <div className="task-header-left">
                            <div className="page-title">
                                <MdOutlineWbSunny size={20} color="#fff" />
                                <span>My Day</span>
                                <HiOutlineDotsHorizontal className="list-option" size={20} />           
                            </div>

                            <div className="tasks-view-option">
                                <TbLayoutGridFilled size={20} />
                                <span>Grid</span>
                            </div>
                            <div className="tasks-view-option">
                                <LuListMinus size={20} />
                                <span>List</span>
                            </div>

                        </div>

                        <div className="task-header-right">
                            <div className="tasks-view-option">
                                <TbArrowsSort size={20} />
                                <span>Sort</span>
                            </div>
                            <div className="tasks-view-option">
                                <AiOutlineGroup size={20} />
                                <span>Group</span>
                            </div>
                            <div className="tasks-view-option">
                                <FaRegLightbulb size={20} />
                                <span>Suggestions</span>
                            </div>
                        </div>
                    </div>
                    <div className="current-date">
                        <span>Monday, May 4</span>
                    </div>
                    <div className="enter-task">
                        <div className="enter-task-input">
                            <FaRegCircle size={18} color="#78bafd" />
                            <input name="new-task-input" className="new-task-input" type="text" placeholder="Add a task"/>
                        </div>
                        <div className="task-option">
                           <MdCalendarMonth className="task-option-icon" size={18}  />
                           <GoBell className="task-option-icon" size={18} />
                           <IoIosRepeat className="task-option-icon" size={18} />
                        </div>
                    </div>
                    <div className="tasklist">
                        <div className="task-item">
                            <div className="tasks-left">
                                <FaRegCircle size={18} color="#78bafd" />
                                <div className="task-item-content">
                                    <span>Laguna Loop</span>
                                    <div className="task-verified-categories">
                                        <span>Tasks</span>
                                    </div>
                                </div>
                            </div>
                            <CiStar size={22} color="#78bafd" />
                        </div>

                        <div className="task-item">
                            <div className="tasks-left">
                                <FaRegCircle size={18} color="#78bafd" />
                                <div className="task-item-content">
                                    <span>Laguna Loop</span>
                                    <div className="task-verified-categories">
                                        <span>Tasks</span>
                                    </div>
                                </div>
                            </div>
                            <CiStar size={22} color="#78bafd" />
                        </div>

                    </div>
                </div>
                <TaskDrawer />
            </div>
            
        </div>
    )
}