import React from "react";

export default function Createargonautes() {
  return (
    <main>
      <h2>Ajouter un(e) Argonaute</h2>
      <form class="new-member-form" method="GET">
        <label  for="name">Nom de l&apos;Argonaute </label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Ajouter</button>
      </form>
    </main>
  );
}
