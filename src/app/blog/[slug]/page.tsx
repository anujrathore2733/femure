import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'react-feather';
import blogPosts from '../../../data/blog-posts.json';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

// Function to render structured content
function renderContent(content: { introduction?: string; sections?: Array<{ heading: string; content?: string; list?: string[]; image?: string; subsections?: Array<{ heading: string; content?: string; list?: string[] }> }> }) {
    if (typeof content === 'string') {
        return <p className="mb-4 leading-relaxed">{content}</p>;
    }

    if (content.sections) {
        return (
            <div>
                {content.introduction && (
                    <p className="mb-6 text-lg leading-relaxed text-black">{content.introduction}</p>
                )}
                {content.sections.map((section, index: number) => (
                    <div key={index} className="mb-8">
                        <h2 className="font-headline text-2xl text-black mb-4">{section.heading}</h2>
                        {section.content && (
                            <p className="mb-4 leading-relaxed text-black">{section.content}</p>
                        )}
                        {section.image && (
                            <div className="mb-6">
                                <img 
                                    src={section.image} 
                                    alt={section.heading}
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        {section.list && (
                            <ul className="mb-4 space-y-2">
                                {section.list.map((item: string, itemIndex: number) => (
                                    <li key={itemIndex} className="flex items-start">
                                        <span className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.subsections && section.subsections.map((subsection, subIndex: number) => (
                            <div key={subIndex} className="mb-6">
                                {subsection.heading.toLowerCase().includes("femure") ? (
                                    <div className="bg-gradient-to-r from-femure-primary/5 to-femure-secondary/5 border-l-4 border-femure-primary rounded-r-lg p-4 mb-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-3">
                                                <div className="w-6 h-6 bg-femure-primary rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">
                                                        {subsection.heading.toLowerCase().includes("tip") ? "💡" : 
                                                         subsection.heading.toLowerCase().includes("note") ? "📝" : 
                                                         subsection.heading.toLowerCase().includes("way") ? "🌿" : "✨"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-headline text-lg text-femure-primary mb-2 font-semibold">{subsection.heading}</h3>
                                                {subsection.content && (
                                                    <p className="text-gray-700 leading-relaxed italic">{subsection.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-headline text-xl text-black mb-3">{subsection.heading}</h3>
                                        {subsection.content && (
                                            <p className="mb-3 leading-relaxed text-black">{subsection.content}</p>
                                        )}
                                    </>
                                )}
                                {subsection.list && (
                                    <ul className="mb-3 space-y-2">
                                        {subsection.list.map((item: string, itemIndex: number) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <span className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-black">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return null;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find(post => post.id === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/blog" className="bg-femure-primary text-white px-6 py-3 rounded-lg hover:bg-femure-accent transition-colors">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-8">
                    <Link href="/blog" className="inline-flex items-center text-femure-primary hover:text-femure-accent transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                    
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                        </div>
                        
                        <h1 className="font-headline text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4">
                            <span className="bg-femure-primary/10 text-femure-primary px-4 py-2 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-femure-primary transition-colors">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-black">
                        {renderContent(post.content)}
                    </div>
                    
                    {/* Tags */}
                    {post.tags && (
                        <div className="mt-8">
                            <h3 className="font-headline text-lg text-gray-900 mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag: string, index: number) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Author Bio */}
                    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-start gap-6">
                            {post.authorImage ? (
                                <img 
                                    src={post.authorImage} 
                                    alt={post.author}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-femure-primary/20"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-femure-primary/10 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-femure-primary" />
                                </div>
                            )}
                            <div>
                                <h3 className="font-headline text-xl text-gray-900 mb-2">{post.author}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Experienced homeopathic doctor specializing in women&apos;s health and hormonal balance. 
                                    Committed to providing personalized, natural treatment approaches for optimal wellness.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Related Posts */}
                    <div className="mt-12">
                        <h3 className="font-headline text-2xl text-gray-900 mb-8 text-center">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts
                                .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
                                .slice(0, 2)
                                .map((relatedPost) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                                            <div className="relative h-40 bg-gradient-to-br from-femure-primary/10 to-femure-secondary/10">
                                                <img 
                                                    src={relatedPost.image} 
                                                    alt={relatedPost.title}
                                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h4 className="font-headline text-lg text-gray-900 mb-2 group-hover:text-femure-primary transition-colors duration-300 line-clamp-2">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}