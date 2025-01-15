'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Article } from '@/types/Article';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ExternalLink } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}
function getDomainName(hostName: string) {
  return hostName.split('/')[2];
}
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 w-full">
          <Image
            src={article.image_url || '/placeholder.svg?height=300&width=400'}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-white">
              {getDomainName(article.url)}
            </p>
          </div>
        </div>
      </Link>
      <CardContent className="flex-grow p-4">
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="mb-2 line-clamp-2 text-lg font-bold">
            {article.title}
          </h3>
        </Link>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {article.snippet}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          {new Date(article.published_at).toLocaleDateString()}
        </div>
        <Link
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-primary/80"
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
