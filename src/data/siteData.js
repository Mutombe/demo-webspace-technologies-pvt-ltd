export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Webspace Technologies",
    legalName: "Webspace Technologies (Pvt.) Ltd.",
    tagline: "Technology That Works For You.",
    description:
      "Webspace Technologies is a full-service IT company in Harare providing web development, cloud solutions, cybersecurity, and managed IT services for businesses across Zimbabwe.",
    phone: "+263 77 643 3583",
    phoneRaw: "+263776433583",
    whatsappNumber: "263776433583",
    email: "hello@webspace.co.zw",
    address: "10 George Dr, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 6,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "500+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "webspace-technologies-pvt-ltd-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Webspace",
    logoLine2: "Technologies",
  },

  hero: {
    badge: "Zimbabwe's Full-Service IT Solutions Provider",
    titleParts: [
      { text: "TECHNOLOGY " },
      { text: "THAT WORKS", highlight: true },
      { text: " FOR YOU." },
    ],
    subtitle:
      "Web development, cloud infrastructure, cybersecurity, and managed IT services. 500+ projects delivered for businesses across Zimbabwe.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "Our Solutions",
    trustBadge: "500+ Projects Delivered",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Webspace Technologies professional image 1" },
      { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=85", alt: "Webspace Technologies professional image 2" },
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Webspace Technologies showcase" },
    ],
  },

  stats: [
    { number: "500+", label: "Projects Delivered" },
    { number: "9+", label: "Years Experience" },
    { number: "100+", label: "Active Clients" },
    { number: "5.0", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Web Development",
      desc: "Custom websites and web applications built with modern frameworks. Responsive, fast, and designed to convert.",
      icon: "Buildings",
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud migration, hosting, and infrastructure management on AWS, Azure, and Google Cloud platforms.",
      icon: "Rocket",
    },
    {
      title: "Cybersecurity",
      desc: "Vulnerability assessments, penetration testing, firewall management, and security awareness training.",
      icon: "Lock",
    },
    {
      title: "Managed IT Services",
      desc: "Outsourced IT support, network management, and helpdesk services for businesses of all sizes.",
      icon: "Lightbulb",
    },
    {
      title: "Software Development",
      desc: "Custom business applications, mobile apps, and enterprise software tailored to your operational needs.",
      icon: "Star",
    },
    {
      title: "IT Consulting",
      desc: "Technology strategy, digital transformation roadmaps, and IT infrastructure planning for growing businesses.",
      icon: "Briefcase",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Web Development",
        slug: "web-development",
        desc: "Custom websites and web applications built with modern frameworks. Responsive, fast, and designed to convert.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "Cloud Solutions",
        slug: "cloud-solutions",
        desc: "Cloud migration, hosting, and infrastructure management on AWS, Azure, and Google Cloud platforms.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
      {
        title: "Cybersecurity",
        slug: "cybersecurity",
        desc: "Vulnerability assessments, penetration testing, firewall management, and security awareness training.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "Managed IT Services",
        slug: "managed-it-services",
        desc: "Outsourced IT support, network management, and helpdesk services for businesses of all sizes.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
      {
        title: "Software Development",
        slug: "software-development",
        desc: "Custom business applications, mobile apps, and enterprise software tailored to your operational needs.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "IT Consulting",
        slug: "it-consulting",
        desc: "Technology strategy, digital transformation roadmaps, and IT infrastructure planning for growing businesses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Webspace",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in web development.",
        client: "Commercial Client",
        services: ["Web Development", "Cloud Solutions"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Webspace",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cloud solutions.",
        client: "Residential Client",
        services: ["Cloud Solutions", "Cybersecurity"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Webspace",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cybersecurity.",
        client: "Industrial Client",
        services: ["Cybersecurity", "Managed IT Services"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Webspace",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in managed it services.",
        client: "Institutional Client",
        services: ["Managed IT Services", "Software Development"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Webspace",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in software development.",
        client: "Commercial Client",
        services: ["Software Development", "IT Consulting"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Webspace",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in it consulting.",
        client: "Residential Client",
        services: ["IT Consulting", "Web Development"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Webspace built our company website and it has transformed our online presence. The design is modern, it loads fast, and our enquiries have tripled.",
      name: "Tapiwa Chadya",
      role: "Director, Alpha Engineering",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "Their managed IT service has been a game-changer for our office. Zero downtime, quick response to issues, and they actually explain things in plain English.",
      name: "Nyasha Matema",
      role: "Office Manager, Deloitte Zimbabwe",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Webspace handled our cloud migration seamlessly. Everything moved to Azure without a single day of downtime. Impressive expertise.",
      name: "Simon Mudzingwa",
      role: "CTO, FBC Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The cybersecurity audit they conducted revealed vulnerabilities we had no idea existed. Their remediation was thorough and our systems are now properly secured.",
      name: "Chipo Muranda",
      role: "Risk Manager, CBZ Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Webspace Technologies was founded to bridge the gap between world-class technology and Zimbabwean businesses. We believe every company, regardless of size, deserves access to enterprise-grade IT solutions.",
      "With over 500 projects delivered and a perfect Google rating, our team of developers, engineers, and security experts has become the trusted technology partner for businesses across Zimbabwe.",
    ],
    values: [
      { title: "Full-Stack Expertise", desc: "From frontend design to backend infrastructure to cybersecurity. One team for your entire technology stack." },
      { title: "Local Understanding", desc: "We understand Zimbabwe's unique challenges -- connectivity, power, and budget constraints -- and build solutions that work within them." },
      { title: "Proactive Support", desc: "We monitor, maintain, and optimize your systems before problems arise. Not just reactive fixes." },
      { title: "Scalable Solutions", desc: "Start small and grow. Our solutions are designed to scale with your business." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Webspace built our company website and it has transformed our online presence. The design is modern, it loads fast, and our enquiries have tripled.", name: "Tapiwa Chadya", role: "Director, Alpha Engineering", rating: 5 },
      { text: "Their managed IT service has been a game-changer for our office. Zero downtime, quick response to issues, and they actually explain things in plain English.", name: "Nyasha Matema", role: "Office Manager, Deloitte Zimbabwe", rating: 5 },
      { text: "Webspace handled our cloud migration seamlessly. Everything moved to Azure without a single day of downtime. Impressive expertise.", name: "Simon Mudzingwa", role: "CTO, FBC Holdings", rating: 5 },
      { text: "The cybersecurity audit they conducted revealed vulnerabilities we had no idea existed. Their remediation was thorough and our systems are now properly secured.", name: "Chipo Muranda", role: "Risk Manager, CBZ Holdings", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Webspace Technologies",
        address: "10 George Dr, Harare, Zimbabwe",
        phone: "+263 77 643 3583",
        email: "hello@webspace.co.zw",
      },
    ],
  },

  homeCta: {
    title: "POWER YOUR BUSINESS WITH TECHNOLOGY",
    subtitle: "Web development, cloud, security, and IT support. Let Webspace Technologies be your technology partner.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Webspace! I need IT solutions for my business.",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85",
  },

  footer: {
    description: "Webspace Technologies is a full-service IT company in Harare providing web development, cloud solutions, cybersecurity, and managed IT services for bu...",
    copyright: "Webspace Technologies",
  },
};

export default siteData;
