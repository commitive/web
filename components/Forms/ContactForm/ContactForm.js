import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { lead } from '../../../pages/api/getForm';


const ContactForm = ({ setShowModal }) => {

    const sizeOptions = [
        { key: 'sm', value: 'pequeña', text: 'Menos de 5 empleados'},
        { key: 'm', value: 'mediana', text: 'De 5 de 10 empleados'},
        { key: 'l', value: 'intermedia', text: 'De 11 a 50 empleados'},
        { key: 'xl', value: 'grande', text: 'Más de 50 empleados'},
    ];

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            company_name: '',
            name: '',
            last_name: '',
            email: '',
            phone: '',
            number_employees: '',
        },
        validationSchema: yup.object({
            company_name: yup.string().required('Por favor, indique el nombre de su empresa.'),
            name: yup.string().required('Por favor, indique un nombre para dirigirnos a usted.'),
            last_name: yup.string(),
            email: yup.string().email().required('Por favor, indique un email donde poder contactar.'),
            phone: yup.number(),
            number_employees: yup.string().required('Por favor, indique el número de empleados de su empresa'),
        }),
        onSubmit: async(formData) => {

            try {
                const { company_name, name, last_name, email, phone, number_employees } = formData;

                const res = lead({
                    company_name: company_name,
                    name: name,
                    last_name: last_name,
                    email: email,
                    phone: phone,
                    number_employees: number_employees,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                setLoading(true);

                await res;

                setLoading(false);

                setShowModal(false);

            } catch (error) {
                
                console.log('error del onSubmit =>', error.message);
            }
        }
    });

    const handleSelect = (e, data) => {
        if(data && data.name) {
            setFieldValue(data.name, data.value)
        }
    }

    const { handleChange, handleSubmit, values, errors, setFieldValue } = formik;


    return (
        <div className='contact-form'>

            <h2>Contacta con nosotros</h2>
            <Form className='contact-form-fields' onSubmit={ handleSubmit }>
                <Form.Input 
                    label='Nombre de la empresa'
                    type='text'
                    placeholder='Introduce el nombre de tu empresa'
                    name='company_name'
                    value={ values.company_name }
                    onChange={ handleChange }
                    error={ errors.company_name }
                />
                <Form.Input 
                    label='Nombre'
                    type='text'
                    placeholder='Introduce tu nombre'
                    name='name'
                    value={ values.name }
                    onChange={ handleChange }
                    error={ errors.name }
                />
                <Form.Input 
                    label='Apellidos'
                    type='text'
                    placeholder='Introduce tu apellidos'
                    name='last_name'
                    value={ values.last_name }
                    onChange={ handleChange }
                    error={ errors.last_name }
                />
                <Form.Input 
                    label='Correo electrónico'
                    type='email'
                    placeholder='Introduce tu correo electrónico'
                    name='email'
                    value={ values.email }
                    onChange={ handleChange }
                    error={ errors.email }
                />
                <Form.Input 
                    label='Teléfono'
                    type='phone'
                    placeholder='Introduce un teléfono de contacto'
                    name='phone'
                    value={ values.phone }
                    onChange={ handleChange }
                    error={ errors.phone }
                />
                <Form.Select 
                    label='¿Qué tamaño tiene tu empresa?'
                    name='number_employees'
                    id='select_number_employees'
                    value={ values.number_employees }
                    onChange={ handleSelect }
                    options={ sizeOptions }
                    placeholder='Selecciona el número de empleados de tu empresa'
                />
                <Button className='btn-primary' type='submit' loading={ loading }>Enviar</Button>
            </Form>
        </div>
    )
}

export default ContactForm;