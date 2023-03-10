import React from "react";

const Argo = ({ argos, completeArgo }) => {
  return argos.map((argo, index) => (
    <div
      className={argo.isComplete ? "argo-row complete" : "argo-row"}
      key={index}>
        
      <div key={argo.id} onClick={() => completeArgo(argo.id)}>
        {argo.text}
      </div>
    </div>
  ));
};
export default Argo;

