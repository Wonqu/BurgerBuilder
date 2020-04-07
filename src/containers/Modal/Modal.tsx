import React from 'react';

import classes from './Modal.module.css';
import { Backdrop } from '../../components/Backdrop/Backdrop';

type TModal = {
    show: boolean
};

export const Modal = ({show}: TModal) => (
    <React.Fragment>
        <Backdrop show={show}/>
        <div
            className={classes.Modal}
            style={{
                transform: show ? 'translateY(0)': 'translateY(-10)',
                opacity: show ? '1': '0'
            }}
            >
            
        </div>
    </React.Fragment>
);