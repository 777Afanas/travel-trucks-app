import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  // Список характеристик для бейджів із ТЗ
  const featuresKeys = ['transmission', 'engine', 'AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];
  
  // Деталі для таблиці з ТЗ
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
      <div className={css.tagsContainer}>
        {featuresKeys.map((key) => {
          if (!camper[key]) return null;
          // Якщо значення булеве — виводимо назву ключа, якщо рядок (напр. transmission: "Automatic") — виводимо його значення
          const label = typeof camper[key] === 'boolean' ? key.toUpperCase() : camper[key];
          return <span key={key} className={css.tag}>{label}</span>;
        })}
      </div>

      <h2 className={css.sectionTitle}>Vehicle details</h2>
      <hr className={css.divider} />

      <table className={css.specsTable}>
        <tbody>
          {Object.entries(detailsMap).map(([key, label]) => {
            if (!camper[key]) return null;
            return (
              <tr key={key} className={css.tableRow}>
                <td className={css.specLabel}>{label}</td>
                <td className={css.specValue}>{camper[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDetails;