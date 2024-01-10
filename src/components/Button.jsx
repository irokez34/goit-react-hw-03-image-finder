export const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      <span className="button-load__text">Load more</span>
    </button>
  );
};
