"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
// The signature now expects (prevState, formData) so it can be used with useActionState
export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // Basic validation - return the error directly rather than redirecting
  if (!username || !password) {
    return { error: "Username and password are required",enteredValues:{username,password} };
  }

  // Construct the base URL for the API endpoint request
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  let data;

  try {
    // Trigger the endpoint
    const res = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch /api/login endpoint:", error);
    return { error: "An internal server error occurred",enteredValues:{username,password} };
  }

  // Return the endpoint validation error directly
  if (!data.success) {
    return { error: data.message || "Invalid credentials",enteredValues:{username,password} };
  }

  if (data.token) {
    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });
  }

  redirect("/dashboard");
}
