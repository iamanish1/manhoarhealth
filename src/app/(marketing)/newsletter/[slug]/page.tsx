import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostContent from '@/components/blog/PostContent'

// Mock post data - in a real app, this would come from Contentlayer
const getPost = (slug: string) => {
  const posts = {
    'understanding-mens-mental-health': {
      title: 'Understanding Men\'s Mental Health: Breaking the Silence',
      excerpt: 'Explore the unique challenges men face when it comes to mental health and how we can create a more supportive environment.',
      content: `
        <p>Mental health stigma affects millions of men worldwide, creating barriers to seeking help and support. This stigma is deeply rooted in cultural expectations, societal norms, and traditional gender roles that often discourage men from expressing vulnerability or seeking emotional support.</p>
        
        <h2>The Roots of Stigma</h2>
        <p>From an early age, many men are taught to be strong, independent, and emotionally stoic. Phrases like "man up," "boys don't cry," and "be a man" reinforce the idea that showing emotions or seeking help is a sign of weakness. This conditioning creates a culture where men feel they must handle their problems alone, leading to isolation and untreated mental health conditions.</p>
        
        <p>The consequences of this stigma are far-reaching. Men are less likely to seek professional help for mental health issues, more likely to die by suicide, and often turn to unhealthy coping mechanisms like substance abuse or risky behaviors.</p>
        
        <h2>Breaking Down Barriers</h2>
        <p>Breaking the silence around men's mental health requires a multi-faceted approach. It starts with education and awareness, helping men understand that mental health challenges are common and treatable. It involves creating safe spaces where men can share their experiences without fear of judgment.</p>
        
        <p>Peer support plays a crucial role in this process. When men see others like them seeking help and finding support, it normalizes the experience and reduces stigma. This is why community-based approaches, like those offered by Menorah Health, are so effective.</p>
        
        <h2>Moving Forward</h2>
        <p>As we work to break down mental health stigma, it's important to remember that change takes time. Every conversation about mental health, every story shared, and every person who seeks help contributes to this cultural shift.</p>
        
        <p>If you're struggling with mental health challenges, remember that seeking help is a sign of strength, not weakness. You're not alone, and support is available. Whether through professional therapy, peer support groups, or mental health apps like Menorah Health, there are resources designed specifically for men's needs.</p>
        
        <p>Together, we can create a world where men feel empowered to prioritize their mental health and seek the support they need without fear of stigma or judgment.</p>
      `,
      date: '2024-01-15',
      author: 'Menorah Health Team',
      tags: ['Mental Health', 'Men\'s Health', 'Awareness'],
      readTime: '5 min read',
      image: '/blog/stigma-article.jpg',
    },
    'building-healthy-relationships': {
      title: 'Building Healthy Relationships: A Guide for Men',
      excerpt: 'Learn practical strategies for building and maintaining healthy relationships while prioritizing your mental well-being.',
      content: `
        <p>Healthy relationships are fundamental to our mental well-being and overall happiness. For men, building and maintaining these relationships can sometimes feel challenging, especially when societal expectations and personal experiences create barriers to emotional connection.</p>
        
        <h2>Understanding Healthy Relationships</h2>
        <p>Healthy relationships are built on mutual respect, trust, communication, and support. They provide a safe space for vulnerability, growth, and emotional expression. In healthy relationships, both parties feel valued, heard, and supported.</p>
        
        <p>For many men, the challenge lies in balancing traditional expectations of masculinity with the emotional openness required for deep, meaningful connections. This balance is crucial for both romantic and platonic relationships.</p>
        
        <h2>Communication is Key</h2>
        <p>Effective communication is the foundation of any healthy relationship. This involves not just speaking, but also listening actively and empathetically. Practice expressing your feelings clearly and honestly, while also being open to hearing and understanding others' perspectives.</p>
        
        <p>Remember that communication isn't just about words—it's also about body language, tone of voice, and timing. Pay attention to these non-verbal cues in both yourself and others.</p>
        
        <h2>Setting Boundaries</h2>
        <p>Healthy relationships require clear boundaries. This means knowing and communicating your limits, needs, and expectations. Boundaries help protect your mental health and ensure that relationships remain mutually beneficial.</p>
        
        <p>Setting boundaries isn't about being rigid or controlling—it's about self-respect and mutual respect. It's okay to say no, to ask for space, or to express when something doesn't work for you.</p>
        
        <h2>Building Trust</h2>
        <p>Trust is earned through consistent actions over time. Be reliable, honest, and follow through on your commitments. When you make mistakes (which everyone does), take responsibility and work to rebuild trust.</p>
        
        <p>Trust also involves being vulnerable and allowing others to see your authentic self. This can be challenging, but it's essential for deep, meaningful connections.</p>
        
        <h2>Supporting Each Other</h2>
        <p>In healthy relationships, both parties support each other's growth and well-being. This means celebrating successes, offering comfort during difficult times, and encouraging each other to pursue personal goals and interests.</p>
        
        <p>Remember that supporting others doesn't mean sacrificing your own needs. Healthy relationships are mutually supportive, not one-sided.</p>
        
        <p>Building healthy relationships takes time, effort, and patience. Be kind to yourself and others as you navigate this journey. Remember that every relationship is unique, and what works for one may not work for another.</p>
      `,
      date: '2024-01-10',
      author: 'Dr. Sarah Johnson',
      tags: ['Relationships', 'Communication', 'Well-being'],
      readTime: '7 min read',
      image: '/blog/relationships.jpg',
    },
    'stress-management-techniques': {
      title: 'Effective Stress Management Techniques for Busy Men',
      excerpt: 'Discover proven stress management techniques that fit into your busy lifestyle and help you maintain mental balance.',
      content: `
        <p>In today's fast-paced world, stress has become a constant companion for many men. Whether it's work pressure, family responsibilities, or personal challenges, stress can take a significant toll on mental and physical health. Learning effective stress management techniques is essential for maintaining well-being and preventing burnout.</p>
        
        <h2>Understanding Stress</h2>
        <p>Stress is your body's natural response to challenges and demands. While some stress can be motivating and beneficial, chronic stress can lead to serious health problems, including anxiety, depression, heart disease, and weakened immune function.</p>
        
        <p>Men often face unique stressors related to societal expectations, career pressure, and traditional gender roles. Recognizing these stressors and developing healthy coping mechanisms is crucial for long-term mental health.</p>
        
        <h2>Physical Activity</h2>
        <p>Exercise is one of the most effective natural stress relievers. Physical activity releases endorphins, which are natural mood boosters, and helps reduce levels of stress hormones like cortisol.</p>
        
        <p>You don't need to spend hours at the gym to benefit from exercise. Even 20-30 minutes of moderate activity, such as walking, jogging, or cycling, can significantly reduce stress levels. Find activities you enjoy and can realistically fit into your schedule.</p>
        
        <h2>Mindfulness and Meditation</h2>
        <p>Mindfulness involves paying attention to the present moment without judgment. This practice can help you become more aware of your thoughts and feelings, making it easier to manage stress responses.</p>
        
        <p>Start with just 5-10 minutes of meditation each day. Focus on your breath, observe your thoughts without getting caught up in them, and gradually increase the duration as you become more comfortable with the practice.</p>
        
        <h2>Time Management</h2>
        <p>Poor time management is a major source of stress for many men. Learning to prioritize tasks, set realistic goals, and say no to unnecessary commitments can significantly reduce stress levels.</p>
        
        <p>Use tools like calendars, to-do lists, and time-blocking techniques to organize your day. Remember that it's okay to delegate tasks and ask for help when needed.</p>
        
        <h2>Social Support</h2>
        <p>Strong social connections are essential for stress management. Talking with trusted friends, family members, or mental health professionals can provide perspective, emotional support, and practical advice.</p>
        
        <p>Don't hesitate to reach out to others when you're feeling stressed. Many men find it helpful to join support groups or participate in activities that connect them with like-minded individuals.</p>
        
        <h2>Healthy Lifestyle Habits</h2>
        <p>Maintaining a healthy lifestyle can significantly impact your ability to manage stress. This includes getting adequate sleep, eating a balanced diet, limiting alcohol and caffeine, and avoiding tobacco and other harmful substances.</p>
        
        <p>Sleep is particularly important for stress management. Aim for 7-9 hours of quality sleep each night, and establish a consistent sleep schedule.</p>
        
        <p>Remember that stress management is a skill that takes time to develop. Be patient with yourself and celebrate small victories along the way. What works for one person may not work for another, so experiment with different techniques to find what works best for you.</p>
      `,
      date: '2024-01-05',
      author: 'Menorah Health Team',
      tags: ['Stress Management', 'Self-Care', 'Techniques'],
      readTime: '6 min read',
      image: '/blog/stress-management.jpg',
    },
    'overcoming-stigma': {
      title: 'Overcoming the Stigma: Why Men\'s Mental Health Matters',
      excerpt: 'Understanding the societal stigma around men\'s mental health and how we can work together to break these barriers.',
      content: `
        <p>Mental health stigma remains one of the biggest barriers preventing men from seeking help and support. Despite growing awareness, many men still feel ashamed or embarrassed to discuss their mental health challenges, fearing judgment, discrimination, or being seen as weak.</p>
        
        <h2>The Impact of Stigma</h2>
        <p>Mental health stigma can have devastating consequences. It prevents men from seeking professional help, isolates them from support networks, and can lead to worsening mental health conditions. The stigma is particularly harmful because it often comes from multiple sources—family, friends, workplace, and society at large.</p>
        
        <p>For many men, the fear of being labeled as "crazy," "weak," or "unstable" is enough to keep them silent about their struggles. This silence can be deadly, as untreated mental health conditions can lead to serious consequences, including suicide.</p>
        
        <h2>Challenging Stereotypes</h2>
        <p>Breaking down mental health stigma requires challenging long-held stereotypes and misconceptions. One of the most harmful myths is that mental health challenges are a sign of weakness or personal failure. In reality, mental health conditions are medical conditions that can affect anyone, regardless of strength, character, or circumstances.</p>
        
        <p>Another common misconception is that men should be able to "tough it out" or "get over it" on their own. This belief ignores the fact that mental health conditions often require professional treatment and support, just like physical health conditions.</p>
        
        <h2>Creating Safe Spaces</h2>
        <p>Creating safe spaces where men can openly discuss their mental health is crucial for breaking down stigma. This includes both formal support groups and informal conversations with trusted friends and family members.</p>
        
        <p>Safe spaces are characterized by non-judgment, confidentiality, and mutual support. They allow men to share their experiences without fear of ridicule or rejection, and they provide opportunities for learning and growth.</p>
        
        <h2>Leading by Example</h2>
        <p>One of the most powerful ways to combat stigma is to lead by example. When men openly discuss their mental health challenges and seek help, they show others that it's okay to do the same. This can have a ripple effect, encouraging more men to prioritize their mental health.</p>
        
        <p>Sharing personal stories can be particularly powerful, as it helps others realize they're not alone in their struggles. These stories can also educate others about the realities of mental health conditions and the importance of seeking help.</p>
        
        <h2>Advocacy and Education</h2>
        <p>Advocacy and education are essential for long-term change. This includes supporting mental health organizations, participating in awareness campaigns, and educating others about mental health facts and resources.</p>
        
        <p>Education should focus on dispelling myths, providing accurate information about mental health conditions, and promoting the importance of seeking help. This can happen in schools, workplaces, communities, and through media and social platforms.</p>
        
        <p>Overcoming mental health stigma is a collective effort that requires the participation of individuals, communities, and society as a whole. By working together to challenge stereotypes, create safe spaces, and promote understanding, we can create a world where men feel empowered to prioritize their mental health without fear of judgment or discrimination.</p>
      `,
      date: '2023-12-28',
      author: 'Michael Chen',
      tags: ['Stigma', 'Awareness', 'Advocacy'],
      readTime: '8 min read',
      image: '/blog/stigma.jpg',
    },
    'work-life-balance': {
      title: 'Achieving Work-Life Balance: A Modern Challenge',
      excerpt: 'Practical tips for maintaining a healthy work-life balance in today\'s fast-paced world.',
      content: `
        <p>In today's fast-paced, always-connected world, achieving work-life balance has become increasingly challenging. Many men find themselves working longer hours, checking emails outside of work time, and struggling to find time for personal relationships, hobbies, and self-care.</p>
        
        <h2>Understanding Work-Life Balance</h2>
        <p>Work-life balance doesn't mean spending equal time on work and personal life. Instead, it's about finding a sustainable arrangement that allows you to meet your professional responsibilities while maintaining your physical and mental health, relationships, and personal interests.</p>
        
        <p>The ideal balance looks different for everyone and can change over time based on life circumstances, career stage, and personal priorities. The key is finding what works for you and your situation.</p>
        
        <h2>Setting Boundaries</h2>
        <p>Setting clear boundaries between work and personal life is essential for maintaining balance. This includes establishing specific work hours, avoiding work-related activities during personal time, and learning to say no to unreasonable demands.</p>
        
        <p>Technology has made it easier than ever to work from anywhere, but this also means it's harder to disconnect. Consider setting specific times to check emails and messages, and avoid work-related notifications during personal time.</p>
        
        <h2>Prioritizing Self-Care</h2>
        <p>Self-care is not selfish—it's essential for maintaining physical and mental health. This includes getting adequate sleep, eating well, exercising regularly, and engaging in activities that bring you joy and relaxation.</p>
        
        <p>Many men prioritize work over self-care, believing that taking time for themselves is a luxury they can't afford. However, neglecting self-care can lead to burnout, decreased productivity, and health problems that ultimately impact both work and personal life.</p>
        
        <h2>Quality Over Quantity</h2>
        <p>When time is limited, focus on quality over quantity. Spending focused, meaningful time with loved ones is often more valuable than spending more time but being distracted or stressed.</p>
        
        <p>This applies to both personal relationships and work. Being fully present and engaged during the time you have is more important than trying to squeeze in more activities or meetings.</p>
        
        <h2>Learning to Delegate</h2>
        <p>Many men struggle with delegating tasks, believing they need to handle everything themselves. However, learning to delegate effectively can free up time and reduce stress.</p>
        
        <p>Delegation involves identifying tasks that can be handled by others, providing clear instructions and expectations, and trusting others to complete the work. This applies to both work and personal responsibilities.</p>
        
        <h2>Regular Assessment and Adjustment</h2>
        <p>Work-life balance is not a one-time achievement but an ongoing process that requires regular assessment and adjustment. Life circumstances change, and your balance needs may change with them.</p>
        
        <p>Regularly evaluate your current situation and identify areas where you feel overwhelmed or neglected. Be willing to make changes and adjustments as needed, and don't be afraid to seek support or professional help if you're struggling.</p>
        
        <p>Remember that achieving work-life balance is a journey, not a destination. Be patient with yourself and recognize that perfection is not the goal. The aim is to create a sustainable, fulfilling life that allows you to thrive both professionally and personally.</p>
      `,
      date: '2023-12-20',
      author: 'Menorah Health Team',
      tags: ['Work-Life Balance', 'Productivity', 'Well-being'],
      readTime: '6 min read',
      image: '/blog/work-life-balance.jpg',
    },
    'mindfulness-for-men': {
      title: 'Mindfulness for Men: Simple Practices for Daily Life',
      excerpt: 'Learn how mindfulness can improve your mental health and how to incorporate simple practices into your daily routine.',
      content: `
        <p>Mindfulness has gained significant attention in recent years as a powerful tool for improving mental health and overall well-being. For men, mindfulness practices can be particularly valuable in managing stress, improving emotional regulation, and developing greater self-awareness.</p>
        
        <h2>What is Mindfulness?</h2>
        <p>Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and acceptance. It involves observing your thoughts, feelings, and sensations without judgment or the need to change them.</p>
        
        <p>Contrary to popular misconceptions, mindfulness is not about emptying your mind or achieving a state of perfect calm. Instead, it's about developing a different relationship with your thoughts and emotions, allowing you to respond to life's challenges with greater clarity and wisdom.</p>
        
        <h2>Benefits for Men's Mental Health</h2>
        <p>Mindfulness offers numerous benefits that are particularly relevant to men's mental health challenges. It can help reduce stress and anxiety, improve emotional regulation, enhance focus and concentration, and promote better sleep.</p>
        
        <p>For men who may have been taught to suppress emotions or "tough it out," mindfulness provides a safe way to acknowledge and process feelings without being overwhelmed by them. This can lead to greater emotional intelligence and healthier relationships.</p>
        
        <h2>Simple Mindfulness Practices</h2>
        <p>You don't need to spend hours meditating to benefit from mindfulness. Simple practices can be incorporated into your daily routine with minimal time commitment.</p>
        
        <p><strong>Breathing exercises:</strong> Take a few minutes each day to focus on your breath. Notice the sensation of breathing in and out, and gently bring your attention back to your breath when your mind wanders.</p>
        
        <p><strong>Body scans:</strong> Take a few minutes to mentally scan your body from head to toe, noticing any sensations, tension, or areas of comfort or discomfort.</p>
        
        <p><strong>Mindful walking:</strong> When walking, pay attention to the sensation of your feet touching the ground, the movement of your body, and the sights and sounds around you.</p>
        
        <h2>Overcoming Common Challenges</h2>
        <p>Many men face common challenges when starting mindfulness practices. These include finding time in busy schedules, dealing with a wandering mind, and feeling like they're "not doing it right."</p>
        
        <p>Remember that mindfulness is a skill that develops with practice. Start with just a few minutes each day and gradually increase the duration as you become more comfortable. There's no "right" way to practice mindfulness—the key is consistency and patience.</p>
        
        <h2>Integrating Mindfulness into Daily Life</h2>
        <p>Mindfulness doesn't have to be limited to formal meditation sessions. You can practice mindfulness throughout your day by paying attention to routine activities like eating, showering, or commuting.</p>
        
        <p>Mindful eating involves paying attention to the taste, texture, and smell of your food, as well as your body's hunger and fullness signals. Mindful communication involves listening fully to others without planning your response or getting distracted.</p>
        
        <p>Mindfulness is a powerful tool for improving mental health and overall well-being. By incorporating simple mindfulness practices into your daily routine, you can develop greater self-awareness, reduce stress, and improve your relationships with yourself and others.</p>
        
        <p>Remember that mindfulness is a journey, not a destination. Be patient with yourself and celebrate small progress along the way. With consistent practice, you'll likely notice positive changes in your mental health and overall quality of life.</p>
      `,
      date: '2023-12-15',
      author: 'Dr. Rajesh Kumar',
      tags: ['Mindfulness', 'Meditation', 'Daily Practices'],
      readTime: '5 min read',
      image: '/blog/mindfulness.jpg',
    },
  }
  
  return posts[slug as keyof typeof posts]
}

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Menorah Health`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  // Prepare JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Menorah Health',
      logo: {
        '@type': 'ImageObject',
        url: 'https://menorahhealth.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://menorahhealth.com/newsletter/${params.slug}`,
    },
  }

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PostContent post={post} slug={params.slug} />
    </>
  )
}
