import iCloud from "../../assets/iCloud (1).png"
import { Outlet } from "react-router-dom"

export default function Navber() {
    return (
        <div className="w-[100%] bg-[#fbfbfd]">
            <div className="flex justify-start align-middle h-[7vh]">
                <div>
                    <img src={iCloud} alt="" />
                </div>
                <div></div>
            </div>
            <div className="h-[93vh]">
                <Outlet />
            </div>
        </div>
    )
}
