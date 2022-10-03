import React from "react";

const ServiceList = () => {
  return (
    <div className="service_list_final_box">
      <div className="service_list_final_box_statement">
        We can help you on the following aspects ?
      </div>
      <div className="service_list_result_box">
        <div className="service_tile">
          <div className="service_tile_head">Service 1</div>
          <div className="service_tile_body"></div>
        </div>
        <div className="service_tile">
          <div className="service_tile_head">Service 2</div>
          <div className="service_tile_body"></div>
        </div>
        <div className="service_tile">
          <div className="service_tile_head">Service 3</div>
          <div className="service_tile_body"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
