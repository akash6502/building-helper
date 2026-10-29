export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  shortSummary: string;
  badge: string;
  accentClass: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  metrics: Array<{ value: string; label: string; desc: string }>;
  keyHighlights: string[];
  detailedScope: Array<{ category: string; description: string; items: string[] }>;
  processSteps: Array<{
    stepNumber: number;
    title: string;
    timeframe: string;
    description: string;
    keyDeliverable: string;
  }>;
  materialsAndEquipment: Array<{
    category: string;
    brandPartner: string;
    specification: string;
    whyItMatters: string;
  }>;
  qualityStandards: string[];
  idealFor: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "Plastering & Gypsum Leveling",
    slug: "plastering-gypsum-leveling",
    title: "Plastering & Gypsum Leveling",
    shortTitle: "Plastering & Gypsum",
    subtitle: "Precision AAC Block Leveling & True Plumb Plastering",
    shortSummary: "Precision AAC block wall leveling, Gyproc one-coat gypsum plastering, and crack-resistant false ceilings. Delivers paint-ready, mirror-smooth planar surfaces.",
    badge: "Surface Foundation",
    accentClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    tagline: "Zero-undulation walls ready for premium paint in 72 hours",
    heroHeadline: "Precision Plastering & Gyproc Gypsum Wall Leveling",
    heroDescription:
      "Eliminate wave marks, hollow cavities, and uneven wall lines. Our specialized plastering teams use genuine Gyproc Saint-Gobain one-coat gypsum and hack-bond primers with laser leveling for mirror-smooth interior walls and crack-proof false ceilings.",
    metrics: [
      { value: "±1 mm", label: "Surface Tolerance", desc: "Laser-aligned vertical plumb and planar flatness" },
      { value: "72 Hours", label: "Drying Time", desc: "Ready for putty 3x faster than traditional sand-cement" },
      { value: "0 Ltr", label: "Water Curing", desc: "Self-curing formulation eliminating moisture entrapment" },
      { value: "100%", label: "Fire Resistant", desc: "Non-combustible gypsum backing with Class-A fire rating" },
    ],
    keyHighlights: [
      "Direct one-coat gypsum plaster on AAC blocks, RCC columns, and clay brickwork",
      "Chemical hack-bonding on smooth concrete to ensure zero hollow debonding",
      "GI perimeter casing with fiber-mesh joint taping to permanently eliminate micro-cracks",
      "Laser plumb-line alignment for 90-degree right angles in kitchens and bathroom entries",
      "Perimeter false ceiling, acoustic drywall partitions, and hidden LED cove fabrication",
    ],
    detailedScope: [
      {
        category: "RCC Concrete & Substrate Preparation",
        description: "Ensuring an unshakeable bond between the structure and plaster.",
        items: [
          "Mechanical surface cleaning and removal of mold-release oils from RCC beams and columns",
          "Application of Gyproc Bond-It / Saint-Gobain mechanical polymer bonding agent with coarse aggregates",
          "Verification of substrate moisture and wall suction control prior to plaster application",
        ],
      },
      {
        category: "One-Coat Gypsum Wall Plastering",
        description: "Single-coat formulation replacing both sand-cement plaster and POP punning.",
        items: [
          "Application of Saint-Gobain Gyproc Elite 90 / Saint-Gobain Supreme one-coat gypsum (10mm to 13mm thickness)",
          "Installation of vertical screed strips aligned via laser level to eliminate undulations",
          "Trowel compaction and feather-edge leveling for a silky, paint-ready surface finish",
          "Galvanized corner beads installed at all external wall corners and window reveals for sharp 90° edges",
        ],
      },
      {
        category: "Joint Reinforcement & Crack Prevention",
        description: "Eliminating differential movement cracks between masonry and RCC joints.",
        items: [
          "Embedding 100mm alkali-resistant fiberglass mesh over all AAC block and concrete beam joints",
          "Polymer-modified jointing compound application over structural expansion gaps",
          "Sealing around electrical switch boxes and plumbing chases to prevent perimeter cracking",
        ],
      },
      {
        category: "False Ceiling & Drywall Partitions",
        description: "Architectural ceiling designs and lightweight partition walls.",
        items: [
          "GI framework installation using heavy-gauge perimeter channels, intermediate channels, and ceiling angles",
          "12.5mm Gyproc plasterboard fixing with zinc-coated drywall screws at 150mm intervals",
          "Paper tape jointing and Gyproc ProFill feather-edge finishing for invisible flush joints",
          "Fabrication of cove lighting perimeters, AC diffuser cutouts, and speaker pockets",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Site Survey & Laser Leveling",
        timeframe: "Day 1",
        description: "Engineers mark laser plumb benchmarks across all rooms, detecting wall tilts and planning screed thickness.",
        keyDeliverable: "Laser benchmark map and material batch mobilization",
      },
      {
        stepNumber: 2,
        title: "Bond-It Application & Mesh Jointing",
        timeframe: "Day 2",
        description: "RCC columns and beams are coated with high-grip bonding agents, and joints are reinforced with fiberglass mesh.",
        keyDeliverable: "100% bonded substrate with zero unbonded contact spots",
      },
      {
        stepNumber: 3,
        title: "One-Coat Gypsum Application",
        timeframe: "Days 3 - 6",
        description: "Crews apply Gyproc Elite 90 using aluminum straight edges to achieve an exact plumb finish across all walls.",
        keyDeliverable: "Level planar surfaces with zero wavy shadows under grazing light",
      },
      {
        stepNumber: 4,
        title: "Ceiling Framing & Quality Signoff",
        timeframe: "Days 7 - 9",
        description: "False ceiling framework is erected, plasterboards are screwed and jointed, and acoustic checks are finalized.",
        keyDeliverable: "Signed quality audit sheet and moisture-ready handover for wall putty",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Gypsum Plaster",
        brandPartner: "Saint-Gobain Gyproc (Elite 90 / Supreme)",
        specification: "Pre-mixed lightweight hemihydrate gypsum plaster, dry density 700-750 kg/m³",
        whyItMatters: "Eliminates sand silt impurities, cures without water spraying, and provides natural thermal insulation.",
      },
      {
        category: "Bonding Agent",
        brandPartner: "Gyproc Bond-It",
        specification: "Polymer-based single-coat bonding agent with coarse synthetic aggregates",
        whyItMatters: "Creates a mechanical key on ultra-smooth RCC columns, preventing hollow plaster separation.",
      },
      {
        category: "Crack Reinforcement",
        brandPartner: "Saint-Gobain FiberMesh 100mm",
        specification: "Alkali-resistant woven glass fiber mesh (145 g/m²)",
        whyItMatters: "Bridges the expansion difference between concrete slabs and AAC blocks so walls never develop hairline lines.",
      },
      {
        category: "Ceiling Metal Framework",
        brandPartner: "Gyproc Ultra Steel Framing",
        specification: "Hot-dip galvanized 0.55mm GI channels with knurled ribs",
        whyItMatters: "Prevents ceiling sagging and rust discoloration over decades.",
      },
    ],
    qualityStandards: [
      "Maximum deviation under a 2-meter straight edge is less than 1.5mm across any span",
      "Right angles at all tiled kitchen corners, door jambs, and wardrobe niches verified by 3-4-5 triangle",
      "No external water curing required, allowing subsequent finishes to start without trapped moisture",
      "100% genuine factory sealed bags with batch manufacturing verification",
    ],
    idealFor: [
      "New residential apartments with AAC block internal partitions",
      "Luxury villas requiring mirror-finish ceiling coves and true plumb walls",
      "Commercial office interiors requiring fast drywall partitions and acoustic false ceilings",
      "Renovation projects where sand-cement plastering mess and 21-day water curing are impossible",
    ],
    faqs: [
      {
        question: "Why is Gyproc one-coat gypsum better than traditional sand and cement plaster?",
        answer:
          "Gypsum plaster is pre-mixed at the factory, eliminating low-quality river sand and silt. It requires zero days of water curing (saving thousands of liters of water and preventing dampness) and dries in only 72 hours with a silky smooth finish that needs fewer coats of putty.",
      },
      {
        question: "How do you prevent plaster from separating from smooth RCC concrete beams?",
        answer:
          "We never apply gypsum directly to bare RCC. We first coat all concrete surfaces with Saint-Gobain Gyproc Bond-It, an adhesive polymer containing textured aggregates that locks mechanically with the concrete and gypsum.",
      },
      {
        question: "What is your surface level tolerance?",
        answer:
          "Our site teams work with laser plumb lines and aluminum straight edges to maintain a strict tolerance of ±1mm over 2 meters. This guarantees that your wardrobes, tile reveals, and wall-hung TVs sit flush without unsightly gaps.",
      },
    ],
  },
  {
    id: "Wall Putty & Surface Prep",
    slug: "wall-putty-surface-prep",
    title: "Wall Putty & Surface Finishing",
    shortTitle: "Wall Putty & Prep",
    subtitle: "Silky Smooth, High-Adhesion Base for Luxury Paints",
    shortSummary: "Multi-layer polymer white cement putty application, motorized dust-free sanding, pinhole filling, and deep penetrating primer base coating.",
    badge: "Surface Perfection",
    accentClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    tagline: "Ultra-fine base finish with dustless orbital sanding technology",
    heroHeadline: "Multi-Coat White Cement Putty & Dustless Surface Finishing",
    heroDescription:
      "Paint is only as good as the substrate underneath. We engineer smooth, velvet-like foundations using authentic polymer-modified white cement putty, automated dust-extracting sanding machines, and efflorescence-resistant primer sealers.",
    metrics: [
      { value: "2+1", label: "Coat Protocol", desc: "Coarse base coat + ultra-fine finishing coat + spot touchup" },
      { value: "0% Dust", label: "Vacuum Sanding", desc: "Motorized vacuum sanders capture 99% of airborne particles" },
      { value: "0 Undulation", label: "Leveling", desc: "Cross-light grazing inspection ensures zero wavy patches" },
      { value: "7-Year", label: "Adhesion Life", desc: "Polymer-modified base prevents flaking and peeling" },
    ],
    keyHighlights: [
      "Application of genuine Birla White WallCare / JK ProMax polymer putty",
      "Rotary motorized vacuum sanding (Mirka dustless technology) for flawless plane smoothness",
      "Pinhole elimination using acrylic skim filler under bright grazing halogen lamps",
      "Deep penetrating interior wall primer application creating uniform paint absorption",
      "Anti-efflorescence salt wash treatment on cured walls before puttying",
    ],
    detailedScope: [
      {
        category: "Substrate Cleaning & Salt Neutralization",
        description: "Preparing the plastered wall for maximum putty adhesion.",
        items: [
          "Manual scraping using wire brushes to remove all loose plaster particles and concrete burrs",
          "Digital moisture meter testing to ensure surface moisture is below 12% before coating",
          "Neutralization of alkaline salts and anti-fungal treatment on boundary-adjacent walls",
        ],
      },
      {
        category: "Dual-Coat Polymer Putty Application",
        description: "Layering coarse and ultra-fine polymers for thickness and mirror sheen.",
        items: [
          "First coat: 1.0mm thickness of polymer-rich white cement putty applied bottom-to-top with 12-inch stainless blades",
          "Inter-coat drying of minimum 6 hours to allow crystal formation and polymer cure",
          "Second coat: 0.5mm ultra-fine finish putty applied top-to-bottom in cross-direction to eliminate trowel lines",
        ],
      },
      {
        category: "Dust-Free Motorized Sanding",
        description: "Replacing messy manual sanding with precision orbital abrasives.",
        items: [
          "Orbital machine sanding using 180-grit abrasive mesh connected to HEPA vacuum dust extractors",
          "Secondary manual feather-sanding on corners, ceiling coves, and window reveals using 220-grit paper",
          "Dust-free work environment ensuring no plaster dust settles in ducts, wiring conduits, or flooring",
        ],
      },
      {
        category: "Primer Sealing & Inspection",
        description: "Locking the substrate and preparing for uniform paint consumption.",
        items: [
          "High-power 500W grazing light inspection to expose microscopic planar undulations",
          "Micro-pinhole filling using acrylic spot putty",
          "Application of one full coat of water-based deep penetrating primer (Asian Paints Decoprime / Berger)",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Surface Cleaning & Moisture Check",
        timeframe: "Day 1",
        description: "Walls are scraped clean, washed if required, and checked with digital moisture meters.",
        keyDeliverable: "Certified dry wall substrate ready for cementitious putty",
      },
      {
        stepNumber: 2,
        title: "First Coat Polymer Putty",
        timeframe: "Days 2 - 3",
        description: "Crews lay the structural 1mm base coat using wide stainless steel blades to fill substrate micro-pores.",
        keyDeliverable: "Uniform white planar base coat with zero trowel grooves",
      },
      {
        stepNumber: 3,
        title: "Second Coat & Curing",
        timeframe: "Days 4 - 5",
        description: "Cross-directional fine finish coat applied to achieve a consistent ultra-smooth surface texture.",
        keyDeliverable: "Seamless velvet finish across all wall and ceiling surfaces",
      },
      {
        stepNumber: 4,
        title: "Dustless Sanding & Primer Seal",
        timeframe: "Days 6 - 7",
        description: "Motorized vacuum sanders plane the wall, followed by grazing light inspection and deep-primer seal.",
        keyDeliverable: "Mirror-smooth, primed surface ready for luxury paint topcoats",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Polymer Putty",
        brandPartner: "Birla White WallCare / JK ProMax",
        specification: "Polymer-modified white cement based putty conforming to HDB Singapore standards",
        whyItMatters: "Provides superior water resistance, high compressive bond strength, and prevents future paint peeling.",
      },
      {
        category: "Sanding System",
        brandPartner: "Mirka Dust-Free System",
        specification: "Random orbital drywall sander with continuous integrated vacuum HEPA extraction",
        whyItMatters: "Eliminates hand sanding scratches, produces uniform velvet smoothness, and keeps your home clean.",
      },
      {
        category: "Wall Primer",
        brandPartner: "Asian Paints Decoprime / Berger BP",
        specification: "Deep penetrating acrylic water-based interior wall primer",
        whyItMatters: "Reduces paint absorption by 30% and locks white cement particles to stop chalking.",
      },
    ],
    qualityStandards: [
      "Zero wavy ripples visible when checked with 45-degree angled LED grazing light",
      "Total combined putty thickness controlled between 1.2mm and 1.5mm to avoid brittleness",
      "Substrate moisture verified under 10% before primer application",
      "Dust-free protocol ensuring clean premises with zero dust clogging your AC vents or switchboards",
    ],
    idealFor: [
      "Apartments and villas preparing for high-sheen Royale or velvet emulsion paints",
      "Renovation flats where old paint has been scraped back to the plaster",
      "Ceilings and feature walls that will receive cove lighting or spot lights",
      "Homeowners who want zero dust mess inside their active construction site",
    ],
    faqs: [
      {
        question: "Why do you use vacuum sanding machines instead of hand sanding?",
        answer:
          "Hand sanding produces uneven hand pressure marks that show up as waves once glossy paints are applied. Motorized orbital sanders provide perfectly even planar pressure and capture 99% of dust into a sealed vacuum, keeping your site clean.",
      },
      {
        question: "Can wall putty be applied directly over fresh plaster?",
        answer:
          "Plaster must cure and dry thoroughly first. Traditional plaster needs 14-21 days, whereas our gypsum plaster needs just 3-4 days. We always test moisture with a digital meter to ensure it is under 12% before starting putty work.",
      },
      {
        question: "How many coats of putty do you provide?",
        answer:
          "We provide a minimum of two full coats (one coarse base coat and one ultra-fine finishing coat), followed by detailed pinhole spot-filling under halogen inspection lamps.",
      },
    ],
  },
  {
    id: "Interior & Exterior Painting",
    slug: "interior-exterior-painting",
    title: "Interior & Exterior Painting",
    shortTitle: "Painting & Finishes",
    subtitle: "Luxury Emulsions, Designer Textures & Weather-Guard Coatings",
    shortSummary: "High-sheen luxury emulsions, exterior weather-guard coatings, velvet finishes, designer textures, and anti-fungal waterproofing paint layers.",
    badge: "Aesthetic Finish",
    accentClass: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    tagline: "Flawless color reproduction with factory-tinted luxury emulsions",
    heroHeadline: "Architectural Interior & Weatherproof Exterior Painting",
    heroDescription:
      "Transform bare walls into stunning living spaces. We deliver multi-coat painting using computer-tinted Asian Paints Royale, Berger Silk, and weatherproof elastomeric exterior coatings applied with precision rollers and airless spray systems.",
    metrics: [
      { value: "3 Coats", label: "Paint Application", desc: "1 sealer primer + 2 full luxury emulsion coats" },
      { value: "10-Year", label: "Exterior Warranty", desc: "Elastomeric weather coatings resistant to heavy monsoon rain" },
      { value: "100%", label: "Factory Tinted", desc: "Computerized batch mixing ensuring 100% color consistency" },
      { value: "Zero VOC", label: "Eco-Friendly", desc: "Low-odor formulations safe for immediate occupancy" },
    ],
    keyHighlights: [
      "Authorized application of Asian Paints Royale Luxury Emulsion, Aspira, and Berger Silk",
      "Exterior crack-bridging elastomeric coating (Asian Paints Apex Ultima Protek)",
      "High-pressure airless spray painting on ceilings for uniform, roller-mark-free texture",
      "Luxury designer texture application (Royale Play, Stucco, Metallic finishes)",
      "Polyurethane (PU) wood polishing on doors and anti-rust enamel on metal railings",
    ],
    detailedScope: [
      {
        category: "Interior Luxury Painting",
        description: "Rich, washable, satin and velvet finishes for bedrooms and living spaces.",
        items: [
          "Masking of all flooring, window frames, electrical points, and glass fixtures with protective masking film",
          "Application of 1 coat of acrylic undercoat primer over sanded putty",
          "Application of 2 to 3 coats of luxury emulsion (Asian Paints Royale Luxury Emulsion / Royale Matt)",
          "Use of 9-inch microfiber rollers for consistent orange-peel-free stipple texture",
        ],
      },
      {
        category: "Exterior Weatherproofing & Façade Coating",
        description: "Heavy-duty elastomeric coatings that resist rain, algae, and UV heat.",
        items: [
          "High-pressure water jet washing to clean exterior dirt, fungal spores, and loose cement",
          "Crack filling using fiber-reinforced polymer sealants on exterior hairline cracks",
          "Application of anti-efflorescence exterior penetrating primer",
          "Application of 2 coats of Asian Paints Apex Ultima Protek with nanotech dirt-pickup resistance",
        ],
      },
      {
        category: "Feature Walls & Designer Textures",
        description: "Statement accent walls tailored to your interior design theme.",
        items: [
          "Royale Play special effects: Safari, Dune, Stucco, and Metallic Spatula finishes",
          "Seamless micro-cement and concrete loft finishes for contemporary aesthetics",
          "Italian marble plaster application (Marmorino / Stucco Veneziano)",
        ],
      },
      {
        category: "Wood Polishing & Metal Coatings",
        description: "Durable protective finishes for doors, windows, and steel fabrications.",
        items: [
          "Multi-stage wood sanding, grain filling, and stain matching on teak and veneer doors",
          "Application of Asian Paints PU Woodtech (Matt or High Gloss) with airless spray",
          "Zinc-chromate anti-rust primer application on MS railings followed by high-gloss enamel",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Masking & Color Sampling",
        timeframe: "Day 1",
        description: "All windows, floors, and fixtures are masked with polythene film. Color sample swatches are painted on site.",
        keyDeliverable: "Fully protected site and approved lighting-verified color swatches",
      },
      {
        stepNumber: 2,
        title: "Undercoat Primer Application",
        timeframe: "Days 2 - 3",
        description: "A solid acrylic primer layer is applied to create uniform substrate absorption and improve paint adhesion.",
        keyDeliverable: "Uniform white sealed base across all internal spaces",
      },
      {
        stepNumber: 3,
        title: "First & Second Emulsion Coats",
        timeframe: "Days 4 - 7",
        description: "Computerized factory-mixed paint is applied using microfiber rollers with controlled drying times between coats.",
        keyDeliverable: "Rich, saturated color depth with zero roller marks or patchy areas",
      },
      {
        stepNumber: 4,
        title: "Touchup, Masking Removal & Deep Clean",
        timeframe: "Day 8",
        description: "Final touchups under direct lighting, masking tape removal, and thorough site cleanup.",
        keyDeliverable: "Spotless, move-in ready rooms with perfect paint finishes",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Interior Luxury Paint",
        brandPartner: "Asian Paints (Royale Luxury / Aspira)",
        specification: "Teflon-surface-protector enriched high-sheen / matt emulsion",
        whyItMatters: "High washability allows easy cleaning of household stains without color fading.",
      },
      {
        category: "Exterior Weather Coating",
        brandPartner: "Asian Paints Apex Ultima Protek",
        specification: "Elastomeric acrylic coating with crack-bridging ability up to 2mm",
        whyItMatters: "Prevents exterior rainwater seepage through hairline plaster cracks during monsoons.",
      },
      {
        category: "Wood & Metal Finishes",
        brandPartner: "Asian Paints PU Woodtech / Apcolite",
        specification: "Two-pack polyurethane clear coat and high-durability synthetic enamel",
        whyItMatters: "Provides scratch-proof protection on wooden doors and rust-free durability on railings.",
      },
    ],
    qualityStandards: [
      "100% genuine factory-sealed containers opened exclusively in front of the site supervisor",
      "Only computerized automatic machine tinting; no manual site tint mixing to ensure exact color match",
      "Sharp edge cutting along ceilings, door frames, and skirting with zero bleed-through",
      "Full site masking ensuring zero paint splatter on floors, tiles, or switch plates",
    ],
    idealFor: [
      "New apartments undergoing final interior fitout before moving in",
      "Luxury villas needing designer feature textures and wood polishing",
      "Independent houses needing comprehensive exterior rainproofing",
      "Commercial offices needing fast-drying, low-odor, durable paints",
    ],
    faqs: [
      {
        question: "How do you guarantee that paint colors will match our design choice?",
        answer:
          "All paint is mixed using computerized automated dispensers at certified brand outlets with exact hex codes. In addition, we apply a 3x3 ft physical test patch on your wall under your room's natural and artificial lighting for your final signoff.",
      },
      {
        question: "How do you protect our expensive vitrified flooring and windows?",
        answer:
          "Before any paint can is opened, our team lays down 100-micron thick polyethylene floor protection sheets and secures all trims with residue-free masking tape. When the job is done, we leave your floors spotless.",
      },
      {
        question: "What is the warranty on exterior painting?",
        answer:
          "Depending on the system chosen (Apex Ultima or Ultima Protek), manufacturer warranties range from 5 to 10 years covering flaking, peeling, and algae growth.",
      },
    ],
  },
  {
    id: "Plumbing & Sanitary Works",
    slug: "plumbing-sanitary-works",
    title: "Plumbing & Sanitary Installation",
    shortTitle: "Plumbing & Sanitary",
    subtitle: "Concealed Lines, Pressure Testing & Designer Fixture Fitouts",
    shortSummary: "End-to-end post-construction sanitary installations, concealed hot/cold CPVC pipelines, drainage slope alignment, and sanitaryware fitouts.",
    badge: "Hydro Infrastructure",
    accentClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    tagline: "100% leak-proof concealed piping with certified 24-hr pressure testing",
    heroHeadline: "Precision Concealed Plumbing & Sanitaryware Installation",
    heroDescription:
      "Avoid costly wall chipping and concealed water leaks down the line. Our certified plumbers install high-grade SDR-11 CPVC water supply networks, laser-aligned SWR drainage, concealed cisterns, and luxury sanitary fixtures with mandatory 24-hour hydraulic leak tests.",
    metrics: [
      { value: "10 kg/cm²", label: "Pressure Test", desc: "Concealed lines undergo 24-hr hydraulic pressure test" },
      { value: "1:50 Slope", label: "Drainage Alignment", desc: "Laser-aligned slopes ensure zero water pooling or foul odors" },
      { value: "25-Year", label: "Pipe Life", desc: "Heavy-duty SDR-11 chlorinated polyvinyl chloride (CPVC)" },
      { value: "100% Leak-Proof", label: "Guarantee", desc: "Solvent weld joints with multi-point quality validation" },
    ],
    keyHighlights: [
      "Concealed hot and cold water distribution using Astral / Supreme SDR-11 CPVC pipes",
      "Wall chasing with diamond cutter machines for clean, vibration-free masonry grooves",
      "Mandatory 24-hour hydraulic pressure test at 10 bar before plaster closing",
      "Installation of concealed diverters, thermostatic mixers, and wall-hung WC frames",
      "Final fitout of luxury faucets, rain showers, vanity counters, and kitchen sink traps",
    ],
    detailedScope: [
      {
        category: "Concealed Water Supply Network",
        description: "Hygienic, corrosion-free pressurized hot and cold water lines.",
        items: [
          "Diamond wheel wall grooving to create uniform recesses without damaging RCC structures",
          "Routing of Astral / Supreme SDR-11 CPVC pipes with heavy-duty brass-threaded elbows",
          "Insulation wrapping on hot water geyser distribution lines to prevent heat loss and condensation",
          "Firm pipe clamping with galvanized saddle brackets every 900mm to eliminate water hammer vibrations",
        ],
      },
      {
        category: "SWR Drainage & Waste Lines",
        description: "Odorless, high-flow drainage networks for bathrooms and kitchens.",
        items: [
          "Installation of Supreme / Finolex Ring-Fit SWR pipes for soil, waste, and vent stacks",
          "Multi-floor drainage gradient calibration (minimum 1:50 slope) to prevent waste stagnation",
          "Deep-seal P-traps and multi-inlet floor traps with cockroach-proof stainless steel grating",
          "Acoustic pipe insulation around vertical drainage drops in living area shafts",
        ],
      },
      {
        category: "Hydrostatic Pressure & Leak Testing",
        description: "Zero compromise verification before walls are permanently closed.",
        items: [
          "Sealing all water outlets with threaded metal pressure plugs",
          "Pumping system up to 10 kg/cm² using hydraulic manual pressure test pumps",
          "24-hour static pressure observation with calibrated analog pressure gauges to detect micro-drops",
          "Inspection signoff certificate issued before wall plastering begins",
        ],
      },
      {
        category: "Sanitaryware & Luxury Trim Installation",
        description: "Flawless placement of faucets, mixers, and ceramic ware.",
        items: [
          "Concealed cistern fixing (Geberit / Grohe) and laser-level wall-hung WC bolting",
          "Installation of single-lever concealed basin and shower diverters with alignment checks",
          "Fitting of luxury faucets, hand showers, overhead rain showers, and health faucets",
          "Kitchen sink dual-bowl plumbing with waste disposal integration and RO inlet points",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Plumbing Routing & Wall Chasing",
        timeframe: "Days 1 - 3",
        description: "Plumbers mark fixture centerlines and use dual-blade motorized cutters to create neat wall chases.",
        keyDeliverable: "Clean pipe chases ready for solvent-welded CPVC and SWR pipes",
      },
      {
        stepNumber: 2,
        title: "Piping Layout & Concealed Concealments",
        timeframe: "Days 4 - 6",
        description: "CPVC pipes, concealed diverters, and wall-hung WC frames are anchored and plumbed.",
        keyDeliverable: "Fully connected water supply and drainage infrastructure",
      },
      {
        stepNumber: 3,
        title: "24-Hour Hydraulic Pressure Test",
        timeframe: "Day 7",
        description: "Lines are pressurized to 10 bar. Engineers verify zero pressure loss over 24 hours.",
        keyDeliverable: "Signed leak-proof hydrostatic certification prior to tiling and plastering",
      },
      {
        stepNumber: 4,
        title: "Trim & Sanitaryware Commissioning",
        timeframe: "Final Handover Phase",
        description: "Post tiling and painting, faucets, showers, and WCs are fitted, tested, and sealed with anti-fungal silicone.",
        keyDeliverable: "Fully operational, leak-free bathrooms and kitchens",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Water Supply Pipes",
        brandPartner: "Astral / Supreme CPVC PRO",
        specification: "SDR-11 CPVC pipes conforming to ASTM D2846, pressure rating 28 bar at 23°C",
        whyItMatters: "Handles boiling hot water without degradation, does not corrode, and provides pure drinking water safety.",
      },
      {
        category: "Drainage Systems",
        brandPartner: "Supreme / Finolex SWR",
        specification: "Ring-fit rubber gasket PVC drainage pipes with integrated UV stabilizers",
        whyItMatters: "Rubber ring joints absorb thermal expansion and ensure 100% odorless, leak-proof wastewater flow.",
      },
      {
        category: "Concealed Cisterns",
        brandPartner: "Geberit / Kohler / Jaquar",
        specification: "Dual-flush concealed cisterns with heavy powder-coated steel mounting frame",
        whyItMatters: "Ultra-slim in-wall design supporting up to 400kg load with 10-year maintenance access via flush plate.",
      },
    ],
    qualityStandards: [
      "100% of concealed joints undergo mandatory 24-hour hydraulic leak test at 10 kg/cm²",
      "No destructive hammering: all masonry grooving done using diamond disc wall chasers",
      "Shower diverters and spout heights aligned strictly per ergonomic architectural specifications",
      "All ceramic sanitaryware sealed with high-grade anti-fungal sanitary silicone",
    ],
    idealFor: [
      "Bare-shell apartments with raw plumbing cores",
      "Newly constructed villas requiring 4 to 8 modern luxury bathrooms",
      "Commercial office washrooms needing high-durability sensor plumbing",
      "Bathroom remodeling where old leaking galvanized iron (GI) pipes are being replaced",
    ],
    faqs: [
      {
        question: "How do you verify there are no hidden leaks inside the wall before plastering?",
        answer:
          "We never close a wall until our hydraulic test is complete. We seal all outlets with metal plugs, pump water up to 10 kg/cm² (twice standard municipal pressure), and leave the pressure gauge locked for 24 hours. Any microscopic leak shows up immediately on the dial.",
      },
      {
        question: "What brands of CPVC pipes do you use?",
        answer:
          "We strictly use Astral CPVC PRO or Supreme SDR-11 CPVC pipes and fittings. All brass transitions are threaded genuine forged brass to eliminate stress cracking.",
      },
      {
        question: "Can your team install imported European sanitary fixtures (e.g., Grohe, Kohler, Hansgrohe)?",
        answer:
          "Yes. Our plumbers are trained on concealed thermostatic bodies (e.g., Grohe Rapido, Kohler Modulo) and concealed wall-hung frames (Geberit Sigma), ensuring correct installation depths and flush-plate alignment.",
      },
    ],
  },
  {
    id: "Electrical Works & Wiring",
    slug: "electrical-works-wiring",
    title: "Electrical Works & Conduit Fitting",
    shortTitle: "Electrical Works",
    subtitle: "Safe, Fire-Resistant Power Distribution & Modular Automation",
    shortSummary: "Under-plaster rigid PVC conduit routing, FRLS copper cable pulling, circuit phase balancing, distribution board (DB) dressing, and modular switchplates.",
    badge: "Power & Safety",
    accentClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    tagline: "Flame-retardant wiring with certified phase balancing & dual RCCB shock protection",
    heroHeadline: "Under-Plaster Conduit Fitting & FRLS Electrical Wiring",
    heroDescription:
      "Electrical safety cannot be left to chance. Our licensed electricians engineer your entire electrical infrastructure: rigid PVC conduit wall chases, Havells/Polycab Flame-Retardant Low-Smoke (FRLS) copper wiring, dedicated high-load circuits, and precision distribution board dressing.",
    metrics: [
      { value: "FRLS Grade", label: "Copper Wires", desc: "Flame-Retardant Low Smoke cables certified to IS 694 standards" },
      { value: "30 mA", label: "RCCB Protection", desc: "Instant trip shock protection on all human-touch circuits" },
      { value: "Dedicated Lines", label: "AC & Geysers", desc: "Zero shared neutrals; isolated circuits for heavy power appliances" },
      { value: "Laser Plumb", label: "Switch Heights", desc: "All gang boxes aligned with precision laser leveling" },
    ],
    keyHighlights: [
      "Rigid heavy-gauge 25mm PVC conduit routing embedded securely inside wall chases",
      "Pulling of genuine Polycab / Havells FRLS multi-strand copper cables with color-coded phases",
      "Dedicated 4.0 sq.mm wiring for air conditioners, induction hobs, and electric vehicle chargers",
      "Precision distribution board (DB) dressing with phase load balancing and RCBO trip safety",
      "Installation of smart modular switchboards, designer dimmers, and footlight points",
    ],
    detailedScope: [
      {
        category: "Conduit Routing & Back Box Placement",
        description: "Clean wall chasing and secure structural conduit placement.",
        items: [
          "Dual-blade diamond wall grooving to house 20mm and 25mm heavy mechanical PVC conduits",
          "Laser-level height alignment for switch boxes (1200mm floor level) and power sockets (300mm)",
          "Installation of rust-resistant galvanized iron (GI) flush gang boxes anchored with cement mortar",
          "Rigid conduit bends with pull wires pre-installed to prevent future cable snagging",
        ],
      },
      {
        category: "FRLS Copper Cable Pulling",
        description: "Zero compromise flame-retardant conductor infrastructure.",
        items: [
          "Polycab / Havells FRLS multi-strand electrolytic copper wiring (1.5mm², 2.5mm², 4.0mm², 6.0mm²)",
          "Strict electrical color code compliance: Red/Yellow/Blue for phases, Black for neutral, Green for earth",
          "Complete line separation: high-frequency CAT6 data cables and TV coaxial run in isolated conduits",
          "Dedicated return neutrals for every circuit to avoid phantom loads and smart-switch flicker",
        ],
      },
      {
        category: "Distribution Board (DB) Dressing & Load Balancing",
        description: "The safety brain of your building power network.",
        items: [
          "Installation of Schneider Electric / Legrand double-door vertical TPN distribution boards",
          "Phase-load balancing across 3 phases (R, Y, B) to prevent transformer hum and voltage drop",
          "30mA RCCB / RCBO residual current circuit breakers installed for bathroom and kitchen wet areas",
          "Dedicated Type-2 Surge Protection Devices (SPD) to shield sensitive home electronics from lightning surges",
        ],
      },
      {
        category: "Modular Switches & Automation Commissioning",
        description: "Tactile switchplates, lighting circuits, and smart automation.",
        items: [
          "Fitting of modular switchplates (Schneider AvatarOn / Legrand Arteor / Anchor Roma)",
          "Installation of multi-way 2-way switching for staircase and bedside master controls",
          "Megger insulation resistance testing to verify zero short-circuit risk before powering on",
          "Connection of architectural LED strip drivers, track lights, and external facade luminaires",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Electrical Layout & Chasing",
        timeframe: "Days 1 - 3",
        description: "Electricians mark architectural switch points, laser-align boxes, and cut clean wall conduits.",
        keyDeliverable: "Anchored conduits and GI gang boxes at verified heights",
      },
      {
        stepNumber: 2,
        title: "Cable Pulling & Wire Dressing",
        timeframe: "Days 4 - 6",
        description: "FRLS copper wires are pulled through conduits with separate circuits for power, lighting, and data.",
        keyDeliverable: "Complete color-coded wire pulls with looped switch connections",
      },
      {
        stepNumber: 3,
        title: "DB Dressing & Phase Balancing",
        timeframe: "Days 7 - 8",
        description: "The main panel is wired, MCBs and RCCBs are installed, and three-phase loads are balanced.",
        keyDeliverable: "Cleanly dressed distribution board with circuit identification labels",
      },
      {
        stepNumber: 4,
        title: "Insulation Megger Test & Fixtures",
        timeframe: "Final Handover Phase",
        description: "Insulation testing conducted at 500V DC. Modular faceplates and fixtures are mounted and tested.",
        keyDeliverable: "100% energized, safe, and certified electrical installation",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Cables & Wiring",
        brandPartner: "Polycab / Havells FRLS",
        specification: "Multi-strand 99.97% pure electrolytic grade copper with flame retardant low smoke insulation",
        whyItMatters: "Self-extinguishes during fire conditions and emits non-toxic white smoke, saving lives in emergencies.",
      },
      {
        category: "Switchgear & Circuit Breakers",
        brandPartner: "Schneider Electric Acti9 / Legrand RX3",
        specification: "10kA breaking capacity miniature circuit breakers with 30mA residual current devices",
        whyItMatters: "Trips in less than 30 milliseconds in case of electrical shock or short circuit.",
      },
      {
        category: "Conduits & Gang Boxes",
        brandPartner: "AKG Heavy Conduits / Goldmedal",
        specification: "Heavy mechanical rigid PVC conduits and zinc-galvanized GI gang boxes",
        whyItMatters: "Withstands cement plaster compaction without crushing or cracking inside the wall.",
      },
    ],
    qualityStandards: [
      "Zero wire joints inside concealed conduits; all wire runs are continuous end-to-end from DB to switchbox",
      "Megger insulation resistance test verified above 10 Megaohms between conductors and earth",
      "Dedicated 4.0mm² wiring for every AC without sharing neutrals with general lighting circuits",
      "All distribution board circuits clearly labeled with permanent laser-printed circuit charts",
    ],
    idealFor: [
      "Bare shell apartments needing complete electrical cabling from meter panel to rooms",
      "Custom villas requiring smart automation wiring, EV chargers, and multi-tier lighting",
      "Renovation flats with outdated aluminum or ungrounded wiring",
      "Commercial office floors needing balanced three-phase distribution and server UPS lines",
    ],
    faqs: [
      {
        question: "Why is FRLS copper wire essential over ordinary wire?",
        answer:
          "Ordinary PVC wire catches fire rapidly and releases thick, toxic black hydrochloric smoke that causes asphyxiation. FRLS (Flame Retardant Low Smoke) wires are formulated to self-extinguish when the flame source is removed and release minimal non-toxic smoke.",
      },
      {
        question: "Do you run internet and TV cables in the same pipe as electrical power wires?",
        answer:
          "Never. High-voltage 230V alternating current induces electromagnetic interference (EMI) that ruins Wi-Fi speed and video signals. We install separate, isolated PVC conduits for CAT6 data and coaxial cables at least 300mm away from power runs.",
      },
      {
        question: "What safety mechanisms are installed to prevent electrocution?",
        answer:
          "We install dual 30mA RCCBs (Residual Current Circuit Breakers) on all domestic circuits. If anyone touches an exposed wire or water enters an appliance, the power trips within 30 milliseconds, preventing fatal electric shocks.",
      },
    ],
  },
  {
    id: "Full Post-Construction Package",
    slug: "turnkey-post-construction",
    title: "Complete Post-Construction Package",
    shortTitle: "Full Turnkey Finishing",
    subtitle: "All 5 Finishing Trades Synchronized under Single Accountability",
    shortSummary: "Consolidated technical oversight with single-point accountability. Guaranteed completion milestones, daily progress logs, and wholesale material billings.",
    badge: "Turnkey Solution",
    accentClass: "text-amber-400 bg-amber-500/20 border-amber-500/40",
    tagline: "One dedicated team, synchronized trades, and zero coordination headaches",
    heroHeadline: "Complete 5-in-1 Post-Construction Finishing Solution",
    heroDescription:
      "Eliminate trade conflicts where plumbers blame painters and electricians cut new plaster. We manage all 5 core finishing trades—Plastering, Wall Putty, Painting, Plumbing, and Electrical—under a single dedicated site engineer with synchronized milestones and factory-direct materials.",
    metrics: [
      { value: "5 Trades", label: "Unified Oversight", desc: "Plaster, Putty, Paint, Plumbing & Electrical synchronized" },
      { value: "1 Engineer", label: "Single Accountability", desc: "Dedicated on-site site supervisor for your project" },
      { value: "40% Faster", label: "Project Turnaround", desc: "Concurrent trade scheduling without idle downtime" },
      { value: "Zero Re-cutting", label: "Wall Preservation", desc: "Plumbing and electrical chasing completed before gypsum finishes" },
    ],
    keyHighlights: [
      "Single-point turnkey accountability: one contract, one point of contact, one quality benchmark",
      "Sequential project management: electrical & plumbing conduits laid before gypsum leveling begins",
      "Wholesale factory material supply direct from Saint-Gobain, Asian Paints, Astral, and Polycab",
      "Dedicated Site Operations Supervisor on site every day with daily photo progress updates",
      "Transparent line-item BOQ (Bill of Quantities) with zero hidden change orders",
    ],
    detailedScope: [
      {
        category: "Phase 1: Civil Finishing & Infrastructure Routing",
        description: "Synchronizing the heavy concealed works so walls are never cut twice.",
        items: [
          "Joint site walk with electrical, plumbing, and civil engineers to freeze all outlet heights",
          "Simultaneous wall chasing and laying of CPVC water lines, SWR drains, and PVC electrical conduits",
          "Mandatory 24-hour hydraulic leak test for plumbing and continuity test for electrical boxes",
          "Gyproc one-coat gypsum plaster application over walls, embedding all concealed conduits smoothly",
        ],
      },
      {
        category: "Phase 2: False Ceilings & Surface Foundation",
        description: "Erecting architectural ceilings and laying the mirror-smooth putty base.",
        items: [
          "GI metal frame ceiling erection with perimeter coves, lighting channels, and AC trap doors",
          "Two full coats of Birla WallCare polymer white cement putty across all walls and ceilings",
          "Mirka dustless motorized vacuum sanding for zero-undulation planar smoothness",
          "Deep penetrating acrylic primer sealing under high-powered grazing halogen lamps",
        ],
      },
      {
        category: "Phase 3: Cabling, DB Dressing & First Paint Coat",
        description: "Power infrastructure activation and color foundation.",
        items: [
          "Havells/Polycab FRLS copper wire pulling with dedicated circuits for all high-power loads",
          "Distribution board dressing with 3-phase load balancing and 30mA RCCB protection",
          "Application of first coat of Asian Paints Royale luxury interior emulsion",
          "Waterproofing inspection in all wet bathroom areas and balconies",
        ],
      },
      {
        category: "Phase 4: Final Trim, Second Paint & Deep Commissioning",
        description: "The complete transformation to a flawless, ready-to-inhabit property.",
        items: [
          "Installation of luxury sanitaryware, concealed cistern plates, and designer faucets",
          "Fitting of modular switchplates, dimmers, track lights, and architectural LEDs",
          "Final topcoat of luxury paint applied with microfiber rollers after fixture installation",
          "Complete multi-point engineer audit, protective sheet removal, and pristine site handover",
        ],
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Technical Site Inspection & BOQ",
        timeframe: "Days 1 - 2",
        description: "Senior site engineer visits your property, conducts laser measurements, and issues a comprehensive line-item estimate.",
        keyDeliverable: "Transparent scope document, material specifications, and milestone schedule",
      },
      {
        stepNumber: 2,
        title: "Concealed Utilities Chasing & Pressure Tests",
        timeframe: "Days 3 - 8",
        description: "Electrical conduits and CPVC plumbing pipes are routed together and tested under 10 bar pressure.",
        keyDeliverable: "Certified leak-proof plumbing and verified conduit layout",
      },
      {
        stepNumber: 3,
        title: "Gypsum Plaster & Putty Finishing",
        timeframe: "Days 9 - 18",
        description: "Walls are leveled with Gyproc one-coat gypsum, followed by polymer putty and dust-free machine sanding.",
        keyDeliverable: "Velvet-smooth planar surfaces inspected under grazing light",
      },
      {
        stepNumber: 4,
        title: "Wiring, Paint, Fixtures & Final Handover",
        timeframe: "Days 19 - 30",
        description: "Cables pulled, DB dressed, luxury paints applied, and sanitaryware fitted with final deep cleaning.",
        keyDeliverable: "Fully finished property ready for immediate furniture move-in",
      },
    ],
    materialsAndEquipment: [
      {
        category: "Gypsum Plaster & Ceilings",
        brandPartner: "Saint-Gobain Gyproc Elite 90",
        specification: "Lightweight hemihydrate one-coat plaster with GI ultra-steel framing",
        whyItMatters: "Eliminates water curing and delivers ±1mm planar accuracy.",
      },
      {
        category: "Putty & Surface Finishing",
        brandPartner: "Birla White WallCare & Mirka",
        specification: "Water-resistant polymer white cement putty with vacuum orbital sanding",
        whyItMatters: "Zero dust inside the premises and maximum paint adhesion.",
      },
      {
        category: "Luxury Emulsions",
        brandPartner: "Asian Paints Royale / Berger Silk",
        specification: "Computer-tinted Teflon surface protector luxury emulsion",
        whyItMatters: "Rich satin finish with 100% stain cleanability.",
      },
      {
        category: "Concealed Plumbing",
        brandPartner: "Astral CPVC PRO & Supreme SWR",
        specification: "SDR-11 CPVC pipes with 24-hr 10 bar hydraulic certification",
        whyItMatters: "Eliminates concealed water seepage permanently.",
      },
      {
        category: "Flame-Retardant Wiring",
        brandPartner: "Havells / Polycab FRLS",
        specification: "99.97% pure copper with flame retardant low smoke insulation & Schneider DB",
        whyItMatters: "Protects against electrical fires and shock hazards.",
      },
    ],
    qualityStandards: [
      "Single site engineer managing trade schedule, ensuring zero idle contractor days",
      "No subcontractor finger-pointing: 100% comprehensive warranty across all civil, electrical, and plumbing works",
      "Daily evening WhatsApp photo progress log sent directly to you with completed milestones",
      "Input tax credit (ITC) compliant GST invoicing on all materials and service labor",
    ],
    idealFor: [
      "Apartment owners who received bare-shell handover from builders (DLF, Godrej, Tata, etc.)",
      "Custom villa builders wanting turnkey execution without managing multiple chaotic crews",
      "Corporate office developers looking for fixed-price, fixed-schedule turnkey interiors",
      "Out-of-town property owners who need supervised accountability and daily progress reports",
    ],
    faqs: [
      {
        question: "Why should I choose the Full Turnkey Package over hiring individual contractors?",
        answer:
          "Hiring independent plumbers, electricians, plasterers, and painters always leads to chaos: the plumber cuts into the plasterer's newly finished wall, the electrician leaves wire holes, and the painter blames the plasterer for rough walls. With our turnkey package, one engineering supervisor synchronizes all trades so work is executed in the correct sequence with single-point accountability.",
      },
      {
        question: "How do you provide progress updates if I am not on site?",
        answer:
          "Your dedicated Site Operations Supervisor sends daily high-resolution photo and video logs via WhatsApp or email, noting completed checklist items and the next day's planned work.",
      },
      {
        question: "How does your team handle material procurement?",
        answer:
          "All materials (Saint-Gobain, Asian Paints, Astral, Polycab, Schneider) are procured directly in factory-sealed packaging with manufacturer batch codes, ensuring you receive authentic materials at transparent wholesale prices.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}

