# SQL Query Mock Application - README

## Overview

This project is a web-based SQL query mock application that allows users to interact with datasets using predefined queries and a custom query editor. It includes a voice input feature for hands-free query execution, a reset button to explore other datasets, and a visually engaging UI with collapsible components. Additionally, the application incorporates fun elements like a random joke generator to keep the experience refreshing.
- Deployement = https://sql-playground-omega.vercel.app/
- Video Walkthrough = https://drive.google.com/file/d/1_rLBKBCKiZNrqWMS0z9u_so6kRxb2kiA/view 
## Features

### 1. **Predefined Queries**

- Users can execute a set of predefined SQL queries instantly without manual input.
- Helps beginners quickly understand how SQL queries work.

### 2. **Custom Query Editor**

- A fully functional query editor where users can write and execute their own SQL queries.
- Provides syntax highlighting and error feedback for better usability.

### 3. **Voice Input for Query Execution**

- Users can use their microphone to input SQL queries via voice commands.
- Converts speech to text, reducing manual effort.

### 4. **Reset Button to Explore Other Datasets**

- Allows users to reset the current dataset and switch to a different one effortlessly.
- Prevents the need to refresh the entire page for dataset changes.

### 5. **Collapsible Components**

- Improves UI organization by allowing users to collapse or expand different sections.
- Keeps the interface clean and easy to navigate.

### 6. **Copy Query to Clipboard**

- One-click functionality to copy the current query to the clipboard for easy sharing or reuse.

### 7. **Vibrant Backgrounds and Themes**

- Eye-catching UI with a variety of background themes for personalization.
- Enhances user experience with visually appealing elements.

### 8. **Random Joke Generator for Refreshment**

- A fun feature that displays a random joke to lighten up the user’s mood.
- Helps make query testing more engaging and enjoyable.

### 9. **Dynamic Background  for Reduced Eye Strain**

- Provides a darker theme option to minimize eye stress during prolonged usage.
- Suitable for working in low-light environments.

## Tech Stack

- **Frontend:** Vite + React.js

- **Styling:** CSS (No Tailwind used as per guidelines)

- **Voice Input:** Web Speech API

- **Deployment:** Vercel
## Additional Plugins & Libraries Used
- **@tiptap/react** – A powerful headless text editor for the query editor.

- **@tiptap/starter-kit** – Provides a set of default editor extensions for TipTap.

- **framer-motion** – Handles smooth UI animations.

- **papaparse** – Parses CSV files for dataset handling.
## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Access the application at `http://localhost:3000`

## Performance Optimizations
- Minimized unnecessary re-renders by properly structuring React state using One Single UseState inside App.jsx

## Measuring Load Time

- Used Chrome DevTools(LightHouse) to analyze page load time.
- Optimized by reducing unnecessary page renders and bundling assets efficiently.
- ![image](https://github.com/user-attachments/assets/28b2e305-5812-49d4-a453-8cc179442a51)


## Additional Notes

- The application is currently optimised only for Laptops.
- External libraries and dependencies used are mentioned in `package.json`.
- Supports multiple datasets through dynamic loading.

This project is built with a focus on usability, fun, and performance. Happy coding! 🚀
Hope you enjoyed it :)
Thank you for your time :)

