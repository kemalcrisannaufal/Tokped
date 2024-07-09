import PropTypes from 'prop-types';

const AuthButton = (props) => {
    const {children, type} = props;
    return (
        <button type={type} className='w-full h-16 text-white bg-green-600 rounded-lg text-xl font-bold'>
            {children}
        </button>
    );
}

AuthButton.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string
}


export default AuthButton;