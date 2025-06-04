# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built with SvelteKit. It serves as a showcase for my projects, skills, and professional journey. Designed with a focus on user experience and performance, this site features dynamic routing for project details, a dark mode toggle, and optimized SEO for better discoverability.

## Features

- **Dynamic Project Pages**: Each project has its own dedicated page with detailed information, dynamically routed using slugs.
- **Responsive Design**: Optimized for seamless viewing across various devices, from desktops to mobile phones.
- **Dark Mode Toggle**: Allows users to switch between light and dark themes for a personalized browsing experience.
- **SEO Optimized**: Implements dynamic metadata for individual project pages to improve search engine visibility and social media sharing.
- **Technology Filtering**: On the projects page, filter projects by the technologies used.
- **Smooth Transitions**: Enhanced user interface with subtle animations and transitions.

## Technologies Used

- **SvelteKit**: The framework for building performant web applications.
- **Svelte**: A reactive JavaScript framework that compiles your code to small, vanilla JavaScript bundles.
- **TypeScript**: For type safety and improved code quality.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **HTML5**: Standard markup language for structuring web content.
- **CSS3**: For styling and layout.
- **Vite**: A fast build tool for modern web projects.
- **Prettier**: Code formatter for consistent code style.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/NikKowPHP/mi.git
    cd mi

    ```

2.  **Install dependencies**:

    ```bash
    npm install

    ```

3.  **Run the development server**:

    ```bash
    npm run dev

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).
    ```

## Usage

- **Home Page (`/`)**: Learn more about me and my skills.
- **Projects Page (`/projects`)**: Browse through a collection of my work. Use the technology filters to narrow down projects.
- **Individual Project Page (`/projects/[project-slug]`)**: Click on any project card to view detailed information, live demos, and source code.

## SEO Considerations

This portfolio is designed with SEO in mind:

- **Dynamic Metadata**: Each project page dynamically generates its `<title>`, `<meta name="description">`, Open Graph (`og:`) tags, and Twitter Card tags based on the project's data. This ensures that search engines and social media platforms display rich, relevant information when linking to individual projects.
- **Slug-based Routing**: Projects are routed using human-readable slugs (e.g., `/projects/my-awesome-project`) instead of IDs, which is beneficial for SEO and user experience.
- **Semantic HTML**: The site uses semantic HTML5 elements to provide better structure and meaning to content for search engines.
- **Responsive Design**: A mobile-friendly design is a key ranking factor for search engines.

To further optimize SEO:

- **Expand Project Descriptions**: Ensure that the `description` field for each project in `src/lib/data/projects.ts` is detailed, unique, and rich in keywords relevant to the project's functionality and technologies. Aim for 150-300 words for each project's `long-description` on its dedicated page.
- **Update `profileData`**: Ensure your `profileData` in `src/lib/data/profile.ts` is comprehensive and includes relevant keywords for your professional profile.
- **Replace Placeholder Images**: Use actual screenshots or high-quality thumbnails for projects to improve visual appeal and user engagement.
- **Update URLs**: Replace placeholder URLs (`https://yourdomain.com`, `https://your-portfolio-url.com`, `https://github.com/your-github/your-portfolio-repo`) with your actual deployed domain and GitHub repository links.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

```

```
