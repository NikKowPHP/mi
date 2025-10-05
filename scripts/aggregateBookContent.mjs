import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.resolve('src/content/book');
const outputDir = path.resolve('src/lib/data/book-generated');

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function parseMarkdownFile(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked.parse(content);
  return { ...data, content: htmlContent };
}

async function aggregateLanguage(lang) {
  const langDir = path.join(contentDir, lang);
  const metaPath = path.join(langDir, '_meta.json');

  if (!(await fileExists(metaPath))) return null;

  const meta = JSON.parse(await fs.readFile(metaPath, 'utf-8'));
  const allSections = [];

  for (const item of meta.readingOrder) {
    const itemPath = path.join(langDir, item);
    let isDirectory = false;
    try {
        const stats = await fs.stat(itemPath);
        isDirectory = stats.isDirectory();
    } catch (e) {
        // Path doesn't exist, will be handled below as a file
    }

    if (isDirectory) {
        const files = (await fs.readdir(itemPath)).filter(f => f.endsWith('.md')).sort();
        for (const file of files) {
            const content = await parseMarkdownFile(path.join(itemPath, file));
            const type = item.endsWith('s') ? item.slice(0, -1) : item;
            allSections.push({ id: path.parse(file).name, type, ...content });
        }
    } else {
        const filePath = `${itemPath}.md`;
        if (await fileExists(filePath)) {
            const content = await parseMarkdownFile(filePath);
            allSections.push({ id: path.basename(item), type: path.dirname(item), ...content });
        } else {
            console.warn(`[aggregateBookContent] Could not find content for '${item}' in language '${lang}'.`);
        }
    }
  }
  return { title: meta.title, sections: allSections };
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  for (const lang of ['en', 'fr']) {
    const finalBookObject = await aggregateLanguage(lang);
    if (finalBookObject) {
      const outputFileContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\nexport const book = ${JSON.stringify(finalBookObject, null, 2)};`;
      await fs.writeFile(path.join(outputDir, `${lang}.ts`), outputFileContent);
    }
  }
  console.log('✅ Full book content from Markdown aggregated successfully.');
}

main().catch(error => {
    console.error("Error aggregating book content:", error);
    process.exit(1);
});
      