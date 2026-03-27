# Margi Papabi Agro Products

## Project Overview

This is a modern, responsive website for **Margi Papabi Agro Products**, an agricultural business specializing in high-quality fertilizers and agro products. The website serves as a digital presence for the company, showcasing their products, mission, and providing a way for customers to get in touch.

### Purpose
The website aims to:
- Present the company's range of fertilizer products to potential customers
- Provide information about the business and its commitment to quality agricultural solutions
- Enable customers to contact the business for inquiries and orders
- Create an accessible and user-friendly experience for all visitors

### Main Features
- **Hero Section**: Eye-catching landing area with company tagline and call-to-action
- **About Section**: Information about the company's mission and values
- **Product Showcase**: Display of different fertilizer types with descriptions
- **Promotional Section**: Featured offers and promotions
- **Contact Form**: Easy way for customers to reach out
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: AOS (Animate on Scroll) effects for enhanced user experience
- **Accessibility Widget**: Boafo accessibility widget to ensure the site is usable by everyone

### Technologies Used
- **React 18** - Frontend JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **AOS (Animate on Scroll)** - Library for scroll animations
- **Swiper** - Modern mobile touch slider for promotional carousels
- **React Icons** - Popular icons library for React applications
- **React Router DOM** - Declarative routing for React applications
- **Boafo Accessibility Widget** - Web accessibility tool to make the site accessible to all users

## How to Get Your Boafo API Key

To use the Boafo accessibility widget on this site, you'll need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Copy your API key from the dashboard

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo accessibility widget into your project, please refer to the official integration guide:

[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/margsfarm.git
   cd margsfarm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and replace the placeholder with your actual Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_boafo_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

To create a production build:
```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
# or
pnpm run preview
```

## Project Structure

```
margsfarm/
├── app/                    # Next.js app directory (if using Next.js)
│   ├── components/         # Reusable React components
│   └── layout.tsx          # Root layout component
├── src/                    # Main source directory
│   ├── assets/             # Images, logos, and SVG files
│   ├── components/         # Shared React components
│   ├── constants/          # Constants and configuration
│   ├── pages/              # Page components
│   │   └── landing/        # Landing page and its components
│   ├── types/              # TypeScript type definitions
│   ├── App.css             # Global application styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global CSS styles
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── .env                    # Environment variables (not tracked by Git)
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── tsconfig.json           # TypeScript configuration
```

## License

This project is private and proprietary to Margi Papabi Agro Products.

## Support

For any questions or issues, please contact the development team or visit [boafo.co](https://boafo.co) for accessibility widget support.