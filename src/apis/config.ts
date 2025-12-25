// API Configuration and Types for My Dummy Travel API
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  version: process.env.NEXT_PUBLIC_API_VERSION as string,
  token: process.env.NEXT_PUBLIC_API_TOKEN as string,
  endpoints: {
    articles: process.env.NEXT_PUBLIC_ARTICLES_ENDPOINT as string,
    comments: process.env.NEXT_PUBLIC_COMMENTS_ENDPOINT as string,
    categories: process.env.NEXT_PUBLIC_CATEGORIES_ENDPOINT as string,
    auth: process.env.NEXT_PUBLIC_AUTH_ENDPOINT as string,
    upload: process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string,
  },
  pagination: {
    defaultPageSize: parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE as string) || 10,
    defaultPage: parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE as string) || 1,
  },
} as const;

// API Types based on the Strapi documentation
export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cover_image_url: string;
  category: number | Category;
  user?: User;
  comments?: Comment[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Comment {
  id: number;
  documentId: string;
  content: string;
  user: User;
  article: number | Article;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

// API Request/Response types
export interface CreateArticleRequest {
  data: {
    title: string;
    description: string;
    cover_image_url: string;
    category: number;
  };
}

export interface UpdateArticleRequest {
  data: Partial<{
    title: string;
    description: string;
    cover_image_url: string;
    category: number;
  }>;
}

// Query parameters for articles list
export interface ArticlesQueryParams extends Record<string, unknown> {
  'pagination[page]'?: number;
  'pagination[pageSize]'?: number;
  'populate[comments][populate][user]'?: string;
  'populate[user]'?: string;
  'populate[category]'?: string;
  'filters[title][$eqi]'?: string;
  'filters[category][name][$eqi]'?: string;
  populate?: string;
}

// Helper function to build full API URL
export const buildApiUrl = (endpoint: string, params?: Record<string, unknown>): string => {
  const url = new URL(`${API_CONFIG.baseUrl}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  
  return url.toString();
};

// Helper function to get authorization headers
export const getAuthHeaders = () => ({
  'Authorization': `Bearer ${API_CONFIG.token}`,
  'Content-Type': 'application/json',
});