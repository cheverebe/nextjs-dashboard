import { Article } from '@/types/Article';
import { NewsPageClient } from './news-page-client';
import axios from 'axios';
import { NewsletterSubscription } from '@/components/NewsletterSubscription';

async function getArticles(page: number): Promise<ApiResponse<Article>> {
  return (
    await axios.get(
      process.env.BACKEND_URL +
        '/api/news/newsletters/1/articles/?page=' +
        page,
    )
  ).data;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page) || 1;
  const response = await getArticles(page);
  const articles = response.results;
  const pageSize = 12;
  const totalPages = response.count / pageSize;

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Latest News</h1>
      <NewsPageClient
        articles={articles}
        totalPages={totalPages}
        currentPage={page}
      />
      <NewsletterSubscription />
    </div>
  );
}
