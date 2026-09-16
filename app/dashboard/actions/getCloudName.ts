"use server";

export async function getCloudinaryCloudName() {
    return process.env.CLOUDINARY_CLOUD_NAME;
}
