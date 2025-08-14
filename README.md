# Menorah Health - Next.js 14 Website

A modern, production-ready website for Menorah Health - the world's first free mental health app exclusively for men. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, accessible design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO with structured data and sitemap generation
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG compliant with reduced motion support
- **Legal Compliance**: DPDP Act compliant privacy policy and terms
- **Crisis Support**: Integrated helpline information for emergency situations

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Content**: MDX with Contentlayer (ready for integration)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd menorah
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://menorahhealth.com
   RESEND_API_KEY=your_resend_api_key_here
   SITE_EMAIL_TO=Menorahenquiries@gmail.com
   GOOGLE_SITE_VERIFICATION=your_google_verification_code
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Brand Colors

Update the brand colors in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    DEFAULT: '#0C1E3A',      // Deep navy
    50: '#f0f4f8',
    // ... other shades
  },
  accent: {
    DEFAULT: '#FFC857',      // Warm amber
    50: '#fffbf0',
    // ... other shades
  },
}
```

### Typography

The site uses Google Fonts (Sora for headings, Inter for body text). To change fonts:

1. Update the font imports in `src/app/layout.tsx`
2. Modify the font variables in `tailwind.config.ts`
3. Update the CSS variables in `src/app/globals.css`

### Content

#### Pages
All pages are located in `src/app/(marketing)/` and follow the exact URL structure from the original site:
- `/` - Homepage
- `/about-us` - About Us
- `/the-board` - Team page
- `/the-app` - App download page
- `/newsletter` - Blog index
- `/newsletter/[slug]` - Individual blog posts
- `/founders-note-1` - Founder's note
- `/faqs` - FAQ page
- `/contact-us` - Contact page
- `/terms-and-conditions` - Legal terms
- `/privacy-policy` - Privacy policy (DPDP compliant)

#### Components
- `src/components/site/` - Global components (Header, Footer, SafetyBanner)
- `src/components/sections/` - Page sections (Hero, Features, etc.)
- `src/components/ui/` - Reusable UI components

## 📝 Adding Newsletter Posts

### Using Contentlayer (Recommended)

1. **Install Contentlayer** (already included)
2. **Create posts** in `src/content/posts/`:
   ```mdx
   ---
   title: "Your Post Title"
   description: "Post description"
   date: "2024-01-15"
   author: "Author Name"
   tags: ["tag1", "tag2"]
   slug: "your-post-slug"
   coverImage: "/path/to/image.jpg"
   ---
   
   Your post content here...
   ```

3. **Update the newsletter page** to use Contentlayer data instead of mock data

### Manual Method

Update the mock data in `src/app/(marketing)/newsletter/page.tsx` and `src/app/(marketing)/newsletter/[slug]/page.tsx`

## 📧 Email Configuration

### Using Resend (Recommended)

1. **Sign up** at [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Add to environment variables**:
   ```env
   RESEND_API_KEY=re_123456789
   ```

### Using SMTP

1. **Update** `src/lib/mailer.ts` with your SMTP settings
2. **Add environment variables**:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASS=your-password
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your site

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run test` - Run tests (when configured)
- `npm run postbuild` - Generate sitemap after build

## 📊 Performance & SEO

### Core Web Vitals
The site is optimized for:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

### SEO Features
- Automatic sitemap generation
- Robots.txt generation
- OpenGraph and Twitter meta tags
- Structured data (JSON-LD)
- Semantic HTML
- Optimized images with next/image

### Accessibility
- WCAG 2.1 AA compliant
- Reduced motion support
- Keyboard navigation
- Screen reader friendly
- High contrast ratios

## 🛡️ Legal & Compliance

### DPDP Act Compliance
The privacy policy is designed to comply with India's Digital Personal Data Protection Act, 2023, including:
- User rights (access, correction, erasure, nomination)
- Children's data protection
- Grievance redressal
- Cross-border data transfer regulations

### Crisis Support
The site includes:
- Safety banner with helpline numbers
- Crisis support information
- Emergency contact details
- Clear disclaimers about service limitations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Menorah Health. All rights reserved.

## 🆘 Support

For technical support or questions:
- Email: Menorahenquiries@gmail.com
- Create an issue in the repository

## 🔄 Updates

### Adding New Pages
1. Create the page file in `src/app/(marketing)/`
2. Add metadata export
3. Update navigation in `src/components/site/Header.tsx`
4. Update footer links in `src/components/site/Footer.tsx`

### Updating Content
- **Static content**: Edit the respective page files
- **Dynamic content**: Update the data files or integrate with a CMS
- **Images**: Add to `public/` directory and reference with `/path/to/image.jpg`

### Updating Helplines
Update the helpline information in:
- `src/components/site/SafetyBanner.tsx`
- `src/components/site/Footer.tsx`
- Individual pages that mention crisis support

---

**Built with ❤️ for men's mental health**
