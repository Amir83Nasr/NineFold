# TODO.md

* [x] use pnpm instead of npm — pnpm-lock.yaml committed, package-lock.json removed, scripts use pnpm
* [x] add pretteir to the project — `.prettierrc`, `format` / `format:check` scripts
* [x] add githooks for precommit for format the codebases — `.githooks/pre-commit`, `core.hooksPath=.githooks`
* [x] reivew and check clean structure file and folder structure — root is flat web files + `assets/` + `vendor/`; `www/`, `android/`, `ios/`, `node_modules/` gitignored build outputs
* [ ] using vite for game in web — SKIPPED: `game.js` is a committed 1.8MB bundle with no source tree (`src/` absent); wrapping it in vite adds a build step with zero benefit. Revisit only if game sources are added.
* [x] update gitignore — covers pnpm, build outputs (`www/`, `android/`, `ios/`, `*.apk`/`*.aab`), secrets, clutter
