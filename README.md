# Živá tabule – prezentační web

Jednostránkový elektronický leták na `web.zivatabule.cz`.

## Úprava obsahu
Upravujte `index.md`. Vzhled určuje `template.html` a `style.css`.

## Cloudflare Pages
- Git repository: `vmanena/zivatabule-web`
- Production branch: `main`
- Framework preset: **None**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: výchozí (kořen repozitáře)

Cloudflare nainstaluje závislosti z `package.json`. Nejprve otestujte na adrese `*.pages.dev`, potom v Cloudflare Pages přidejte vlastní doménu `web.zivatabule.cz`. Původní DNS neměňte před ověřením testovací verze.

Lokální test: `npm install && npm run build`.

## Mezinárodní web

Oba projekty v Cloudflare Pages používají stejný repozitář a větev `main`.

| Doména | Příkaz sestavení | Výstup |
| --- | --- | --- |
| `web.zivatabule.cz` | `npm run build` | `dist` |
| `web.ziwaboard.com` | `npm run build:international` | `dist` |

Na mezinárodním webu je angličtina na `/` a slovenština na `/sk/`. Texty stránek jsou v `locales/`, texty navigace, náhledu a metadat v `locales.mjs`. Mezinárodní verze odkazují na Buy Me a Coffee.

Před zveřejněním českých odkazů ověřte anglickou i slovenskou stránku na doméně `web.ziwaboard.com`.
