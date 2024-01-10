export const ImageGalleryItem = ({ src, alt, onClick, modal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={src}
        alt={alt}
        onClick={onClick}
        href={modal}
      />
    </li>
  );
};
