import { Formik,Form,Field,ErrorMessage } from "formik"
import * as yup from "yup";

export function FormikComponent() {

    return(
        <div className="container-fluid">
            <h2>Formik_Components</h2>
            <Formik 
                initialValues={{
                    "UserName":"",
                    "Age":0,
                    "City":"",
                    "Mobile":""
                }}
                onSubmit={
                    (values)=>{
                        alert(JSON.stringify(values));
                    }
                }
                validationSchema={
                    yup.object({
                        "UserName":yup.string().required("UserName Required")
                                        .min(4,'Name too short')
                                        .max(14,"Name too Long"),
                        "Age":yup.number().required("Age Required"),
                        "Mobile":yup.string().required().matches(/\+91\d{10}$/,"Invalid Mobile")
                    })
                }
            >
                {
                    props=>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                            <dt>Age</dt>
                            <dd><Field type="text" name="Age" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select">
                                    <option>Choose City</option>
                                    <option>Hyd</option>
                                    <option>Delhi</option>

                                </Field>
                            </dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                        </dl>
                        <button disabled={!props.isValid}>Login</button>
                        <button disabled={!props.dirty}>Save</button>
                    </Form>
                }
            </Formik>

        </div>
    )
}