import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <div className="gallery-container">
      <ul className="gallery">
        <ImageGalleryItem items={data} />
      </ul>
    </div>
  );
};
