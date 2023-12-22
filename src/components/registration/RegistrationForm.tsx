import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import "../../styles/registration/RegistrationForm.scss"
import {IRegistration} from "../../common/types/interfaces";
import {useRegistration} from "../../common/hooks/useRegistration";
import {useNavigate} from "react-router-dom";



// interface RegistrationFormComponent {
//     name:string;
//     email:string;
//     password: string,
//     phone: string,
//     street: string,
//     apartment: string,
//     zip: string,
//     city: string,
//     country: string
// }

const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    apartment: "",
    zip: "",
    city: "",
    country: ""
}
const validationSchema: Yup.Schema<IRegistration> = Yup.object({
    name:Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    phone: Yup.string().matches(/^\+[0-9]+$/, 'Invalid phone number').min(10,"Phone must be at least 10 characters").required(),
    street:Yup.string(),
    apartment:Yup.string(),
    zip: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),

});





export const RegistrationForm = () => {
    const navigate = useNavigate()
    const {mutate:registration} =  useRegistration(navigate,"/login")


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {
                registration({...values})
            }}
            validationSchema={validationSchema}
        >
            <Form>
                <h2>Registration</h2>
                <label htmlFor="name">
                    <ErrorMessage name="name" component="div" className="error"/>
                    <Field name="name" id="name"  placeholder="Name"/>
                </label>
                <label htmlFor="email">
                    <ErrorMessage name="email" component="div" className="error"/>
                    <Field name="email" id="email" placeholder="Email"/>
                </label>
                <label htmlFor="password">
                    <ErrorMessage name="password" component="div" className="error"/>
                    <Field name="password" id="password" placeholder="Password"/>
                </label>
                <label htmlFor="phone">
                    <ErrorMessage name="phone" component="div" className="error"/>
                    <Field name="phone" id="phone" placeholder="+Phone"/>
                </label>
                <label htmlFor="street">
                    <ErrorMessage name="street" component="div" className="error" />
                    <Field name="street" id="street" placeholder="Street"/>
                </label>
                <label htmlFor="apartment">
                    <ErrorMessage name="apartment" component="div" className="error"/>
                    <Field  name="apartment" id="apartment" placeholder="Apartment"/>
                </label>
                <label htmlFor="zip">
                    <ErrorMessage name="zip" component="div" className="error"/>
                    <Field name="zip" id="zip" placeholder="Zip"/>
                </label>
                <label htmlFor="city">
                    <ErrorMessage name="city" component="div" className="error"/>
                    <Field name="city" id="city" placeholder="City"/>
                </label>
                <label htmlFor="country">
                    <ErrorMessage name="country" component="div" className="error"/>
                    <Field name="country" id="country" placeholder="Country"/>
                </label>
                <button type="submit">Registration</button>
            </Form>
        </Formik>
    );
};
