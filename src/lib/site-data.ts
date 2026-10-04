import {
  BarChart3, Brush, Code2, Globe2, Mail, MapPin, Megaphone, Search,
  Share2, Smartphone, type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  forWhom: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "seo", title: "SEO & Local SEO", short: "Be found when nearby customers are ready to buy.", forWhom: "Local businesses that need stronger Google visibility and more qualified calls.", deliverables: ["Local keyword strategy", "Google Business Profile optimization", "On-page and technical SEO", "Monthly ranking and lead reporting"], icon: Search },
  { slug: "paid-ads", title: "Google & Meta Ads", short: "Turn ad spend into measurable leads, not empty clicks.", forWhom: "Businesses ready to reach high-intent customers and scale demand.", deliverables: ["Campaign strategy and setup", "Audience and keyword targeting", "Landing page recommendations", "Ongoing testing and reporting"], icon: Megaphone },
  { slug: "websites", title: "Website Development", short: "A fast, credible site built to convert local traffic.", forWhom: "Businesses with an outdated site or no clear online sales journey.", deliverables: ["Mobile-first design", "Clear lead-generation journeys", "Speed and search foundations", "Analytics and form tracking"], icon: Globe2 },
  { slug: "social", title: "Social Media", short: "Stay visible with a consistent, useful social presence.", forWhom: "Local brands that need dependable content without the daily workload.", deliverables: ["Monthly content plan", "Post design and copy", "Publishing and scheduling", "Performance reporting"], icon: Share2 },
  { slug: "apps", title: "App Development", short: "Simple digital tools that improve customer experience.", forWhom: "Businesses ready to streamline bookings, loyalty or service delivery.", deliverables: ["Product planning", "User experience design", "Responsive app development", "Launch and iteration support"], icon: Smartphone },
  { slug: "brand", title: "Logo & Brand Design", short: "A clear identity customers recognize and trust.", forWhom: "New and growing businesses that need a professional, consistent presence.", deliverables: ["Logo direction", "Colour and type system", "Practical brand guidelines", "Core digital assets"], icon: Brush },
  { slug: "content", title: "Content Marketing", short: "Useful content that earns attention and trust.", forWhom: "Businesses that want to answer customer questions and build authority.", deliverables: ["Content strategy", "Website and blog copy", "Local landing pages", "Content performance review"], icon: Code2 },
  { slug: "email", title: "Email Marketing", short: "Turn past interest into repeat visits and bookings.", forWhom: "Businesses with a customer list that needs thoughtful, consistent follow-up.", deliverables: ["Campaign planning", "Email copy and design", "Audience segmentation", "Reporting and optimization"], icon: Mail },
  { slug: "performance", title: "Performance Marketing", short: "Connect every channel to outcomes you can measure.", forWhom: "Growth-focused businesses seeking one accountable acquisition plan.", deliverables: ["Channel and funnel strategy", "Conversion tracking", "Budget optimization", "Monthly performance review"], icon: BarChart3 },
];

export const industries = [
  { slug: "dentists", title: "Dentists", outcome: "More appointment requests from local patients.", problem: "Patients choose from the practices they can quickly find and trust online.", approach: "Strengthen local search visibility, improve the booking journey and build a credible presence.", services: "Local SEO, websites, paid search and content" },
  { slug: "restaurants", title: "Cafés & Restaurants", outcome: "More local discovery, visits and repeat customers.", problem: "Strong food and service can still go unseen in a crowded local market.", approach: "Make your location, menu and story easy to discover across search and social.", services: "Local SEO, social media, ads and email" },
  { slug: "gyms", title: "Gyms & Studios", outcome: "More trial sign-ups and qualified memberships.", problem: "Prospects compare options quickly and need a clear reason to take the first step.", approach: "Pair local reach with focused offers and a frictionless trial-booking experience.", services: "Paid ads, social media, websites and email" },
  { slug: "home-services", title: "Plumbers & Home Services", outcome: "More high-intent calls in the areas you serve.", problem: "Customers often hire the first credible provider they find in an urgent search.", approach: "Improve map visibility and create campaigns around the services and locations that matter.", services: "Local SEO, Google Ads, websites and performance marketing" },
  { slug: "salons-clinics", title: "Salons & Clinics", outcome: "More consultations, bookings and returning clients.", problem: "Prospects need confidence in your expertise and a simple path to book.", approach: "Build trust through a polished presence, useful content and targeted local promotion.", services: "Local SEO, social media, websites and brand design" },
];

export const contact = {
  email: "support@globalora.com",
  phone: "1234567890",
  location: "Serving businesses across Canada",
};

export const navigation = [
  ["Home", "/"], ["Services", "/services"], ["Industries", "/industries"],
  ["About", "/about"], ["Results", "/results"], ["Contact", "/contact"],
] as const;

export { MapPin };