# Overview

This is an Astro-based static site generator project for "سطحة جدة أبو فهد" (Jeddah Abu Fahd Flatbed Service), a professional towing and vehicle transport service in Jeddah, Saudi Arabia. The website is fully optimized for SEO, performance, and user experience with comprehensive Arabic RTL support. The project follows modern web development best practices with advanced SEO optimization, geographic targeting, and performance enhancements.

**Latest Updates (Sept 2025):**
- ✅ Advanced SEO optimization with geo-targeting and structured data
- ✅ Performance optimization with lazy loading and image compression
- ✅ Enhanced Schema.org markup for local business visibility  
- ✅ Modern error handling with custom 404 page
- ✅ Optimized file structure and removed unnecessary assets

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Astro 5.13.5**: Chosen as the primary framework for static site generation with component islands architecture
- **Component-based Architecture**: Leverages Astro's partial hydration model for optimal performance
- **Static Generation**: Build-time rendering for fast loading and SEO optimization

## Styling System
- **Tailwind CSS 4.1.12**: Utility-first CSS framework for rapid UI development
- **Astro Tailwind Integration**: Official @astrojs/tailwind plugin for seamless integration
- **Component Styling**: Scoped styles within Astro components with Tailwind utilities

## Content Management
- **Markdown Support**: Built-in markdown processing through @astrojs/markdown-remark
- **Syntax Highlighting**: Integrated Shiki and Prism support for code blocks
- **Content Collections**: Astro's type-safe content management system

## Build System
- **Astro Compiler**: Custom Rust-based compiler for optimal build performance
- **Asset Optimization**: Built-in image optimization and asset bundling
- **Static Output**: Generates fully static HTML/CSS/JS for deployment

## SEO and Discoverability
- **Sitemap Generation**: Automatic sitemap.xml generation
- **Robots.txt**: Configured for search engine crawling with appropriate directives
- **Meta Management**: Built-in SEO optimization features

# Technical Enhancements

## SEO Optimization Features
- **Advanced Meta Tags**: Comprehensive meta information including geo-targeting for Jeddah, Saudi Arabia
- **Schema.org Markup**: Rich structured data for local business with services, ratings, and contact information
- **Geographic Targeting**: ICBM coordinates and geo tags for local search optimization
- **Enhanced Open Graph**: Complete social media sharing optimization
- **Updated Sitemap**: XML sitemap with image references and current dates

## Performance Optimizations
- **Optimized Images**: Custom OptimizedImage component with lazy loading and responsive sizing
- **Reduced File Size**: Removed unnecessary assets and cleaned up project structure
- **Preconnect Resources**: Optimized external resource loading
- **Deferred Scripts**: Non-blocking JavaScript loading
- **Modern Favicon**: SVG-based icon for better scaling

## User Experience Improvements
- **Custom 404 Page**: Professional error handling with navigation options
- **Mobile Optimization**: Enhanced mobile experience with proper viewport settings
- **RTL Support**: Full Arabic right-to-left text support
- **Accessibility**: Improved alt texts and semantic HTML structure

## External Dependencies

## Core Framework Dependencies
- **Astro**: Main static site generator framework
- **@astrojs/compiler**: Rust-based compilation engine
- **@astrojs/internal-helpers**: Core Astro utilities

## Styling Dependencies
- **Tailwind CSS**: Primary styling framework
- **@astrojs/tailwind**: Official Astro integration for Tailwind

## Content Processing
- **@astrojs/markdown-remark**: Markdown processing pipeline
- **Remark/Rehype Ecosystem**: Markdown and HTML processing plugins
- **Shiki**: Syntax highlighting engine
- **GitHub Slugger**: URL slug generation

## Utility Libraries
- **js-yaml**: YAML parsing for frontmatter
- **smol-toml**: TOML configuration parsing
- **import-meta-resolve**: Module resolution utilities

## Deployment Target
- **Static Hosting**: Optimized for CDN deployment (domain: jeddah-abufahd-flatbed.com)
- **SEO Ready**: Fully optimized with advanced robots.txt, sitemap, and local business structured data
- **Performance Ready**: Optimized for fast loading with image optimization and resource preloading