import { Link } from "react-router-dom";
import logo from "../assets/icons/CatwikiLogo.svg";
export default function Navbar() {
  return (
    <nav className='mx-[4%] sm:mx-[6%] min-[800px]:mx-[8%] py-8 flex font-poppin space-x-1'>
      <Link to={"/"} className='font-light text-xl'>
        <img src={logo} alt='' />
      </Link>
    </nav>
  );
}
