import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	return token;
};
export const setCookie = (res, token) => {
	res.cookie("token", token, {
		httpOnly: true,
		secure: true,
		// process.env.NODE_ENV === "production",
		sameSite: "none",
		maxAge: 7 * 24 * 60 * 60 * 1000,
		credentials: true // Include the cookie in cross-origin requests
	});

	return true;
};