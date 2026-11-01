/**
 * PRAGEETH P. CREATIVE PORTFOLIO — REAL PROJECTS DATA & VIEWER
 * Authentic artwork integration for Prageeth P.
 */

const PROJECTS_DATA = [
  // =========================================================================
  // 01 — AUTOMOTIVE POSTERS (cars)
  // =========================================================================
  {
    id: "porsche-911-gt3",
    number: "01",
    title: "Porsche 911 GT3 Motorsports",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/porsche-911-gt3.webp",
    originalImage: "assets/images/posters/cars/porsche gt3.jpg",
    aspectRatio: "4/5",
    description: "Motorsports competition poster design featuring the Porsche 911 GT3 racecar with bold vertical typography, speed livery textures, and dynamic trackside graphics.",
    relatedImages: []
  },
  {
    id: "oracle-red-bull-racing",
    number: "02",
    title: "Oracle Red Bull Racing F1",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/oracle-red-bull-racing.webp",
    originalImage: "assets/images/posters/cars/F1 red.jpg",
    aspectRatio: "4/5",
    description: "Formula 1 championship racecar overhead composition highlighting the Red Bull Racing livery, precision engineering markings, and atmospheric red track lighting.",
    relatedImages: []
  },
  {
    id: "ford-mustang-boss-302",
    number: "03",
    title: "Ford Mustang Boss 302 (1970)",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/ford-mustang-boss-302.webp",
    originalImage: "assets/images/posters/cars/ford mustang.jpg",
    aspectRatio: "4/5",
    description: "Vintage American muscle heritage poster featuring the 1970 Ford Mustang Boss 302 with high-contrast crimson halftones, retro topography waves, and bold slab typography.",
    relatedImages: []
  },
  {
    id: "red-bull-f1-2111",
    number: "04",
    title: "Red Bull F1 — 2111 Series",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/red-bull-f1-2111.webp",
    originalImage: "assets/images/posters/cars/REDBULL F1.jpg",
    aspectRatio: "4/5",
    description: "High-angle aerodynamic study of the Formula 1 front wing assembly layered over dynamic silhouette graphics and technical sponsor iconography.",
    relatedImages: []
  },
  {
    id: "bbs-wheels-performance",
    number: "05",
    title: "BBS Wheels Performance",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/bbs-wheels-performance.webp",
    originalImage: "assets/images/posters/cars/BBS WHEELS 2.jpg",
    aspectRatio: "4/5",
    description: "Motorsport engineering promotional poster focused on BBS lightweight alloy racing wheels and technical automotive craftsmanship.",
    relatedImages: []
  },
  {
    id: "porsche-993-classic",
    number: "06",
    title: "Porsche 993 Classic Coupe",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/porsche-993-classic.webp",
    originalImage: "assets/images/posters/cars/993.jpg",
    aspectRatio: "11/13",
    description: "Air-cooled Porsche 993 tribute poster combining structural Swiss grid discipline with atmospheric automotive photography.",
    relatedImages: []
  },
  {
    id: "yamaha-fz1-superbike",
    number: "07",
    title: "Ferrari 488 GTB",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/yamaha-fz1-superbike.webp",
    originalImage: "assets/images/posters/cars/fz1.jpg",
    aspectRatio: "11/13",
    description: "High-performance motorcycle poster exploring speed, kinetic diagonal typography, and mechanical detail.",
    relatedImages: []
  },
  {
    id: "motorsport-dynamic-series",
    number: "08",
    title: "Motorsport Dynamic Series",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/motorsport-dynamic-series.webp",
    originalImage: "assets/images/posters/cars/MOTORSPORT.jpg",
    aspectRatio: "4/5",
    description: "Track-inspired graphic poster exploring high-energy typography, racing flags, and raw automotive power.",
    relatedImages: []
  },
  {
    id: "mustang-q1-performance",
    number: "09",
    title: "Mustang Q1 Performance",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/mustang-q1-performance.webp",
    originalImage: "assets/images/posters/cars/mustage-q1.jpg",
    aspectRatio: "12/13",
    description: "Editorial automotive presentation showcasing classic Mustang muscle geometry and brutalist typographic hierarchy.",
    relatedImages: []
  },
  {
    id: "crimson-speed-and-form",
    number: "10",
    title: "Crimson Speed & Form",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/crimson-speed-and-form.webp",
    originalImage: "assets/images/posters/cars/red.jpg",
    aspectRatio: "11/13",
    description: "High-contrast automotive visual experiment in scarlet and jet-black, emphasizing velocity and aerodynamic silhouette.",
    relatedImages: []
  },
  {
    id: "automotive-study-04",
    number: "11",
    title: "Automotive Visual Study 04",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/automotive-study-04.webp",
    originalImage: "assets/images/posters/cars/4 ps.jpg",
    aspectRatio: "4/5",
    description: "Experimental poster composition utilizing layered photographic textures, technical racing stats, and stylized lighting.",
    relatedImages: []
  },
  {
    id: "automotive-study-05",
    number: "12",
    title: "Automotive Visual Study 05",
    category: "Automotive Posters",
    filterKey: "automotive",
    year: "2026",
    image: "assets/optimized/cars/automotive-study-05.webp",
    originalImage: "assets/images/posters/cars/5 ps.jpg",
    aspectRatio: "4/5",
    description: "Automotive art poster pairing modern vehicle silhouettes with bold typographic hierarchy and dark aesthetic contrast.",
    relatedImages: []
  },

  // =========================================================================
  // 02 — POSTER DESIGN (sports)
  // =========================================================================
  {
    id: "creed-iii-fc-barcelona",
    number: "13",
    title: "Creed III × FC Barcelona",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/creed-iii-fc-barcelona.webp",
    originalImage: "assets/images/posters/sports/barca x creed.jpg",
    aspectRatio: "4/5",
    description: "Dramatic sports-cinema crossover poster combining Michael B. Jordan's Creed III with FC Barcelona aesthetic iconography, film grain, and editorial credit block typography.",
    relatedImages: []
  },
  {
    id: "cr7-fifa-23-edition",
    number: "14",
    title: "CR7 FIFA 23 Edition",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/cr7-fifa-23-edition.webp",
    originalImage: "assets/images/posters/sports/cr7.ps5.FINAL.jpg",
    aspectRatio: "11/13",
    description: "Official-style PlayStation 5 FIFA 23 concept cover featuring Cristiano Ronaldo in dynamic match action for Portugal, complete with authentic gaming brand typography.",
    relatedImages: []
  },
  {
    id: "paulo-dybala-roma-21",
    number: "15",
    title: "Paulo Dybala — Roma 21",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/paulo-dybala-roma-21.webp",
    originalImage: "assets/images/posters/sports/dybala 3.jpg",
    aspectRatio: "11/13",
    description: "Signature tribute poster for Paulo Dybala's iconic mask celebration at AS Roma, featuring rich imperial red tones, gold serif typography, and bespoke studio signature branding.",
    relatedImages: []
  },
  {
    id: "virat-kohli-champions-trophy",
    number: "16",
    title: "Virat Kohli — Champions Trophy",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/virat-kohli-champions-trophy.webp",
    originalImage: "assets/images/posters/sports/Virat_♾️@virat_kohli_@icc_#virat_#viratkohli_#kohli_#icc_#cricket.jpg",
    aspectRatio: "4/5",
    description: "Triumphant celebration poster of cricket legend Virat Kohli raising his bat for Team India in the ICC Champions Trophy stadium atmosphere.",
    relatedImages: []
  },
  {
    id: "kylian-mbappe-real-madrid",
    number: "17",
    title: "Kylian Mbappé — Real Madrid UCL",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/kylian-mbappe-real-madrid.webp",
    originalImage: "assets/images/posters/sports/HUMBLE_HUH_@k_mbappe_@realmadrid_#realmadrid_#mbapppe_#ucl_#championsleague.jpg",
    aspectRatio: "4/5",
    description: "Champions League poster celebrating Kylian Mbappé's arrival at Real Madrid, with moody stadium lighting, graphic badge accents, and high-impact sports typography.",
    relatedImages: []
  },
  {
    id: "lamine-yamal-fc-barcelona",
    number: "18",
    title: "Lamine Yamal — Golden Era",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/lamine-yamal-fc-barcelona.webp",
    originalImage: "assets/images/posters/sports/lamine.jpg",
    aspectRatio: "11/13",
    description: "Youth phenomenon tribute poster for FC Barcelona prodigy Lamine Yamal, highlighting his electric pace and creative flair.",
    relatedImages: []
  },
  {
    id: "raphinha-blaugrana-dynamo",
    number: "19",
    title: "Raphinha — Blaugrana Dynamo",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/raphinha-blaugrana-dynamo.webp",
    originalImage: "assets/images/posters/sports/Raphinha_👾_@raphinha_#raphinha_#fcb_#fcbarcelona_#blaugrana_#ballondor.jpg",
    aspectRatio: "4/5",
    description: "Dynamic FC Barcelona winger poster showcasing Raphinha's match-winning form and Ballon d'Or contender season.",
    relatedImages: []
  },
  {
    id: "barca-duo-raphinha-yamal",
    number: "20",
    title: "Barça Duo — Raphinha × Yamal",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/barca-duo-raphinha-yamal.webp",
    originalImage: "assets/images/posters/sports/—_Duo_@raphinha_x_@lamineyamal_#barca_#raphinha_#yamal_#barcelona.jpg",
    aspectRatio: "4/5",
    description: "Large-scale duo composition capturing the synergy between Raphinha and Lamine Yamal on the FC Barcelona attack.",
    relatedImages: []
  },
  {
    id: "robert-lewandowski-rl9",
    number: "21",
    title: "Robert Lewandowski — RL9",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/robert-lewandowski-rl9.webp",
    originalImage: "assets/images/posters/sports/RL9👾_@_rl9_@fcbarcelona_#lewandoski_#rl9_#barcalona_#barca_#championsleague.jpg",
    aspectRatio: "4/5",
    description: "Champions League poster dedicated to Robert Lewandowski's lethal finishing and milestone goal records with FC Barcelona.",
    relatedImages: []
  },
  {
    id: "scores-first-lewandowski",
    number: "22",
    title: "Scores First — Lewandowski",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/scores-first-lewandowski.webp",
    originalImage: "assets/images/posters/sports/Scores_First_@_rl9_@fcbarcelona_#lewandowski_#barcelona_#fifa_#messi.jpg",
    aspectRatio: "4/5",
    description: "Matchday poster capturing the intensity and goal-scoring instincts of Robert Lewandowski in crucial European fixtures.",
    relatedImages: []
  },
  {
    id: "lewandowski-signature-series",
    number: "23",
    title: "Lewandowski — Signature Series",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/lewandowski-signature-series.webp",
    originalImage: "assets/images/posters/sports/Lewandoski.jpg",
    aspectRatio: "4/5",
    description: "Minimalist sports portrait poster highlighting Lewandowski's composure and veteran leadership at FC Barcelona.",
    relatedImages: []
  },
  {
    id: "lewandowski-striker-edition",
    number: "24",
    title: "Lewandowski — Striker Edition",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/lewandowski-striker-edition.webp",
    originalImage: "assets/images/posters/sports/lew new.jpg",
    aspectRatio: "4/5",
    description: "High-resolution striker visual art combining expressive textures with dynamic sports action composition.",
    relatedImages: []
  },
  {
    id: "kerala-blasters-fc-vol-01",
    number: "25",
    title: "Kerala Blasters FC — Vol. 01",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/kerala-blasters-fc-vol-01.webp",
    originalImage: "assets/images/posters/sports/KBFC 2.jpg",
    aspectRatio: "4/5",
    description: "Indian Super League matchday creative celebrating the passion and yellow heritage of the Kerala Blasters FC fanbase.",
    relatedImages: []
  },
  {
    id: "kerala-blasters-fc-vol-02",
    number: "26",
    title: "Kerala Blasters FC — Vol. 02",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/kerala-blasters-fc-vol-02.webp",
    originalImage: "assets/images/posters/sports/KBFC 21.jpg",
    aspectRatio: "4/5",
    description: "Stadium intensity matchday artwork capturing Kerala Blasters FC's home fortress atmosphere.",
    relatedImages: []
  },
  {
    id: "manchester-city-champions",
    number: "27",
    title: "Manchester City — Champions",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/manchester-city-champions.webp",
    originalImage: "assets/images/posters/sports/MANC W.jpg",
    aspectRatio: "4/5",
    description: "Premier League victory and championship poster honoring Manchester City's title-winning dominance and tactical excellence.",
    relatedImages: []
  },
  {
    id: "real-madrid-los-blancos",
    number: "28",
    title: "Real Madrid — Los Blancos",
    category: "Poster Design",
    filterKey: "posters",
    year: "2026",
    image: "assets/optimized/sports/real-madrid-los-blancos.webp",
    originalImage: "assets/images/posters/sports/reai m.jpg",
    aspectRatio: "4/5",
    description: "European football royalty poster dedicated to Real Madrid's historic Champions League legacy.",
    relatedImages: []
  },

  // =========================================================================
  // 03 — FOOD POSTERS (food)
  // =========================================================================
  {
    id: "fresh-burger-bbq-chicken",
    number: "29",
    title: "Fresh Burger — BBQ Chicken",
    category: "Food Posters",
    filterKey: "food",
    year: "2026",
    image: "assets/optimized/food/fresh-burger-bbq-chicken.webp",
    originalImage: "assets/images/posters/food/burger 1.jpg",
    aspectRatio: "11/13",
    description: "Commercial food poster for gourmet artisan burgers featuring bold electric-blue backdrop branding, clean nutritional flavor callouts, and appetizing food photography.",
    relatedImages: [
      "assets/optimized/food/fresh-burger-bbq-chicken.webp",
      "assets/optimized/food/fresh-burger-margherita.webp",
      "assets/optimized/food/fresh-burger-premium-edition.webp"
    ]
  },
  {
    id: "fresh-burger-margherita",
    number: "30",
    title: "Fresh Burger — Margherita",
    category: "Food Posters",
    filterKey: "food",
    year: "2026",
    image: "assets/optimized/food/fresh-burger-margherita.webp",
    originalImage: "assets/images/posters/food/burger 2.jpg",
    aspectRatio: "11/13",
    description: "Clean edition of the Fresh Burger promotional poster highlighting fresh ingredients, vibrant vegetable layers, and ordering call-to-action.",
    relatedImages: [
      "assets/optimized/food/fresh-burger-margherita.webp",
      "assets/optimized/food/fresh-burger-bbq-chicken.webp",
      "assets/optimized/food/fresh-burger-premium-edition.webp"
    ]
  },
  {
    id: "fresh-burger-premium-edition",
    number: "31",
    title: "Fresh Burger — Premium Series",
    category: "Food Posters",
    filterKey: "food",
    year: "2026",
    image: "assets/optimized/food/fresh-burger-premium-edition.webp",
    originalImage: "assets/images/posters/food/burger 3.jpg",
    aspectRatio: "11/13",
    description: "Detailed typography iteration of the gourmet Fresh Burger campaign with outline typography and balanced promotional layout.",
    relatedImages: [
      "assets/optimized/food/fresh-burger-premium-edition.webp",
      "assets/optimized/food/fresh-burger-bbq-chicken.webp",
      "assets/optimized/food/fresh-burger-margherita.webp"
    ]
  },

  // =========================================================================
  // 04 — BRANDING & IDENTITY (branding)
  // =========================================================================
  {
    id: "namma-illam-heritage-pattern",
    number: "32",
    title: "Namma Illam — Heritage Pattern & Identity",
    category: "Branding & Identity",
    filterKey: "branding",
    year: "2026",
    image: "assets/optimized/branding/namma-illam-heritage-pattern.webp",
    originalImage: "assets/images/branding/Artboard 1.png",
    aspectRatio: "16/9",
    description: "Complete visual identity and intricate ornamental pattern design for Namma Illam ('The pure taste of south'), incorporating traditional South Indian architectural motifs, temple iconography, and bespoke lettering.",
    relatedImages: [
      "assets/optimized/branding/namma-illam-heritage-pattern.webp",
      "assets/optimized/branding/namma-illam-brandmark.webp"
    ]
  },
  {
    id: "namma-illam-brandmark",
    number: "33",
    title: "Namma Illam — Brand Mark & Identity",
    category: "Branding & Identity",
    filterKey: "branding",
    year: "2026",
    image: "assets/optimized/branding/namma-illam-brandmark.webp",
    originalImage: "assets/images/branding/Artboard 2.png",
    aspectRatio: "16/9",
    description: "Custom logotype and horizontal brand frieze for Namma Illam, harmonizing classical Dravidian line art with modern restaurant identity standards.",
    relatedImages: [
      "assets/optimized/branding/namma-illam-brandmark.webp",
      "assets/optimized/branding/namma-illam-heritage-pattern.webp"
    ]
  },

  // =========================================================================
  // 05 — TYPOGRAPHY (typography)
  // =========================================================================
  {
    id: "helvetica-neue-1983-specimen",
    number: "34",
    title: "Helvetica Neue (1983) Specimen",
    category: "Typography",
    filterKey: "typography",
    year: "2026",
    image: "assets/optimized/typography/helvetica-neue-1983-specimen.webp",
    originalImage: "assets/images/typography/typo/HELVETICA.jpg",
    aspectRatio: "0.707",
    description: "Editorial typographic tribute poster honoring Max Miedinger and Eduard Hoffmann's iconic Helvetica Neue redesign. Features complete character sets, dynamic numeral hierarchy, and Swiss modernist grid structure.",
    relatedImages: []
  },
  {
    id: "transcity-display-type-specimen",
    number: "35",
    title: "Transcity Display Type Specimen",
    category: "Typography",
    filterKey: "typography",
    year: "2026",
    image: "assets/optimized/typography/transcity-display-type-specimen.webp",
    originalImage: "assets/images/typography/typo/TRANSCITY FONT PROMO.jpg",
    aspectRatio: "0.707",
    description: "Modern high-contrast serif display font promotional specimen for Transcity (Dharmas Studio by Jamaludin Ahmad Sahestya Dharma), showcasing dramatic ligatures and character anatomy.",
    relatedImages: []
  },

  // =========================================================================
  // 06 — SOCIAL MEDIA DESIGN (social-media)
  // =========================================================================
  {
    id: "scuderia-ferrari-charles-leclerc",
    number: "36",
    title: "Scuderia Ferrari F1 — Charles Leclerc",
    category: "Social Media Design",
    filterKey: "social-media",
    year: "2026",
    image: "assets/optimized/social-media/scuderia-ferrari-charles-leclerc.webp",
    originalImage: "assets/images/social-media/BROCHURE.jpg",
    aspectRatio: "1.415",
    description: "Tri-fold editorial social brochure and digital campaign creative designed for Scuderia Ferrari's Grand Prix weekend, spotlighting Charles Leclerc with the Prancing Horse halftone graphic and iconic Rosso Corsa livery.",
    relatedImages: [
      "assets/optimized/social-media/scuderia-ferrari-charles-leclerc.webp",
      "assets/optimized/social-media/scuderia-ferrari-one-day-to-go.webp"
    ]
  },
  {
    id: "scuderia-ferrari-one-day-to-go",
    number: "37",
    title: "Scuderia Ferrari F1 — 'One Day To Go'",
    category: "Social Media Design",
    filterKey: "social-media",
    year: "2026",
    image: "assets/optimized/social-media/scuderia-ferrari-one-day-to-go.webp",
    originalImage: "assets/images/social-media/BROCHURE 2.jpg",
    aspectRatio: "1.415",
    description: "Grand Prix countdown promotional campaign graphic ('One Day To Go' / #44 #16) combining Pirelli tire pit-stop photography, circuit elevation maps, and high-tech telemetry typography.",
    relatedImages: [
      "assets/optimized/social-media/scuderia-ferrari-one-day-to-go.webp",
      "assets/optimized/social-media/scuderia-ferrari-charles-leclerc.webp"
    ]
  },
  {
    id: "tastecraft-fire-and-flavour",
    number: "38",
    title: "TasteCraft — Fire & Flavour",
    category: "Social Media Design",
    filterKey: "social-media",
    year: "2026",
    image: "assets/optimized/social-media/tastecraft-fire-and-flavour.webp",
    originalImage: "assets/images/social-media/magazine.jpg",
    aspectRatio: "3/4",
    description: "Culinary digital magazine cover and promotional social creative for 'TasteCraft — Inspiring Cooks, Delighting Eaters', featuring the Summer Grill special with bold serif typography.",
    relatedImages: []
  },
  {
    id: "plated-global-plates",
    number: "39",
    title: "Plated — Global Plates",
    category: "Social Media Design",
    filterKey: "social-media",
    year: "2026",
    image: "assets/optimized/social-media/plated-global-plates.webp",
    originalImage: "assets/images/social-media/magazine 2.jpg",
    aspectRatio: "3/4",
    description: "Editorial culinary publication cover for 'Plated — Stories Served Fresh', celebrating global flavors and artisanal dessert craft with refined typography.",
    relatedImages: []
  }
];

