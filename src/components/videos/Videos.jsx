import { useGetVideosQuery } from "../../redux/features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
  const { data: videos, isLoading, isError, error } = useGetVideosQuery();

   // decide what to render based on the state of the request

   let content = null;

   if (isLoading) {
     content = <VideoLoader />;
   }

   if (!isLoading && isError){
    content = <Error />;
   }

   if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message= "No Video found!" />
   }

    if (!isLoading && videos?.length > 0) {
     content = videos.map((video) => <Video key={video.id} video={video} />);
    }

  return (
    <>
     {content}
    </>
  );
}
