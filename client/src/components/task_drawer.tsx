import { FaRegCircle } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosRepeat } from "react-icons/io";
import { RiTodoFill } from "react-icons/ri";
import { GrPin } from "react-icons/gr";
import { LuPanelRightClose } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import './task_drawer.css';

export function TaskDrawer() {
    return (
        <div className="task-drawer">
            <div className='task-drawer-upper'>
                <div className='task'>
                    <div className='task-title'>
                        <FaRegCircle className="complete-task" size={22} color="#78bafd" />
                        <input type="text" placeholder="Task Title" />
                        <CiStar className="mark-as-important" size={28} color="#78bafd" />
                    </div>
                    <div className='add-step'>
                        <IoAddOutline size={19} color="#78bafd" />
                        <input type="text" placeholder="Add step" />
                    </div>
                </div>
                <div className='add-to-myday'>
                    <MdOutlineWbSunny size={18} color="#A5A3A1" />
                    <span>Add to My Day</span>
                </div>
                <div className='reminders'>
                    <div className="remind-me">
                        <GoBell size={18} color="#A5A3A1" />
                        <span>Remind Me</span>
                    </div>

                    <div className="add-due-date">
                        <MdCalendarMonth size={18} color="#A5A3A1" />
                        <span>Add Due Date</span>
                    </div>

                    <div className="repeat">
                        <IoIosRepeat size={18} color="#A5A3A1" />
                        <span>Repeat</span>
                    </div>

                </div>
                <div className='color-category'> 
                    <GrPin size={18} color="#A5A3A1" />
                    <span>Color Category</span>
                </div>
                <div className='add-file'>
                    <RiTodoFill size={18} color="#A5A3A1" />
                    <span>Add File</span>
                </div>
                <span></span>
                <div className='add-note'>
                    <textarea className="note" name="note" placeholder="Add note"></textarea>
                    <span className="note-update">Updated a minute ago</span>
                </div>
            </div>
            <div className='task-drawer-lower'>
                <LuPanelRightClose  className="close-drawer" size={18} color="#A5A3A1" />
                <span>Created on Mon, May 4</span>
                <FaRegTrashCan className="remove-task" size={18} color="#A5A3A1" />
            </div>
        </div>
    )
}