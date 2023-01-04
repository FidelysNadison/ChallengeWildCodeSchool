import React, { useState } from 'react';
import Createargonautes from './Createargonautes';
import Argo from './Argo';
import { dure } from "../data";

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
    <main>
      <h2>Ajouter un(e) Argonaute</h2>
      <Createargonautes onSubmit={addArgo} />
      <div>
      <h2>Membres de l'équipage</h2>
        <span class='dure'>{ dure }</span>
        <Argo argos={argos} completeTodo={completeArgo}/>
          
      </div>
    </main>
  );
}

export default Liste;