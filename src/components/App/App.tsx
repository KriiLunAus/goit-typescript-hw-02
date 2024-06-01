import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotosWithQuery from "../../photos-api";
import SearchBar from "../SearchBar/SearchBar.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorElement from "../ErrorElement/ErrorElement.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader.jsx";

const App = () => {
  const [photos, setPhotos] = useState<Photos[]>([]); // array with data
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(""); // query for input
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imgId, setImgId] = useState<string>("");
  const [newPagesAvaliable, setNewPagesAvaliable] = useState<boolean>(true);

  useEffect(() => {
    if (query !== "") {
      async function fetchPhotos() {
        try {
          setError(false);
          setLoading(true);

          await new Promise((resolve) => setTimeout(resolve, 1000)); // makes timeout for loader

          const data: Data = await fetchPhotosWithQuery(query, currentPage);
          setNewPagesAvaliable(data.total_pages >= currentPage);
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchPhotos();
    }
  }, [query, currentPage]);

  const handleSubmit = (inputValue: InputValue) => {
    // function on submit form
    setQuery(inputValue.input); //set query state
    setCurrentPage(1); //set page to first
    setPhotos([]); // remove all from photos array
  };

  const handleLoadMore = () => {
    // function for loadMoreBtn
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onModal = (imageId: string) => {
    setImgId(imageId);
    openModal();
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading} />
      {error && <ErrorElement />}

      {photos.length > 0 && <ImageGallery onModal={onModal} photos={photos} />}

      {query && newPagesAvaliable && <LoadMoreBtn onClick={handleLoadMore} />}
      {!newPagesAvaliable && (
        <p style={{ color: "white", padding: "50px" }}>
          There are no other photo. Try another request
        </p>
      )}
      <ImageModal
        photos={photos}
        imgId={imgId}
        onClose={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
};

export default App;
