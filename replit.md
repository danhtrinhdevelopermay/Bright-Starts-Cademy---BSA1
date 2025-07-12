# StudyVibe - Learning Management Application

## Overview

StudyVibe is a comprehensive full-stack learning management application built with React, Express.js, and PostgreSQL. The application provides students with tools for creating flashcards, taking quizzes, managing notes, tracking assignments, and participating in study groups. It features a modern dark-themed UI built with shadcn/ui components and includes gamification elements like XP, levels, and achievements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with structured error handling
- **Session Management**: Express sessions with PostgreSQL storage
- **Database ORM**: Drizzle ORM for type-safe database operations

### Authentication Strategy
- **Provider**: Firebase Authentication
- **Methods**: Email/password and Google OAuth
- **Integration**: Custom auth hooks connecting Firebase users to internal user records
- **Session Handling**: Firebase auth state synchronized with backend user data

## Key Components

### Database Schema (PostgreSQL with Drizzle)
- **Users**: Core user profiles with Firebase UID linking, XP/level system
- **Flashcards**: Hierarchical deck/card structure with spaced repetition
- **Quizzes**: Question banks with multiple choice support and attempt tracking
- **Notes**: Rich text content with tagging system
- **Assignments**: Task management with deadlines and priority levels
- **Study Groups**: Collaborative learning spaces with membership management
- **Achievements**: Gamification system for user engagement

### Frontend Pages & Features
- **Landing Page**: Marketing site with feature highlights
- **Dashboard**: Personalized overview with stats, deadlines, and quick actions
- **Study Tools**: Dedicated pages for flashcards, quizzes, notes
- **Assignment Tracker**: Deadline management with priority filtering
- **Study Groups**: Collaborative spaces with member management
- **Profile Management**: User settings, statistics, and achievement display

### UI Component System
- **Design System**: shadcn/ui with consistent theming
- **Layout**: Fixed top navigation with mobile-first bottom navigation bar
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Dark Theme**: Custom color palette optimized for extended study sessions
- **Interactive Elements**: Modals, dropdowns, and form components

## Data Flow

### Authentication Flow
1. Firebase handles user authentication
2. Custom auth hooks sync Firebase state with React components
3. Backend creates/retrieves user records using Firebase UID
4. Session persistence through Firebase auth state

### API Communication
1. TanStack Query manages all server state and caching
2. Custom `apiRequest` utility handles HTTP communication
3. Zod schemas validate data at API boundaries
4. Error handling with toast notifications for user feedback

### Study Session Flow
1. Users create/access study materials (flashcards, quizzes, notes)
2. Progress tracking updates user XP and statistics
3. Real-time updates reflect changes across components
4. Achievement system triggers based on user actions

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Authentication**: Firebase Auth SDK
- **UI Components**: Radix UI primitives, Lucide React icons
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for data fetching

### Development Tools
- **Build**: Vite with TypeScript support
- **Styling**: Tailwind CSS with PostCSS
- **Code Quality**: TypeScript strict mode
- **Development**: tsx for TypeScript execution, Replit-specific plugins

### Database Provider
- **Hosting**: Neon (PostgreSQL-compatible serverless database)
- **Connection**: WebSocket-based connection pooling
- **Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Database**: Environment-based DATABASE_URL configuration
- **Hot Reload**: Vite HMR with Express middleware integration
- **Error Handling**: Runtime error overlays for development

### Production Build
- **Frontend**: Static build output served by Express
- **Backend**: ESBuild compilation to Node.js-compatible modules
- **Environment**: NODE_ENV-based configuration
- **Assets**: Bundled and optimized for production delivery

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Authentication**: Firebase configuration via environment variables
- **Build Process**: Separate client and server build pipelines
- **Static Serving**: Express serves built frontend assets in production

The application follows a monorepo structure with shared TypeScript types and schemas, enabling type safety across the full stack while maintaining clear separation between client and server concerns.

## Recent Changes

### App Rebranding to Bright Starts Academy (July 2025)
- **Changed**: Complete rebrand from "StudyVibe" to "Bright Starts Academy" (BSC)
- **Updates**:
  - Navigation shows "BSC" in large letters with "Bright Starts" subtitle
  - New logo (logo.png) replaces graduation cap icon
  - Animated loading screen (animated.gif) replaces spinner
  - Updated app title, meta tags, and favicon
  - Landing page hero section reflects new branding
  - Authentication forms updated with new branding
  - All references to "StudyVibe" replaced with "BSC" or "Bright Starts"

