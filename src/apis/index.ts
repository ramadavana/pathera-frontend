// API exports for easy importing
export * from './config';
export * from './client';

// Re-export commonly used API modules
export {
  apiClient,
  articlesApi,
  categoriesApi,
  commentsApi,
  authApi,
  uploadApi,
} from './client';

// Re-export types
export type {
  Article,
  Category,
  Comment,
  User,
  StrapiResponse,
  StrapiError,
  CreateArticleRequest,
  UpdateArticleRequest,
  ArticlesQueryParams,
} from './config';