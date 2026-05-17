import { NextResponse } from "next/server";
import { validateUser } from "../../../lib/auth/validateUser";
import { createToken } from "../../../lib/auth/createToken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // 1. Validate the user credentials
    const validationResult = await validateUser(username, password);

    if (!validationResult.success || !validationResult.user) {
      return NextResponse.json(
        { success: false, message: validationResult.message || "Invalid credentials" },
        { status: 401 }
      );
    }

    // 2. Create the JWT token
    const token = await createToken({
      id: validationResult.user.id,
      username: validationResult.user.username,
    });

    // 3. Prepare and return the response with the token
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: validationResult.user,
        token 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
