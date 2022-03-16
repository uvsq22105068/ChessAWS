# Rapport du Projet d'Application Web et Sécurité #
Semaine 1
---------
Ce projet consistant à mettre en place un site web à l'aide de l'environement d'exécution **Node.js** et des langages **HTML 5**, **JavaScript** et **PHP**, nous avons donc discuter de plusieurs possibilités de projets tels que la conception d'un jeu, d'un forum, d'un site de critiques de film comme SensCritique ou encore d'un site d'achats en ligne comme Amazon. Après avoir considérer le pour et le contre de chaque projet nous avons finalement décider de nous concentrer sur le développement d'un site web pour jouer aux **Échecs**.

Le **jeu d'échecs**, ou les **échecs**, est un jeu de société opposant deux joueurs de part et d'autre d'un **tablier** appelé « **échiquier** » composé de soixante-quatre cases, 32 claires et 32 sombres nommées les cases blanches et les cases noires. Les joueurs jouent à tour de rôle en déplaçant l'une de leurs seize **pièces** (ou deux pièces en cas de **roque**), claires pour le camp des blancs, sombres pour le camp des noirs. Chaque joueur possède au départ un **roi**, une **dame**, deux **tours**, deux **fous**, deux **cavaliers** et huit **pions**. Le but du jeu est d'infliger à son adversaire un **échec et mat**, une situation dans laquelle le roi d'un joueur est en prise sans qu'il soit possible d'y remédier. (`Source`: [Wikipedia](https://fr.wikipedia.org/wiki/%C3%89checs))

Afin de répartir plus efficacement le travail cette première semaine, nous avons distruibué les rôles de cette manière:
<ul>
  <li><strong>Ouail Kais AKROUF</strong> dans le rôle du <strong>Chercheur</strong> pour se documenter sur les différentes règles des échecs, nous présenter de bons exemples de sites web permettant de jouer au jeu et différentes ressources pour aider l'équipe de codage à améliorer le rendu du site web.</li>
  <li><strong>Théo BRUANT</strong> et <strong>Yanis KOLLI</strong> dans les rôles des <strong>Codeurs</strong> pour commencer le développement du site en y implémentant la grille de jeu et en travaillant le rendu.</li>
  <li><strong>Benjamin Estevan</strong> dans le rôle du <strong>Responsable de Groupe</strong> en charge d'écrire ce rapport, de présenter à l'oral le pitch du projet et de mettre en place un plan de travail pour la semaine.
</ul>

Nous voulons faire un site de jeu d'échecs disposant d'un classement **ELO**, ce classement attribue au joueur, suivant ses performances passées, un nombre de points (« points Elo ») tel que deux joueurs supposés de même force aient le même nombre de points. Plus le joueur est performant et plus son nombre de points Elo est élevé. Si un joueur réalise une performance supérieure à son niveau estimé, il gagne des points Elo. Réciproquement, il en perd s'il réalise une contre-performance