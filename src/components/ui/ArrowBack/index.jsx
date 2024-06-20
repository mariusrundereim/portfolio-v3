import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
function ArrowBack() {
  return (
    <>
      <Link to="/">
        <div className="flex items-center justify-start w-fit hover:text-gray-500">
          <FaChevronLeft />
          <button className="text-xl ml-3 ">Back to home</button>
        </div>
      </Link>
    </>
  );
}

export default ArrowBack;
