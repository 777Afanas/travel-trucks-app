import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./SearchBox.module.css";

const SearchSchema = Yup.object().shape({
  query: Yup.string().trim().required("Please enter a search term!"),
});

const SearchBox = ({ onHandlerSubmit }) => {
  const searchBoxId = useId();

  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    onHandlerSubmit(values.query.trim());
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SearchSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.searchBar}>
          {/* 3. Додаємо семантичний тег label та зв'язуємо його через htmlFor */}
          <label htmlFor={searchBoxId} className={styles.visuallyHidden}>
            Search movies
          </label>

          <div className={styles.inputWrapper}>
            {/* 4. Передаємо згенерований ID в сам компонент Field */}
            <Field
              id={searchBoxId}
              name="query"
              type="text"
              className={styles.input}
              placeholder="Search movies"
            />

            <ErrorMessage
              name="query"
              component="span"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBox;
