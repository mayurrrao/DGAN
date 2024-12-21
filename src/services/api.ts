export async function denoiseImageAPI(imageBase64: string) {
  // Replace with your Colab notebook's ngrok URL
  const API_URL = 'YOUR_NGROK_URL/denoise';
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64
      })
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.denoised_image;
  } catch (error) {
    throw new Error('Failed to process image: ' + error);
  }
}