export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS ? "Exists ✅" : "Missing ❌",
    }),
  };
}
