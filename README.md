# Pathera Frontend

Frontend project for the Pathera application, built using Next.js. This application is still in development and not yet complete.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Programming Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (based on Radix UI)
- **State Management**: Zustand 5.0.9
- **Data Fetching**: TanStack Query (React Query) 5.90.12
- **HTTP Client**: Axios 1.13.2
- **Form Handling**: React Hook Form 7.69.0 with Zod 4.2.1 validation
- **Animation**: Motion 12.23.26
- **Charts**: Recharts 2.15.4
- **Icons**: Lucide React 0.562.0, React Icons 5.5.0
- **Date Handling**: date-fns 4.1.0
- **Theming**: next-themes 0.4.6
- **Linting**: ESLint 9
- **Code Formatting**: Prettier with Tailwind CSS plugin
- **Build Tool**: Next.js (with Turbopack for development)

## Current Features

Since the application is still in development, here are the features that have been implemented:

### Public Pages
- **Home Page**: Displays a hero section with basic application information
- **About Page**: Information page about the application

### Authentication
- **Login**: Page for user account login
- **Register**: Page for registering a new account

### Admin Panel
- **Dashboard**: Main admin page for viewing summaries
- **Manage Users**: Page for managing users (add, edit, delete)

### UI Components
- Responsive components for desktop and mobile
- Different navbar and footer for admin and regular users
- Drawer for mobile navigation
- Various UI components like button, input, card, etc. from shadcn/ui

### API Integration
- API client setup with basic configuration
- Structure for backend integration

### Utilities
- Currency, time, and amount formatting
- Hook for mobile device detection
- Store for state management

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (admin)/        # Admin routes
│   ├── (auth)/         # Authentication routes
│   ├── about/          # About page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── custom/         # Custom components
│   ├── pages/          # Page components
│   └── ui/             # UI components from shadcn/ui
├── apis/               # API client configuration
├── constants/          # Application constants
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── stores/             # Zustand stores
└── types/              # TypeScript type definitions
```

## Deployment

This application can be deployed to Vercel or other hosting platforms that support Next.js.

For deployment to Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployment will run

## Contribution

This application is still in active development. For contributions, please create an issue or pull request in this repository.

## License

[Insert appropriate license]
