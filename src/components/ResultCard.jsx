import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";
import { addToToast } from "../redux/features/toasterSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToToast());
  };
  return (
    <div className="w-80 h-80 rounded-2xl overflow-hidden relative group shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
      {/* Media */}
      {item.type === "photo" ? (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-50 group-hover:scale-110"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-50 group-hover:scale-110"
        />
      )}

      {/* Type Badge */}
      <span className="absolute top-3 left-3 text-[11px] font-medium uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border border-white/25 bg-white/15 text-white/90">
        {item.type === "video" ? "▶ Video" : "Photo"}
      </span>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient from-black/85 via-black/15 to-transparent pointer-events-none" />

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
        <h2 className="text-white text-[15px] font-semibold leading-snug tracking-tight flex-1 min-w-0 line-clamp-2 drop-shadow">
          {item.title}
        </h2>

        <button
          className="shrink-0 bg-white/15 backdrop-blur-md text-white text-[13px] font-medium px-4 py-1.5 rounded-xl border border-white/30 hover:bg-white hover:text-black hover:border-transparent active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
          onClick={() => {
            addToCollection(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
