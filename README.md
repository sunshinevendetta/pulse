# Pulse AI

## Overview
Pulse AI is an advanced Web3-native application designed to bridge the gap between AI agents and decentralized ecosystems. It integrates both frontend and backend components within a unified repository for streamlined development and deployment.

## Features
- **Frontend:** Built with Next.js, Tailwind CSS, and Framer Motion for dynamic user interfaces.
- **Backend:** Powered by Node.js with Express, supporting API endpoints and AI service integrations.
- **API Services:** Seamlessly integrated with Gaia and Coinbase services.
- **Membership & Uber Booking:** Includes features for managing on-chain memberships and booking Uber rides.

## Project Structure
```
├── backend
│   ├── src
│   │   ├── controllers
│   │   └── services
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── utils
│   ├── public
│   ├── tailwind.config.ts
│   └── package.json
├── .gitignore
├── package.json
└── yarn.lock
```

## Setup Instructions
### Prerequisites
- Node.js v18+
- Yarn package manager

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sunshinevendetta/pulse.git
   cd pulse
   ```
2. **Install dependencies for both frontend and backend:**
   ```bash
   cd frontend
   yarn install
   cd ../backend
   yarn install
   ```

### Running the Application
- **Frontend:**
  ```bash
  cd frontend
  yarn dev
  ```
- **Backend:**
  ```bash
  cd backend
  yarn start
  ```

### Environment Configuration
Ensure `.env` files are correctly configured for API keys and environment-specific settings.

## Contributing
Contributions are welcome. Please fork the repository, create a new branch, and submit a pull request.

## License
MIT License

