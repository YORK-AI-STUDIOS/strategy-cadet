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
  version:   'Run J Mk2 v4',
  date:      '24 May 2026',
  copyright: '© 2026 York Studios Pty Ltd',
};

// =============================================================================
// slideData
// =============================================================================
// One entry per slide, 90 total. The viewer's renderSlide() reads src and
// renders an iframe;  suppresses the slide's own logos and footer.
//
// title is used in the slide counter and any future deep-link UI; it doesn't
// appear on the rendered slide itself (the slide HTML carries its own headline).
const slideData = [
  { num:  1, src: 'slides/01-cover.html',                           title: 'Cover' },
  { num:  2, src: 'slides/02-divider-market.html',                  title: 'Part 01, The Market' },
  { num:  3, src: 'slides/03-quick-facts.html',                     title: 'Quick facts' },
  { num:  4, src: 'slides/04-industry-drivers.html',                title: 'Industry drivers' },
  { num:  5, src: 'slides/05-macroeconomic.html',                   title: 'Macroeconomic context' },
  { num:  6, src: 'slides/06-market-size.html',                     title: 'Market size' },
  { num:  7, src: 'slides/07-divider-brand.html',                   title: 'Part 02, Brand DNA' },
  { num:  8, src: 'slides/08-founder-story.html',                   title: 'Founder story' },
  { num:  9, src: 'slides/09-product-glyph.html',                   title: 'Product, Glyph language' },
  { num: 10, src: 'slides/10-brand-personality.html',               title: 'Brand personality' },
  { num: 11, src: 'slides/11-messaging-themes.html',                title: 'Messaging themes' },
  { num: 12, src: 'slides/12-pillars-overview.html',                title: 'Pillars overview' },
  { num: 13, src: 'slides/13-pillar-1-transparency.html',           title: 'Pillar 1, Transparency' },
  { num: 14, src: 'slides/14-pillar-2-show-work.html',              title: 'Pillar 2, Show the work' },
  { num: 15, src: 'slides/15-pillar-3-taste-tribe.html',            title: 'Pillar 3, Taste tribe' },
  { num: 16, src: 'slides/16-pillar-4-restraint.html',              title: 'Pillar 4, Restraint' },
  { num: 17, src: 'slides/17-actions-recommended.html',             title: 'Actions recommended' },
  { num: 18, src: 'slides/18-divider-audiences.html',               title: 'Part 03, Audiences' },
  { num: 19, src: 'slides/19-audience-1-profile.html',              title: 'Audience 1, Tech-forward urban creatives' },
  { num: 20, src: 'slides/20-audience-2-profile.html',              title: 'Audience 2, Anti-mainstream upgraders' },
  { num: 21, src: 'slides/21-audience-3-profile.html',              title: 'Audience 3, Budget-conscious Gen Z' },
  { num: 22, src: 'slides/22-audience-summary.html',                title: 'Audience summary' },
  { num: 23, src: 'slides/23-divider-innovation.html',              title: 'Part 04, Innovation map' },
  { num: 24, src: 'slides/24-innovation-aud1-experience.html',      title: 'Innovation, Aud 1, Experience' },
  { num: 25, src: 'slides/25-innovation-aud1-offering.html',        title: 'Innovation, Aud 1, Offering' },
  { num: 26, src: 'slides/26-innovation-aud2-experience.html',      title: 'Innovation, Aud 2, Experience' },
  { num: 27, src: 'slides/27-innovation-aud2-offering.html',        title: 'Innovation, Aud 2, Offering' },
  { num: 28, src: 'slides/28-innovation-aud3-experience.html',      title: 'Innovation, Aud 3, Experience' },
  { num: 29, src: 'slides/29-innovation-aud3-offering.html',        title: 'Innovation, Aud 3, Offering' },
  { num: 30, src: 'slides/30-divider-competitive.html',             title: 'Part 05, Competitive forensics' },
  { num: 31, src: 'slides/31-competitors-overview.html',            title: 'Competitors overview' },
  { num: 32, src: 'slides/32-forensics-samsung-apple.html',         title: 'Forensics, Samsung and Apple' },
  { num: 33, src: 'slides/33-forensics-oneplus-motorola.html',      title: 'Forensics, OnePlus and Motorola' },
  { num: 34, src: 'slides/34-forensics-pixel-oppo.html',            title: 'Forensics, Pixel and Oppo' },
  { num: 35, src: 'slides/35-esov-positioning.html',                title: 'ESOV positioning' },
  { num: 36, src: 'slides/36-customer-problems.html',               title: 'Customer problems' },
  { num: 37, src: 'slides/37-value-propositions.html',              title: 'Value propositions' },
  { num: 38, src: 'slides/38-divider-brand-strategy.html',          title: 'Part 06, Brand strategy' },
  { num: 39, src: 'slides/39-brand-opportunities.html',             title: 'Brand opportunities' },
  { num: 40, src: 'slides/40-forensics-supply-chain.html',          title: 'Forensics, Supply chain' },
  { num: 41, src: 'slides/41-forensics-ip-esg.html',                title: 'Forensics, IP and ESG' },
  { num: 42, src: 'slides/42-forensics-litigation-financials.html', title: 'Forensics, Litigation and Financials' },
  { num: 43, src: 'slides/43-business-trends.html',                 title: 'Business trends' },
  { num: 44, src: 'slides/44-strategic-goal-kpi.html',              title: 'Strategic goal and KPI tree' },
  { num: 45, src: 'slides/45-initiatives.html',                     title: 'Initiatives' },
  { num: 46, src: 'slides/46-roadmap.html',                         title: 'Roadmap' },
  { num: 47, src: 'slides/47-cadence-killswitches.html',            title: 'Cadence and kill-switches' },
  { num: 48, src: 'slides/48-divider-marketing.html',               title: 'Part 08, Per-Audience Marketing Plans' },
  { num: 49, src: 'slides/49-mktg-aud1-channels.html',              title: 'Marketing, Aud 1, Channels' },
  { num: 50, src: 'slides/50-mktg-aud1-messaging.html',             title: 'Marketing, Aud 1, Messaging' },
  { num: 51, src: 'slides/51-mktg-aud2-channels.html',              title: 'Marketing, Aud 2, Channels' },
  { num: 52, src: 'slides/52-mktg-aud2-messaging.html',             title: 'Marketing, Aud 2, Messaging' },
  { num: 53, src: 'slides/53-mktg-aud3-channels.html',              title: 'Marketing, Aud 3, Channels' },
  { num: 54, src: 'slides/54-mktg-aud3-messaging.html',             title: 'Marketing, Aud 3, Messaging' },
  { num: 55, src: 'slides/55-divider-social.html',                  title: 'Part 09, Social Intelligence' },
  { num: 56, src: 'slides/56-platform-reach.html',                  title: 'Platform reach' },
  { num: 57, src: 'slides/57-tiktok-deep.html',                     title: 'TikTok deep' },
  { num: 58, src: 'slides/58-youtube-performance.html',             title: 'YouTube performance' },
  { num: 59, src: 'slides/59-meta-ads-analysis.html',               title: 'Meta ads analysis' },
  { num: 60, src: 'slides/60-social-takeaways.html',                title: 'Social takeaways' },
  { num: 61, src: 'slides/61-divider-appendix.html',                title: 'Part 10, Appendix: Supporting Data' },
  { num: 62, src: 'slides/62-data-gaps-confidence.html',            title: 'Data gaps and confidence' },
  { num: 63, src: 'slides/63-source-coverage.html',                 title: 'Source coverage' },
  { num: 64, src: 'slides/64-strategic-risks.html',                 title: 'Strategic risks' },
  { num: 65, src: 'slides/65-five-things-we-know.html',             title: 'Five things we know' },
  { num: 66, src: 'slides/66-week-one-actions.html',                title: 'Week-one actions' },
  { num: 67, src: 'slides/67-divider-extended-analysis.html',       title: 'Part 10, Extended Analysis Cluster' },
  { num: 68, src: 'slides/68-strategic-synthesis.html',             title: 'Strategic synthesis' },
  { num: 69, src: 'slides/69-founder-voice.html',                   title: 'Founder voice analysis' },
  { num: 70, src: 'slides/70-india-global-expansion.html',          title: 'India and global expansion' },
  { num: 71, src: 'slides/71-cmf-brand-architecture.html',          title: 'CMF and brand architecture' },
  { num: 72, src: 'slides/72-cep-master-table.html',                title: 'CEP master table' },
  { num: 73, src: 'slides/73-news-pr-landscape.html',               title: 'News and PR landscape' },
  { num: 74, src: 'slides/74-brand-momentum.html',                  title: 'Brand momentum' },
  { num: 75, src: 'slides/75-social-performance.html',              title: 'Social performance, extended' },
  { num: 76, src: 'slides/76-geo-scorecard.html',                   title: 'GEO scorecard' },
  { num: 77, src: 'slides/77-share-of-search.html',                 title: 'Share of search' },
  { num: 78, src: 'slides/78-reviews-trust-gap.html',               title: 'Reviews and trust gap' },
  { num: 79, src: 'slides/79-divider-methodology.html',             title: 'Part 11, Methodology and Citations' },
  { num: 80, src: 'slides/80-methodology.html',                     title: 'Methodology' },
  { num: 81, src: 'slides/81-about-strategy-cadet.html',            title: 'About Strategy Cadet' },
  { num: 82, src: 'slides/82-citations-1.html',                     title: 'Citations 1, refs 1-62' },
  { num: 83, src: 'slides/83-citations-2.html',                     title: 'Citations 2, refs 63-124' },
  { num: 84, src: 'slides/84-citations-3.html',                     title: 'Citations 3, refs 125-186' },
  { num: 85, src: 'slides/85-citations-4.html',                     title: 'Citations 4, refs 187-248' },
  { num: 86, src: 'slides/86-citations-5.html',                     title: 'Citations 5, refs 249-308' },
  { num: 87, src: 'slides/87-honest-limitations.html',              title: 'Honest limitations' },
  { num: 88, src: 'slides/88-brand-opportunities-summary.html',     title: 'Brand opportunities summary' },
  { num: 89, src: 'slides/89-closing-divider.html',                 title: 'Closing divider' },
  { num: 90, src: 'slides/90-back-cover.html',                      title: 'Back cover' },
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
    { label: 'Section divider', slide: 2 },
    { label: 'Quick facts', slide: 3 },
    { label: 'Industry drivers', slide: 4 },
    { label: 'Macroeconomic context', slide: 5 },
    { label: 'Market size', slide: 6 },
  ]},
  { title: '03 - Brand DNA', subs: [
    { label: 'Section divider', slide: 7 },
    { label: 'Founder story', slide: 8 },
    { label: 'Product, Glyph language', slide: 9 },
    { label: 'Brand personality', slide: 10 },
    { label: 'Messaging themes', slide: 11 },
    { label: 'Pillars overview', slide: 12 },
    { label: 'Pillar 1, Transparency', slide: 13 },
    { label: 'Pillar 2, Show the work', slide: 14 },
    { label: 'Pillar 3, Taste tribe', slide: 15 },
    { label: 'Pillar 4, Restraint', slide: 16 },
    { label: 'Actions recommended', slide: 17 },
  ]},
  { title: '04 - Target audiences', subs: [
    { label: 'Section divider', slide: 18 },
    { label: 'Aud 1, Tech-forward urban creatives', slide: 19 },
    { label: 'Aud 2, Anti-mainstream upgraders', slide: 20 },
    { label: 'Aud 3, Budget-conscious Gen Z', slide: 21 },
    { label: 'Audience summary', slide: 22 },
  ]},
  { title: '05 - Innovation map', subs: [
    { label: 'Section divider', slide: 23 },
    { label: 'Aud 1, Experience opportunities', slide: 24 },
    { label: 'Aud 1, Offering opportunities', slide: 25 },
    { label: 'Aud 2, Experience opportunities', slide: 26 },
    { label: 'Aud 2, Offering opportunities', slide: 27 },
    { label: 'Aud 3, Experience opportunities', slide: 28 },
    { label: 'Aud 3, Offering opportunities', slide: 29 },
  ]},
  { title: '06 - Competitive forensics', subs: [
    { label: 'Section divider', slide: 30 },
    { label: 'Competitors overview', slide: 31 },
    { label: 'Samsung and Apple', slide: 32 },
    { label: 'OnePlus and Motorola', slide: 33 },
    { label: 'Pixel and Oppo', slide: 34 },
    { label: 'ESOV positioning', slide: 35 },
    { label: 'Customer problems', slide: 36 },
    { label: 'Value propositions', slide: 37 },
  ]},
  { title: '07 - Brand strategy', subs: [
    { label: 'Section divider', slide: 38 },
    { label: 'Brand opportunities', slide: 39 },
    { label: 'Supply chain forensics', slide: 40 },
    { label: 'IP and ESG forensics', slide: 41 },
    { label: 'Litigation and financials', slide: 42 },
    { label: 'Business trends', slide: 43 },
    { label: 'Strategic goal and KPI', slide: 44 },
    { label: 'Initiatives', slide: 45 },
    { label: 'Roadmap', slide: 46 },
    { label: 'Cadence and kill-switches', slide: 47 },
  ]},
  { title: '08 - Marketing plan', subs: [
    { label: 'Section divider', slide: 48 },
    { label: 'Aud 1, Channels', slide: 49 },
    { label: 'Aud 1, Messaging', slide: 50 },
    { label: 'Aud 2, Channels', slide: 51 },
    { label: 'Aud 2, Messaging', slide: 52 },
    { label: 'Aud 3, Channels', slide: 53 },
    { label: 'Aud 3, Messaging', slide: 54 },
  ]},
  { title: '09 - Social intelligence', subs: [
    { label: 'Section divider', slide: 55 },
    { label: 'Platform reach', slide: 56 },
    { label: 'TikTok deep', slide: 57 },
    { label: 'YouTube performance', slide: 58 },
    { label: 'Meta ads analysis', slide: 59 },
    { label: 'Social takeaways', slide: 60 },
  ]},
  { title: '10 - Appendix and supporting data', subs: [
    { label: 'Section divider', slide: 61 },
    { label: 'Data gaps and confidence', slide: 62 },
    { label: 'Source coverage', slide: 63 },
    { label: 'Strategic risks', slide: 64 },
    { label: 'Five things we know', slide: 65 },
    { label: 'Week-one actions', slide: 66 },
  ]},
  { title: '10b - Extended analysis cluster', subs: [
    { label: 'Section divider', slide: 67 },
    { label: 'Strategic synthesis', slide: 68 },
    { label: 'Founder voice analysis', slide: 69 },
    { label: 'India and global expansion', slide: 70 },
    { label: 'CMF and brand architecture', slide: 71 },
    { label: 'CEP master table', slide: 72 },
    { label: 'News and PR landscape', slide: 73 },
    { label: 'Brand momentum', slide: 74 },
    { label: 'Social performance, extended', slide: 75 },
    { label: 'GEO scorecard', slide: 76 },
    { label: 'Share of search', slide: 77 },
    { label: 'Reviews and trust gap', slide: 78 },
  ]},
  { title: '11 - Methodology and citations', subs: [
    { label: 'Section divider', slide: 79 },
    { label: 'Methodology', slide: 80 },
    { label: 'About Strategy Cadet', slide: 81 },
    { label: 'Citations, refs 1-62', slide: 82 },
    { label: 'Citations, refs 63-124', slide: 83 },
    { label: 'Citations, refs 125-186', slide: 84 },
    { label: 'Citations, refs 187-248', slide: 85 },
    { label: 'Citations, refs 249-308', slide: 86 },
  ]},
  { title: '12 - Closing', subs: [
    { label: 'Honest limitations', slide: 87 },
    { label: 'Brand opportunities summary', slide: 88 },
    { label: 'Closing divider', slide: 89 },
    { label: 'Back cover', slide: 90 },
  ]},
];
