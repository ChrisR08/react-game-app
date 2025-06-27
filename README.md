# React Game Explorer

A modern React app for discovering and filtering video games using the [RAWG Video Games Database API](https://rawg.io/apidocs). Built with TypeScript, React Query, Zustand, Chakra UI, and Vite.

> Live site: [https://react-game-app-chrisr08.vercel.app](https://react-game-app-chrisr08.vercel.app)

---

## Features

- Browse games by genre, platform, and rating
- Search by title
- Responsive layout with Chakra UI
- Fast and efficient with Vite and React Query
- ☁️ Hosted on Vercel
- State management with Zustand
- Clean, modular code structure

---

## Tech Stack

- **React + TypeScript**
- **Vite** – lightning-fast dev environment
- **TanStack Query (React Query)** – data fetching & caching
- **Zustand** – lightweight global state
- **Chakra UI** – accessible, themeable UI components
- **RAWG API** – open video game database

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/ChrisR08/react-game-app.git
cd react-game-app
npm install
```

### 2. Set up your environment variables

Create a `.env.local` file in the root:

```env
VITE_API_BASE_URL=https://api.rawg.io/api
VITE_API_KEY=your_rawg_api_key_here
```

### 3. Run locally

```bash
npm run dev
```


---

## Deployment

This app is deployed via [Vercel](https://vercel.com).
Add your environment variables via Vercel's dashboard under **Project Settings → Environment Variables**.

---

## Future Plans

- Build a backend and middleware
- Game details page 
- Unit and integration tests 
- Performance improvements
- Polish and accessibility tweaks

---

## Author

Made by [Chris Roberts](https://github.com/ChrisR08)
Built as a personal learning project to deepen knowledge of modern React architecture.

---

## License

This project is open source under the [MIT License](LICENSE).
