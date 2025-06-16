// api/message.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      message: "Hello from the Kumar API! This is your message.js file.",
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
