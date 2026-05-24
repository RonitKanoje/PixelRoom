import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, fetchPhotos } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
import Loading from "./Loading";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTabs == "photos") {
            let responses = await fetchPhotos(query);
            data = responses.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTabs == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error));
        }
      };

      getData();
    },
    [query, activeTabs, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <Loading />;

  return (
    <div className="px-20 flex flex-wrap justify-space-between gap-5">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
