import { useEffect } from "react";

const BoafoWidget = () => {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_BOAFO_API_KEY;
    
    if (!apiKey) {
      console.warn("Boafo API key not found. Please set VITE_BOAFO_API_KEY in your .env file.");
      return;
    }

    // Load the Boafo widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js";
    script.setAttribute("data-api-key", apiKey);
    script.defer = true;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default BoafoWidget;