# Project Management Frontend

A modern, full-featured project management application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. This frontend provides a comprehensive dashboard for managing projects and users with role-based access control.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

## ✨ Features

### Project Management

- ✅ Create, read, update, and delete projects
- ✅ Project dashboard with comprehensive list view
- ✅ Add and update projects with form validation
- ✅ Pagination support for project listings
- ✅ Detailed project views

### User Management

- ✅ User management dashboard (Admin only)
- ✅ Invite users to the system
- ✅ Update user roles dynamically
- ✅ View all users with pagination
- ✅ User role management modal

### Authentication & Authorization

- ✅ Secure login/signup functionality
- ✅ NextAuth.js integration for session management
- ✅ Role-based access control (RBAC)
- ✅ Protected routes with auth guard
- ✅ Form validation with Yup schema

### UI/UX

- ✅ Dark/Light theme support with persistence
- ✅ Responsive design with Tailwind CSS
- ✅ Toast notifications for user feedback
- ✅ Loading indicators and smooth transitions
- ✅ Sidebar navigation with dynamic links
- ✅ Data tables with pagination
- ✅ Modal dialogs for confirmations
- ✅ Form inputs with validation

### State Management

- ✅ Redux Toolkit for global state management
- ✅ Redux Persist for state persistence
- ✅ RTK Query for API data fetching
- ✅ Theme settings persistence

## 🛠️ Tech Stack

| Category             | Technology             |
| -------------------- | ---------------------- |
| **Framework**        | Next.js 16.1.4         |
| **React**            | 19.2.3                 |
| **Language**         | TypeScript 5           |
| **Styling**          | Tailwind CSS 4         |
| **State Management** | Redux Toolkit 2.11.2   |
| **API Client**       | RTK Query              |
| **Authentication**   | NextAuth.js 4.24.13    |
| **Form Handling**    | React Hook Form 7.71.1 |
| **Form Validation**  | Yup 1.7.1              |
| **Icons**            | React Icons 5.5.0      |
| **Notifications**    | React Toastify 11.0.5  |
| **Linting**          | ESLint 9               |

## 📦 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd project-management-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Data Pagination Limit
NEXT_PUBLIC_DATA_LIMIT=10

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

Refer to `.env.example` for all available configuration options.

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 📂 Project Structure

```
project-management-frontend/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   └── auth/[...nextauth]/   # NextAuth configuration
│   ├── auth/                     # Authentication pages
│   │   ├── signin/
│   │   └── signup/
│   ├── (dashboard)/              # Dashboard layout group
│   │   ├── (admin_pages)/        # Admin-only pages
│   │   │   ├── user-management/
│   │   │   └── invite-user/
│   │   └── project-management/   # Project management pages
│   │       ├── add-project/
│   │       └── update-project/
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
│
├── components/                   # Reusable React components
│   ├── auth/                     # Authentication components
│   ├── common/                   # Shared layout components
│   ├── libs/                     # UI library components
│   ├── project/                  # Project-related components
│   └── user/                     # User-related components
│
├── config/                       # Application configuration
│   └── config.ts
│
├── hooks/                        # Custom React hooks
│   ├── useDebouncer.js
│   ├── useOutsideClick.ts
│   ├── useResponsive.ts
│   └── useScrollDetection.js
│
├── providers/                    # React context providers
│   ├── AuthGaurd.tsx
│   ├── NextAuthProvider.jsx
│   ├── ReduxProvider.tsx
│   └── ThemeProvider.tsx
│
├── public/                       # Static assets
│
├── schema/                       # Validation schemas
│   ├── auth.schema.ts
│   └── project.schema.ts
│
├── store/                        # Redux store configuration
│   ├── baseQuery.ts              # RTK Query base configuration
│   ├── store.ts
│   ├── features/                 # RTK Query APIs
│   └── slices/                   # Redux slices
│
├── types/                        # TypeScript type definitions
│   ├── common.d.ts
│   ├── libs.d.ts
│   └── next-auth.d.ts
│
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🎯 Key Features Explained

### Authentication Flow

- Users can sign up or sign in using the auth pages
- NextAuth.js handles session management
- Protected routes are guarded by `AuthGuard` component
- Authentication state is managed through Redux

### Project Management

- Users can create, view, update, and delete projects
- Projects are displayed in a paginated table
- Form validation ensures data integrity
- Real-time API communication via RTK Query

### User Management (Admin)

- Admins can view all users in the system
- Invite new users to join the platform
- Update user roles through modal dialogs
- User management is restricted to admin users

### Theme System

- Support for dark and light themes
- Theme preference is persisted in localStorage
- Easy theme switching via the theme provider

## 🔐 Security Features

- Role-based access control (RBAC)
- Protected routes with authentication guards
- Form validation on both client side
- Secure session management with NextAuth.js
- Environment variable protection for sensitive data

## 📝 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint checks        |

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and create pull requests for any improvements.

## 📄 License

This project is private and proprietary.

---

**Happy coding!** 🚀
