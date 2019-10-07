import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.LdsDefault}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)

export {spinner as Spinner};
export default spinner;
