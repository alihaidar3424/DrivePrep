export type GuidelineSourceLink = {
  labelEn: string;
  labelUr: string;
  url: string;
};

export type GuidelineSeed = {
  slug: string;
  titleEn: string;
  titleUr: string;
  excerptEn: string;
  excerptUr: string;
  contentEn: string;
  contentUr: string;
  category: string;
  sortOrder: number;
  imageUrl?: string;
  imageAltEn?: string;
  imageAltUr?: string;
  sourceEn?: string;
  sourceUr?: string;
  sourceLinks?: GuidelineSourceLink[];
};
