import imageCompression from 'browser-image-compression';

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const options = {
        maxSizeMB: 0.5,         
        maxWidthOrHeight: 1920,  
        useWebWorker: true,
        fileType: 'image/webp',
        initialQuality: 75,
    };

    try {
        const compressedFile = await imageCompression(file, options);
        
        file = compressedFile; 
    } catch (error) {
        console.error('Compression error:', error);
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "marble"); 

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        throw new Error("Cloudinary cloud name is missing from environment variables.");
    }

    // 2. Make the request to Cloudinary's REST API
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Failed to upload to Cloudinary");
        }

        const optimizedUrl = data.secure_url.replace(
            '/upload/', 
            '/upload/f_webp,q_auto/' 
        );

        // Return the optimized, secure URL
        return optimizedUrl;

    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw error; 
    }
};