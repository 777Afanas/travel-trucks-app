import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  // Статичні назви полів для таблиці з ТЗ
  const detailsMap = {
    form: 'Form',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    tank: 'Tank',
    consumption: 'Consumption',
  };

  return (
    <div className={css.detailsContainer}>
      {/* Заголовок блоку */}
      <h2 className={css.sectionTitle}>Vehicle details</h2>
      
      {/* Контейнер для плашок — чиста статична розмітка за макетом */}
      <div className={css.tagsContainer}>
        <span className={css.tag}>Automatic</span>
        <span className={css.tag}>AC</span>
        <span className={css.tag}>Petrol</span>
        <span className={css.tag}>Kitchen</span>
        <span className={css.tag}>Radio</span>
        <span className={css.tag}>Alcove</span>
      </div>

      {/* Лінія розмежування */}
      <hr className={css.divider} />

      {/* Таблиця характеристик (динамічна для ТЗ) */}
      <table className={css.specsTable}>
        <tbody>
          {Object.entries(detailsMap).map(([key, label]) => {
            if (!camper[key]) return null;
            return (
              <tr key={key} className={css.tableRow}>
                <td className={css.specLabel}>{label}</td>
                <td className={css.specValue}>
                  {key === 'form' 
                    ? camper[key].charAt(0).toUpperCase() + camper[key].slice(1).toLowerCase() 
                    : camper[key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDetails;


