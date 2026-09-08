# Démotivateur

> L'application qui ne croit pas en toi — jusqu'à ce que tu lui donnes tort.

Démotivateur est un concept d'application mobile de développement personnel à contre-courant. Là où les coachs et les applications classiques distribuent des encouragements génériques, Démotivateur utilise la provocation, l'ironie et le doute comme déclencheurs d'action.

L'application ne promet pas que « tu peux tout faire ». Elle observe ce que tu annonces, ce que tu accomplis réellement et te confronte à l'écart entre les deux. Son objectif caché reste positif : pousser l'utilisateur à progresser, précisément parce qu'il veut prouver à l'application qu'elle a tort.

## Le constat

Les phrases inspirantes ne fonctionnent pas sur tout le monde. À force d'être répétées, elles deviennent prévisibles, impersonnelles et faciles à ignorer. Certaines personnes réagissent mieux à un défi, à une contradiction ou à une remarque qui pique juste assez pour provoquer un mouvement.

Démotivateur transforme cette réaction en boucle produit :

1. L'utilisateur choisit un objectif et le niveau de provocation qu'il accepte.
2. L'application formule un doute concret à partir de ses engagements.
3. L'utilisateur agit pour lui donner tort.
4. Une preuve simple valide l'action.
5. Le ton, les horaires et la difficulté s'adaptent aux réactions observées.

## Expérience imaginée

### Des interventions qui tombent juste

- Notifications contextuelles au cours de la journée.
- Rappels fondés sur les promesses non tenues, jamais sur des insultes aléatoires.
- Intensité réglable : **taquin**, **piquant** ou **sans pitié**.
- Fréquence, plages horaires et sujets sensibles entièrement contrôlés par l'utilisateur.
- Mode nuit disponible uniquement avec un consentement explicite et révocable.

Exemples de ton :

> « Tu avais dit 20 minutes. Pour l'instant, ton canapé mène 1–0. »

> « On peut repousser à demain. C'est visiblement ton projet le plus régulier. »

> « Prouve-moi que cette notification n'est pas encore la seule chose que tu as ouverte aujourd'hui. »

### Un réveil qui se mérite

Au réveil, l'utilisateur peut choisir une épreuve avant de désactiver l'alarme :

- énigme courte ;
- calcul mental adaptatif ;
- mini-défi de logique ;
- question liée à un objectif du jour ;
- séquence de mémoire ou exercice d'attention.

La difficulté progresse avec l'utilisateur. Une issue de secours reste toujours accessible pour la sécurité et les situations urgentes.

### Une personnalité qui évolue

Le Démotivateur apprend ce qui déclenche réellement une action : type de message, moment, intensité et format de défi. Il ne cherche pas à maximiser les notifications, mais le taux de passage à l'action avec le minimum d'interruptions.

## MVP

La première version doit tester une hypothèse simple : **une provocation personnalisée et consentie déclenche-t-elle davantage d'actions qu'un rappel classique ?**

Fonctionnalités prévues :

- onboarding avec objectifs, limites, sujets interdits et niveau de ton ;
- création de trois habitudes ou objectifs maximum ;
- notifications locales programmées ;
- bibliothèque de messages classés par contexte et intensité ;
- alarme avec énigmes simples ;
- validation manuelle d'une action ;
- historique des engagements tenus et abandonnés ;
- bouton « Trop loin » pour signaler un message et ajuster immédiatement le ton ;
- tableau de bord minimal : actions réalisées, délais et séries ;
- pause instantanée de toutes les interventions.

## Principes produit et garde-fous

Le concept joue avec la confrontation, pas avec l'humiliation. Une application intrusive doit laisser davantage de contrôle à l'utilisateur, pas moins.

