# Video Website Project

Welcome to the Video Website Project! This is a full-stack web application built using Redux Toolkit, RTK Query, Vite, React, and JSON Server. The app empowers users to view, add, edit, and delete videos. It also intelligently suggests related videos based on the title of the video.

## Features

- **Related Video based on Title:** The app smartly recommends similar videos based on the title of the video.
- **Video Details:** Comprehensive details of each video, providing a rich user experience.
- **Edit Video Details:** Users can effortlessly update video information.
- **Delete Video:** Easy deletion of videos.
- **Add New Video -cache revalidation:** Seamless addition of new videos, with automatic cache revalidation.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Tanzimhossain222/video-website
```

2. **Navigate to the 'server' directory and install dependencies:**

```bash
cd server
yarn install
```

3. **Start the mock JSON server:**

```bash
yarn start
``` 

   **Note:** The server will run on port 9000.

4. **Open a new terminal, navigate to the root directory of the project, and install dependencies for the Vite React app:**

```bash
cd ..
yarn install
```

5. **Start the development server:**

```bash
yarn dev
```

6. **Access the app at [http://localhost:5173](http://localhost:5173).**

## Note

This project uses a mock JSON server in the 'server' directory to simulate a real server. Make sure to run the server first before starting the app.

Feel free to reach out if you have any questions or need further assistance!