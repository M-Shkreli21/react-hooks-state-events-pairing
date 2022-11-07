import video from "../data/video.js";
import VideoDisplay from './VideoDisplay.js'
import Comments from './Comments.js'

function App() {
  console.log(video.comments);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <VideoDisplay 
      title = {video.title}
      views = {video.views}
      uploaded = {video.createdAt}
      upvotes = {video.upvotes}
      downvotes = {video.downvotes}
      />
      <Comments commentSection= {video.comments}/>
    </div>
  );
}

export default App;