- **Consentement granulaire** : chaque canal, horaire et niveau d'intensité est accepté séparément.
- **Contrôle immédiat** : pause, réduction du ton et désactivation sont accessibles en un geste.
- **Pas de vulnérabilités exploitées** : aucune attaque sur le physique, l'identité, les traumatismes, la santé, la situation financière ou les relations.
- **Santé mentale** : aucun contenu encourageant l'automutilation, le désespoir ou la dévalorisation personnelle. Les signaux de détresse neutralisent le ton provocateur et orientent vers une aide adaptée.
- **Sommeil protégé par défaut** : aucune notification nocturne sans activation explicite ; limites strictes de fréquence.
- **Données minimales** : traitement local privilégié, export et suppression simples, aucune revente de données comportementales.
- **Pas de punition addictive** : ni dette artificielle, ni culpabilisation infinie, ni série utilisée comme menace.
- **Mesure saine** : optimiser l'action utile et le bien-être déclaré, pas le temps passé dans l'application.

## Ce que le produit n'est pas

- un harceleur numérique sans bouton d'arrêt ;
- un diagnostic ou un traitement médical ;
- un générateur d'insultes ;
- un système qui remplace le repos par la culpabilité ;
- une excuse pour collecter des données intimes sans nécessité.

## Pistes techniques

Le choix de la stack reste ouvert. Une base plausible pour un prototype :

- **mobile** : Flutter ou React Native pour cibler Android et iOS ;
- **stockage local** : SQLite avec chiffrement des préférences sensibles ;
- **notifications et alarmes** : API natives, avec attention particulière aux restrictions d'arrière-plan ;
- **personnalisation** : règles locales dans le MVP, puis modèle adaptatif explicable si les données le justifient ;
- **backend optionnel** : synchronisation chiffrée, télémétrie volontaire et catalogue de contenus versionné.

Les alarmes persistantes et notifications intrusives sont fortement contraintes par Android et iOS. Un prototype technique devra valider ce point avant d'investir dans une architecture complète.

## Indicateurs à suivre

- pourcentage de rappels suivis d'une action ;
- temps médian entre rappel et action ;
- taux de notifications ignorées ou coupées ;
- utilisation du bouton « Trop loin » ;
- rétention à 7 et 30 jours ;
- évolution du sentiment d'efficacité déclaré par l'utilisateur ;
- nombre d'interruptions nécessaires par action accomplie.

Le succès n'est pas « envoyer plus ». Le succès est de devenir progressivement moins nécessaire.

## Roadmap indicative

### Phase 0 — Validation

- entretiens avec des utilisateurs insensibles aux méthodes de motivation classiques ;
- tests de tonalité sur des prototypes statiques ;
- définition des limites éditoriales et revue avec un spécialiste de la santé mentale.

### Phase 1 — Prototype

- objectifs, rappels locaux, trois niveaux de ton ;
- énigmes de réveil ;
- historique et retour « Trop loin » ;
- instrumentation locale des résultats.

### Phase 2 — Bêta

- adaptation progressive du ton et des horaires ;
- création de défis personnalisés ;
- expérimentation comparant rappel classique et provocation ;
- tests d'accessibilité, de consommation batterie et de fiabilité des alarmes.

### Phase 3 — Produit

- synchronisation optionnelle ;
- packs de personnalités et de défis ;
- mode partenaire avec consentement mutuel ;
- localisation et modération éditoriale par langue et culture.

## Questions ouvertes

- Jusqu'où peut aller le ton sans perdre la confiance de l'utilisateur ?
- Quelle preuve d'action reste assez fiable sans devenir pénible ?
- Comment distinguer une provocation efficace d'une notification simplement agaçante ?
- Quelle part de la personnalisation peut rester entièrement sur l'appareil ?
- Le modèle économique doit-il être un achat unique, un abonnement ou une version gratuite limitée ?

## Statut

Le projet est au stade de concept. Ce dépôt sert de mémoire produit et accueillera les premiers prototypes, décisions techniques et retours utilisateurs.

## Contribution

Les idées sont bienvenues, en particulier sur l'expérience mobile, la psychologie comportementale, l'accessibilité, les contraintes de notifications et la sécurité du ton. Avant toute contribution de code, une charte éditoriale et un guide de contribution devront être ajoutés.

## Licence

Aucune licence open source n'a encore été choisie. Tous droits réservés par défaut jusqu'à décision contraire.
