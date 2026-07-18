import CamperCard from '../CamperCard/CamperCard';

const CamperList = ({ campers = [] }) => {
  return (
    <div className="catalog-list-wrapper">
      <div className="camper-list">
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
    </div>
  );
};

export default CamperList;