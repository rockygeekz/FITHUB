import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="Navbar bg-stone-400   h-20 flex items-center  ">
      <Link To="/">
        <h1 className="text-4xl ml-48 font-serif font-extrabold">
          FIT<span className="text-yellow-300 text-[30px]">HUB</span>
        </h1>
      </Link>
    </div>
  );
};

export default Navabar;
