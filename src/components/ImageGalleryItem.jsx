export const ImageGalleryItem = ({ items }) => {
  const item = items.map(el => (
    <li className="gallery-item" id={el.id}>
      <img src={el.webformatURL} alt={el.tags} />
    </li>
  ));
  return <>{item}</>;
};
