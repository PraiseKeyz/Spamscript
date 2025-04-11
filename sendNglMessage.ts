import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req: Request, res: Response): Promise<void> => {
  const { link, message, count } = req.body;

  // Check if the link, message, and count are provided
  if (!link || !message || !count) {
    res.status(400).json({ error: 'Please provide link, message, and count' });
    return;
  }

  // Extract the username from the provided NGL link
  const usernameMatch = link.match(/https:\/\/ngl\.link\/([a-zA-Z0-9_-]+)/);
  if (!usernameMatch) {
    res.status(400).json({ error: 'Invalid NGL link' });
    return;
  }
  const username = usernameMatch[1]; // Extracted username from the link

  try {
    // Send the message 'count' number of times
    for (let i = 0; i < count; i++) {
      const res = await axios.post('https://ngl.link/api/submit', new URLSearchParams({
        username: username,
        question: message,
        deviceId: 'web', // spoofed device
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://ngl.link',
          'Referer': `https://ngl.link/${username}`,
        },
      });

      console.log(`Message sent ✅:`, res.data);
    }

    res.json({ success: true, message: `Sent ${count} messages to ${link}` });
  } catch (err: any) {
    console.error('Failed to send message:', err.message);
    res.status(500).json({ error: 'Failed to send messages' });
  }
});

app.listen(PORT, () => {
  console.log(`NGL sender server running at ${PORT}`);
});
