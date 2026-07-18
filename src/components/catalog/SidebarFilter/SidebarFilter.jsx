import { Formik, Form, Field } from 'formik';
import Button from '../../shared/Button/Button';
import css from './SidebarFilter.module.css';

const SidebarFilter = ({ onFilterSubmit, initialFilters }) => {
  const camperForms = ['Alcove', 'Panel Van', 'Integrated', 'Semi-Integrated'];
  const engines = ['Diesel', 'Petrol', 'Hybrid', 'Electric'];
  const transmissions = ['Automatic', 'Manual'];

  const defaultValues = {
    location: '',
    camperForm: '',
    engine: '',
    transmission: '',
  };

  return (
    <Formik
      initialValues={initialFilters || defaultValues}
      // ✅ Безпечний виклик функції
      onSubmit={(values) => onFilterSubmit?.(values)}
    >
      {({ handleReset }) => (
        <Form className={css.sidebar}>
          {/* 1. Секція локації */}
          <div className={css.locationSection}>
            <label className={css.label}>Location</label>
            <div className={css.inputWrapper}>
              <Field 
                name="location" 
                type="text" 
                placeholder="Ukraine, Kyiv" 
                className={css.input}
              />
            </div>
          </div>

          {/* 2. Секція фільтрів */}
          <div className={css.filtersSection}>
            <span className={css.filtersTitle}>Filters</span>

            {/* Група: Camper form */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Camper form</h4>
              {camperForms.map((form) => (
                <label key={form} className={css.optionItem}>
                  <Field type="radio" name="camperForm" value={form} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {form}
                </label>
              ))}
            </div>

            {/* Група: Engine */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Engine</h4>
              {engines.map((engine) => (
                <label key={engine} className={css.optionItem}>
                  <Field type="radio" name="engine" value={engine} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {engine}
                </label>
              ))}
            </div>

            {/* Група: Transmission */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Transmission</h4>
              {transmissions.map((trans) => (
                <label key={trans} className={css.optionItem}>
                  <Field type="radio" name="transmission" value={trans} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {trans}
                </label>
              ))}
            </div>
          </div>

          {/* 3. Кнопки дій */}
          <div className={css.actions}>
            <Button variant="primary" type="submit">Search</Button>
            <Button variant="secondary" type="button" onClick={handleReset}>
              ✕ Clear filters
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SidebarFilter;

