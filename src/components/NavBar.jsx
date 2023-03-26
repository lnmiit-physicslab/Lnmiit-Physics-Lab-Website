import Experiments from "./Experiments";
import Videos from "./Videos";
import Logo from "./Logo";
import Facilities from "./Facilities";
import Faculty from "./Faculty";

function NavBar(){
    return(
        <div className="flex gap-5 justify-evenly p-4 text-lg font-bold">
            <div><Experiments/> <button className="hover:animate-pulse hover:scale-110 hover:duration-150">Experiments</button></div>
            <div><Videos/><button className="hover:animate-pulse hover:scale-110 hover:duration-150">Videos</button></div>
            <div><Logo/></div>
            <div><Faculty/><button className="hover:animate-pulse hover:scale-110 hover:duration-150">Faculty</button></div>
            <div><Facilities/><button className="hover:animate-pulse hover:scale-110 hover:duration-150">Facilities</button></div>
        </div>
    )
}
export default NavBar;