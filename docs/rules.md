# Coding Rules & Guidelines 📜

## 1. Frontend (React / TypeScript)
- **Naming Conventions:** Use `camelCase` for variables, functions, and object instances (e.g., `fillPercent`, `isLidOpen`).
- **Components:** Use `PascalCase` for component file names and React components themselves (e.g., `TrashStatus.tsx`).
- **Styling:** Tailwind CSS (avoid writing separate CSS files unless strictly necessary).

## 2. Firmware (ESP32 / C++)
> *Reserved for hardware team guidelines.*
- **Naming Conventions:** *(To be filled by the embedded team)*
- **Libraries:** Use official SDKs and Arduino/PlatformIO framework.

## 3. Git Workflow
- **Branching Strategy:** We use a two-branch workflow:
  - `main` — The stable production branch (managed by the project maintainer).
  - `dev` — The active development branch where the team should push and test features.
- **Commits:** Keep commits descriptive and concise (e.g., `feat: add sensor support`, `fix: button layout`).