# Rapport du Projet d'Application Web et Sécurité #
Semaine 1
---------
Ce projet consistant à mettre en place un site web à l'aide de l'environement d'exécution **Node.js** et des langages **HTML 5**, **JavaScript** et **PHP**, nous avons donc discuté de plusieurs possibilités de projets tels que la conception d'un jeu, d'un forum, d'un site de critiques de film comme SensCritique ou encore d'un site d'achats en ligne comme Amazon. Après avoir considéré le pour et le contre de chaque projet nous avons finalement décidé de nous concentrer sur le développement d'un site web pour jouer aux **Échecs**.

Le **jeu d'échecs**, ou les **échecs**, est un jeu de société opposant deux joueurs de part et d'autre d'un **tablier** appelé « **échiquier** » composé de soixante-quatre cases, 32 claires et 32 sombres nommées les cases blanches et les cases noires. Les joueurs jouent à tour de rôle en déplaçant l'une de leurs seize **pièces** (ou deux pièces en cas de **roque**), claires pour le camp des blancs, sombres pour le camp des noirs. Chaque joueur possède au départ un **roi**, une **dame**, deux **tours**, deux **fous**, deux **cavaliers** et huit **pions**. Le but du jeu est d'infliger à son adversaire un **échec et mat**, une situation dans laquelle le roi d'un joueur est en prise sans qu'il soit possible d'y remédier. (`Source`: [Wikipedia](https://fr.wikipedia.org/wiki/%C3%89checs))

Afin de répartir plus efficacement le travail cette première semaine, nous avons distribué les rôles de cette manière:
<ul>
  <li><strong>Ouail Kais AKROUF</strong> dans le rôle du <strong>Chercheur</strong> pour se documenter sur les différentes règles des échecs et nous présenter de bons exemples de sites web permettant de jouer au jeu et différentes ressources pour aider l'équipe de codage à améliorer le rendu du site web.</li>
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

Nous avons l'intention de rajouter à ce site de jeu d'échecs un dispositif de classement **ELO**, ce classement attribue au joueur, suivant ses performances passées, un nombre de points tel que deux joueurs supposés de même force aient le même nombre de points. Plus le joueur est performant et plus son nombre de points est élevé. Si un joueur réalise une performance supérieure à son niveau estimé, il gagne des points. Réciproquement, il en perd s'il réalise une contre-performance. (`Source`: [Wikipedia](https://fr.wikipedia.org/wiki/Classement_Elo))

De plus, Ouail Kais a aussi trouvé deux sites de jeu d'échecs bien réalisés, [lichess.org](https://lichess.org/) et [Chess.com](https://www.chess.com/fr/play/computer), dont nous pourrons nous inspirer pour le développement du notre.

Le groupe des codeurs s'est chargé d'écrire les fichiers **HTML** et **CSS** pour un premier rendu de l'application. On y retrouve un certains nombre de bouttons qui pourront servir en autres à consulter les règles et le classement et a commencer une nouvelle partie. Ils ont aussi rajouté une page pour que les nouveaux visiteurs puissent s'inscrire et que les anciens puissent se reconnecter. Ce qui nous sera utile à implémenter le dispositif de classement et attribuer un score à chaque visiteur connecté.

Semaine 2
----------

Les rôles de cette semaine on été distribué ainsi:
<ul>
  <li><strong>Théo BRUANT </strong> dans le rôle du <strong>Chercheur</strong> pour se documenter sur le fonctionnement du système de classement <strong>ELO </strong>.</li>
  <li><strong> Benjamin Estevan </strong> et <strong> Ouail Kais AKROUF </strong> dans les rôles des <strong>Codeurs</strong> pour le développement des déplacements des pièces ainsi que la mise en place du système de l’identification.
    <ul>
<strong> Ps : </strong>  Ouail étant tombé malade, il n’a pas pu contribuer au code donc Benjamin a implémenté la quasi-totalité du code durant ces deux semaines.
    </ul>
 </li>

  <li><strong>Yanis KOLLI </strong> dans le rôle du <strong>Responsable de Groupe</strong> pour la mise en place du plan de travail, la répartition des tâches, l’écriture de ce rapport ainsi que la présentation oral du projet.</li>
</ul>

Durant ces deux semaines, on a implémenté les différents mouvements des pièces avec tous les cas particuliers qui en résultent ainsi qu’un système d’identification des utilisateurs avec la base de donnée qui va avec.
<ul>
 <li><strong>Le déplacement des pièces :</strong>
  <ul>
Toutes les pièces  peuvent menacer et prendre une pièce ou un pion adverse selon leur mode de déplacement habituel, sauf pour ce qui concerne le Pion qui avance verticalement et prend en diagonale. Si une pièce se déplace sur une case occupée par une pièce adverse, cette dernière est capturée et retirée de l'échiquier comme partie intégrante du même coup. Aucune pièce ou pion ne peut se déplacer sur une case occupée par une pièce ou un Pion de la même couleur.
  
   <ul>  
<li> <strong>Le Roi :</strong> Il ne peut pas se mettre volontairement dans une position où il peut être pris, et lorsqu'une pièce menace de prendre le Roi, on dit qu'elle fait « échec» au Roi. Dans ce cas, on doit soit déplacer le Roi si possible, soit bloquer l’ « échec » par une autre pièce ou bien capturer la pièce adverse qui menace le Roi.Si aucun de ces mouvement n’est possible alors le Roi est dit en« Echec et mat »  permettant ainsi à l’adversaire de gagner la partie. Les deux Rois (noir et blanc) ne peuvent jamais se retrouver sur des cases adjacentes il doivent être séparés par au moins une case.

Il existe aussi un mouvement tout à fait particulier au Roi, appelé le « roque », Il s'agit d'un coup simultané du Roi et de la Tour au cours duquel chacune des pièces passe devant l'autre. Dans le cas du Roque du côté-Roi, aussi appelé « petit Roque », le Roi se déplace de deux cases vers la droite, et la Tour du côté Roi de deux cases vers la gauche. Dans le cas du Roque du côté-Dame, aussi appelé « grand Roque », le Roi se déplace de deux cases vers la gauche et la Tour du côté Dame, de trois cases vers la droite.
Ce coup n'est possible qu'une seule fois dans la partie pour chaque camp. 
Le Roque est toutefois impossible si : 
  
   <ul>
<li>Le Roi a déjà joué.</li>
<li>La Tour qui doit roquer a déjà joué.</li>
<li>Le Roi doit « traverser » une case attaquée par une pièce ennemie.</li>
<li>Le Roi est attaqué par une pièce ennemie (c'est-à-dire s'il est en échec).</li>
<li>La case sur laquelle le Roi doit éventuellement se placer après le Roque est attaquée par une pièce ennemie.</li>
  <li>S'il y a une autre pièce dans le champ de manœuvre.</li>
  </ul>
 </li>
</ul>
    
<ul>  
<li><strong>Tour ,fou et dame :</strong> elles ne peuvent pas occuper la case où se trouve une autre pièce ni aller au-delà de cette dernière. </li>
<li><strong>Le Cavalier :</strong> Cette pièce a un déplacement un peu plus singulier. Elle se déplace de deux cases, horizontalement ou verticalement, puis d'une autre case verticalement ou horizontalement, comme dans le diagramme ci-dessous. On dit souvent, pour simplifier, que le Cavalier se déplace en forme de la lettre « L » majuscule. Le Cavalier est aussi la seule pièce du jeu d'échecs capable de sauter par-dessus une autre pièce, propre ou adverse. De part son déplacement, le Cavalier change de couleur de case à chaque fois qu'il joue.</li>
  
<li><strong>Non implementé :</strong>
   <ul>
	 <li>Promotion des pions : Les pions peuvent se promouvoir en une autre pièce (tour, fou, dame ou cavalier) lorsqu’ils atteignent l’autre bout de l’échiquier.        </li>
	<li>Prise en passant :  Si un pion ennemi se trouve placé sur sa cinquième rangée (à partir de son camp), lorsque le Pion avance de deux cases (donc de sa position initiale), dans ce cas le pion peut, si le joueur le désire, prendre le pion comme si celui-ci n'avait avancé que d'une seule case. Ce privilège ne peut être exercé qu'immédiatement après que le Pion aura avancé de deux cases, et ne pourra en aucun cas être différé dans une phase ultérieure de la partie </li>
   </ul>
 </ul>  
</ul> 
   
<li><strong>Système d’identification :</strong>
L’utilisateur peut se connecter ou s’inscrire sur notre site en cliquant sur le bouton « Connexion ». Il sera redirigé, ainsi, vers une page de connexion ou il pourra rentrer son identifiant ainsi qu’un mot de passe. Ces derniers seront stockés dans une base de données sur php avec un système de tokens qui dure 2 jours. Il n’est pas possible d’avoir 2 identifiants similaires.</li>
</ul>
	

