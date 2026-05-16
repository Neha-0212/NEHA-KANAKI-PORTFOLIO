export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string;
  tools: string[];
  image: string;

  github?: string;
  dashboard?: string;
  ppt?: string;

  metrics?: { label: string; value: string }[];

  kpis?: { label: string; value: string }[];

  challenges?: {
    challenge: string;
    solution: string;
  }[];

  futureImprovements?: string[];

  caseStudy: {
    problem: string;

    context: {
      observations: string;
      features: string;
      market: string;
    };

    methodology: {
      step: string;
      title: string;
      desc: string;
    }[];

    insights: {
      icon: string;
      title: string;
      desc: string;
    }[];

    impactValue: string;
    impactLabel: string;
    results: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn Analysis",
    tagline: "42.7% churn driver identified",
    description: "Advanced statistical modeling to predict customer attrition and optimize retention spend for a major telecommunications provider.",
    impact: "Identified contract type as strongest churn driver (42.7% vs 2.8%)",
    tools: ["Python", "SQL", "Power BI", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      problem: "A major telecom provider experienced an unexpected 15% uptick in quarterly subscriber loss. The business required a deep-dive diagnostic to identify why high-value fiber-optic customers were defecting, specifically in the California market.",
      context: {
        observations: "7,043 Customers",
        features: "21 Variables",
        market: "B2C Telecom"
      },
      methodology: [
        { step: "01", title: "ETL & Cleaning", desc: "Used SQL to join demographic data with billing cycles. Handled missing values via median imputation." },
        { step: "02", title: "Segmentation", desc: "Engineered a 'Customer Tenure-Value' index. Applied K-Means clustering to isolate high-risk users." },
        { step: "03", title: "Statistical Testing", desc: "Chi-Square tests revealed that 'Month-to-Month' contracts were the single highest predictor." }
      ],
      insights: [
        { icon: "TrendingUp", title: "Fiber Optic Paradox", desc: "Customers with higher bandwidth churned 42.7% more due to pricing volatility." },
        { icon: "ShieldAlert", title: "Support Lag", desc: "Users without Tech Support add-ons were 3x more likely to leave." },
        { icon: "Users", title: "High-Value Defectors", desc: "Tenure of 6-12 months represents the 'danger zone' for revenue loss." }
      ],
      impactValue: "$2.4M",
      impactLabel: "Annualized Revenue Risk Identified",
      results: ["12% Targeted Retention Lift", "Optimized Billing Strategy"]
    }
  },
  {
    id: "olist-retention",
    title: "Olist E-Commerce Retention Analysis",
    tagline: "Structural retention failure across lifecycle",
    description: "Longitudinal study of buyer behavior across Brazil's largest marketplace, identifying critical points of drop-off.",
    impact: "Found structural retention failure across lifecycle stages",
    tools: ["Python", "Cohort Analysis", "Seaborn"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      problem: "Olist marketplace was seeing declining re-purchase rates. I was tasked with mapping the customer lifecycle to find where the ecosystem was leaking long-term value.",
      context: {
        observations: "99k Orders",
        features: "Cohort Groups",
        market: "Brazilian Marketplace"
      },
      methodology: [
        { step: "01", title: "Cohort Mapping", desc: "Grouped users by first purchase month to track retention decay over 12 months." },
        { step: "02", title: "Behavioral Drivers", desc: "Analyzed review scores and delivery times as primary drivers for return visits." },
        { step: "03", title: "LTV Prediction", desc: "Modeled expected future value based on early lifecycle markers." }
      ],
      insights: [
        { icon: "Zap", title: "The First 30 Days", desc: "80% of retention loss occurs within the first 30 days post-onboarding." },
        { icon: "Clock", title: "Delivery Friction", desc: "Wait times exceeding 7 days correlated with a 45% drop in re-acquisition." }
      ],
      impactValue: "40%",
      impactLabel: "Improvement in LTV targeting",
      results: ["New Lifecycle Automation", "Priority Shipping for At-Risk Segments"]
    }
  },
  {
    id: "fintech-funnel",
    title: "Fintech Funnel & Channel ROI Analysis",
    tagline: "22% KYC Drop-off optimization",
    description: "End-to-end optimization of a digital banking onboarding journey, comparing multi-channel attribution and user friction points.",
    impact: "Mapped multi-channel friction to revenue leakage",
    tools: ["SQL", "Funnel Analytics", "ROI Modeling"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    github:"https://github.com/Neha-0212/Fintech_genz-main",
    dashboard:"#",
    ppt:"#",
  
    metrics: [
      { label: "KYC Friction", value: "22% Drop-off" },
      { label: "Referral ROI", value: "3x Conversion" }
    ],
    caseStudy: {
      problem: "A digital bank's CAC was rising while conversion stalled. I audited the onboarding funnel to identify technical and psychological friction points in the KYC process.",
      context: {
        observations: "500k Sessions",
        features: "Multi-channel",
        market: "Fintech App"
      },
      methodology: [
        { step: "01", title: "Funnel Audit", desc: "Identified the exact screen where users abandoned during document upload." },
        { step: "02", title: "Attribution Setup", desc: "Built a first-touch vs last-touch model to re-allocate marketing spend." },
        { step: "03", title: "A/B Testing", desc: "Collaborated with product teams to test reduced friction in the KYC flow." }
      ],
      insights: [
        { icon: "Smartphone", title: "Mobile UI Friction", desc: "The document scanner had a 15% failure rate on older Android devices." },
        { icon: "TrendingUp", title: "Referral Efficiency", desc: "Users invited by friends had 3x the LTV of paid acquisition users." }
      ],
      impactValue: "18%",
      impactLabel: "Increase in Onboarding Conversion",
      results: ["Recalibrated Ad Spend", "Simplified Document Verification"]
    }
  }
];
