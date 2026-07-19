import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./BookForm.module.css";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name.")
    .matches(/^[a-zA-Z\s]+$/, "Please enter your name."), // Тільки латинські літери та пробіли
  email: Yup.string()
    .email("Please enter your email.")
    .required("Please enter your email."),
});

const BookForm = ({ camperId }) => {
  const initialValues = { name: "", email: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted data:", { ...values, camperId });
    toast.success("Booking successful! We will contact you soon.");
    resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form} noValidate>
            {/* Поле Name */}
            <div className={css.inputWrapper}>
              <div className={css.fieldContainer}>
                {errors.name && touched.name && (
                  <span className={css.floatingLabel}>Name*</span>
                )}
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={`${css.input} ${errors.name && touched.name ? css.errorInput : ""}`}
                />
                {errors.name && touched.name && (
                  <span className={css.warningIcon}>!</span>
                )}
              </div>
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorText}
              />
            </div>

            {/* Поле Email */}
            <div className={css.inputWrapper}>
              <div className={css.fieldContainer}>
                {errors.email && touched.email && (
                  <span className={css.floatingLabel}>Email*</span>
                )}
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={`${css.input} ${errors.email && touched.email ? css.errorInput : ""}`}
                />
                {errors.email && touched.email && (
                  <span className={css.warningIcon}>!</span>
                )}
              </div>
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorText}
              />
            </div>

            <button type="submit" className={css.submitBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
