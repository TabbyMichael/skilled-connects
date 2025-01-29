import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm mb-8">
            <span className="text-foreground">{post.author}</span>
            <time className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          <div className="text-foreground whitespace-pre-wrap">{post.content}</div>
        </article>
      </div>
    </div>
  );
}