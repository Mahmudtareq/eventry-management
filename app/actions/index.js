"use server";

const { createUser } = require("@/db/queries");
const { redirect } = require("next/navigation");

async function registerUser(formData) {
  const userObj = Object.fromEntries(formData);
  const user = await createUser(userObj);
  
  redirect("/login");
}

export { registerUser };
