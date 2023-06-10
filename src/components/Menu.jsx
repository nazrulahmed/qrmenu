import { useState } from "react";

export function Menu() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MenuTab activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="col-md-9">
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
              <MenuTabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function MenuTab({ activeTab, onTabChange }) {
    function handleTabChange(tabId) {
     onTabChange(tabId);
   };
 
   return (
     <>
       <ul className="nav-pills flex justify-content-center mb-5 border side-nav offset-md-0">
         <li className="nav-item">
           <a
             className={`d-flex align-items-center text-start mx-3 ms-0 ${
               activeTab === 1 ? "active" : ""
             }`}
             onClick={() => handleTabChange(1)}
           >
             <i className="fa fa-coffee fa-2x text-primary"></i>
             <div className="ps-3">
               <small className="text-body">Popular</small>
               <h6 className="mt-n1 mb-0">Breakfast</h6>
               <div className="mb-2"></div>
             </div>
           
           </a>
         </li>
         <li className="nav-item">
           <a
             className={`d-flex align-items-center text-start mx-3 ms-0  ${
               activeTab === 2 ? "active" : ""
             }`}
             onClick={() => handleTabChange(2)}
           >
             <i className="fa fa-hamburger fa-2x text-primary"></i>
             <div className="ps-3">
               <small className="text-body">Special</small>
               <h6 className="mt-n1 mb-0">Launch</h6>
               <div className="mb-2"></div>

             </div>
           </a>
         </li>
         <li className="nav-item">
           <a
             className={`d-flex align-items-center text-start mx-3 ms-0  ${
               activeTab === 3 ? "active" : ""
             }`}
             onClick={() => handleTabChange(3)}
           >
             <i className="fa fa-utensils fa-2x text-primary"></i>
             <div className="ps-3">
               <small className="text-body">Lovely</small>
               <h6 className="mt-n1 mb-0">Dinner</h6>
               <div className="mb-2"></div>

             </div>
           </a>
         </li>
       </ul>
     </>
   );
 }
 
  
  

import { MenuItem } from "./MenuItem";

export function MenuTabContent({ activeTab }) {
  return (
    <>
      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}>
          <div className="row g-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}>
          <div className="row g-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 3 ? "show active" : ""}`}>
          <div className="row g-4">
            <MenuItem />
          </div>
        </div>
      </div>
    </>
  );
}
