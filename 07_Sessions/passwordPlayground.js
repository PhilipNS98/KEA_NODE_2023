import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$Qw9Y9lqIwKp8i.0gp9fVyeJK7SQBgEaxeSuCjLz9nc33u.VSpRzZC";

const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);