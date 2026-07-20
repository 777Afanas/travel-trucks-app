import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { selectActiveFilters } from '../../../redux/filtersSlice';
import Button from '../../shared/Button/Button';
import css from './SidebarFilter.module.css';

const SidebarFilter = ({ onFilterSubmit, onReset }) => {
  const filters = useSelector(selectActiveFilters);

  const camperForms = [
    { label: 'Alcove', value: 'alcove' },
    { label: 'Panel Van', value: 'panelVan' },
    { label: 'Integrated', value: 'integrated' },
    { label: 'Semi-Integrated', value: 'semiIntegrated' }
  ];
  
  const engines = [
    { label: 'Diesel', value: 'diesel' },
    { label: 'Petrol', value: 'petrol' },
    { label: 'Hybrid', value: 'hybrid' },
    { label: 'Electric', value: 'electric' }
  ];

  const transmissions = [
    { label: 'Automatic', value: 'automatic' },
    { label: 'Manual', value: 'manual' }
  ];

  const equipments = [
    { label: 'AC', name: 'AC' },
    { label: 'Kitchen', name: 'kitchen' },
    { label: 'TV', name: 'TV' },
    { label: 'Bathroom', name: 'bathroom' }
  ];

  const defaultValues = {
    location: '',
    form: '',
    engine: '',
    transmission: '',
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  };

  return (
    <Formik
      initialValues={{ ...defaultValues, ...filters }}
      enableReinitialize={true}
      onSubmit={(values) => onFilterSubmit?.(values)}
    >
      {/* ВАЖЛИВО: функція-рендер відкривається тут для доступу до resetForm */}
      {({ resetForm }) => (
        <Form className={css.sidebar}>
          {/* 1. Локація */}
          <div className={css.locationSection}>
            <label className={css.label}>Location</label>
            <div className={css.inputWrapper}>
              {/* Іконка мапи зліва, підключена через спрайт */}
              {/* <svg className={css.locationIcon} width="20" height="20">                
                <use href="/assets/gemini-svg.svg#icon-location"></use>
              </svg> */}
              
              {/* Компонент Field від Formik керує станом автоматично */}
              <Field 
                name="location" 
                type="text" 
                placeholder="City" 
                className={css.input}
              />
            </div>
          </div>

          {/* 2. Фільтри */}
          <div className={css.filtersSection}>
            <span className={css.filtersTitle}>Filters</span>

            {/* Camper form */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Camper form</h4>
              {camperForms.map((f) => (
                <label key={f.value} className={css.optionItem}>
                  <Field type="radio" name="form" value={f.value} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {f.label}
                </label>
              ))}
            </div>

            {/* Engine */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Engine</h4>
              {engines.map((e) => (
                <label key={e.value} className={css.optionItem}>
                  <Field type="radio" name="engine" value={e.value} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {e.label}
                </label>
              ))}
            </div>

            {/* Transmission */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Transmission</h4>
              {transmissions.map((t) => (
                <label key={t.value} className={css.optionItem}>
                  <Field type="radio" name="transmission" value={t.value} className={css.radio} />
                  <span className={css.customRadio}></span>
                  {t.label}
                </label>
              ))}
            </div>

            {/* Vehicle equipment */}
            <div className={css.filterGroup}>
              <h4 className={css.groupTitle}>Vehicle equipment</h4>
              <div className={css.checkboxGrid}>
                {equipments.map((item) => (
                  <label key={item.name} className={css.optionItem}>
                    <Field type="checkbox" name={item.name} className={css.checkbox} />
                    <span className={css.customCheckbox}></span>
                    {item.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Кнопки дій */}
          <div className={css.actions}>
            <Button variant="primary" type="submit">Search</Button>
            <Button 
              variant="secondary" 
              type="button" 
              onClick={() => {
                resetForm({ values: defaultValues }); // Локальне скидання інпутів
                onReset?.();                          // Глобальне скидання (Redux + URL)
              }}
            >
              ✕ Clear filters
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SidebarFilter;



// import { Formik, Form, Field } from 'formik';
// import { useSelector } from 'react-redux';
// import { selectActiveFilters } from '../../../redux/filtersSlice';
// import Button from '../../shared/Button/Button';
// import css from './SidebarFilter.module.css';

// const SidebarFilter = ({ onFilterSubmit, onReset }) => {
//   const filters = useSelector(selectActiveFilters);

//   const camperForms = [
//     { label: 'Alcove', value: 'alcove' },
//     { label: 'Panel Van', value: 'panelVan' },
//     { label: 'Integrated', value: 'integrated' },
//     { label: 'Semi-Integrated', value: 'semiIntegrated' }
//   ];
  
//   const engines = [
//     { label: 'Diesel', value: 'diesel' },
//     { label: 'Petrol', value: 'petrol' },
//     { label: 'Hybrid', value: 'hybrid' },
//     { label: 'Electric', value: 'electric' }
//   ];

//   const transmissions = [
//     { label: 'Automatic', value: 'automatic' },
//     { label: 'Manual', value: 'manual' }
//   ];

//   const equipments = [
//     { label: 'AC', name: 'AC' },
//     { label: 'Kitchen', name: 'kitchen' },
//     { label: 'TV', name: 'TV' },
//     { label: 'Bathroom', name: 'bathroom' }
//   ];

//   const defaultValues = {
//     location: '',
//     form: '',
//     engine: '',
//     transmission: '',
//     AC: false,
//     kitchen: false,
//     TV: false,
//     bathroom: false,
//   };

//   return (
//     <Formik
//       initialValues={{ ...defaultValues, ...filters }}
//       enableReinitialize={true}
//       onSubmit={(values) => onFilterSubmit?.(values)}
//     >
//       {/* ВАЖЛИВО: функція-рендер відкривається тут для доступу до resetForm */}
//       {({ resetForm }) => (
//         <Form className={css.sidebar}>
//           {/* 1. Локація */}
//           <div className={css.locationSection}>
//             <label className={css.label}>Location</label>
//             <div className={css.inputWrapper}>
//               <Field 
//                 name="location" 
//                 type="text" 
//                 placeholder="City" 
//                 className={css.input}
//               />
//             </div>
//           </div>

//           {/* 2. Фільтри */}
//           <div className={css.filtersSection}>
//             <span className={css.filtersTitle}>Filters</span>

//             {/* Camper form */}
//             <div className={css.filterGroup}>
//               <h4 className={css.groupTitle}>Camper form</h4>
//               {camperForms.map((f) => (
//                 <label key={f.value} className={css.optionItem}>
//                   <Field type="radio" name="form" value={f.value} className={css.radio} />
//                   <span className={css.customRadio}></span>
//                   {f.label}
//                 </label>
//               ))}
//             </div>

//             {/* Engine */}
//             <div className={css.filterGroup}>
//               <h4 className={css.groupTitle}>Engine</h4>
//               {engines.map((e) => (
//                 <label key={e.value} className={css.optionItem}>
//                   <Field type="radio" name="engine" value={e.value} className={css.radio} />
//                   <span className={css.customRadio}></span>
//                   {e.label}
//                 </label>
//               ))}
//             </div>

//             {/* Transmission */}
//             <div className={css.filterGroup}>
//               <h4 className={css.groupTitle}>Transmission</h4>
//               {transmissions.map((t) => (
//                 <label key={t.value} className={css.optionItem}>
//                   <Field type="radio" name="transmission" value={t.value} className={css.radio} />
//                   <span className={css.customRadio}></span>
//                   {t.label}
//                 </label>
//               ))}
//             </div>

//             {/* Vehicle equipment */}
//             <div className={css.filterGroup}>
//               <h4 className={css.groupTitle}>Vehicle equipment</h4>
//               <div className={css.checkboxGrid}>
//                 {equipments.map((item) => (
//                   <label key={item.name} className={css.optionItem}>
//                     <Field type="checkbox" name={item.name} className={css.checkbox} />
//                     <span className={css.customCheckbox}></span>
//                     {item.label}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* 3. Кнопки дій */}
//           <div className={css.actions}>
//             <Button variant="primary" type="submit">Search</Button>
//             <Button 
//               variant="secondary" 
//               type="button" 
//               onClick={() => {
//                 resetForm({ values: defaultValues }); // Локальне скидання інпутів
//                 onReset?.();                          // Глобальне скидання (Redux + URL)
//               }}
//             >
//               ✕ Clear filters
//             </Button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };
// export default SidebarFilter;





