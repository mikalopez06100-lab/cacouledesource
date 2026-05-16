# Ça Coule de Source — Site web David COLLONGE

Site vitrine du plombier **David COLLONGE** (La Garde, Var).  
Technologies : Astro (site statique) + Decap CMS (gestion des chantiers).

---

## Pour David — Ajouter un chantier et publier

### Se connecter à l’administration

1. Ouvrez votre navigateur sur : **https://cacouledesource.fr/admin**
2. Cliquez sur **« Se connecter avec Netlify Identity »** (ou « Log in »).
3. Entrez l’**email** et le **mot de passe** reçus lors de votre invitation Netlify.

> **En local** (`npm run dev`) : l’admin ne permet pas de se connecter sans Netlify. Utilisez le site en ligne une fois déployé, ou demandez à votre développeur d’ajouter un chantier pour vous.

### Mot de passe oublié

1. Sur la page `/admin`, cliquez sur **« Mot de passe oublié ? »**.
2. Saisissez votre email professionnel.
3. Suivez le lien reçu par email pour choisir un nouveau mot de passe.

### Ajouter un nouveau chantier

1. Connectez-vous à `/admin`.
2. Menu **« Chantiers »** → **« Nouveau chantier »**.
3. Remplissez le formulaire :
   - **Titre** : ex. « Rénovation douche italienne »
   - **Ville** : ex. Toulon
   - **Type** : Rénovation salle de bain, Plomberie, etc.
   - **Date** : fin des travaux
   - **Photo AVANT** : glissez la photo depuis votre téléphone
   - **Photo APRÈS** : idem
   - **Afficher sur l’accueil** : cochez pour les 3 plus beaux chantiers
   - **Texte détaillé** : quelques phrases sur le projet
4. Cliquez sur **« Publier »** (en haut).

Le site se met à jour automatiquement en quelques minutes (reconstruction Netlify).

### Modifier vos coordonnées (téléphone, email…)

Ces infos ne sont pas dans l’admin pour l’instant : demandez une mise à jour à votre développeur, ou modifiez le fichier `src/config/site.ts` si on vous y a donné accès.

---

## Logo et photos — quoi envoyer ?

| Fichier | Où le mettre | Action |
|--------|----------------|--------|
| **Logo PNG** (fond transparent de préférence) | `public/images/logo.png` | Dans `src/config/site.ts`, passer `useLogo: true` |
| **Photos chantiers** | Via `/admin` après déploiement | Glisser-déposer AVANT / APRÈS — le plus simple |
| **Photo portrait David** | `public/images/portrait.jpg` | À brancher dans le composant Présentation (nous contacter) |
| **Photo hero accueil** | `public/images/hero.jpg` | Optionnel — remplace le placeholder |

Vous pouvez envoyer **toutes vos photos avant/après** : nous les importerons par lots dans l’admin ou en fichiers, sans tout refaire à la main.

---

## Commandes (développeur)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le dossier dist/
npm run preview  # prévisualiser la version buildée
```

---

## Structure utile

- `src/config/site.ts` — téléphone, email, communes, témoignages
- `src/content/chantiers/` — un fichier `.md` par chantier
- `public/admin/` — interface Decap CMS
- `public/images/chantiers/` — photos uploadées via l’admin

---

*Site réalisé pour David COLLONGE — Ça Coule de Source, Var.*
