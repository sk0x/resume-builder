export const LandingData = {
    hero: {
        headline: "Create Your Dream Career-Winning Resume in Just Minutes",
        subheadline: "Unlock your professional potential with AI-powered design, industry-specific insights, and templates that get you noticed by top recruiters. Transform your career story from ordinary to extraordinary—no design skills required.",
        ctaButton: {
            text: "Build Your Resume Now",
            url: "/builder"
        },
        supportingInfo: {
            img: "/trust.png",
            text: "Trusted by over 2 million job seekers worldwide",
        },
        image: "hero_img.png"
    },
    features: {
        heading: "The next gen CV Builder",
        image: "feature_img.png",
        featureList: [
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
    },
    testimonials: {
        heading: "What Our Clients Say",
        subheading: "Real stories from real people who trusted us with their vision — and saw it come to life. Here's what they had to say about their experience.",
        testimoinallist: [
            {
                quote: "I landed my dream job within 2 weeks of using this resume builder. The templates are professional and the guidance was invaluable.",
                author: "Sarah J.",
                position: "Marketing Manager",
                image: "testimonials/person2.jpg",
                rating: "4",
            },
            {
                quote: "As someone who struggled with writing my resume, this tool made the process incredibly simple. Highly recommended!",
                author: "Michael T.",
                position: "Software Developer",
                rating: "2",
                image: "testimonials/person1.jpg"
            },
            {
                quote: "The ATS-friendly templates helped my resume get past the initial screening. I'm now employed at a Fortune 500 company!",
                author: "Jessica R.",
                position: "Financial Analyst",
                rating: "5",
                image: "testimonials/person3.jpg"
            }
        ]
    },
    templates: {
        heading: "Choose from our widest range of CV themes",
        subheading: "Choose from our widest range of wisely designed CV themes and increase the chances of getting your dream job",
        templateList: [
            {
                id: 1,
                img: "templates_images/template_1.jpg" ,
            },
            {
                id: 2,
                img: "templates_images/template_2.jpg" ,
            },
            {
                id: 3,
                img: "templates_images/template_3.jpg" ,
            },
            {
                id: 4,
                img: "templates_images/template_4.jpg" ,
            },
            {
                id: 5,
                img: "templates_images/template_5.jpg" ,
            },
        ],
    },
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

export const NavbarData = {
    logo : {
        img: "logo.png",
        text: "ResBuilder"
    },
    main: [
        { name: "Templates", url: "/templates" },
        { name: "Examples", url: "/examples" },
        { name: "About us", url: "/aboutus" },
        { name: "Pricing", url: "/pricing" },
    ],
}

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export const FooterData = {
    logo: {
        img: "logo.png",
        text: "ResBuilder",
    },
    socials : [
        {
            name: "X",
            url: "",
            icon: FaTwitter
        },
        {
            name: "Instagram",
            url: "",
            icon: FaInstagram
        },
        {
            name: "GitHub",
            url: "",
            icon: FaGithub
        },
        {
            name: "LinkedIn",
            url: "",
            icon: FaLinkedin
        },
    ],
    category: [
        {
            category: "Company",
            links: [
                { name: "About", url: "/about" },
                { name: "Pricing", url: "/about" },
                { name: "Contact", url: "/about" },
                { name: "Blog", url: "/about" },
                { name: "Testimonials", url: "/testimonials" },
            ]
        },
        {
            category: "Product",
            links: [
                { name: "Templates", url: "/templates" },
                { name: "CV Builder", url: "/cover-letter" },
                { name: "Examples", url: "/examples" }
            ]
        },
        {
            category: "Resources",
            links: [
                { name: "Guide", url: "/guide" },
                { name: "Interview Tips", url: "/interview-tips" },
                { name: "Strategies", url: "/job-search" }
            ]
        },
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

export const PriceData = {
    heading: "Transparent Pricing Plan That grows with you",
    subHeading: "Simple transparent pricing with no hidden fee. Choose the plan that fits your business needs and budget",
    pricePlans :[
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
            isPopular: false,
            ctaButton: "Start for Free"
        },
        {
            id: "premium",
            name: "Premium",
            price: 8.99,
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
            isPopular: true,
            ctaButton: "Get Started with Pro"
        },
        {
            id: "professional",
            name: "Professional",
            price: 29.99,
            billingCycle: "yearly",
            features: [
                "All Premium features",
                "Priority customer support",
                "Resume review by experts",
                "LinkedIn profile optimization",
                "Job application tracking",
                "30-day money-back guarantee"
            ],
            isPopular: false,
            ctaButton: "Get Started with Enterprise"
        }
    ],
}
