import PropTypes from "prop-types";

const ReadMore = (props) => {
  const { text, showFullText, onClick } = props;
  return (
    <div>
      {showFullText ? (
        <div>
          <p className="text-justify tracking-tight whitespace-pre-line">{text}</p>
          <div className="cursor-pointer" onClick={onClick}>
            {text.length > 250 && (
              <p className="font-bold text-sm text-green-600">
                Lihat Lebih Sedikit
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-justify tracking-tight whitespace-pre-line">
            {text.slice(0, 250)} ...
          </p>
          <div className="cursor-pointer" onClick={onClick}>
            {text.length > 250 && (
              <p className="font-bold text-sm text-green-600">
                Lihat Selengkapnya
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

ReadMore.propTypes = {
  text: PropTypes.string,
  showFullText: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ReadMore;
