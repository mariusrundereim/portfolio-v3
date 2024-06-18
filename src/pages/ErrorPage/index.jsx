import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div>
        <h2 className="text-4xl">Error!</h2>
        <p className="text-xl">Lost in space?</p>
        <Link className="/">
          <button className="p-2 bg-gray-300">Return to home</button>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
