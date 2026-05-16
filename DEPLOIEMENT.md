# Déploiement Netlify — Ça Coule de Source

Guide pas à pas pour mettre en ligne **cacouledesource.fr** avec administration Decap CMS et Netlify Identity.

---

## Prérequis

- Compte [Netlify](https://www.netlify.com/)
- Dépôt Git (GitHub, GitLab ou Bitbucket) contenant ce projet
- Accès DNS du domaine `cacouledesource.fr`

---

## 1. Connecter le dépôt Git à Netlify

1. Connectez-vous au **dashboard Netlify**.
2. **Add new site** → **Import an existing project**.
3. Choisissez votre fournisseur Git et le dépôt `ca-coule-de-source`.
4. Paramètres de build :

   | Champ | Valeur |
   |-------|--------|
   | **Build command** | `npm run build` |
   | **Publish directory** | `dist` |
   | **Node version** | 22 (déjà dans `netlify.toml`) |

5. Cliquez sur **Deploy site**.
6. Attendez le premier déploiement (vert). L’URL temporaire `*.netlify.app` fonctionne pour les tests.

**Capture décrite :** écran « Site settings → Build & deploy » avec Build command et Publish directory remplis comme ci-dessus.

---

## 2. Activer Netlify Identity

1. Dans le site Netlify : **Site configuration** (ou Site settings).
2. Onglet **Identity**.
3. Cliquez sur **Enable Identity**.

**Capture décrite :** bouton bleu « Enable Identity » sur la page Identity.

---

## 3. Mode « Invite only » (seul David peut se connecter)

1. Toujours dans **Identity** → **Registration preferences**.
2. Choisissez **Invite only** (inscriptions publiques désactivées).
3. Enregistrez.

Ainsi, personne ne peut créer de compte tout seul : seules les invitations email donnent accès à `/admin`.

**Capture décrite :** menu déroulant « Registration » réglé sur « Invite only ».

---

## 4. Activer Git Gateway (Decap → Git)

1. **Identity** → section **Services** (ou **Identity services**).
2. Trouvez **Git Gateway** → **Enable Git Gateway**.
3. Netlify configure l’accès au dépôt pour que Decap puisse committer les chantiers.

Sans Git Gateway, l’admin affiche les chantiers mais ne peut pas publier.

**Capture décrite :** carte « Git Gateway » avec statut Enabled.

---

## 5. Inviter David par email

1. **Identity** → **Invite users**.
2. Saisissez l’email professionnel de David (ex. `contact@cacouledesource.fr`).
3. Envoyez l’invitation.
4. David reçoit un email Netlify → lien pour **définir son mot de passe**.

**Capture décrite :** formulaire « Invite a user » avec un email saisi et bouton Send.

---

## 6. Domaine cacouledesource.fr + HTTPS

1. **Domain management** → **Add a domain** → `cacouledesource.fr`.
2. Netlify affiche les enregistrements DNS à créer chez le registrar :

   - Souvent : **A** vers l’IP Netlify **ou** **CNAME** `cacouledesource.fr` → `votre-site.netlify.app`
   - Pour `www` : CNAME `www` → `votre-site.netlify.app`

3. Attendez la propagation DNS (quelques minutes à 48 h).
4. **HTTPS** : Netlify provisionne automatiquement un certificat Let’s Encrypt une fois le DNS valide (section **HTTPS** → certificat actif).

**Capture décrite :** page « Domain management » avec domaine Primary et cadenas SSL vert.

---

## 7. URL du site dans Astro

Dans `astro.config.mjs` et `src/config/site.ts`, l’URL doit être :

```ts
url: 'https://cacouledesource.fr'
```

Poussez sur `main` si vous modifiez ces fichiers.

---

## 8. Widget Identity sur le site (optionnel)

Le widget est déjà chargé dans `src/layouts/BaseLayout.astro` :

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

Pour une bannière de connexion sur `/admin` uniquement, rien de plus à faire : Decap ouvre la fenêtre Identity à la connexion.

Pour rediriger après login depuis une autre page :

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
</script>
```

---

## 9. Test de bout en bout

1. Ouvrez `https://cacouledesource.fr/admin`.
2. Connectez-vous avec le compte David (invitation).
3. **Chantiers** → **Nouveau chantier** → remplissez + uploadez 2 photos test.
4. **Publier**.
5. Vérifiez dans Netlify **Deploys** qu’un nouveau build démarre (~2–3 min).
6. Visitez `/realisations` : le chantier test apparaît.

---

## 10. Formulaire de contact

Le formulaire utilise **Netlify Forms** (`data-netlify="true"`).  
Après le premier déploiement :

1. **Forms** dans le dashboard Netlify → le formulaire `contact` doit apparaître.
2. Configurez les **notifications email** vers David.

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Admin : « Failed to load » | Vérifier `public/admin/config.yml` et que `/admin` est bien servi (redirects `netlify.toml`) |
| Impossible de publier un chantier | Git Gateway activé ? David connecté ? Branche `main` = branche du `config.yml` |
| Identity : inscription ouverte | Repasser en **Invite only** |
| Mot de passe oublié | Identity → user → « Send reset password » ou flux sur `/admin` |
| Build échoue | Logs Deploys ; vérifier Node 22 et `npm run build` en local |

---

## Fichiers clés du projet

- `netlify.toml` — build, redirects `/admin`
- `public/admin/config.yml` — Decap CMS (français)
- `public/admin/index.html` — charge Decap
- `src/content/chantiers/*.md` — données chantiers

---

*Dernière mise à jour : mai 2026*
