# Rapport du Projet d'Application Web et Sécurité #
Semaine 1
---------
Ce projet consistant à mettre en place un site web à l'aide de l'environement d'exécution **Node.js** et des langages **HTML 5**, **JavaScript** et **PHP**, nous avons donc discuter de plusieurs possibilités de projets tels que la conception d'un jeu, d'un forum, d'un site de critiques de film comme SensCritique ou encore d'un site d'achats en ligne comme Amazon. Après avoir considérer le pour et le contre de chaque projet nous avons finalement décider de nous concentrer sur le développement d'un site web pour jouer aux **Échecs**.

Le **jeu d'échecs**, ou les **échecs**, est un jeu de société opposant deux joueurs de part et d'autre d'un **tablier** appelé « **échiquier** » composé de soixante-quatre cases, 32 claires et 32 sombres nommées les cases blanches et les cases noires. Les joueurs jouent à tour de rôle en déplaçant l'une de leurs seize **pièces** (ou deux pièces en cas de **roque**), claires pour le camp des blancs, sombres pour le camp des noirs. Chaque joueur possède au départ un **roi**, une **dame**, deux **tours**, deux **fous**, deux **cavaliers** et huit **pions**. Le but du jeu est d'infliger à son adversaire un **échec et mat**, une situation dans laquelle le roi d'un joueur est en prise sans qu'il soit possible d'y remédier. (`Source`: [Wikipedia](https://fr.wikipedia.org/wiki/%C3%89checs))

Afin de répartir plus efficacement le travail cette première semaine, nous avons distruibué les rôles de cette manière:
<ul>
  <li><strong>Ouail Kais AKROUF</strong> dans le rôle du <strong>Chercheur</strong> pour se documenter sur les différentes règles des échecs, nous présenter de bons exemples de sites web permettant de jouer au jeu et différentes ressources pour aider l'équipe de codage à améliorer le rendu du site web.</li>
  <li><strong>Théo BRUANT</strong> et <strong>Yanis KOLLI</strong> dans les rôles des <strong>Codeurs</strong> pour commencer le développement du site en y implémentant la grille de jeu et en travaillant le rendu.</li>
  <li><strong>Benjamin Estevan</strong> dans le rôle du <strong>Responsable de Groupe</strong> en charge d'écrire ce rapport, de présenter à l'oral le pitch du projet et de mettre en place un plan de travail pour la semaine.</li>
</ul>

Chaque pièce peut se déplacer au choix du joueur sur l'une des cases adaptées. Hormis le pion, elles capturent une pièce adverse qui se trouve sur leur trajectoire, sans pouvoir aller au-delà. La pièce qui capture prend la place de la pièce capturée, cette dernière étant définitivement retirée de l'échiquier.
<ul>
  <li>Le <strong>fou</strong>, la <strong>tour</strong> et la <strong>dame</strong> sont des pièces à longue portée: elles peuvent se déplacer le long de lignes. Chaque camp possède, deux fous (ils se déplacent toujours sur les cases d'une même couleur, en diagonale), deux tours (elles ne se déplacent qu'à la verticale ou à l'horizontale) et une dame (elle peut se déplacer comme un fou et comme une tour).</li>
  <li>Le <strong>roi</strong> se déplace d'une seule case à la fois.</li>
  <li>Le <strong>cavalier</strong> ne peut être intercepté par aucune des pièces autour de lui, il « saute » jusqu'à sa case d'arrivée.</li>
  <li>Le <strong>pion</strong> peut se déplacer d'une case vers le joueur adverse (sans pouvoir y capturer une pièce adverse), et peut capturer une pièce adverse sur une des cases adjacentes en diagonale (sans pouvoir s'y déplacer si elles sont vides). Chacun des pions peut se déplacer de deux cases à la fois lors de son tout premier déplacement.</li>
</ul>

Ainsi l'implémentation des mouvements des différentes pièces sur le plateau nécessitera de faire attention à bien respecter les règles concernant les déplacements autorisés de chaque pièce.

Nous avons l'intention de rajouter à ce site de jeu d'échecs un dispositif de classement **ELO**, ce classement attribue au joueur, suivant ses performances passées, un nombre de points tel que deux joueurs supposés de même force aient le même nombre de points. Plus le joueur est performant et plus son nombre de points Elo est élevé. Si un joueur réalise une performance supérieure à son niveau estimé, il gagne des points Elo. Réciproquement, il en perd s'il réalise une contre-performance. (`Source`: [Wikipedia](https://fr.wikipedia.org/wiki/Classement_Elo))

De plus, Ouail Kais a aussi trouvé deux sites de jeu d'échecs bien réalisés, [lichess.org](https://lichess.org/) et [Chess.com](https://www.chess.com/fr/play/computer), dont nous nous pourrons nous inspirer pour le développement du notre

Le groupe des codeurs s'est chargé d'écrire les fichiers **HTML** et **CSS** pour un premier rendu de l'application, ils ont aussi rajouté une page pour que les nouveaux visiteurs puissent s'inscrire et que les anciens puissent se reconnecter. Ce qui nous sera utile à implémenter le dispositif de classement.