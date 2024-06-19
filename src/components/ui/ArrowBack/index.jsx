import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
function ArrowBack() {
  return (
    <>
      <Link to="/">
        <div className="flex items-center bg-gray-200 p-2 justify-start">
          <FaChevronLeft />
          <button>Back to home</button>
        </div>
      </Link>
    </>
  );
}

export default ArrowBack;
