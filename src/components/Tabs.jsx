import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTabs);

  return (
    <div className="w-full flex  px-10 mb-5">
      <div className="flex gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-xl">
        {tabs.map((elem, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                dispatch(setActiveTabs(elem));
              }}
              className={`${
                activeTab === elem
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-transparent text-gray-300 hover:bg-white/10 hover:text-white"
              } capitalize px-6 py-2 rounded-xl font-medium tracking-wide transition-all duration-200 active:scale-95 cursor-pointer`}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
