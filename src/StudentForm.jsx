import { useFormik } from "formik";
import * as Yup from "yup";

function StudentForm() {
  var stuForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Yooo Chuskobadla").min(3),
      lastname: Yup.string().required(),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
          "waste password"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="border border-2 border-danger p-2 m-2">
      <h1>StudentForm</h1>
      <form onSubmit={stuForm.handleSubmit}>
        <input type="text" {...stuForm.getFieldProps("firstname")} />
        <b>{stuForm.touched.firstname && stuForm.errors.firstname}</b>
        <br />
        <input type="text" {...stuForm.getFieldProps("lastname")} />
        <b>{stuForm.touched.lastname && stuForm.errors.lastname}</b>
        <br />
        <input type="text" {...stuForm.getFieldProps("password")} />
        <b>{stuForm.touched.password && stuForm.errors.password}</b>
        <br />
        <input type="text" name="age" onChange={stuForm.handleChange} />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default StudentForm;
