import { 
  API_CONFIG, 
  buildApiUrl, 
  getAuthHeaders,
  Article,
  Category,
  Comment,
  StrapiResponse,
  StrapiError,
  CreateArticleRequest,
  UpdateArticleRequest,
  ArticlesQueryParams
} from './config';

// Generic API client class
class ApiClient {
  private async request<T>(
    url: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const config: RequestInit = {
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData: StrapiError = await response.json();
        throw new Error(errorData.error.message || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  // Articles API methods
  async getArticles(params?: ArticlesQueryParams): Promise<StrapiResponse<Article[]>> {
    const url = buildApiUrl(API_CONFIG.endpoints.articles, params);
    return this.request<StrapiResponse<Article[]>>(url);
  }

  async getArticleById(documentId: string): Promise<StrapiResponse<Article>> {
    const url = buildApiUrl(`${API_CONFIG.endpoints.articles}/${documentId}`);
    return this.request<StrapiResponse<Article>>(url);
  }

  async createArticle(article: CreateArticleRequest): Promise<StrapiResponse<Article>> {
    const url = buildApiUrl(API_CONFIG.endpoints.articles);
    return this.request<StrapiResponse<Article>>(url, {
      method: 'POST',
      body: JSON.stringify(article),
    });
  }

  async updateArticle(
    documentId: string, 
    article: UpdateArticleRequest
  ): Promise<StrapiResponse<Article>> {
    const url = buildApiUrl(`${API_CONFIG.endpoints.articles}/${documentId}`);
    return this.request<StrapiResponse<Article>>(url, {
      method: 'PUT',
      body: JSON.stringify(article),
    });
  }

  async deleteArticle(documentId: string): Promise<void> {
    const url = buildApiUrl(`${API_CONFIG.endpoints.articles}/${documentId}`);
    return this.request<void>(url, {
      method: 'DELETE',
    });
  }

  // Categories API methods
  async getCategories(): Promise<StrapiResponse<Category[]>> {
    const url = buildApiUrl(API_CONFIG.endpoints.categories);
    return this.request<StrapiResponse<Category[]>>(url);
  }

  async getCategoryById(documentId: string): Promise<StrapiResponse<Category>> {
    const url = buildApiUrl(`${API_CONFIG.endpoints.categories}/${documentId}`);
    return this.request<StrapiResponse<Category>>(url);
  }

  // Comments API methods
  async getComments(): Promise<StrapiResponse<Comment[]>> {
    const url = buildApiUrl(API_CONFIG.endpoints.comments);
    return this.request<StrapiResponse<Comment[]>>(url);
  }

  async getCommentById(documentId: string): Promise<StrapiResponse<Comment>> {
    const url = buildApiUrl(`${API_CONFIG.endpoints.comments}/${documentId}`);
    return this.request<StrapiResponse<Comment>>(url);
  }

  // Authentication methods (basic structure)
  async login(credentials: { email: string; password: string }) {
    const url = buildApiUrl(`${API_CONFIG.endpoints.auth}/local`);
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: { 
    username: string; 
    email: string; 
    password: string; 
  }) {
    const url = buildApiUrl(`${API_CONFIG.endpoints.auth}/local/register`);
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Upload methods
  async uploadFile(file: File): Promise<{ url: string; id: string; name: string; size: number }> {
    const url = buildApiUrl(API_CONFIG.endpoints.upload);
    const formData = new FormData();
    formData.append('files', file);

    return this.request(url, {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type for FormData, browser will set it with boundary
        'Authorization': `Bearer ${API_CONFIG.token}`,
      },
    });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export individual API modules for cleaner imports
export const articlesApi = {
  getAll: (params?: ArticlesQueryParams) => apiClient.getArticles(params),
  getById: (id: string) => apiClient.getArticleById(id),
  create: (article: CreateArticleRequest) => apiClient.createArticle(article),
  update: (id: string, article: UpdateArticleRequest) => apiClient.updateArticle(id, article),
  delete: (id: string) => apiClient.deleteArticle(id),
};

export const categoriesApi = {
  getAll: () => apiClient.getCategories(),
  getById: (id: string) => apiClient.getCategoryById(id),
};

export const commentsApi = {
  getAll: () => apiClient.getComments(),
  getById: (id: string) => apiClient.getCommentById(id),
};

export const authApi = {
  login: (credentials: { email: string; password: string }) => apiClient.login(credentials),
  register: (userData: { username: string; email: string; password: string }) => apiClient.register(userData),
};

export const uploadApi = {
  uploadFile: (file: File) => apiClient.uploadFile(file),
};