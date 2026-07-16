// import React, { useState } from 'react';
// import SidebarFilter from '../components/SidebarFilter/SidebarFilter';
import CamperList from "../../components/catalog/CamperList/CamperList";
// import Button from '../components/Button/Button';

const CatalogPage = () => {
  // const [campers, setCampers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <p>CatalogPage</p>
      <CamperList />
    </div>

    // <main className="catalog-container">
    //   {/* Бокова панель з фільтрами */}
    //   <SidebarFilter />

    //   {/* Умовний рендеринг станів безпосередньо на сторінці */}
    //   <div className="catalog-content">
    //     {isLoading && (
    //       <div className="loader-backdrop">
    //         <div className="loader-card">
    //           <div className="spinner"></div>
    //           <h2>Loading tracks...</h2>
    //           <p>Please wait while we fetch the best travel trucks for you</p>
    //         </div>
    //       </div>
    //     )}

    //     {!isLoading && campers.length === 0 && (
    //       <div className="empty-state">
    //         <h2>No campers found</h2>
    //         <p>Try adjusting your search or clearing some filters.</p>
    //         <div className="empty-actions">
    //           <Button variant="secondary">Clear filters</Button>
    //           <Button variant="primary">View all campers</Button>
    //         </div>
    //       </div>
    //     )}

    //     {!isLoading && campers.length > 0 && (
    //       <CamperList campers={campers} />
    //     )}
    //   </div>
    // </main>
  );
};

export default CatalogPage;
