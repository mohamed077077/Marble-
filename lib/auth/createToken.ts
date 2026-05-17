import { SignJWT } from "jose";

export async function createToken(payload: { id: string; username: string }) {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(secret);
}