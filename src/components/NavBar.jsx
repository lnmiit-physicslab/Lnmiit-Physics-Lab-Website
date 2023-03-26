import Experiments from "./Experiments";
import Videos from "./Videos";
import Logo from "./Logo";
import Facilities from "./Facilities";
import Faculty from "./Faculty";

function NavBar(){
    return(
        <div>
            <div><Experiments/></div>
            <div><Videos/></div>
            <div><Logo/></div>
            <div><Faculty/></div>
            <div><Facilities/></div>
        </div>
    )
}
export default NavBar;