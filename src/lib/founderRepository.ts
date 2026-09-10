import { Founder } from '@/types/founder';
import { initialFoundersData } from '@/data/founders';

export class FounderRepository {
  /**
   * Get all founder profiles.
   */
  static getAllFounders(): Founder[] {
    return initialFoundersData;
  }

  /**
   * Get published founder profiles sorted by display order.
   */
  static getPublishedFounders(): Founder[] {
    return initialFoundersData
      .filter((f) => f.isPublished)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }

  /**
   * Get a founder profile by slug.
   */
  static getFounderBySlug(slug: string): Founder | undefined {
    return initialFoundersData.find((f) => f.slug === slug);
  }

  /**
   * Get primary founder (Pritam Kumar).
   */
  static getPrimaryFounder(): Founder | undefined {
    return this.getFounderBySlug('pritam-kumar') || initialFoundersData.find((f) => f.isFounder);
  }

  /**
   * Get co-founder (Anshu Kumar).
   */
  static getCoFounder(): Founder | undefined {
    return this.getFounderBySlug('anshu-kumar') || initialFoundersData.find((f) => f.isCoFounder);
  }
}
