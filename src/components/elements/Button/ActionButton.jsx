import PropTypes from "prop-types"

const ActionButton = (props) => {
    const {icon, label, classname} = props
    return (
        <a href="">
            <div className={`flex items-center gap-2 px-3 ${classname}`}>
                <img src={icon} alt="" className="w-5 h-5" />
                <p className="text-lg font-bold text-slate-600">{label}</p>
            </div>
        </a>
    );
}

ActionButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classname: PropTypes.string,
}

export default ActionButton