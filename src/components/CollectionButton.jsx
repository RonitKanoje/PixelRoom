import { Link } from "react-router-dom";

const CollectionButton = () => {
  return (
    <div className="flex justify-center ">
      <Link to="/collection">
        <button className="px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ">
          Your Collections
        </button>
      </Link>
    </div>
  );
};

export default CollectionButton;
