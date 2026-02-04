# Filip Szwerluga - Portfolio Website

A modern, animated portfolio website built with TypeScript, Tailwind CSS, and GSAP.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern Stack**: TypeScript, Tailwind CSS, Vite, GSAP
- **CI/CD Pipeline**: Automated linting, type checking, and deployment
- **AWS Ready**: Configured for easy deployment to AWS S3/CloudFront

## 📦 Project Structure

```
├── src/
│   ├── main.ts          # Main application logic
│   ├── data.ts          # Portfolio data (projects, skills, etc.)
│   ├── types.ts         # TypeScript interfaces
│   └── style.css        # Tailwind CSS styles
├── public/              # Static assets
├── .github/workflows/   # CI/CD pipeline
└── dist/                # Build output
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Type check
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production (with type check) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run deploy` | Build and prepare for deployment |

## 🚀 Deployment

### GitHub Pages (Current)

The site automatically deploys to GitHub Pages when you push to `main` or `PageRevamp` branches.

1. Push your changes to the repository
2. GitHub Actions will automatically:
   - Run lint checks
   - Run TypeScript type checks
   - Build the project
   - Deploy to GitHub Pages

### AWS Deployment

The project is configured for easy AWS deployment (S3 + CloudFront):

#### Option 1: AWS S3 Static Hosting

1. Create an S3 bucket with static website hosting enabled
2. Build the project:
   ```bash
   npm run build
   ```
3. Upload the `dist/` folder contents to your S3 bucket
4. Configure bucket policy for public access (or use CloudFront)

#### Option 2: AWS Amplify

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect the Vite build settings
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

#### Option 3: CloudFront + S3 (Recommended for Production)

1. Create an S3 bucket (private)
2. Create a CloudFront distribution
3. Set S3 as the origin with OAI (Origin Access Identity)
4. Configure custom domain via Route 53
5. Use the provided GitHub Actions workflow or create an AWS-specific workflow:

```yaml
# .github/workflows/deploy-aws.yml (example)
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-west-1
      - run: aws s3 sync dist/ s3://your-bucket-name --delete
      - run: aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Custom Domain Setup

When you're ready to use a custom domain:

1. **For GitHub Pages**: Add a `CNAME` file in the `public/` folder with your domain
2. **For AWS**: 
   - Register domain in Route 53 or transfer DNS
   - Create SSL certificate in ACM (us-east-1 for CloudFront)
   - Add alternate domain to CloudFront distribution
   - Create Route 53 A record pointing to CloudFront

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BASE_URL` | Base URL for asset paths | `./` |

### Customizing Content

Edit `src/data.ts` to update:
- Personal information
- Social links
- Projects (major/minor categories)
- Skills and achievements
- Timeline events (professional/personal)
- Technologies

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!

---

Built with 💜 by Filip Szwerluga
