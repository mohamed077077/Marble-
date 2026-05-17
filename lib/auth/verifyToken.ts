import { jwtVerify } from "jose";

export async function verifyToken(token: string) {
    if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET is not defined in environment variables");
        return null;
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch {
        return null;
    }
}