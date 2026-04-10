# Margi Papabi Agro Products

## Project Overview

Margi Papabi Agro Products (Marg's Farm) is a modern, responsive landing page website built for showcasing agricultural products and services. The site highlights farm offerings including various types of fertilizers (compost, liquid manure, etc.), crop services (maize, tomato), and promotional content.

**Main Features:**
- Hero section with compelling visuals and calls-to-action
- About section with stats and descriptive text
- Types of Fertilizer/Services showcase
- Promotion/Pricing sections
- Responsive Navbar and Footer
- Smooth scrolling and animations (AOS)
- Accessibility powered by the integrated **Boafo accessibility widget**, making the site usable for all users including those with disabilities

**Tech Stack:**
- React 18 with React Router DOM
- Vite (build tool)
- TypeScript
- TailwindCSS (styling)
- AOS (animations), Swiper (carousels)
- boafo-accessibility-widget

## How to Get Your Boafo API Key

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in
3. Navigate to your dashboard
4. Retrieve your API key from the dashboard

## Boafo Widget Integration Guide

Follow the [official Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing) for detailed setup and customization instructions.

## Setup Instructions

1. Clone the repository
   ```
   git clone <repository-url>
   cd margsfarm
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Copy `.env.example` to `.env` (create if not exists)
   ```
   cp .env.example .env
   ```

4. Add your Boafo API key to `.env`:
   ```
   VITE_BOAFO_API_KEY=your_boafo_api_key_here
   ```

5. Start the development server
   ```
   npm run dev
   ```

6. Open your browser to `http://localhost:5173` (or the port shown) and verify the Boafo widget loads in the bottom-right corner.

## Build for Production

```
npm run build
npm run preview
```

**Note:** Ensure your `.env` file is not committed (already in `.gitignore`). The Boafo widget requires the `VITE_BOAFO_API_KEY` environment variable to function.

