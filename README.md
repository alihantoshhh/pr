# Engineering Portfolio — GitHub Pages / Next.js

This is a Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 portfolio starter designed for GitHub Pages static export.

## 1. Customize your information

Open `app/page.tsx` and replace:
- `YOUR_EMAIL@example.com` with your professional email.
- The LinkedIn, GitHub and WeChat placeholders with your real profiles.
- The generic brand label `ENGINEERING` with your chosen studio or personal brand.
- Project descriptions with verified deliverables, photos, CAD screenshots and test results.

The English and Chinese content is included. Use the `中文 / EN` button to switch languages.

**Accuracy note:** The project cards currently describe research/design areas based on the supplied background. Do not describe a project as a completed commercial delivery unless you have evidence and permission to show it.

## 2. Set your GitHub repository name

Open `next.config.ts` and replace:

```ts
const repoName = "YOUR_REPO_NAME";
```

with your repository name, for example:

```ts
const repoName = "my-engineering-portfolio";
```

For a user site repository named `USERNAME.github.io`, set `repoName` to an empty string:

```ts
const repoName = "";
```

## 3. Run locally

Requires Node.js 20.9 or later (Node 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Test the production export:

```bash
npm run build
```

The static site is generated in the `out/` directory.

## 4. Deploy to GitHub Pages

1. Push this project to the `main` branch.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` builds and deploys the `out/` directory.
5. Wait for the Actions workflow to finish.

Your project site will be available at:

`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 5. Important notes

- This project uses static export (`output: "export"`); it does not require a Node.js server on GitHub Pages.
- GitHub Pages cannot run Next.js server-side features, API routes or server actions.
- All images added to `public/` should be referenced with the configured base path if you add image paths manually.
- The uploaded ZIP was a built static Astro website belonging to another portfolio. Its personal identity, employment claims, project claims and assets were not copied into this version.
