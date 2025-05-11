export const LandingData = {
    hero: {
        headline: "Create a Professional Resume in Minutes",
        subheadline: "Stand out from the crowd with our expert-designed templates and easy-to-use builder",
        ctaButton: {
            text: "Build Your Resume Now",
            url: "/builder"
        },
        supportingText: "Trusted by over 2 million job seekers worldwide",
        image: "/images/hero-image.jpg"
    },
    features: [
        {
            title: "Professional Templates",
            description: "Choose from 50+ ATS-friendly templates designed by career experts",
            icon: "template-icon.svg"
        },
        {
            title: "Easy Customization",
            description: "Personalize colors, fonts, and layouts to match your professional style",
            icon: "customize-icon.svg"
        },
        {
            title: "Content Suggestions",
            description: "Get AI-powered suggestions for skills, achievements, and job descriptions",
            icon: "content-icon.svg"
        },
        {
            title: "Multiple Export Options",
            description: "Download your resume as PDF, DOCX, or TXT formats",
            icon: "download-icon.svg"
        }
    ],
    testimonials: [
        {
            quote: "I landed my dream job within 2 weeks of using this resume builder. The templates are professional and the guidance was invaluable.",
            author: "Sarah J.",
            position: "Marketing Manager",
            image: "/images/testimonial-1.jpg"
        },
        {
            quote: "As someone who struggled with writing my resume, this tool made the process incredibly simple. Highly recommended!",
            author: "Michael T.",
            position: "Software Developer",
            image: "/images/testimonial-2.jpg"
        },
        {
            quote: "The ATS-friendly templates helped my resume get past the initial screening. I'm now employed at a Fortune 500 company!",
            author: "Jessica R.",
            position: "Financial Analyst",
            image: "/images/testimonial-3.jpg"
        }
    ],
    statsSection: {
        headline: "Trusted by Job Seekers Worldwide",
        stats: [
            { value: "2M+", label: "Resumes Created" },
            { value: "85%", label: "Interview Success Rate" },
            { value: "50+", label: "Professional Templates" },
            { value: "4.8/5", label: "Customer Rating" }
        ]
    }
}

export const  TemplateData = {}

export const AboutData = {}

export const NavbarData = {
    logo : {
        img: "",
        text: ""
    },
    main: [
      { name: "Home", url: "/" },
      { name: "Templates", url: "/templates" },
      { name: "Resume Builder", url: "/builder" },
      { name: "CV Builder", url: "/cv-builder" },
      { name: "Career Resources", url: "/resources" },
      { name: "Pricing", url: "/pricing" },
      { name: "Contact", url: "/contact" }
    ],
}

export const FooterData = {
    category: [
        {
          category: "Product",
          links: [
            { name: "Resume Templates", url: "/templates" },
            { name: "CV Templates", url: "/cv-templates" },
            { name: "Cover Letter Builder", url: "/cover-letter" },
            { name: "Resume Examples", url: "/examples" }
          ]
        },
        {
          category: "Resources",
          links: [
            { name: "Career Blog", url: "/blog" },
            { name: "Resume Writing Guide", url: "/guide" },
            { name: "Interview Tips", url: "/interview-tips" },
            { name: "Job Search Strategies", url: "/job-search" }
          ]
        },
        {
          category: "Company",
          links: [
            { name: "About Us", url: "/about" },
            { name: "Testimonials", url: "/testimonials" },
            { name: "Privacy Policy", url: "/privacy" },
            { name: "Terms of Service", url: "/terms" }
          ]
        }
    ]
}


export const faq = [
    {
        question: "Is this resume builder really free?",
        answer: "Yes, our basic resume builder is free to use with access to 5 templates and PDF downloads. We also offer premium plans with additional features for those who want more customization options and advanced tools."
    },
    {
        question: "Are the resume templates ATS-friendly?",
        answer: "Yes, all of our templates are designed to be ATS (Applicant Tracking System) friendly. They use standard formatting and avoid complex elements that might confuse ATS software."
    },
    {
        question: "Can I download my resume in different formats?",
        answer: "Free users can download their resumes in PDF format. Premium users can download in PDF, DOCX, and TXT formats to meet different application requirements."
    },
    {
        question: "How many resumes can I create?",
        answer: "Free users can create 1 resume. Premium users can create unlimited resumes, which is helpful for tailoring your application to different jobs."
    },
    {
        question: "Do you have templates for specific industries?",
        answer: "Yes, we offer templates designed for various industries including technology, healthcare, finance, education, and creative fields. Each template is optimized for the specific expectations of those industries."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time. Premium subscriptions come with a money-back guarantee (14 days for monthly plans, 30 days for yearly plans)."
    }
]

export const pricingPlans = [
    {
        id: "free",
        name: "Free",
        price: 0,
        billingCycle: null,
        features: [
            "Access to 5 basic templates",
            "Create 1 resume",
            "Download in PDF format",
            "Basic customization options"
        ],
        isPopular: false
    },
    {
        id: "premium",
        name: "Premium",
        price: 12.99,
        billingCycle: "monthly",
        features: [
            "Access to all 50+ templates",
            "Create unlimited resumes",
            "Download in PDF, DOCX, TXT formats",
            "Advanced customization options",
            "AI content suggestions",
            "Cover letter builder",
            "14-day money-back guarantee"
        ],
        isPopular: true
    },
    {
        id: "professional",
        name: "Professional",
        price: 99.99,
        billingCycle: "yearly",
        features: [
            "All Premium features",
            "Priority customer support",
            "Resume review by experts",
            "LinkedIn profile optimization",
            "Job application tracking",
            "30-day money-back guarantee"
        ],
        isPopular: false
    }
]