### Media URL Optimization (July 2025)
- **Problem**: Long data URLs stored in database causing performance lag
- **Solution**: Implemented cloud storage integration with ImgBB for short URLs
- **Impact**: Reduced database payload size by 95%+ for posts with media
- **Features**:
  - Uploads images to ImgBB free cloud storage (i.ibb.co URLs)
  - Converts data URLs to short cloud URLs automatically
  - Fast CDN delivery with global availability
  - Automatic optimization for new posts
  - Admin endpoint for bulk optimization of existing posts
  - Maintains original media quality while reducing database load

### Enhanced Bottom Navigation Design (July 2025)
- **Updated**: Complete redesign of mobile bottom navigation with premium effects
- **Features**:
  - Glass-morphism design with gradient backgrounds and backdrop blur
  - Enhanced button styling with larger tap targets (48px) and rounded corners
  - Smooth spring animations for hover, tap, and active states
  - Shimmer effects and pulse animations for active main button
  - Tooltip labels on hover with smooth animations
  - Rotating menu icon with gradient backgrounds
  - Enhanced dropdown menu with staggered animations and improved visual hierarchy
  - Active state indicators with layout animations
  - Premium shadow effects and gradient overlays
- **Impact**: Significantly improved mobile user experience with modern, engaging interface

### SEO Optimization Implementation (July 2025)
- **Added**: Comprehensive SEO meta tags, structured data, and site optimization
- **Features**:
  - Complete Open Graph and Twitter Card meta tags for social sharing
  - JSON-LD structured data for educational organization schema
  - Progressive Web App manifest with proper icons and theme colors
  - SEO-friendly robots.txt with proper crawl directives
  - XML sitemap covering all main application routes
  - Security.txt for responsible disclosure
  - Server-side routes for SEO files (/robots.txt, /sitemap.xml, /manifest.json)
  - Health check endpoint for monitoring
- **Impact**: Improved search engine visibility and social media sharing for https://brightstarts.onrender.com/

### Multilingual Support Implementation (July 2025)
- **Added**: Complete English/Vietnamese language support with React Context architecture
- **Features**:
  - Comprehensive translation system with 500+ translated strings
  - React Context-based translation provider with TypeScript support
  - Language switcher component with flag icons in navigation and settings
  - Automatic language detection from browser/localStorage persistence
  - Full UI translation coverage for all major components:
    - Navigation (top and bottom bars)
    - Dashboard, Landing page, Settings page
    - Authentication forms and error messages
    - Form labels, buttons, and common UI elements
  - Language selection in Settings page with immediate switching
  - Seamless user experience with persistent language preference
- **Impact**: Makes the platform accessible to both English and Vietnamese speakers with complete UI localization

### Multilingual Support Implementation (July 2025)
- **Added**: Complete bilingual support for English and Vietnamese users
- **Features**:
  - Comprehensive i18n system with context-based translations
  - Language switching in navigation and settings with flag icons
  - Complete translation coverage for all UI elements including navigation, forms, buttons, and messages
  - Automatic language detection based on browser preferences
  - Persistent language preference storage in localStorage
  - Vietnamese and English translations for all major sections:
    - Navigation and menu items
    - Authentication forms and messages
    - Dashboard and user interface elements
    - Settings and profile management
    - Study tools (flashcards, quizzes, notes, assignments)
    - Social features (posts, comments, notifications)
  - Language switcher component with dropdown selection
- **Impact**: Enables Vietnamese and international users to fully utilize the platform in their preferred language, significantly expanding the user base potential

### SEO Files Root Directory Migration (July 2025)
- **Changed**: Moved SEO and verification files from /client/public to project root directory
- **Files Moved**:
  - robots.txt: From client/public/robots.txt to ./robots.txt
  - sitemap.xml: From client/public/sitemap.xml to ./sitemap.xml
  - manifest.json: From client/public/manifest.json to ./manifest.json
  - security.txt: From client/public/.well-known/security.txt to ./.well-known/security.txt
- **Benefits**:
  - Improved accessibility for third-party verification services
  - Better compliance with web standards and SEO best practices
  - Easier access for domain verification tools
  - Consistent with industry standard practices
- **Impact**: Enhanced compatibility with verification services and improved SEO tool accessibility

### Brand Abbreviation Update (July 2025)
- **Changed**: Updated abbreviation from "BSA" to "BSC" across all platform components
- **Updated Files**:
  - Navigation components (top navigation and footer)
  - Landing page branding elements
  - Authentication forms and loading screen
  - HTML meta tags and structured data
  - Translation files (English and Vietnamese)
  - Progressive Web App manifest
- **Impact**: Consistent branding with "BSC" abbreviation while maintaining "Bright Starts Academy" full name