# Stablewatch Holder Type Proportion Chart

A Next.js application that displays pie charts showing the distribution of sUSDf token holders between EOA (Externally Owned Accounts) and Smart Contract holders.

## Features

- **Interactive Pie Chart**: Shows proportion of balances between EOA and Smart Contract holders
- **Real-time Filtering**: Toggle to exclude small EOA balances (< 3×10²⁴)
- **Gnosis Safe Handling**: Option to treat Gnosis Safe contracts as EOA
- **Data Quality Analysis**: Displays missing top holder from API data
- **Server-Side Rendering**: Fast initial load with data fetched on the server
- **Responsive Design**: Works on all screen sizes with adaptive chart labels
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Next.js 15.4.1** - App Router with Server Components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - React charting library for the pie chart
- **Server Actions** - Data fetching on the server

## Project Structure

```
src/
├── actions/           # Server actions for data fetching
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── constants/        # Application constants
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd chart
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local
# Edit .env.local with your API URL
# API_URL=your-api-url
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues and format code
- `pnpm type-check` - Run TypeScript type checking

## Key Components

### Server Components

- `page.tsx` - Main page with server-side data fetching
- `loading.tsx` - Loading UI during data fetch

### Client Components

- `ClientChart.tsx` - Handles filter state and user interactions
- `HolderChart.tsx` - Renders the pie chart with responsive labels
- `ChartControls.tsx` - Filter toggles and controls
- `DataQualityAnalysis.tsx` - Shows missing top holder analysis

### Utilities

- `processHolders.ts` - Main data processing logic
- `holderFiltering.ts` - Filter application logic
- `chartDataGeneration.ts` - Chart data transformation
- `formatting.ts` - Number and date formatting

## Data Flow

1. **Server** - `fetchHolderData()` fetches data from API
2. **Server** - `page.tsx` renders initial HTML with data
3. **Client** - `ClientChart.tsx` handles filter state
4. **Client** - `processHolders()` processes data based on filters
5. **Client** - `HolderChart.tsx` renders interactive chart

## Performance Optimizations

- **Server-Side Rendering** - Initial data loaded on server
- **React.memo** - Prevents unnecessary re-renders
- **useMemo** - Caches expensive calculations
- **useCallback** - Stable function references
- **Responsive Design** - Adaptive chart labels based on screen size

## Task Requirements Completion

This application fulfills all requirements from the Stablewatch coding challenge:

### ✅ Basic Requirements

1. **Data Fetching** - Server-side data fetching with server actions
2. **Pie Chart** - Interactive chart showing EOA vs Smart Contract proportions
3. **State & Filtering** - Small balance filter toggle with raw total balance display
4. **Data Quality Task** - Missing top holder identified: `0xf78e5799fc2b397fe5add625f7b45c13cdb5f5ae`

### ✅ Stretch Requirements

5. **Gnosis Safe Toggle** - Option to treat Gnosis Safe contracts as EOA

### 🚀 Additional Enhancements

- Server-side rendering for better performance
- Responsive design with adaptive chart labels
- TypeScript for type safety
- Modular component architecture
- Performance optimizations with React.memo and useMemo

## License

MIT
