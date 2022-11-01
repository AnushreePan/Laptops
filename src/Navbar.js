import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to={"./"}>HOME</Link>
        <Link to={"./LaptopS"}>LAPTOPS</Link>
        <Link to={"./AddLaptop"}>ADDLAPTOP</Link>
        <div id="indicator"></div>
      </nav>
    </>
  );
}

export default Navbar;
