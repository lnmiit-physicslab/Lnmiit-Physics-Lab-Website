import Experiments from "./Experiments";
import Videos from "./Videos";
import Facilities from "./Facilities";
import Faculty from "./Faculty";

function NavBar(){
    function experiments(){
        <Experiments/>
    }
    function videos(){
        <Videos/>
    }
    function faclulty(){
        <Faculty/>
    }
    function facilities(){
        <Facilities/>
        hello
    }
    return(
        <div className="flex justify-around p-4 text-lg font-bold">
            <div><button onClick={experiments} className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">Experiments</button></div>
            <div><button onClick={videos} className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">Videos</button></div>
            <div><button onClick={faclulty} className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">Faculty</button></div>
            <div><button onClick={facilities} className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">Facilities</button></div>
        </div>
    )
}
export default NavBar;