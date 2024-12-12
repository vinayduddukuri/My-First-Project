import { useFormik } from "formik";
import * as yup from "yup";

export function YupDemo() {

    const formik=useFormik({
        initialValues:{
            "UserName":"",
            "Age":0,
            "City":"",
            "Mobile":""
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        },
        validationSchema:yup.object({
            "UserName":yup.string()
                            .required("User Name Required")
                           .min(4,"Name too short") 
                           .max(10,"Name too long"),
            "Age":yup.number().required("Age Required"),
            "Mobile":yup.string().required().matches(/\+91\d{10}$/,"Invalid Mobile")
        })
    })

    return(
        <div>
        <form onSubmit={formik.handleSubmit}>
            <h2>User Login Formik-YUP demo</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName"/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" onChange={formik.handleChange}  name="Age"  /></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>City</dt>
                <dd><select name="City" onChange={formik.handleChange} >
                    <option value="-1">Choose City</option>
                    <option value="Hyd">Hyd</option>
                    <option value="Delhi">Delhi</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={formik.handleChange}  name="Mobile"/></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button>Submit</button>
        </form>
    </div>
    )
}