import { useState } from "react";
import NavBarSearchBox from "./NavBarSearchBox";
import SvgIcon from "./SvgIcon";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="sticky top-0 bg-gray-primary border-b-2 border-gray-secondary flex flex-row z-10 h-[6vh]">
            <SvgIcon
                name="menu"
                onClick={() => {
                    setShowMenu(!showMenu);
                    console.log("Clicked Menu!");
                }}
                path="M4 6H20M4 12H20M4 18H20"
            />

            {/* Menu that appears */}
            <div
                className={`absolute top-[6vh] left-0 bg-gray-primary h-[94vh] w-[16vw] ${
                    showMenu ? "left-0" : "left-[-16vw]"
                } duration-100 grid grid-cols-5 border-r-2 border-gray-secondary`}
            >
                {/* div for putting menu options in*/}
                <div className="col-span-4 bg-white"></div>
                {/* Close Icon */}
                <SvgIcon
                    name="close"
                    onClick={() => setShowMenu(false)}
                    path="M5 12H19M5 12L11 6M5 12L11 18"
                />
            </div>

            <NavBarSearchBox />
            <SvgIcon
                name="create"
                onClick={() => console.log("Created")}
                path="M4 12H20M12 4V20"
            />
            <SvgIcon
                name="chat"
                onClick={() => console.log("Chatted")}
                path="M9 12H15M12 9V15M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
            />
            <SvgIcon
                name="profile"
                onClick={() => console.log("Profiled")}
                path="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            />
        </div>
    );
}
