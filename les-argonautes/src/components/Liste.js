import React, { useState } from 'react';
import Createargonautes from './Createargonautes';
import Argo from './Argo';

function Liste() {
  const [argos, setArgos] = useState([]);

  const addArgo = argo => {
    if (!argo.text || /^\s*$/.test(argo.text)) {
      return;
    }

    const newArgos = [argo, ...argos];

    setArgos(newArgos);
    console.log(...argos);
  };

  const completeArgo = id => {
    let updatedArgos = argos.map(argo => {
      if (argo.id === id) {
        argo.isComplete = !argo.isComplete;
      }
      return argo;
    });
    setArgos(updatedArgos);
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <Createargonautes onSubmit={addArgo} />
      <Argo argos={argos} completeTodo={completeArgo}/>
    </>
    
  );
}

export default Liste;