import PropsType from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../../redux/features/relatedVideos/relatedVideosSlice";
import Loading from "../../ui/Loading";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideo(tags, currentVideoId));
  }, [tags, currentVideoId, dispatch]);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">Something went wrong: {error}</div>;
  }

  if (!isLoading && !isError && !relatedVideos?.length) {
    content = <div className="col-span-12">No related video found</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length) {
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
      <div className="grid grid-cols-1 gap-4">{content}</div>
    </div>
  );
};

RelatedVideoList.propTypes = {
  currentVideoId: PropsType.number,
  tags: PropsType.array,
};

export default RelatedVideoList;
