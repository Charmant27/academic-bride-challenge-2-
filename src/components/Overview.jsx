import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Overview = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="w-full">
                <Navbar />
            </div>
        </div>
    )
}

export default Overview