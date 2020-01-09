import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Button = ({ name, onClick, className, disabled, active, ...attrs}) => {

    const classes = classNames(
        'btn',
        className,
        { active },
    )

    return (
        <button
            {...attrs}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    name: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
};

export default Button;