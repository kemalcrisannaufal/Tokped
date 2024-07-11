import PropTypes from "prop-types";
import { useState } from "react";
import ReadMore from "../../elements/ReadMore/ReadMore";

const BodyProduct = (props) => {
  const {
    isFood = false,
    isHalal = false,
    condition,
    minOrder,
    etalase,
    description,
    importantInformation,
  } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const [showFullText, setFullText] = useState(false);

  const toggleSetFullText = () => {
    setFullText(!showFullText);
  };

  const changeTabIndex = (idx) => {
    setTabIndex(idx);
  };

  return (
    <div className="border-b pb-3">
      <div className="flex border-t border-b">
        <div
          className={`cursor-pointer px-8 py-2 font-bold ${
            tabIndex == 0
              ? "text-green-600 border-b-4 border-green-600"
              : "text-slate-600"
          }`}
          onClick={() => changeTabIndex(0)}
        >
          Detail
        </div>
        <div
          className={`cursor-pointer px-4 py-2 font-bold ${
            tabIndex == 1
              ? "text-green-600 border-b-4 border-green-600"
              : "text-slate-600"
          }`}
          onClick={() => changeTabIndex(1)}
        >
          Info Penting
        </div>
      </div>

      {tabIndex === 0 ? (
        <div className="mt-1">
          <div className="text-md text-slate-500 font-medium">
            {isFood && (
              <TextInformation
                info={"Sertifikasi"}
                value={isHalal ? "Halal" : "Non-Halal"}
              />
            )}

            <TextInformation info={"Kondisi"} value={condition} />
            <TextInformation info={"Min.Pemesanan"} value={minOrder} />
            <TextInformation
              info={"Etalase"}
              value={etalase}
              classname={"text-green-600"}
            />
          </div>

          <div className="mt-1">
            <ReadMore
              text={description}
              showFullText={showFullText}
              onClick={toggleSetFullText}
            ></ReadMore>
          </div>
        </div>
      ) : (
        <div className="mt-1">
          <ReadMore
            text={importantInformation}
            showFullText={showFullText}
            onClick={toggleSetFullText}
          ></ReadMore>
        </div>
      )}
    </div>
  );
};

BodyProduct.propTypes = {
  isFood: PropTypes.bool,
  isHalal: PropTypes.bool,
  condition: PropTypes.string.isRequired,
  minOrder: PropTypes.number.isRequired,
  etalase: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  importantInformation: PropTypes.string.isRequired,
};

const TextInformation = (props) => {
  const { info, value, classname } = props;
  return (
    <h5>
      {info} : <span className={`text-black ${classname}`}>{value}</span>
    </h5>
  );
};

TextInformation.propTypes = {
  info: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default BodyProduct;
