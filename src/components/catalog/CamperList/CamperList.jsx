import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';

const CamperList = ({ campers = [] }) => {
  return (
    <div className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;