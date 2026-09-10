# Onboarding MVP

## Objectif

L'onboarding doit obtenir assez de contexte pour produire une première intervention pertinente sans demander à l'utilisateur de raconter toute sa vie. Il commence par des choix simples, explique pourquoi chaque information est demandée et laisse les réponses libres facultatives.

Le profil créé reste une série d'hypothèses modifiables, pas un diagnostic.

## Principes

- **Progressif** : demander d'abord le minimum nécessaire, puis apprendre pendant l'usage.
- **Explicable** : relier chaque question à une décision visible de l'agent.
- **Réversible** : permettre de corriger, supprimer ou ignorer une réponse.
- **Granulaire** : séparer le consentement au ton, aux horaires, aux notifications et aux sujets.
- **Local par défaut** : conserver les préférences sensibles sur l'appareil dans le MVP.
- **Faible effort** : privilégier les choix et rendre le texte libre facultatif.
- **Sans diagnostic** : ne pas employer de vocabulaire clinique ni prétendre mesurer une personnalité.

## Parcours initial

### Écran 1 — Le contrat

Présenter clairement la promesse :

> Démotivateur ne te promet pas que tu peux tout faire. Il observe ce que tu annonces et te confronte à ce que tu fais réellement.

L'utilisateur doit comprendre que :

- la confrontation est consentie ;
- il peut réduire le ton ou mettre l'agent en pause à tout moment ;
- l'application ne remplace pas un professionnel de santé ;
- les sujets sensibles restent exclus par défaut.

**Action :** accepter le principe ou quitter l'onboarding.

### Écran 2 — L'objectif actuel

Question :

> Sur quoi veux-tu arrêter de te raconter des histoires ?

Choix initiaux :

- travail ou études ;
- projet personnel ;
- activité physique ;
- création de contenu ;
- routine quotidienne ;
- autre.

L'utilisateur choisit un seul objectif au premier lancement. Deux objectifs supplémentaires pourront être ajoutés plus tard.

**Champ facultatif :** nommer précisément l'objectif.

### Écran 3 — La situation réelle

Question :

> Où en es-tu aujourd'hui ?

Choix :

- je prépare encore ;
- j'ai commencé ;
- j'avance de façon irrégulière ;
- je reporte le passage à l'action ;
- j'ai arrêté et je veux reprendre.

Cette question décrit un état observable. Elle ne classe pas la personne.

### Écran 4 — Ce qui échoue déjà

Question :

> Pourquoi les rappels classiques ne fonctionnent-ils pas sur toi ?

Plusieurs réponses possibles :

- ils sont trop génériques ;
- je les oublie aussitôt ;
- ils arrivent au mauvais moment ;
- ils ne parlent pas de mon vrai blocage ;
- je sais déjà quoi faire, mais je ne le fais pas ;
- ils me mettent une pression inutile ;
- autre.

**Champ facultatif :** donner un exemple.

### Écran 5 — Le type de confrontation

Question :

> Qu'est-ce qui risque le plus de te faire agir ?

Choix :

- me rappeler exactement ma promesse ;
- montrer l'écart entre mon plan et mes actes ;
- me lancer un défi court ;
- utiliser l'ironie ;
- me demander une preuve ;
- me montrer les conséquences d'un nouveau report.

L'utilisateur peut en sélectionner deux. L'agent les traite comme des hypothèses à tester.

### Écran 6 — L'intensité

Présenter le même message dans trois tons :

- **Taquin** : léger et complice ;
- **Piquant** : direct, avec une remarque qui dérange ;
- **Sans pitié** : très frontal, sans humiliation ni attaque personnelle.

L'utilisateur choisit après avoir vu les exemples. Le niveau peut toujours être réduit depuis une notification.

### Écran 7 — Les limites

Sujets exclus par défaut :

- apparence et corps ;
- identité, origine et croyances ;
- santé physique ou mentale ;
- traumatismes ;
- situation financière ;
- relations personnelles.

L'utilisateur ne peut pas autoriser l'automutilation, le désespoir, la dévalorisation personnelle ou les attaques discriminatoires. Ces limites relèvent de la sécurité du produit, pas d'une préférence.

**Action disponible partout :** « Trop loin ».

### Écran 8 — Les moments

Questions :

- quand veux-tu agir ?
- combien de rappels maximum acceptes-tu ?
- quelles plages doivent rester silencieuses ?
- souhaites-tu activer séparément un mode réveil ?

Le mode nuit et le réveil restent désactivés par défaut.

### Écran 9 — La preuve minimale

Question :

> Comment sauras-tu que tu as réellement agi ?

Choix :

- minuterie terminée ;
- case cochée manuellement ;
- photo conservée localement ;
- lien ou fichier créé ;
- nombre ou quantité atteint ;
- autre preuve décrite par l'utilisateur.

Le MVP ne prétend pas vérifier automatiquement toutes les preuves.

### Écran 10 — Le premier engagement

L'utilisateur complète :

> Avant [heure], je vais [action observable] pendant [durée ou quantité].

L'application reformule l'engagement et montre :

- l'heure de la prochaine intervention ;
- le ton choisi ;
- la preuve attendue ;
- les boutons modifier, mettre en pause et annuler.

La première intervention ne doit être envoyée qu'après cette confirmation.

## Profil minimal produit

| Champ | Exemple | Utilisation |
|---|---|---|
| `goal_category` | `content_creation` | Choisir le contexte des messages. |
| `goal_label` | `Publier un post original` | Formuler un engagement concret. |
| `current_state` | `irregular_progress` | Éviter un ton déconnecté de la situation. |
| `failed_reminder_reasons` | `generic`, `wrong_timing` | Écarter les formats déjà inefficaces. |
| `preferred_triggers` | `factual_gap`, `proof_request` | Sélectionner les premières interventions. |
| `intensity` | `sharp` | Limiter le ton autorisé. |
| `quiet_hours` | `22:00–07:00` | Protéger le sommeil. |
| `max_daily_interventions` | `2` | Prévenir la saturation. |
| `forbidden_topics` | valeurs sûres par défaut | Appliquer les garde-fous. |
| `proof_type` | `manual_check` | Valider l'action sans surveillance excessive. |

Les horaires précis et exemples ci-dessus sont illustratifs. Ils ne correspondent pas nécessairement à un utilisateur réel.

## Apprentissage après l'onboarding

Après chaque intervention, l'application peut demander une réponse à faible effort :

- j'ai agi ;
- pas maintenant ;
- inutile ;
- irritant ;
- trop loin.

Une explication reste facultative. L'agent met à jour une hypothèse seulement après plusieurs observations cohérentes et montre les changements importants à l'utilisateur.

## Critères de validation

Le parcours sera considéré testable lorsqu'un prototype permettra de vérifier :

- la compréhension de la promesse et des limites ;
- le taux de complétion de chaque écran ;
- le temps total nécessaire ;
- les questions ignorées ou corrigées ;
- la capacité de l'utilisateur à expliquer pourquoi le premier message a été choisi ;
- la possibilité de tout mettre en pause en un geste.

## Questions encore ouvertes

- Faut-il demander le niveau d'intensité avant ou après avoir montré les exemples ?
- Quels écrans peuvent être reportés après la première action ?
- Une liste de sujets interdits suffit-elle ou faut-il demander des formulations interdites ?
- Quelle preuve locale offre le meilleur équilibre entre fiabilité et friction ?
- Combien d'observations sont nécessaires avant de modifier automatiquement le ton ou l'horaire ?
