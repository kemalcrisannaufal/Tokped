import Label from "./Label";
import Input from "./Input";
import PropTypes from "prop-types"

const TopUpInput = (props) => {
  const { type="text", name, placeholder, classname, children } = props;
  return (
    <div>
      <Label htmlFor={name}>{children}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        classname={classname}
      ></Input>
    </div>
  );
};

TopUpInput.propTypes = {
  type : PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.string,
}

export default TopUpInput;
