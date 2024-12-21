import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { denoiseImageAPI } from '../services/api';

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [denoisedImage, setDenoisedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setDenoisedImage(null);
    setIsLoading(true);

    try {
      // Show preview of uploaded image
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const base64Image = e.target.result as string;
          setSelectedImage(base64Image);
          
          // Send to Colab API for processing
          const processedImage = await denoiseImageAPI(base64Image);
          setDenoisedImage(processedImage);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image');
    } finally {
      setIsLoading(false);
    }
  };

  // Rest of your component remains the same...
}