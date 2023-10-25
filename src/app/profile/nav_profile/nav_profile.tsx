export interface NavProfile{
    label:string;
    active?:boolean;
}
const NavProfile = ({navItemProfile}:{navItemProfile:NavProfile}) =>{
    const {label,active}=navItemProfile;
    return (
        <span className={`nav-profile ${active ? ' border-t-2 border-white mt-[-2px]':''}`}>
            {label}
        </span>    
    )
}
export default NavProfile;