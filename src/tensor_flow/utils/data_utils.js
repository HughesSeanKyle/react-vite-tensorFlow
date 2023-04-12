import * as tf from '@tensorflow/tfjs';
import image1 from '../../data/test/cats/cats_0.jpg';

export async function loadImage(imagePath) {
	const img = new Image();
	img.src = imagePath;
	await img.decode();
	const tensor = await tf.browser.fromPixels(img);
	console.log('tensor', tensor);
	return tensor;
}
