import dbConnect from "../dbConnect";
import User from "../models/User";
import bcrypt from "bcryptjs";


export async function validateUser(username?: string, password?: string) {
  if (!username || !password) {
    return { success: false, message: "Username and password are required" };
  }

  try {
    await dbConnect();
    
    const user = await User.findOne({ username });
    
    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return { success: false, message: "Invalid credentials" };
    }
    
    return { 
      success: true, 
      user: { 
        id: user._id.toString(), 
        username: user.username 
      } 
    };
  } catch (error) {
    console.error("Authentication error:", error);
    return { success: false, message: "An error occurred during authentication" };
  }
}
