import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./Redux/galleryState";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is made of redux toolkit and redux thunk</p>
      <hr />
      <div className="Gallery">
        {photos &&
          photos.map((pho) => {
            return (
              <img
                key={pho.url}
                src={pho.download_url}
                height={400}
                width={400}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
