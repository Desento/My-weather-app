import React, { useEffect, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { Formik, Form, Field } from 'formik';
import './Modal.css';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../redux/actions/locationAction';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { isDate } from 'util/types';


type ModalProps = {
    active: boolean;
    setActive: (open: boolean) => void;
}

const Modal = ({ active, setActive }: ModalProps) => {

    const dispatch = useDispatch();

    return (
        <div className={active ? 'modal active' : 'modal'} >
            <div className="modal__content">
                <h1>ENTER YOUR CITY</h1>
                <Formik
                    initialValues={{
                        location: ''
                    }}
                    onSubmit={(values) => {
                        console.log(`Intut ${values.location}`);
                        dispatch(getLocation(values.location));

                    }}
                >
                    <Form>
                        <label htmlFor="location"></label>
                        <Field id="location" name="location" placeholder="Enter your location" />
                        <button type="submit" onClick={() => setActive(false)} >Submit</button>
                    </Form>
                </Formik>
            </div>
        </div >
    );
};

export default Modal;
