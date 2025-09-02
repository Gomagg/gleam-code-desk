# Overview

This is a full-stack portfolio web application built with React and Express.js. The application showcases a developer's skills, projects, and experience through a modern, responsive interface. It uses a monorepo structure with separate client and server directories, featuring a professional portfolio design with dark theme focus, shadcn/ui components, and Tailwind CSS styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript and Vite for development and building
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack React Query for server state management
- **Routing**: React Router for client-side navigation
- **Theme System**: Custom theme provider with dark/light mode support

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for hot reloading in development
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation (ready for database integration)

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL via Neon Database serverless connection
- **Schema Management**: Shared schema definition in TypeScript with Zod validation
- **Current Implementation**: In-memory storage for development (MemStorage class)

## Authentication and Authorization
- **Current State**: Basic user schema defined but no authentication implemented
- **Schema**: Users table with username and password fields
- **Future Integration**: Ready for session-based or JWT authentication

## Project Structure
- **Monorepo Layout**: Client, server, and shared code separation
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common schemas and types in `/shared` directory
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)

## Development Experience
- **Hot Reloading**: Vite dev server with Express integration
- **TypeScript**: Full TypeScript support across all layers
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, etc.)
- **Error Handling**: Runtime error overlay for development

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete UI component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant management for components

## Frontend Libraries
- **React**: Core framework with hooks and modern patterns
- **React Router**: Client-side routing and navigation
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation and formatting

## Backend Dependencies
- **Express.js**: Web framework for Node.js
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database provider
- **Zod**: Schema validation library
- **TSX**: TypeScript execution for development

## Development Tools
- **Vite**: Build tool and dev server with React plugin
- **TypeScript**: Type system for JavaScript
- **ESBuild**: Fast JavaScript bundler for server builds
- **PostCSS**: CSS processing with Tailwind CSS integration

## Replit Integration
- **Vite Plugin**: Runtime error modal for development
- **Cartographer**: Replit-specific development tools (development only)
- **Dev Banner**: Replit development environment indicator