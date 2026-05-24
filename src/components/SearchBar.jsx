import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import CollectionButton from "./CollectionButton";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    setText("");
  };

  return (
    <div className="flex py-2 px-8">
      <div className="w-full flex  ">
        <form
          onSubmit={submitHandler}
          className="w-[95%] flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-1 shadow-2xl"
        >
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
            type="text"
            placeholder="Search anything..."
            className="flex-1 bg-transparent text-white placeholder:text-gray-400 px-2 py-2 rounded-2xl outline-none text-lg"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1 rounded-2xl transition-all duration-200 active:scale-95 shadow-lg cursor-pointer">
            Search
          </button>
        </form>
      </div>
      <div>
        <CollectionButton />
      </div>
    </div>
  );
};

export default SearchBar;
