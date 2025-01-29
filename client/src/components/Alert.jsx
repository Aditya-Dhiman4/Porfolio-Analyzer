import PropTypes from 'prop-types'

const Alert = ({ children, onClose }) => {
    return (
      <div className="alert alert-primary alert-warning alert-dismissible fade show">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    );
}

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Alert