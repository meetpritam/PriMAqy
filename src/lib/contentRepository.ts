import { Article, Author, Category, Tag } from '@/types/article';
import { articlesData, categoriesData, tagsData } from '@/data/articles';
import { authorsData } from '@/data/authors';

export class ContentRepository {
  /**
   * Returns all published articles sorted by publication date (newest first).
   */
  static getPublishedArticles(): Article[] {
    return articlesData
      .filter((article) => article.status === 'published')
      .map((article) => this.attachAuthor(article))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  /**
   * Returns featured published article(s).
   */
  static getFeaturedArticles(): Article[] {
    return this.getPublishedArticles().filter((article) => article.featured);
  }

  /**
   * Returns a single published article by slug.
   */
  static getArticleBySlug(slug: string): Article | undefined {
    const article = articlesData.find(
      (art) => art.slug === slug && art.status === 'published'
    );
    return article ? this.attachAuthor(article) : undefined;
  }

  /**
   * Returns articles filtering by category slug.
   */
  static getArticlesByCategory(categorySlug: string): Article[] {
    const category = categoriesData.find((cat) => cat.slug === categorySlug);
    if (!category) return [];

    return this.getPublishedArticles().filter(
      (art) => art.category.toLowerCase() === category.name.toLowerCase()
    );
  }

  /**
   * Returns articles filtering by tag slug.
   */
  static getArticlesByTag(tagSlug: string): Article[] {
    const tag = tagsData.find((t) => t.slug === tagSlug);
    if (!tag) return [];

    return this.getPublishedArticles().filter((art) =>
      art.tags.some((t) => t.toLowerCase() === tag.name.toLowerCase())
    );
  }

  /**
   * Returns articles written by author slug.
   */
  static getArticlesByAuthor(authorSlug: string): Article[] {
    const author = authorsData.find((a) => a.slug === authorSlug);
    if (!author) return [];

    return this.getPublishedArticles().filter((art) => art.authorId === author.id);
  }

  /**
   * Returns related articles based on matching category or shared tags.
   */
  static getRelatedArticles(currentSlug: string, limit = 3): Article[] {
    const current = this.getArticleBySlug(currentSlug);
    if (!current) return [];

    const allPublished = this.getPublishedArticles().filter((art) => art.slug !== currentSlug);

    return allPublished
      .filter(
        (art) =>
          art.category === current.category ||
          art.tags.some((t) => current.tags.includes(t))
      )
      .slice(0, limit);
  }

  /**
   * Searches published articles across title, excerpt, content, category, and tags.
   */
  static searchArticles(query: string): Article[] {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    return this.getPublishedArticles().filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.content.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  /**
   * Returns all available categories.
   */
  static getCategories(): Category[] {
    return categoriesData;
  }

  /**
   * Returns all available tags.
   */
  static getTags(): Tag[] {
    return tagsData;
  }

  /**
   * Returns author by slug.
   */
  static getAuthorBySlug(slug: string): Author | undefined {
    return authorsData.find((a) => a.slug === slug);
  }

  private static attachAuthor(article: Article): Article {
    const author = authorsData.find((a) => a.id === article.authorId);
    return { ...article, author };
  }
}
