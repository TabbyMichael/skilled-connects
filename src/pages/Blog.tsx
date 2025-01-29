import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}



export default function Blog() {
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="no-underline">
                  <h2 className="text-xl font-semibold text-foreground hover:text-primary cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">{post.author}</span>
                  <time className="text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-16">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <section className="bg-primary/5 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground">
              Get the latest insights on tech freelancing delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                  aria-label="Email address"
                />
              </div>
              <Button type="submit" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}