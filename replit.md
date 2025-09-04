# Overview

This is an Astro-based static site generator project configured with Tailwind CSS for styling. The project appears to be for a flatbed trucking company website (jeddah-abufahd-flatbed.com) based on the robots.txt sitemap reference. The architecture follows Astro's modern static site generation approach with component-based development and build-time optimization.

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

# External Dependencies

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
- **Static Hosting**: Optimized for CDN deployment (referenced domain: jeddah-abufahd-flatbed.com)
- **SEO Ready**: Configured with robots.txt and sitemap for search engine optimization