import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="border-b py-2 px-16 flex justify-between items-center shadow-sm">
            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-x-2"
            >
                <img src="src/assets/car.png" alt="logo" className="w-8 h-8" />
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[14px] text-xdark -mb-2.5">Astarion&apos;s</div>
                    <div className="text-xdark text-[20px]">Garage</div>
                </div>
            </button>
            <div className="bg-xlightergray border rounded-md w-[600px] flex justify-evenly items-center">
                <CiSearch className="text-xgray w-5 h-5 ml-2" />
                <input
                    type="text"
                    placeholder="Search by Manufacturer, Year"
                    className="bg-xlightergray w-[580px] py-0.5 px-2 outline-none rounded-md"
                    onChange={(e) => setSearchQuery(e.target.value)}
                /></div>

            <div className="flex gap-x-4 items-center">
                <button
                    onClick={() => navigate("/listings")}
                    className="text-sm text-xdark lg:text-lg"
                >
                    My Listings
                </button>
                <button
                    onClick={() => navigate("/login")}
                    className="text-sm text-xdark lg:text-lg"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