/**
 * ProjectManager: Handles category filtering, grid rendering, and project viewer modal
 */
class ProjectManager {
  constructor() {
    this.projects = PROJECTS_DATA;
    this.currentFilter = 'all';
    this.activeProjectIndex = -1;
    this.activeSlideIndex = 0;
    
    this.gridContainer = document.getElementById('projects-grid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.modal = document.getElementById('project-modal');
    
    // Touch tracking for swipe navigation
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;

    this.init();
  }

  init() {
    if (this.gridContainer) {
      this.renderProjects(this.projects);
      this.bindFilters();
    }
    this.bindModalEvents();
  }

  getFilteredProjects() {
    if (this.currentFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.filterKey === this.currentFilter);
  }

  renderProjects(projectsToRender) {
    if (!this.gridContainer) return;
    
    // Smooth transition
    this.gridContainer.classList.add('filtering-out');
    
    setTimeout(() => {
      this.gridContainer.innerHTML = '';
      
      projectsToRender.forEach((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.setAttribute('data-category', project.filterKey);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${project.title} (${project.category})`);

        // Compute aspect ratio class or style
        const ar = project.aspectRatio || '4/5';

        card.innerHTML = `
          <div class="project-card-media" style="aspect-ratio: ${ar};">
            <span class="project-card-badge">${project.category}</span>
            <img 
              class="project-img" 
              src="${project.image}" 
              alt="${project.title} - ${project.category} by Prageeth P." 
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="project-card-info">
            <div>
              <span class="project-meta-cat">${project.number} — ${project.category}</span>
              <h3 class="project-title">${project.title}</h3>
            </div>
            <span class="project-year">${project.year}</span>
          </div>
        `;

        card.addEventListener('click', () => this.openModal(project.id));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openModal(project.id);
          }
        });

        this.gridContainer.appendChild(card);
      });

      this.gridContainer.classList.remove('filtering-out');

      // Trigger reveal observer for newly added items
      if (window.portfolioAnimations && window.portfolioAnimations.observeElements) {
        window.portfolioAnimations.observeElements();
      }
    }, 150);
  }

  bindFilters() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        this.currentFilter = filter;
        const filtered = this.getFilteredProjects();
        this.renderProjects(filtered);
      });
    });
  }

  bindModalEvents() {
    if (!this.modal) return;

    const closeBtn = this.modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Click outside dialog to close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('open')) return;

      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight') {
        this.navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        this.navigateModal(-1);
      }
    });

    // Prev / Next buttons
    const prevBtn = this.modal.querySelector('#modal-prev-btn');
    const nextBtn = this.modal.querySelector('#modal-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.navigateModal(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.navigateModal(1));
    }

    // Touch swipe gestures
    this.modal.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.modal.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.touchEndY = e.changedTouches[0].screenY;
      this.handleSwipe();
    }, { passive: true });
  }

  handleSwipe() {
    const diffX = this.touchEndX - this.touchStartX;
    const diffY = this.touchEndY - this.touchStartY;

    // Horizontal swipe for next/prev
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        this.navigateModal(1); // Swipe left -> Next
      } else {
        this.navigateModal(-1); // Swipe right -> Prev
      }
    } 
    // Swipe down to close
    else if (diffY > 100 && Math.abs(diffY) > Math.abs(diffX)) {
      this.closeModal();
    }
  }

  openModal(projectId) {
    const currentList = this.getFilteredProjects();
    const index = currentList.findIndex(p => p.id === projectId);
    if (index === -1) return;

    this.activeProjectIndex = index;
    this.activeSlideIndex = 0;
    this.updateModalContent(currentList[index]);

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    const closeBtn = this.modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  updateModalContent(project) {
    const modalImg = this.modal.querySelector('#modal-img');
    const modalTag = this.modal.querySelector('#modal-tag');
    const modalTitle = this.modal.querySelector('#modal-title');
    const modalDesc = this.modal.querySelector('#modal-desc');
    const modalDiscipline = this.modal.querySelector('#modal-discipline');
    const modalClient = this.modal.querySelector('#modal-client');
    const modalRole = this.modal.querySelector('#modal-role');
    const modalYear = this.modal.querySelector('#modal-year');
    const modalMediaWrap = this.modal.querySelector('.modal-media-wrap');

    // Display image
    const displayImg = (project.relatedImages && project.relatedImages.length > 0)
      ? project.relatedImages[this.activeSlideIndex]
      : project.image;

    if (modalImg) {
      modalImg.src = displayImg;
      modalImg.alt = `${project.title} - ${project.category}`;
    }

    if (modalTag) modalTag.textContent = `${project.number} — ${project.category}`;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) modalDesc.textContent = project.description || '';
    if (modalDiscipline) modalDiscipline.textContent = project.category;
    if (modalRole) modalRole.textContent = project.role || 'Graphic Designer & Visual Artist';
    if (modalYear) modalYear.textContent = project.year || '2024';

    // Client/Context row - only show if available
    const clientRow = modalClient ? modalClient.closest('.modal-spec-row') : null;
    if (clientRow) {
      if (project.client) {
        clientRow.style.display = 'flex';
        modalClient.textContent = project.client;
      } else {
        clientRow.style.display = 'none';
      }
    }

    // Multi-image presentation support
    let thumbsContainer = this.modal.querySelector('.modal-thumbs-bar');
    if (!thumbsContainer) {
      thumbsContainer = document.createElement('div');
      thumbsContainer.className = 'modal-thumbs-bar';
      if (modalMediaWrap) {
        modalMediaWrap.appendChild(thumbsContainer);
      }
    }

    if (project.relatedImages && project.relatedImages.length > 1) {
      thumbsContainer.style.display = 'flex';
      thumbsContainer.innerHTML = '';
      project.relatedImages.forEach((imgSrc, sIdx) => {
        const thumb = document.createElement('button');
        thumb.className = `modal-thumb-item ${sIdx === this.activeSlideIndex ? 'active' : ''}`;
        thumb.setAttribute('aria-label', `Slide ${sIdx + 1}`);
        thumb.innerHTML = `<img src="${imgSrc}" alt="Slide thumbnail ${sIdx + 1}" />`;
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          this.activeSlideIndex = sIdx;
          if (modalImg) modalImg.src = imgSrc;
          thumbsContainer.querySelectorAll('.modal-thumb-item').forEach((t, i) => {
            t.classList.toggle('active', i === sIdx);
          });
        });
        thumbsContainer.appendChild(thumb);
      });
    } else {
      thumbsContainer.style.display = 'none';
    }

    // Direct original image preview link
    const modalFullPageLink = this.modal.querySelector('#modal-fullpage-link');
    if (modalFullPageLink) {
      modalFullPageLink.href = project.image;
      modalFullPageLink.textContent = "View High-Res Artwork ↗";
      modalFullPageLink.setAttribute('target', '_blank');
      modalFullPageLink.setAttribute('rel', 'noopener noreferrer');
    }
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  navigateModal(direction) {
    const currentList = this.getFilteredProjects();
    if (this.activeProjectIndex === -1 || currentList.length === 0) return;

    let nextIndex = this.activeProjectIndex + direction;
    if (nextIndex < 0) nextIndex = currentList.length - 1;
    if (nextIndex >= currentList.length) nextIndex = 0;

    this.activeProjectIndex = nextIndex;
    this.activeSlideIndex = 0;
    this.updateModalContent(currentList[nextIndex]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioProjects = new ProjectManager();
});
