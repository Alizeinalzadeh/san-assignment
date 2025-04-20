# SPA Frontend Assignment

This is a client-side single-page application (SPA) built with React, TypeScript, and modern frontend tools. The application demonstrates a clean architecture for a client-side-only SPA with features like authentication, routing, and data management.

## Tech Stack

- **Vite** - Fast development server and build tool
- **TypeScript** - Typed JavaScript for better developer experience
- **React (v18)** - UI component library
- **React Router (v6)** - Client-side routing
- **TanStack Query (v5)** - Data fetching and state management
- **Tailwind CSS** - Utility-first CSS framework

## Features

- **Authentication/Authorization** - User login with permissions management
- **Routing** - Central route configuration with permission handling
- **Navigation** - Path-based navigation with permission checking
- **Internationalization** - Translation support with lazy loading
- **Data Management** - CRUD operations for posts and comments
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS

## Folder Structure

```
src/
├── components/       # UI components
│   ├── Layout/       # Layout components (Header, Layout, Container)
│   ├── Pages/        # Page components
│   │   ├── Home/     # Home page with dashboard
│   │   ├── Login/    # Login page
│   │   ├── Posts/    # Posts list page
│   │   ├── Post/     # Post detail page with tabs
│   │   ├── CreatePost/ # Create post page
│   │   └── ...       # Other pages
│   └── Share/        # Shared components
├── configs/          # Application configurations
│   └── routes.tsx    # Route definitions
├── hooks/            # Custom React hooks
├── routes/           # Routing logic
├── services/         # API service functions
├── store/            # Global state management
├── styles/           # Global styles
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Key Concepts

### Routing System

The routing system is centralized in `src/configs/routes.tsx`. Each route has:

- **Name**: Unique identifier for the route
- **Path**: URL path for the route
- **Renderer**: Component to render (lazy or eager loaded)
- **Permissions**: Required permissions to access the route
- **Translations**: Translation resources to load before rendering

### Permission System

The application implements a permission-based access control system:

- Available permissions: `VIEW_POSTS`, `VIEW_COMMENTS`, `EDIT_POST`, `CREATE_POST`
- Permissions are checked at various levels:
    - Route level (before rendering a route)
    - Navigation level (before navigating to a route)
    - Component level (for conditional rendering)

### Navigation

The navigation system provides a clean API for navigating between routes:

- Path generation with parameters
- Permission checking before navigation
- Support for replace and state options

### API Services

The application uses the JSONPlaceholder API for demonstration purposes:

- `postService` - CRUD operations for posts
- `commentService` - Operations for comments

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd san-assignment
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3. Set up environment variables:

    ```bash
    # Copy the example environment file
    cp .env.example .env.development

    # Edit .env.development if needed
    ```

4. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser to http://localhost:5173

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=https://jsonplaceholder.typicode.com
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Running with Docker

This project can be run using Docker and Docker Compose for development environment.

### Prerequisites

- Docker
- Docker Compose

### Development Environment

1. Start the development container:

    ```bash
    docker-compose up san-assignment-dev
    ```

2. Open your browser to http://localhost:5173

The development container features:

- Hot reloading
- Real-time code updates
- Volume mounting for local development

## Application Flow

1. **Login**:

    - Users can log in by clicking the Login button
    - Two user types are available:
        - Regular User (with VIEW_POSTS, VIEW_COMMENTS permissions)
        - Admin User (with all permissions)

2. **Home/Dashboard**:

    - Displays recent posts and comments
    - Cards rendered based on user permissions

3. **Posts List**:

    - Displays all posts with actions
    - Edit/Delete buttons based on permissions

4. **Post Detail**:

    - View a single post
    - Tabs:
        - Overview: Post title and body
        - Edit: Edit post form (permission-based)
        - Comments: Post comments list (permission-based)

5. **Create Post**:
    - Form to create a new post
    - Redirects to Posts list on success

## Future Improvements

Since it's a simple assignment, I've implemented some basic features. Here are some future improvements I would make in a real project:

- Add unit and integration tests
- Typescript path aliases for better code organization
- Implement real authentication and keep user logged in
- Add error boundaries for better error handling
- Implement more realistic i18n support
- Implement caching strategies for API calls
- Add responsive design for mobile devices
- Dockerize the production environment

## License

MIT
