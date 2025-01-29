import PropTypes from 'prop-types'

function Button({ children, onClick, colour = 'primary' }) {
    return (
        <button type='button' className={"btn btn-" + colour} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    colour: PropTypes.string
}

export default Button;