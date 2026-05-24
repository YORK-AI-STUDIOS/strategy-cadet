/* =============================================================================
   Strategy Cadet, Nothing Technology, Run J Mk2 v4
   Report config for the Strategy Cadet Report Viewer chassis.

   This file is loaded by the viewer (strategy-report-viewer.html) BEFORE the
   chassis script. It defines three globals: REPORT, slideData, indexData.

   slides[].src appends  so the slide HTML suppresses its own
   page chrome (logos, page count, copyright) inside the viewer iframe.
   The viewer's topbar provides equivalent chrome. Standalone direct-open
   of any slide still renders the chrome (default behaviour).

   When the chassis is later moved beside this folder, the relative paths
   below resolve as:
     reports/nothing-technology/config.js     <- this file
     reports/nothing-technology/slides/...    <- symlink or copy of slides
   ============================================================================= */

const REPORT = {
  client:    'Nothing Technology',
  agency:    'Media Republic',
  subtitle:  'Brand Discovery, Consumer Electronics',
  version:   'Run J Mk2 v6',
  date:      '24 May 2026',
  copyright: '© 2026 York Studios Pty Ltd',
};

// =============================================================================
// slideData
// =============================================================================
// One entry per slide, 91 total. The viewer's renderSlide() reads src and
// renders an iframe;  suppresses the slide's own logos and footer.
//
// title is used in the slide counter and any future deep-link UI; it doesn't
// appear on the rendered slide itself (the slide HTML carries its own headline).
const slideData = [
  { num:  1, src: 'slides/01-cover.html',                           title: 'Cover' },
  { num:  2, src: 'slides/02-strategy-cadet-frame.html',            title: 'How Strategy Cadet Works' },
  { num:  3, src: 'slides/03-divider-market.html',                  title: 'Part 01, The Market' },
  { num:  4, src: 'slides/04-quick-facts.html',                     title: 'Quick facts' },
  { num:  5, src: 'slides/05-industry-drivers.html',                title: 'Industry drivers' },
  { num:  6, src: 'slides/06-macroeconomic.html',                   title: 'Macroeconomic context' },
  { num:  7, src: 'slides/07-market-size.html',                     title: 'Market size' },
  { num:  8, src: 'slides/08-divider-brand.html',                   title: 'Part 02, Brand DNA' },
  { num:  9, src: 'slides/09-founder-story.html',                   title: 'Founder story' },
  { num: 10, src: 'slides/10-product-glyph.html',                   title: 'Product, Glyph language' },
  { num: 11, src: 'slides/11-brand-personality.html',               title: 'Brand personality' },
  { num: 12, src: 'slides/12-messaging-themes.html',                title: 'Messaging themes' },
  { num: 13, src: 'slides/13-pillars-overview.html',                title: 'Pillars overview' },
  { num: 14, src: 'slides/14-pillar-1-transparency.html',           title: 'Pillar 1, Transparency' },
  { num: 15, src: 'slides/15-pillar-2-show-work.html',              title: 'Pillar 2, Show the work' },
  { num: 16, src: 'slides/16-pillar-3-taste-tribe.html',            title: 'Pillar 3, Taste tribe' },
  { num: 17, src: 'slides/17-pillar-4-restraint.html',              title: 'Pillar 4, Restraint' },
  { num: 18, src: 'slides/18-actions-recommended.html',             title: 'Actions recommended' },
  { num: 19, src: 'slides/19-divider-audiences.html',               title: 'Part 03, Audiences' },
  { num: 20, src: 'slides/20-audience-1-profile.html',              title: 'Audience 1, Tech-forward urban creatives' },
  { num: 21, src: 'slides/21-audience-2-profile.html',              title: 'Audience 2, Anti-mainstream upgraders' },
  { num: 22, src: 'slides/22-audience-3-profile.html',              title: 'Audience 3, Budget-conscious Gen Z' },
  { num: 23, src: 'slides/23-audience-summary.html',                title: 'Audience summary' },
  { num: 24, src: 'slides/24-divider-innovation.html',              title: 'Part 04, Innovation map' },
  { num: 25, src: 'slides/25-innovation-aud1-experience.html',      title: 'Innovation, Aud 1, Experience' },
  { num: 26, src: 'slides/26-innovation-aud1-offering.html',        title: 'Innovation, Aud 1, Offering' },
  { num: 27, src: 'slides/27-innovation-aud2-experience.html',      title: 'Innovation, Aud 2, Experience' },
  { num: 28, src: 'slides/28-innovation-aud2-offering.html',        title: 'Innovation, Aud 2, Offering' },
  { num: 29, src: 'slides/29-innovation-aud3-experience.html',      title: 'Innovation, Aud 3, Experience' },
  { num: 30, src: 'slides/30-innovation-aud3-offering.html',        title: 'Innovation, Aud 3, Offering' },
  { num: 31, src: 'slides/31-divider-competitive.html',             title: 'Part 05, Competitive forensics' },
  { num: 32, src: 'slides/32-competitors-overview.html',            title: 'Competitors overview' },
  { num: 33, src: 'slides/33-forensics-samsung-apple.html',         title: 'Forensics, Samsung and Apple' },
  { num: 34, src: 'slides/34-forensics-oneplus-motorola.html',      title: 'Forensics, OnePlus and Motorola' },
  { num: 35, src: 'slides/35-forensics-pixel-oppo.html',            title: 'Forensics, Pixel and Oppo' },
  { num: 36, src: 'slides/36-esov-positioning.html',                title: 'ESOV positioning' },
  { num: 37, src: 'slides/37-customer-problems.html',               title: 'Customer problems' },
  { num: 38, src: 'slides/38-value-propositions.html',              title: 'Value propositions' },
  { num: 39, src: 'slides/39-divider-brand-strategy.html',          title: 'Part 06, Brand strategy' },
  { num: 40, src: 'slides/40-brand-opportunities.html',             title: 'Brand opportunities' },
  { num: 41, src: 'slides/41-forensics-supply-chain.html',          title: 'Forensics, Supply chain' },
  { num: 42, src: 'slides/42-forensics-ip-esg.html',                title: 'Forensics, IP and ESG' },
  { num: 43, src: 'slides/43-forensics-litigation-financials.html', title: 'Forensics, Litigation and Financials' },
  { num: 44, src: 'slides/44-business-trends.html',                 title: 'Business trends' },
  { num: 45, src: 'slides/45-strategic-goal-kpi.html',              title: 'Strategic goal and KPI tree' },
  { num: 46, src: 'slides/46-initiatives.html',                     title: 'Initiatives' },
  { num: 47, src: 'slides/47-roadmap.html',                         title: 'Roadmap' },
  { num: 48, src: 'slides/48-cadence-killswitches.html',            title: 'Cadence and kill-switches' },
  { num: 49, src: 'slides/49-divider-marketing.html',               title: 'Part 08, Per-Audience Marketing Plans' },
  { num: 50, src: 'slides/50-mktg-aud1-channels.html',              title: 'Marketing, Aud 1, Channels' },
  { num: 51, src: 'slides/51-mktg-aud1-messaging.html',             title: 'Marketing, Aud 1, Messaging' },
  { num: 52, src: 'slides/52-mktg-aud2-channels.html',              title: 'Marketing, Aud 2, Channels' },
  { num: 53, src: 'slides/53-mktg-aud2-messaging.html',             title: 'Marketing, Aud 2, Messaging' },
  { num: 54, src: 'slides/54-mktg-aud3-channels.html',              title: 'Marketing, Aud 3, Channels' },
  { num: 55, src: 'slides/55-mktg-aud3-messaging.html',             title: 'Marketing, Aud 3, Messaging' },
  { num: 56, src: 'slides/56-divider-social.html',                  title: 'Part 09, Social Intelligence' },
  { num: 57, src: 'slides/57-platform-reach.html',                  title: 'Platform reach' },
  { num: 58, src: 'slides/58-tiktok-deep.html',                     title: 'TikTok deep' },
  { num: 59, src: 'slides/59-youtube-performance.html',             title: 'YouTube performance' },
  { num: 60, src: 'slides/60-meta-ads-analysis.html',               title: 'Meta ads analysis' },
  { num: 61, src: 'slides/61-social-takeaways.html',                title: 'Social takeaways' },
  { num: 62, src: 'slides/62-divider-appendix.html',                title: 'Part 10, Appendix: Supporting Data' },
  { num: 63, src: 'slides/63-data-gaps-confidence.html',            title: 'Data gaps and confidence' },
  { num: 64, src: 'slides/64-source-coverage.html',                 title: 'Source coverage' },
  { num: 65, src: 'slides/65-strategic-risks.html',                 title: 'Strategic risks' },
  { num: 66, src: 'slides/66-five-things-we-know.html',             title: 'Five things we know' },
  { num: 67, src: 'slides/67-week-one-actions.html',                title: 'Week-one actions' },
  { num: 68, src: 'slides/68-divider-extended-analysis.html',       title: 'Part 10, Extended Analysis Cluster' },
  { num: 69, src: 'slides/69-strategic-synthesis.html',             title: 'Strategic synthesis' },
  { num: 70, src: 'slides/70-founder-voice.html',                   title: 'Founder voice analysis' },
  { num: 71, src: 'slides/71-india-global-expansion.html',          title: 'India and global expansion' },
  { num: 72, src: 'slides/72-cmf-brand-architecture.html',          title: 'CMF and brand architecture' },
  { num: 73, src: 'slides/73-cep-master-table.html',                title: 'CEP master table' },
  { num: 74, src: 'slides/74-news-pr-landscape.html',               title: 'News and PR landscape' },
  { num: 75, src: 'slides/75-brand-momentum.html',                  title: 'Brand momentum' },
  { num: 76, src: 'slides/76-social-performance.html',              title: 'Social performance, extended' },
  { num: 77, src: 'slides/77-geo-scorecard.html',                   title: 'GEO scorecard' },
  { num: 78, src: 'slides/78-share-of-search.html',                 title: 'Share of search' },
  { num: 79, src: 'slides/79-reviews-trust-gap.html',               title: 'Reviews and trust gap' },
  { num: 80, src: 'slides/80-divider-methodology.html',             title: 'Part 11, Methodology and Citations' },
  { num: 81, src: 'slides/81-methodology.html',                     title: 'Methodology' },
  { num: 82, src: 'slides/82-about-strategy-cadet.html',            title: 'About Strategy Cadet' },
  { num: 83, src: 'slides/83-citations-1.html',                     title: 'Citations 1, refs 1-62' },
  { num: 84, src: 'slides/84-citations-2.html',                     title: 'Citations 2, refs 63-124' },
  { num: 85, src: 'slides/85-citations-3.html',                     title: 'Citations 3, refs 125-186' },
  { num: 86, src: 'slides/86-citations-4.html',                     title: 'Citations 4, refs 187-248' },
  { num: 87, src: 'slides/87-citations-5.html',                     title: 'Citations 5, refs 249-308' },
  { num: 88, src: 'slides/88-honest-limitations.html',              title: 'Honest limitations' },
  { num: 89, src: 'slides/89-brand-opportunities-summary.html',     title: 'Brand opportunities summary' },
  { num: 90, src: 'slides/90-closing-divider.html',                 title: 'Closing divider' },
  { num: 91, src: 'slides/91-back-cover.html',                      title: 'Back cover' },
];

