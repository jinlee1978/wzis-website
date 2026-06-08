# Updating College Acceptances — the standard

**The standard:** every university on the college-acceptance page is shown as an
**emblem card** — its real official logo + name + acceptance count. When new
acceptances come in, we add the school's emblem too; we never just add plain
text. Adding a school is always: **data entry → fetch emblem → map it**.

Page: `src/app/[locale]/(pages)/college-acceptance/page.tsx`
Card: `src/components/ui/UniversityCard.tsx` (logo, with a navy monogram fallback if a logo is ever missing)
Logo map: `src/lib/universityLogos.ts`
Logo files: `public/images/universities/`

## Steps to add / update a school

1. **Add the acceptance to the data.**
   - Class of 2026: `src/lib/collegeAcceptances.ts` (the single source of truth that also feeds the homepage hero and academics page).
   - Class of 2025 / 2024: the arrays at the top of `college-acceptance/page.tsx`.
   - Use `count` only when 2+ students were accepted to the same school.

2. **Fetch the emblem** (one command):
   ```bash
   node scripts/fetch-university-logo.mjs --name "Sungkyunkwan University" --slug sungkyunkwan
   ```
   - It ranks the school's Wikipedia images (emblem → seal → crest → logo → wordmark), downloads the best one into `public/images/universities/`, and prints the two map lines to paste.
   - Korean schools whose English page only shows the **Hanjin** corporate logo (e.g. Korea Aerospace, Inha): rerun with `--lang ko --title "한국항공대학교"`, or grab the logo from the official site by hand.
   - Preview candidates without downloading: add `--dry`.

3. **Wire it into the map** — paste the printed lines into `src/lib/universityLogos.ts`:
   - `NAME_TO_SLUG`: add an entry for **every** name string the data uses (the full 2026 name *and* the short 2025 name both map to the same slug).
   - `SLUG_FILE`: slug → the actual filename it saved.

4. **Eyeball it.** Open the page (`npm run dev`) and check the card. Tight circular seals occasionally need a small padded crop so the ring isn't clipped — see the Fudan note below.

5. **Ship.** `npx tsc --noEmit` and `npx next build` should pass; push to `main` (auto-deploys to wzis.org).

## Notes

- **No logo on disk = monogram fallback.** A school with a data entry but no mapped logo won't break — it renders a navy initials badge. That's the safety net, not the goal; always source the real emblem.
- **Fudan red seal** (`fudan-red.png`): only a *blue* Fudan seal exists online, so the red one was cropped from a results poster with ~12% margin (a tighter crop clipped the top ring). If a tight seal looks clipped, recrop centered on the circle with padding.
- These are the universities' trademarked marks, used nominatively ("where our graduates go").
- 2024 is currently still rendered as text pills; new card work targets 2026/2025. (Flip 2024 to cards if we ever want full visual consistency.)
