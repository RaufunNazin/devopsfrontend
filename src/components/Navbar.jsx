import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <div className="border-b py-2 px-16 flex justify-between items-center">
            <button onClick={() => navigate("/")} className="flex items-center gap-x-2">
                <img src="src/assets/car.png" alt="logo" className="w-8 h-8" />
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[14px] text-xdark -mb-2.5">Astarion&apos;s</div>
                    <div className="text-xdark text-[20px]">Garage</div>
                </div>
            </button>
            <input type="text" placeholder="Search by Model, Company etc." className="border focus:bg-white bg-xlightergray w-[600px] py-0.5 px-3 outline-none rounded-md" onChange={(e) => setSearchQuery(e.target.value)} />
            <div>
                <button onClick={() => navigate("/login")} className="text-sm text-xdark lg:text-lg">Login</button>
            </div>
        </div>
    )
}

export default Navbar