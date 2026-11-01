/**
 * PRAGEETH P. — CENTRALIZED PRICING & ESTIMATOR CONFIGURATION
 * All pricing is managed in Indian Rupees (INR - ₹).
 * Calculation engine strictly uses fixed prices and clean integer arithmetic.
 */

const PRICING_CONFIG = {
  // Prageeth's verified WhatsApp contact number
  whatsappNumber: "919633866997",
  designerEmail: "prageeth0760@gmail.com",
  currency: "INR",
  currencySymbol: "₹",

  // Format currency in Indian standard format (e.g. ₹1,500)
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹');
  },

  // Delivery Tiers
  deliveryTiers: [
    {
      id: "standard",
      name: "Standard Delivery",
      subtitle: "5 – 7 Business Days",
      price: 0,
      description: "Thorough exploratory process, design drafting, revisions, and production finalization."
    },
    {
      id: "express",
      name: "Priority Express Delivery",
      subtitle: "48 – 72 Hours Fast-Track",
      price: 999,
      description: "Fast-tracked schedule with priority revisions and same-day feedback turnaround."
    }
  ],

  // 9 Core Services (matching visual reference specifications)
  services: [
    {
      id: "poster-design",
      name: "Poster Design",
      tagline: "Exhibition, cultural, music & fine-art typographic posters",
      startingPriceDisplay: "From ₹500 / poster",
      basePrice: 500,
      unit: "poster",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 20,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>`,
      customFields: [
        {
          id: "posterSize",
          label: "Output Dimensions",
          type: "select",
          options: [
            { label: "Standard A3 / A2 Print-Ready (300 DPI)", price: 0 },
            { label: "Large Format A1 / Exhibition Billboard", price: 250 },
            { label: "Digital High-Res Screen Only (1080x1350)", price: 0 }
          ]
        }
      ],
      addOns: [
        { id: "source_files", label: "Editable Source Files (.PSD / .AI with layers)", price: 300 },
        { id: "extended_revisions", label: "2 Extra Refinement & Typography Rounds", price: 200 }
      ]
    },
    {
      id: "automotive-poster",
      name: "Automotive Poster",
      tagline: "High-octane car culture, motorsport & technical vehicle posters",
      startingPriceDisplay: "From ₹700 / poster",
      basePrice: 700,
      unit: "poster",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 20,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="11" width="20" height="8" rx="2"/>
        <path d="M5 11l2-5h10l2 5"/>
        <circle cx="7" cy="16" r="2"/>
        <circle cx="17" cy="16" r="2"/>
      </svg>`,
      customFields: [
        {
          id: "carRetouching",
          label: "Vehicle Visual Style",
          type: "select",
          options: [
            { label: "Editorial Cinematic Studio (Dark Background)", price: 0 },
            { label: "Technical Blueprint / Spec Sheet Callouts", price: 300 },
            { label: "Dynamic Racing Action Track Composite", price: 450 }
          ]
        }
      ],
      addOns: [
        { id: "source_files", label: "Full Layered Master File (.PSD)", price: 350 },
        { id: "phone_wallpaper", label: "Matching 4K Mobile Wallpaper Adaptation", price: 150 }
      ]
    },
    {
      id: "food-poster",
      name: "Food Poster",
      tagline: "Restaurant promos, gourmet burgers, drinks & menu creative posters",
      startingPriceDisplay: "From ₹500 / poster",
      basePrice: 500,
      unit: "poster",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 20,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 4v3"/>
        <path d="M4 18h16"/>
        <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8H4z"/>
      </svg>`,
      customFields: [
        {
          id: "foodFormat",
          label: "Display Medium",
          type: "select",
          options: [
            { label: "Promotional In-Store Poster (Print A3)", price: 0 },
            { label: "Digital Menu Board / Table Display", price: 200 }
          ]
        }
      ],
      addOns: [
        { id: "photo_retouch", label: "Professional Food Photo Retouching & Grading", price: 250 },
        { id: "story_promo", label: "Matching Instagram Story Creative (9:16)", price: 200 }
      ]
    },
    {
      id: "logo-design",
      name: "Logo Design",
      tagline: "Bespoke wordmarks, monograms & iconic brand emblems",
      startingPriceDisplay: "From ₹1,500 / project",
      basePrice: 1500,
      unit: "project",
      pricingType: "package",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 5,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>`,
      customFields: [
        {
          id: "logoTier",
          label: "Logo Exploration Scope",
          type: "radio",
          options: [
            { id: "essential", label: "Essential Logo (2 Concepts, 2 Revisions, Vector SVG/PNG)", price: 1500 },
            { id: "pro", label: "Professional Monogram & Wordmark (3 Concepts, Unlimited Revisions, Full Formats)", price: 2500 }
          ]
        }
      ],
      addOns: [
        { id: "icon_favicon", label: "Favicon + App Icon Package (.ICO, .SVG)", price: 300 },
        { id: "typography_pairing", label: "Curated Brand Typography Pairing Guide", price: 400 }
      ]
    },
    {
      id: "brand-identity",
      name: "Brand Identity",
      tagline: "Holistic visual architecture, stationery & brand systems",
      startingPriceDisplay: "From ₹4,000 / package",
      basePrice: 4000,
      unit: "package",
      pricingType: "package",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 3,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>`,
      customFields: [
        {
          id: "identityPackage",
          label: "Brand Identity Tier",
          type: "radio",
          options: [
            { id: "foundation", label: "Foundation Kit: Logo + Color Palette + Font Hierarchy + Social Avatar", price: 4000 },
            { id: "comprehensive", label: "Complete Identity System: Guidelines PDF + Stationery (Card, Letterhead) + Packaging Spec", price: 7500 }
          ]
        }
      ],
      addOns: [
        { id: "stationery_mockups", label: "3D Photorealistic Stationery Mockup Suite", price: 800 },
        { id: "social_templates", label: "6 Branded Social Media Editable Templates", price: 1200 }
      ]
    },
    {
      id: "social-media",
      name: "Social Media Design",
      tagline: "Editorial grid creatives, product drops & Instagram campaigns",
      startingPriceDisplay: "From ₹400 / post",
      basePrice: 400,
      unit: "post",
      pricingType: "per-unit",
      defaultQuantity: 4,
      minQuantity: 1,
      maxQuantity: 30,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>`,
      customFields: [
        {
          id: "postFormat",
          label: "Post Format Type",
          type: "select",
          options: [
            { label: "Single Feed Image (4:5 / 1:1)", price: 0 },
            { label: "Seamless 3-Slide Carousel Upgrade (+₹250/post)", price: 250 }
          ]
        }
      ],
      addOns: [
        { id: "story_adaptations", label: "Matching 9:16 Story Version for Each Post", price: 150 },
        { id: "copywriting", label: "Hook & Engaging Caption Copywriting Support", price: 200 }
      ]
    },
    {
      id: "motion-graphics",
      name: "Motion Graphics",
      tagline: "Kinetic typography, animated brand reveals & visual loops",
      startingPriceDisplay: "From ₹2,000 / video",
      basePrice: 2000,
      unit: "video",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 10,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2.18" ry="2.18"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>`,
      customFields: [
        {
          id: "durationTier",
          label: "Video Duration",
          type: "select",
          options: [
            { label: "Up to 15 Seconds (Story / Reel / Logo Reveal)", price: 0 },
            { label: "15 to 30 Seconds (Promo / Event Loop)", price: 1200 },
            { label: "30 to 60 Seconds (Full Kinetic Campaign)", price: 2500 }
          ]
        }
      ],
      addOns: [
        { id: "sound_fx", label: "Sound Effects & Audio Sync Mixing", price: 500 },
        { id: "master_4k", label: "4K 60fps ProRes / Uncompressed Master Export", price: 400 }
      ]
    },
    {
      id: "typography",
      name: "Typography",
      tagline: "Custom lettering, editorial compositions & bespoke glyphs",
      startingPriceDisplay: "From ₹800 / design",
      basePrice: 800,
      unit: "design",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 10,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 7 4 4 20 4 20 7"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
        <line x1="12" y1="4" x2="12" y2="20"/>
      </svg>`,
      customFields: [
        {
          id: "typeType",
          label: "Typographic Scope",
          type: "select",
          options: [
            { label: "Custom Lettering / Monogram Artwork", price: 0 },
            { label: "Full Custom Wordmark with Ligatures", price: 600 }
          ]
        }
      ],
      addOns: [
        { id: "vector_expanded", label: "Scalable Vector Master (AI, SVG, EPS)", price: 300 },
        { id: "commercial_usage", label: "Commercial Merchandising License", price: 700 }
      ]
    },
    {
      id: "packaging-design",
      name: "Packaging Design",
      tagline: "Tactile labels, unboxing structures & product cosmetics",
      startingPriceDisplay: "From ₹1,500 / design",
      basePrice: 1500,
      unit: "design",
      pricingType: "per-unit",
      defaultQuantity: 1,
      minQuantity: 1,
      maxQuantity: 10,
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>`,
      customFields: [
        {
          id: "packagingType",
          label: "Packaging Format",
          type: "select",
          options: [
            { label: "Single Bottle / Jar / Canister Label", price: 0 },
            { label: "Complete Box / Carton with Dieline", price: 800 }
          ]
        }
      ],
      addOns: [
        { id: "dieline_spec", label: "Print Production Dieline & Foil Stamp Layer", price: 500 },
        { id: "mockup_render", label: "3D Photorealistic Product Showcase Mockup", price: 600 }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRICING_CONFIG;
}
