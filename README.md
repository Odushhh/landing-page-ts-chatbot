# Tech Support Chatbot Landing Page

This repository contains the landing page for the Tech Support Chatbot, an AI-powered assistant designed to help users solve various programming challenges. The landing page showcases the features, pricing tiers, and allows users to join a waitlist for early access.

See the Tech Support Chatbot here:
> [GitHub repo w/ Tech Support Chatbot] (https://github.com/Odushhh/tech-support-chatbot)
> [Tech Support Chatbot LIVE] (https://techsupportchatbot.vercel.app/)


## Technologies Used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** for icons
- **Vite** for development and build tooling
- **Nodemailer** for email notifications
- **Typeform** for the Wailtist

## Running the project locally:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone repo:

   ```bash
   git clone https://github.com/yourusername/landing-page-ts-chatbot.git
   cd landing-page-ts-chatbot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start development server:

   ```bash
   npm run dev
   ```

2. Check `http://localhost:3000` on your browser to view the application.


### Backend Setup

For email notifications for the waitlist, you need to set up a backend server. The provided `server.js` file uses Express and Nodemailer to send email notifications.


1. Navigate to the backend directory (if applicable) and install the required packages:

   ```bash
   npm install express nodemailer body-parser
   ```

2. Update the email credentials in `server.js` with your own email and password.

3. Start the backend server:

   ```bash
   node server.js
   ```

Alternatively, you can create a Typeform waitlist and use it to track visitors to your site
