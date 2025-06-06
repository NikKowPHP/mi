import { projectsData } from "$lib/data/projects";

export async function GET() {
  const baseUrl = "https://mikita-kavaliou.online";

  const staticPages = [
    { url: baseUrl + "/", changefreq: "weekly", priority: "1.0" },
    { url: baseUrl + "/projects", changefreq: "daily", priority: "0.9" },
  ];

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const allPages = [...staticPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
