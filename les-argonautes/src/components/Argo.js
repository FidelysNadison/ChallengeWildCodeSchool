import React from "react";
import { dataArgo } from "../data";


export default function dataArgo(){
  return (
      <section>
          <span> {dataArgo} </span>
      </section>
  )
}

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
