import * as tf from '@tensorflow/tfjs';

export async function preprocessImage(imageData: ImageData): Promise<tf.Tensor> {
  // Convert ImageData to tensor
  let tensor = tf.browser.fromPixels(imageData);
  
  // Resize to match training size (adjust 256 to match your model's input size)
  tensor = tf.image.resizeBilinear(tensor, [256, 256]);
  
  // Normalize to [-1, 1]
  tensor = tf.div(tensor, 127.5);
  tensor = tf.sub(tensor, 1);
  
  // Add batch dimension
  tensor = tensor.expandDims(0);
  
  return tensor;
}

export async function postprocessImage(tensor: tf.Tensor): Promise<ImageData> {
  // Remove batch dimension
  tensor = tensor.squeeze([0]);
  
  // Denormalize from [-1, 1] to [0, 255]
  tensor = tf.add(tensor, 1);
  tensor = tf.mul(tensor, 127.5);
  
  // Clip values to valid pixel range
  tensor = tf.clipByValue(tensor, 0, 255);
  
  // Convert to ImageData
  const imageData = await tf.browser.toPixels(tensor as tf.Tensor3D);
  return new ImageData(imageData, tensor.shape[1], tensor.shape[0]);
}