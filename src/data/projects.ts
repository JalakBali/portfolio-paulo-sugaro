export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;

  overview: {
    label: string;
    heading: string;
    body: string;
  };

  challenges: string[];

  solutionSections: {
    title: string;
    body: string;
    image?: string;
  }[];

  results: {
    title: string;
    description: string;
  }[];

  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "business-management-platform",
    title: "Business Management Platform",
    subtitle: "An integrated system for multi-unit hospitality operations.",
    description:
      "Built to connect purchasing, warehouse, inventory, accounting, cash and bank, reporting, and business unit operations in one workflow-driven platform.",
    coverImage: "/images/showcase/dashboard.png",
    tags: ["Accounting", "Inventory", "Reporting"],
    featured: true,

    overview: {
      label: "CASE STUDY",
      heading: "Connecting Operations Into One Business System",
      body: "A multi-unit business needed a more connected way to manage purchasing, warehouse activities, inventory, accounting, and reporting. The goal was to reduce duplicate work and give teams clearer visibility across daily operations.",
    },

    challenges: [
      "Business data was spread across different workflows and tools.",
      "Teams needed to reduce repeated manual entry.",
      "Finance, warehouse, and operations needed clearer visibility.",
      "Reporting depended on information from multiple areas of the business.",
    ],

    solutionSections: [
      {
        title: "Workflow-Driven Platform",
        body: "The system was designed around how teams actually worked across purchasing, inventory, warehouse, finance, and reporting, instead of forcing every department into a generic process.",
        image: "/images/showcase/dashboard.png",
      },
      {
        title: "Connected Operational Data",
        body: "Transactions and operational activities were structured so that information could move more naturally between business areas, reducing repeated input and improving visibility.",
        image: "/images/showcase/master-item.png",
      },
    ],

    results: [
      {
        title: "Clearer Operational Workflow",
        description: "A clearer operational workflow across departments.",
      },
      {
        title: "Less Duplicate Entry",
        description: "Less duplicate data entry between teams.",
      },
      {
        title: "Better Visibility",
        description: "Better visibility for management.",
      },
      {
        title: "Foundation for Growth",
        description: "A stronger foundation for future system expansion.",
      },
    ],

    techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "Vercel"],
  },

  {
    slug: "cash-bank-workflow-system",
    title: "Cash & Bank Workflow System",
    subtitle: "A faster way to review, classify, and manage financial transactions.",
    description:
      "Designed to help finance teams handle daily cash and bank transactions, review COA, reduce duplicate entry, and keep reports more accurate.",
    coverImage: "/images/showcase/kas-bank.png",
    tags: ["Cash & Bank", "COA Review", "Automation"],
    featured: true,

    overview: {
      label: "CASE STUDY",
      heading: "Helping Finance Teams Work Faster and More Accurately",
      body: "Finance teams often work with high transaction volume and need quick ways to review, classify, and validate entries. This workflow was designed to support speed without sacrificing accuracy.",
    },

    challenges: [
      "Finance users handled many daily transactions.",
      "Manual review could slow down reporting.",
      "Classification needed to remain consistent.",
      "The team needed a faster input workflow.",
    ],

    solutionSections: [
      {
        title: "Spreadsheet-Style Review",
        body: "A review workflow was created to support fast, keyboard-friendly work patterns for finance users who were used to spreadsheet-style input.",
        image: "/images/showcase/review-coa.png",
      },
      {
        title: "Cash & Bank Visibility",
        body: "Cash and bank transactions were organized into a clearer interface so teams could review, classify, and manage financial data more efficiently.",
        image: "/images/showcase/kas-bank.png",
      },
    ],

    results: [
      {
        title: "Faster Review Workflow",
        description: "Faster review workflow for finance users.",
      },
      {
        title: "Reduced Friction",
        description: "Reduced friction compared with form-only input.",
      },
      {
        title: "Clearer Visibility",
        description: "Clearer transaction visibility.",
      },
      {
        title: "Accurate Reporting",
        description: "Better support for accurate reporting.",
      },
    ],

    techStack: ["Google Apps Script", "Google Sheets", "Next.js", "React"],
  },

  {
    slug: "inventory-stock-operations",
    title: "Inventory & Stock Operations",
    subtitle: "A practical workflow for requests, stock movement, and warehouse control.",
    description:
      "Built around real warehouse operations, from stock requests and goods issue to transfers, stock opname, and item master management.",
    coverImage: "/images/showcase/stock-request.png",
    tags: ["Stock Request", "Warehouse", "Inventory"],
    featured: true,

    overview: {
      label: "CASE STUDY",
      heading: "Building Inventory Workflows Around Real Warehouse Operations",
      body: "Warehouse and inventory work needs clear movement, requests, transfers, and stock validation. This system was designed to support daily stock operations while keeping the workflow practical for the team.",
    },

    challenges: [
      "Stock movement needed better visibility.",
      "Requests, transfers, and usage had to be tracked clearly.",
      "Inventory records needed to stay aligned with daily operations.",
      "The system had to remain practical for warehouse users.",
    ],

    solutionSections: [
      {
        title: "Stock Request Workflow",
        body: "The system supports request-based stock movement so teams can better control what is requested, issued, and recorded.",
        image: "/images/showcase/stock-request.png",
      },
      {
        title: "Inventory Control Foundation",
        body: "Item master and stock-related workflows create a foundation for clearer inventory tracking and future operational reporting.",
        image: "/images/showcase/master-item.png",
      },
    ],

    results: [
      {
        title: "Clearer Stock Tracking",
        description: "Clearer stock request and movement tracking.",
      },
      {
        title: "Better Structure",
        description: "Better structure for warehouse operations.",
      },
      {
        title: "Improved Visibility",
        description: "Improved visibility over inventory-related activity.",
      },
      {
        title: "Reporting Foundation",
        description: "A stronger foundation for stock reporting.",
      },
    ],

    techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "Vercel"],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
