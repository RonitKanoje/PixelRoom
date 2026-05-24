import { useDispatch, useSelector } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";

const PagesCollection = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div>
      {collection.length > 0 ? (
        <div className="flex justify-between items-center p-6">
          <h2 className="text-3xl font-bold">Your Collections</h2>

          <button
            onClick={clearAll}
            className="bg-red-600 px-5 py-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Clear All
          </button>
        </div>
      ) : (
        <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="flex justify-start w-full flex-wrap gap-6 p-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PagesCollection;
