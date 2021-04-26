<template>
  <div class="construction">
    <h1>Mode d'emploi</h1>
    <ul>
      <li>
        <h4>Liste par catégorie</h4>
        <p>
          Ce type de liste permet de choisir les produit en fonction des
          catégories
        </p>
      </li>
      <li>
        <h4>Liste libre</h4>
        <p>
          Ecris ta liste de maniere libre en saisissant le produit et la
          quantité, la liste se créé au fur et à mesure
        </p>
      </li>
      <li>
        <h4>Liste rapide</h4>
        <p>
          Ce type de liste permet de choisir les produits habituels, en cochant
          directement ceux que tu veux.<br />
          Celle-ci est customisable, tu peux ajouter ou retirer des articles de
          ta liste prédéfini.<br />
          Une fois établie, tu nauras plus qu'à cocher ce que tu veux.
        </p>
      </li>
      <li>
        <h4>Paramétrages</h4>
        <p>
          Dans les paramétrages, il est possible de créer ta propre liste
          rapide, en choisissant les produits que tu as l'habitude de
          prendre.<br />
          A la première utilisation de la liste rapide, tu arriveras directement
          sur le paramétrage.
        </p>
      </li>
      <li>
        <h4>Voir la liste par catégorie ou libre</h4>
        <p>
          Possibilité de voir la liste créée à partir des catégories et/ou de la
          liste libre, de la modifier ou de supprimer des produits
        </p>
      </li>
      <li>
        <h4>Imprimer</h4>
        <p>
          Cette option créé la liste sous format PDF, ce qui permet de la
          télécharger ou de l 'imprimer
        </p>
      </li>
      <li>
        <h4>Suppression des listes</h4>
        <p>
          Un bouton pour la grosse liste et un pour la liste rapide.<br />
          La liste est totalement supprimée. A savoir qu'il n'est pas necéssaire
          de supprimer une liste,<br />
          on peut la reprendre et modifier les articles
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style>
.construction {
  margin: 0 auto;
  margin-left: 5spx;
  width: 395px;
}
li {
  list-style: none;
}
</style>
