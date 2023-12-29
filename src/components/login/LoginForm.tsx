import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useLogin} from "../../common/hooks/useLogin";

import {useAuthAtom} from "../../common/hooks/useAuthAtom";
import {useAtom} from "jotai";
import {userIdAtom} from "../../context/atom";

interface LoginFormComponent {
    email: string;
    password: string;
}

const validationSchema: Yup.Schema<LoginFormComponent> = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const initialValues = {
    email: "",
    password: ''
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const {setAuth} = useAuthAtom()
    const setUserId = useAtom(userIdAtom)[1]
    const succcessLogin = (token:string,userId:string) => {
        navigate("/home")
        if (setAuth){
            setAuth(token)
            setUserId(userId)
            console.log(userId)
            localStorage.setItem("userId",userId)
        }
    }
    const {mutate:login} = useLogin(succcessLogin)

    return (
        <Formik
            onSubmit={
                (values) => {
                    login({...values})
                }
            }
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            <Form>
                <label htmlFor="email">
                    <ErrorMessage name="email" component="div" className="error"/>
                    Write your email
                    <Field name="email" id="email"/>
                </label>
                <label htmlFor="password">
                    <ErrorMessage name="password" component="div" className="error"/>
                    Write your password
                    <Field name="password" id="password"/>
                </label>
                <p>
                    If you want to Registration click <Link to={"/Registration"}>here</Link>
                </p>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
