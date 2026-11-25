# Website handover

## 2026-11-25 — production remediation

**Done:** The review branch was based on `main` at `7fc9d9d` and the redesign commit `e8c17c3`. Upgraded Next.js to 16.4.6 and React to 19.3.1, removed unused packages, migrated lint to ESLint 9 flat config, and kept Webpack as the build engine after Turbopack failed in the local Mapbox CSS pipeline. English and Marathi have separate root layouts so server HTML has the correct `lang`; the sitemap lists all 18 public URLs and 36 alternate links. Fixed narrow screen header and hero clipping. Compressed the tractor video to 978 KB WebM with a 917 KB MP4 fallback. Added a notice that the contact form sends entries through Formfacade and Google Forms. The owner approved public use of the November 2026 company figures, Pehelwan statements, Marathi copy, and supplied media. One labeled test enquiry was submitted and the owner confirmed receipt.

**Verification:** `npm run lint` passed with no warnings, `npm run build` generated all 22 routes, `npm ls --depth=0` passed, and `npm audit --audit-level=low` reported zero known vulnerabilities. Browser checks on the built site at port 3001 covered English and Marathi Home, Contact, and Electric Tractor at a 390 px viewport; the mobile hero fit, Marathi server HTML used `lang="mr"`, the header stayed sticky, and the tractor video used half speed while in view with controls hidden. The sitemap contained 18 URLs and 36 alternates. The form displayed “Your response has been recorded,” and the owner confirmed delivery. See [release defense](RELEASE-2026-11-25.md) for the scope, trust boundaries, rollback, and remaining checks.

**In progress:** Owner diff review and explanation remain release gates before merging into `main`; verify the production deployment after merging.

**Broken or risky:** The embedded form fields remain in English on the Marathi page because Formfacade controls them; the page discloses this. A browser console error from the third-party form was observed, although the test submission succeeded. Existing `main` is a source rollback point, not a verified good release. The previous public history contains a `NEXT_PUBLIC_MAPBOX_TOKEN` file; its value has not been handled or reproduced here. The Mapbox token must be configured in the host environment for the map feature to work after merge.

**Next:** Review the branch diff and defense brief with the owner, merge by fast-forward into `main`, inspect the resulting deployment and run a production user path. If production fails, restore the previous deployment or revert the merge change after checking the exact production state.

**Do not touch:** Production credentials or databases, Git history rewrites, and physical hardware controls. Keep `.env.local` untracked.
