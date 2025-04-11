# NGL Message Sender

This project allows users to send multiple messages to a specific NGL (Ask Me Anything) link using an Express server. The server accepts a POST request with the NGL link, message, and the number of times to send the message. It then sends the message using `axios` to NGL's API and returns a response with the success status.

## Features

- Send a custom message to an NGL profile multiple times.
- Automatically extracts the username from the NGL link.
- Includes support for spoofing headers to mimic a real web request.

## Prerequisites

Before using this script, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://npmjs.com/) (Node Package Manager)

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/PraiseKeyz/Spamscript.git
   cd Spamscript
   ```
2. Install dependencies

   ```bash
   npm install
   ```
## Usage

1. Start the server
```bash
npx ts-node sendNglMessage.ts
```
2. The server runs on port 3000 by default, you see the following mssage on your console

   ```bash
   NGL sender server running at http://localhost:3000
   ```
3.  Send a message by sending a POST request to http://localhost:3000/send with the following JSON body:
   ```bash
   {
  "link": "https://ngl.link/your-username",
  "message": "Hello from my script!",
  "count": 10
}
   ```
## Response
Upon successful submission, you will receive a response in JSON format indicating that the messages were sent:
```bash
{
  "success": true,
  "message": "Sent 10 messages to https://ngl.link/hgghh60560"
}
```

## License

This project is open source and available under the MIT License.

### Explanation:
1. **Installation & Setup**: Instructions on how to install dependencies and start the server.
2. **Usage**: How to send a `POST` request to the server to trigger the script.
3. **Response Handling**: Describes the structure of responses for successful and failed requests.
4. **Error Handling**: Explains error responses for missing or incorrect input.
5. **Development**: Outlines how others can contribute or modify the project.
6. **License**: You can change this based on the license you intend to use for your project (e.g., MIT).

Let me know if you'd like any modifications!


