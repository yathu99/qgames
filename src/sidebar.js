import { BsPlus, BsFillLightningFill,BsGearFill} from 'react-icons/bs'
import { FaFire, FaPoo} from 'react-icons/fa'

const SideBar =() =>{
return (
<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
bg-primary text-secondary dark:bg-gray-900 dark:text-white
">
<SideBarIcon icon={<BsPlus size="28"/>} text={"Add a User"} />
<SideBarIcon icon={<BsFillLightningFill size="32"/>} text={"Flash the UI"} />
<SideBarIcon icon={<BsGearFill size="20"/>} text={"Settings"} />
<SideBarIcon icon={<FaFire size="20"/>} text={"Vote for Fire"} />
<SideBarIcon icon={<FaPoo size="24"/>} text={"Vote for Shit"} />
</div>
);
};

const SideBarIcon = ({icon , text="tooltip"}) =>{
return (
<div className='sidebar-icon group'>
{icon}
<span className="sidebar-tooltip group-hover:scale-105">
{text}
</span>

</div>

);
};

export default SideBar;