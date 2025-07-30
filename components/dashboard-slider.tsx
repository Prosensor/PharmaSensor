"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const dashboardImages = [
  {
    src: "/Capture d'écran 2025-07-21 092931.png",
    alt: "Dashboard PharmaSensor - Vue d'ensemble",
    title: "Vue des graphiques"
  },
  {
    src: "/image.png",
    alt: "Dashboard PharmaSensor - Vue d'ensemble",
    title: "Vue d'ensemble du dashboard"
  },
  {
    src: "/Capture d'écran 2025-07-21 092702.png",
    alt: "Dashboard PharmaSensor - Configuration",
    title: "Configuration des sondes"
  },
  {
    src: "/Capture d'écran 2025-07-21 092605.png",
    alt: "Dashboard PharmaSensor - Liste des sondes",
    title: "Liste des sondes"
  }
];

export default function DashboardSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === dashboardImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change d'image toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === dashboardImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? dashboardImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 overflow-hidden">
      <div className="relative h-[500px] w-full rounded-lg border border-gray-200 overflow-hidden">
        {dashboardImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain bg-gray-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image title overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {dashboardImages[currentImageIndex].title}
          </h3>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {dashboardImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-green-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Features grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Vue d'ensemble</h4>
          <p className="text-sm text-gray-600">Visualisez l'état de tous vos capteurs sur une seule page</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Graphiques détaillés</h4>
          <p className="text-sm text-gray-600">Analysez les tendances avec des graphiques interactifs</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Gestion des alertes</h4>
          <p className="text-sm text-gray-600">Configurez et gérez vos alertes en quelques clics</p>
        </div>
      </div>
    </div>
  );
} 