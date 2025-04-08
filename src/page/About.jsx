import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Welcome to My Blog</h2>
                <p className="text-gray-700 leading-relaxed">
                    Hi there! I'm [Your Name], a passionate writer and [your profession/interests]. 
                    Through this blog, I share my thoughts and experiences about [your blog's main topics].
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                <p className="text-gray-700 leading-relaxed">
                    I started this blog in [year] as a way to [your motivation for starting the blog]. 
                    Since then, I've been writing about [describe your content focus and what readers can expect].
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What You'll Find Here</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Topic 1: [Description of what you write about]</li>
                    <li>Topic 2: [Another main topic]</li>
                    <li>Topic 3: [Another main topic]</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                <p className="text-gray-700 leading-relaxed">
                    I love hearing from my readers! You can reach me at:
                </p>
                <div className="mt-4 space-y-2">
                    <p>Email: [your@email.com]</p>
                    <p>Twitter: [@yourhandle]</p>
                    <p>LinkedIn: [Your LinkedIn profile]</p>
                </div>
            </div>
        </div>
    );
};

export default About;