import PropTypes from "prop-types";
import Label from "../Input/TopUp/Label";

const DropDown = (props) => {
  const { name, option, value, label, classname } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className={`w-full border rounded-md ${classname}`}>
        <select name={name} id={name} className="w-full p-2" defaultValue={""}>
          {option.map((item, index) => (
            <option key={index} value={value[index]}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  classname: PropTypes.string,
  option: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
};

export default DropDown;
