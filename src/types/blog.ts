import { Category } from "./category";

export type Blog = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    category: Array<Category>;
    contents: Array<Content>;
    featured_image: FeaturedImage;
    description: string;
    slug: string;
    writer: Array<any>;
    related_blogs: Array<any>;
};

type FeaturedImage = {
    url: string;
};

type Content = {
    fieldId: string;
    richEditor?: string;
    html?: string;
};
