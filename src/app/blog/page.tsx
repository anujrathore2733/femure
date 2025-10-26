import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'react-feather';
import blogPosts from '../../data/blog-posts.json';

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-headline text-4xl md:text-5xl text-gray-900 mb-6">
                            Welcome to Our 
                            <span className="text-femure-primary"> Health Corner</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Real stories, practical tips, and gentle guidance for your wellness journey. 
                            Because every woman deserves to feel her best, naturally.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Hormonal Health</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Natural Healing</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Wellness Tips</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Expert Insights</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <section className="mb-16">
                        <h2 className="font-headline text-3xl text-gray-900 mb-8 text-center">✨ Our Favorites</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image 
                                                src={post.image} 
                                                alt={post.title}
                                                width={400}
                                                height={192}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-femure-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    Featured
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-white/90 text-femure-primary px-3 py-1 rounded-full text-sm font-medium">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
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
                                            </div>
                                            <h3 className="font-headline text-xl text-gray-900 mb-2 group-hover:text-femure-primary transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <User className="w-4 h-4 text-gray-400" />
                                                    <span className="text-sm text-gray-600">{post.author}</span>
                                                </div>
                                                <span className="bg-femure-primary/10 text-femure-primary px-3 py-1 rounded-full text-sm font-medium">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section>
                    <h2 className="font-headline text-3xl text-gray-900 mb-8 text-center">All Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="group">
                                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                                    <div className="relative h-40 overflow-hidden">
                                        <Image 
                                            src={post.image} 
                                            alt={post.title}
                                            width={300}
                                            height={160}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-femure-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col h-full">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('en-US', { 
                                                    month: 'short', 
                                                    day: 'numeric' 
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="font-headline text-lg text-gray-900 mb-2 group-hover:text-femure-primary transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 mt-auto">
                                            {post.authorImage ? (
                                                <Image 
                                                    src={post.authorImage} 
                                                    alt={post.author}
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4 rounded-full object-cover"
                                                />
                                            ) : (
                                                <User className="w-3 h-3 text-gray-400" />
                                            )}
                                            <span className="text-xs text-gray-600">{post.author}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
