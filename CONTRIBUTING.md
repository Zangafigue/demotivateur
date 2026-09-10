# Contribuer à Démotivateur

Merci de vouloir contribuer. Démotivateur traite de comportements, de données personnelles et de confrontation psychologique : une fonctionnalité amusante en apparence peut avoir des conséquences réelles. Les contributions sont donc examinées autant sur leur utilité que sur leur sécurité.

## Règle d'accès

Les contributions externes passent exclusivement par :

1. un fork du dépôt ;
2. une branche créée dans ce fork ;
3. une pull request vers la branche `main` ;
4. une revue et une approbation avant fusion.

Ne demandez pas d'accès direct en écriture pour proposer une contribution. Une pull request ne sera jamais fusionnée automatiquement.

## Avant de commencer

- Consultez le [README](README.md), les [principes de sécurité](README.md#principes-produit-et-garde-fous) et la [documentation produit](README.md#documentation-produit).
- Ouvrez d'abord une issue pour une évolution importante, un changement de ton, une collecte de données, une intégration d'IA ou une modification des garde-fous.
- Vérifiez qu'une issue ou une pull request existante ne traite pas déjà le sujet.
- N'incluez aucune donnée réelle d'utilisateur, conversation privée, information de santé ou information confidentielle.

## Préparer un fork

1. Forkez `Zangafigue/demotivateur` depuis GitHub.
2. Clonez votre fork.
3. Ajoutez le dépôt original comme remote `upstream`.
4. Créez une branche depuis la dernière version de `upstream/main`.

Utilisez un nom descriptif, par exemple :

- `feat/onboarding-accessibility` ;
- `fix/local-storage-reset` ;
- `docs/intervention-boundaries`.

Ne travaillez pas directement sur `main` dans votre fork.

## Contenu attendu d'une pull request

Une pull request doit :

- résoudre un problème précis ;
- expliquer le comportement avant et après le changement ;
- rester assez petite pour être relue sérieusement ;
- mentionner les tests ou vérifications effectués ;
- inclure des captures pour une modification visuelle ;
- documenter les nouvelles données créées ou conservées ;
- préciser les conséquences possibles sur le consentement, le ton, les notifications et la santé mentale ;
- ne contenir aucun secret, jeton, fichier `.env` ou donnée personnelle.

Une pull request trop large pourra être renvoyée pour être découpée.

## Exigences de sécurité produit

Une contribution sera refusée si elle :

- humilie l'utilisateur ou attaque son identité, son corps, sa santé, ses traumatismes, ses finances ou ses relations ;
- encourage l'automutilation, le désespoir ou la dévalorisation personnelle ;
- rend la pause, la réduction du ton ou la suppression des données plus difficiles ;
- augmente les notifications sans justification mesurable ;
- introduit une surveillance cachée ;
- envoie des données hors de l'appareil sans consentement explicite ;
- présente Démotivateur comme un psychologue, un diagnostic ou un traitement.

Le niveau « sans pitié » autorise un ton frontal, pas l'abandon des garde-fous.

## Revue

Chaque pull request vers `main` nécessite :

- la revue de `@Zangafigue` ;
- au moins une approbation ;
- la résolution de toutes les conversations ;
- une nouvelle revue lorsqu'un changement important est ajouté après approbation.

L'approbation ne garantit pas une fusion immédiate. Une proposition peut être correcte techniquement mais prématurée pour le MVP.

## Licence et droits

Aucune licence open source n'est encore choisie. Le dépôt reste « tous droits réservés » par défaut.

En attendant une décision explicite :

- les issues, retours de test et propositions documentaires peuvent être examinés normalement ;
- une contribution de code externe peut être revue, mais sa fusion peut être reportée ;
- l'ouverture d'une pull request ne transfère pas automatiquement les droits de son auteur au projet.

Le choix d'une licence ou d'un mécanisme de contribution adapté doit précéder l'intégration durable de code provenant de tiers.

## Communication

Soyez précis, critique et respectueux. Contester une décision produit est bienvenu ; attaquer une personne ne l'est pas.