// =============================================================================
// indexData
// =============================================================================
// Collapsible side-panel table of contents. Each section.subs[].slide deep-links
// to the slide number, click jumps the viewport to that slide.
//
// 13 sections, derived from the deck's natural dividers + the extended-analysis
// + citations + closing groups built in Run J Mk2 v4. Sub-items are the
// highest-value navigation targets, not an exhaustive list of every slide.
const indexData = [
  { title: '01 - Cover and frame', subs: [
    { label: 'Cover', slide: 1 },
  ]},
  { title: '02 - The Market', subs: [
    { label: 'Section divider', slide: 3 },
    { label: 'Quick facts', slide: 4 },
    { label: 'Industry drivers', slide: 5 },
    { label: 'Macroeconomic context', slide: 6 },
    { label: 'Market size', slide: 7 },
  ]},
  { title: '03 - Brand DNA', subs: [
    { label: 'Section divider', slide: 8 },
    { label: 'Founder story', slide: 9 },
    { label: 'Product, Glyph language', slide: 10 },
    { label: 'Brand personality', slide: 11 },
    { label: 'Messaging themes', slide: 12 },
    { label: 'Pillars overview', slide: 13 },
    { label: 'Pillar 1, Transparency', slide: 14 },
    { label: 'Pillar 2, Show the work', slide: 15 },
    { label: 'Pillar 3, Taste tribe', slide: 16 },
    { label: 'Pillar 4, Restraint', slide: 17 },
    { label: 'Actions recommended', slide: 18 },
  ]},
  { title: '04 - Target audiences', subs: [
    { label: 'Section divider', slide: 19 },
    { label: 'Aud 1, Tech-forward urban creatives', slide: 20 },
    { label: 'Aud 2, Anti-mainstream upgraders', slide: 21 },
    { label: 'Aud 3, Budget-conscious Gen Z', slide: 22 },
    { label: 'Audience summary', slide: 23 },
  ]},
  { title: '05 - Innovation map', subs: [
    { label: 'Section divider', slide: 24 },
    { label: 'Aud 1, Experience opportunities', slide: 25 },
    { label: 'Aud 1, Offering opportunities', slide: 26 },
    { label: 'Aud 2, Experience opportunities', slide: 27 },
    { label: 'Aud 2, Offering opportunities', slide: 28 },
    { label: 'Aud 3, Experience opportunities', slide: 29 },
    { label: 'Aud 3, Offering opportunities', slide: 30 },
  ]},
  { title: '06 - Competitive forensics', subs: [
    { label: 'Section divider', slide: 31 },
    { label: 'Competitors overview', slide: 32 },
    { label: 'Samsung and Apple', slide: 33 },
    { label: 'OnePlus and Motorola', slide: 34 },
    { label: 'Pixel and Oppo', slide: 35 },
    { label: 'ESOV positioning', slide: 36 },
    { label: 'Customer problems', slide: 37 },
    { label: 'Value propositions', slide: 38 },
  ]},
  { title: '07 - Brand strategy', subs: [
    { label: 'Section divider', slide: 39 },
    { label: 'Brand opportunities', slide: 40 },
    { label: 'Supply chain forensics', slide: 41 },
    { label: 'IP and ESG forensics', slide: 42 },
    { label: 'Litigation and financials', slide: 43 },
    { label: 'Business trends', slide: 44 },
    { label: 'Strategic goal and KPI', slide: 45 },
    { label: 'Initiatives', slide: 46 },
    { label: 'Roadmap', slide: 47 },
    { label: 'Cadence and kill-switches', slide: 48 },
  ]},
  { title: '08 - Marketing plan', subs: [
    { label: 'Section divider', slide: 49 },
    { label: 'Aud 1, Channels', slide: 50 },
    { label: 'Aud 1, Messaging', slide: 51 },
    { label: 'Aud 2, Channels', slide: 52 },
    { label: 'Aud 2, Messaging', slide: 53 },
    { label: 'Aud 3, Channels', slide: 54 },
    { label: 'Aud 3, Messaging', slide: 55 },
  ]},
  { title: '09 - Social intelligence', subs: [
    { label: 'Section divider', slide: 56 },
    { label: 'Platform reach', slide: 57 },
    { label: 'TikTok deep', slide: 58 },
    { label: 'YouTube performance', slide: 59 },
    { label: 'Meta ads analysis', slide: 60 },
    { label: 'Social takeaways', slide: 61 },
  ]},
  { title: '10 - Appendix and supporting data', subs: [
    { label: 'Section divider', slide: 62 },
    { label: 'Data gaps and confidence', slide: 63 },
    { label: 'Source coverage', slide: 64 },
    { label: 'Strategic risks', slide: 65 },
    { label: 'Five things we know', slide: 66 },
    { label: 'Week-one actions', slide: 67 },
  ]},
  { title: '10b - Extended analysis cluster', subs: [
    { label: 'Section divider', slide: 68 },
    { label: 'Strategic synthesis', slide: 69 },
    { label: 'Founder voice analysis', slide: 70 },
    { label: 'India and global expansion', slide: 71 },
    { label: 'CMF and brand architecture', slide: 72 },
    { label: 'CEP master table', slide: 73 },
    { label: 'News and PR landscape', slide: 74 },
    { label: 'Brand momentum', slide: 75 },
    { label: 'Social performance, extended', slide: 76 },
    { label: 'GEO scorecard', slide: 77 },
    { label: 'Share of search', slide: 78 },
    { label: 'Reviews and trust gap', slide: 79 },
  ]},
  { title: '11 - Methodology and citations', subs: [
    { label: 'Section divider', slide: 80 },
    { label: 'Methodology', slide: 81 },
    { label: 'About Strategy Cadet', slide: 82 },
    { label: 'Citations, refs 1-62', slide: 83 },
    { label: 'Citations, refs 63-124', slide: 84 },
    { label: 'Citations, refs 125-186', slide: 85 },
    { label: 'Citations, refs 187-248', slide: 86 },
    { label: 'Citations, refs 249-308', slide: 87 },
  ]},
  { title: '12 - Closing', subs: [
    { label: 'Honest limitations', slide: 88 },
    { label: 'Brand opportunities summary', slide: 89 },
    { label: 'Closing divider', slide: 90 },
    { label: 'Back cover', slide: 91 },
  ]},
];
