'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Article } from '@/types/Article';
import { ArticleCard } from '@/components/ArticleCard';
import { PaginationControls } from '@/components/PaginationControls';

import axios from 'axios';

interface NewsPageClientProps {
  articles: Article[];
  totalPages: number;
  currentPage: number;
}

async function getArticles(): Promise<ApiResponse<Article>> {
  return (
    await axios.get('http://localhost:8000/api/news/newsletters/1/articles/')
  ).data;
}

export function NewsPageClient({
  articles,
  totalPages,
  currentPage,
}: NewsPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
