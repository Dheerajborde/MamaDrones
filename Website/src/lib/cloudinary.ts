import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagePublicIds = [
  'drone1_vf8zhm',
  'repairing_uokl10',
  'part_namiqw',
  'teaching_xcpitk'
];

export const getCloudinaryImages = async () => {
  try {
    const images = await Promise.all(
      imagePublicIds.map(async (publicId) => {
        const result = await cloudinary.api.resource(publicId);
        return {
          url: result.secure_url,
          title: result.context?.custom?.caption || '',
          description: result.context?.custom?.alt || '',
        };
      })
    );
    return images;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return [];
  }
};

