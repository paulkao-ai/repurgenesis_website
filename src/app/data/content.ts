import type {InvestorSection, Page, Language, Translator } from "@app/types";
import energenesisBiomedicalLogo from "./company_logo/processed/bg_remove/partner/energenesis_biomedical_bg.jpg";
import repurgenesisLogo from "./company_logo/processed/bg_remove/repurgenesis_bg.jpg";
import repurgenesisWhiteLogoTotal from
  "./company_logo/processed/bg_remove/repurgenesis_white.png";
import repurgenesisWhiteLogo from "./company_logo/processed/bg_remove/repurgenesis_white1.png";
import repurgenesisWhiteText from "./company_logo/processed/bg_remove/repurgenesis_white2.png";
import repurgenesisColorLogo from "./company_logo/processed/bg_remove/repurgenesis_bg1.png";
import repurgenesisColorText from "./company_logo/processed/bg_remove/repurgenesis_bg2.png";
import memberOneImage from "./people/hsu.jpg?url";

// ─── Company Assets (Logo + Text) ────────────────────────────────────────────────────────────
export const BRAND_ASSETS = {
  navbar: {
    light: {
      logo: repurgenesisWhiteLogo,
      text: repurgenesisWhiteText,
    },

    color: {
      logo: repurgenesisColorLogo,
      text: repurgenesisColorText,
    },
  },

  footer: {
    logo: repurgenesisWhiteLogo,
    text: repurgenesisWhiteText,
  },
} as const;

export const TEXT = {
  en: {
    // navbar 
    nav: {
      about: "About",
      technology: "Technology",
      solutions: "Solutions",
      news: "News & Events",
      investors: "Investors",
      partners: "Partners",
      contact: "Contact us",
    },
    company: {
      identity: {
        legalName: "Repurgenesis Co., Ltd.",
        brandName: "Repurgenesis",
        parentCompany: "Energenesis Biomedical Co., Ltd.",
      },
      positioning: {
        eyebrow:
          "Orchestrated-Bio & AI for Drug-Repurposing",
        headline:
          "Biomedical Evidence \u00a0\u00a0→\u00a0\u00a0 Actionable Therapeutics",
        summary:
          "In Repurgenesis, we combine multimodal AI with cross-disciplinary biomedical expertise to discover, evaluate and validate new therapeutics for existing medicines.",
        shortSummary:
          "We integrate Bio + AI to advance drug repurposing from hypothesis generation and candidate prioritization to experimental validation and intellectual property development.",
      },
      overview: {
        label:
          "Who We Are",
        title:
          "A Bio + AI company advancing practical drug repurposing",
        paragraph1:
          "Repurgenesis applies artificial intelligence to identify promising new indications for existing medicines. By integrating available pharmacological, safety, clinical, and scientific evidence, we aim to reduce early discovery uncertainty and help qualified opportunities progress more efficiently toward experimental validation and commercial development.",
        paragraph2:
          "Rather than operating as a fully integrated pharmaceutical company, Repurgenesis focuses on high value activities at the front of the drug development value chain, including candidate discovery, multimodal evidence integration, early experimental validation, and intellectual property strategy.",
        mission:
          "Our mission is to create clinically meaningful and commercially viable therapeutic opportunities for patients whose medical needs remain insufficiently addressed.",
      },
      relationship: {
        label:
          "Company Structure",
        title:
          "Combining established drug development experience with next generation AI",
        description:
          "Repurgenesis is a wholly owned subsidiary of Energenesis Biomedical. This relationship provides access to drug development experience, industry networks, and international collaboration capabilities, while enabling Repurgenesis to focus on AI driven drug repurposing, candidate validation, intellectual property development, and strategic partnerships.",
      },
    },
    brandPillars: {
      orchestration: {
        label:
          "Intelligent Orchestration",
        title:
          "Bio + AI operating as one integrated research system",
        description:
          "We coordinate specialized AI agents, biomedical data, analytical methods, and domain experts within a unified research workflow. Repurgenesis is not simply a software provider; we are a cross disciplinary drug research and development partner.",
      },
      acceleration: {
        label:
          "Precision Acceleration",
        title:
          "Faster evidence generation and more focused development decisions",
        description:
          "Our platform helps prioritize therapeutic opportunities by evaluating multiple forms of evidence. This allows teams to focus resources on candidates with stronger biological rationale, greater evidence consistency, and clearer validation potential.",
      },
      translation: {
        label:
          "Pragmatic Translation",
        title:
          "Focused on validation, intellectual property, and commercial relevance",
        description:
          "We prioritize measurable research outputs rather than abstract AI capability. Promising candidates progress from computational analysis to expert review, experimental validation, intellectual property assessment, and partnership evaluation.",
      },
      faq: {
        whatIsRepurgenesis: {
          question:
            "What does Repurgenesis do?",
          answer:
            "Repurgenesis is a Bio + AI company focused on drug repurposing. We combine orchestrated artificial intelligence with biomedical expertise to identify and prioritize new therapeutic opportunities for existing medicines, support experimental validation, and develop intellectual property and partnership opportunities.",
        },
        whatIsOrchestrator: {
          question:
            "What is the Intelligent Orchestrator platform?",
          answer:
            "The Intelligent Orchestrator is a specialized AI orchestration platform for drug repurposing. It coordinates biomedical data, analytical models, AI agents, and expert knowledge to evaluate evidence across multiple sources and produce traceable candidate recommendations.",
        },
        isItJustAnAiTool: {
          question:
            "Is Repurgenesis an AI software provider?",
          answer:
            "Repurgenesis provides more than software. Our team combines artificial intelligence, bioinformatics, biology, drug development, experimental validation, and commercial strategy to help partners progress from computational analysis toward actionable therapeutic opportunities.",
        },
        howDoesItAccelerate: {
          question:
            "How does the platform accelerate research and development?",
          answer:
            "The platform evaluates large volumes of biomedical evidence, identifies higher priority opportunities, and reduces time spent investigating candidates with limited support. It enables faster and more structured research decisions while preserving the experimental and clinical validation required for each new indication.",
        },
        whyRepurposing: {
          question:
            "Why focus on drug repurposing?",
          answer:
            "Existing medicines may already have pharmacological, safety, manufacturing, or clinical information that can inform evaluation for a new therapeutic use. This may improve early stage efficiency and reduce selected uncertainties, although each new indication still requires appropriate experimental, regulatory, and clinical validation.",
        },
        howValidated: {
          question:
            "How are platform generated candidates validated?",
          answer:
            "Candidates undergo expert review based on biological rationale, evidence consistency, disease relevance, feasibility, and commercial potential. Prioritized opportunities then advance to appropriate experimental studies, which may include cell based, mechanistic, organoid, or animal models.",
        },
        commercialModel: {
          question:
            "How does Repurgenesis commercialize its work?",
          answer:
            "Repurgenesis focuses on candidate discovery, early validation, and intellectual property development. Qualified opportunities may be advanced through licensing, joint development, revenue sharing, platform partnerships, or project based collaboration.",
        },
        platformOutput: {
          question:
            "What does the platform produce?",
          answer:
            "The platform produces prioritized, evidence supported, and traceable therapeutic hypotheses. Depending on the engagement, outputs may include candidate rankings, biological rationale, evidence reports, validation strategies, experimental findings, and intellectual property opportunities.",
        },
      },
    },
    // homepage
   stats: {
      bioAi:
        "Cross disciplinary biomedical and AI expertise",
      orchestration:
        "Coordinated multi agent analysis",
      evidence:
        "Traceable candidate prioritization",
      validation:
        "From research hypothesis to validation planning",
    },
    home: {
      hero: {
        label:
          "AI-Orchestrated Drug Repurposing",
        title:
          "From biomedical evidence to therapeutic opportunity",
        description:
          "Repurgenesis brings AI agents, multimodal biomedical data, and domain experts into one coordinated workflow. Together, they help identify promising new uses for existing medicines and build a clearer path toward experimental validation.",
        primaryButton:
          "Explore our platform",
        secondaryButton:
          "Partner with us",
        scroll:
          "Explore",
      },
      heroHighlights: {
        bioAi: {
          value:
            "Bio + AI",

          label:
            "Cross-disciplinary Expertise for Drug Discovery.",
        },

        orchestration: {
          value:
            "AI Orchestration",

          label:
            "Agents Coordinate Data, Models  & Expert Review.",
        },

        evidence: {
          value:
            "Evidence Fusion",

          label:
            "Structure, Omics, Literature & Clinical Evidence.",
        },

        validation: {
          value:
            "Translation Ready",

          label:
            "Candidate prioritization to Wet-lab & IP.",
        },
      },
      workflows: {
        label:
          "Bidirectional Discovery",

        title:
          "Start with a Drug or Disease",

        description:
          "Explore drug-repurposing opportunities from either direction.",

        drugToDisease: {
          label:
            "Drug to Disease",
        },

        diseaseToDrug: {
          label:
            "Disease to Drug",
        },

        button:
          "Explore the Workflow",
      },

      evidence: {
        label:
          "Integrated Evidence",

        title:
          "3 Evidence Layers. 1 Decision.",

        description:
          "Strong candidates: Structure, Knowledge graphs and Gene expression.",

        layers: {
          expression: {
            title:
              "Gene Expression",

            description:
              "Match drug and disease signatures.",
          },

          structure: {
            title:
              "Structure Modeling",

            description:
              "Predict drug-target interactions.",
          },

          knowledge: {
            title:
              "Knowledge Graphs",

            description:
              "Connect drugs, targets, pathways, and diseases.",
          },
        },
      },

     

      translation: {
        label:
          "Translational Path",

        title:
          "From Prediction to Validation",

        description:
          "Advance prioritized candidates through expert review, wet-lab testing, and IP assessment.",

        steps: {
          evidence:
            "Integrated Evidence",

          review:
            "Expert Review",

          validation:
            "Experimental Validation",

          partnering:
            "IP and Partnering",
        },
      },

      research: {
        label:
          "Research Validation",

        title:
          "Built on Practical Research",

        description:
          "Our work spans structure modeling, knowledge graphs, gene expression, and wet-lab validation.",

        button:
          "View Research",
      },

      cta: {
        title:
          "Have a Drug, Target or Disease-related Question?",

        description:
          "See how Bio + AI can support your R&D strategy.",

        button:
          "Start a Conversation",
      },
    },
    // about page 
    about: {
      intro: {
        label:
          "Who We Are",

        titleLine1:
          "Science-driven.",

        titleLine2:
          "Patient-focused.",

        titleLine3:
          "Relentlessly curious.",

        paragraph1:
          "Repurgenesis combines biomedical expertise with orchestrated AI to uncover new therapeutic uses for existing medicines.",

        paragraph2:
          "Promising candidates advance through evidence review, experimental validation, and IP assessment.",

        imageAlt:
          "Repurgenesis biomedical research team",
      },
      journey: {
        label: "Our Journey",
        title: "A decade of discovery",

        timeline: {
          year2013:
            "Founded in Taipei with a mandate to reduce time-to-treatment in orphan diseases.",
          year2016:
            "First computational platform deployed; 120 compounds analyzed in the first year.",
          year2018:
            "Series A funding, laboratory expansion, and the first wet-lab validation of a repurposed compound in fibrosis.",
          year2021:
            "Lead program entered IND-enabling studies and the multi-omics pipeline was launched.",
          year2023:
            "Nature Medicine publication and European regulatory dialogue initiated.",
          year2025:
            "Series B completed, Phase II trial design finalized, and three new therapeutic programs opened.",
        },
      },
      leadership: {
        label:
          "Leadership",

        title:
          "The team behind the science",

        actions: {
          viewProfile:
            "View profile",

          closeProfile:
            "Close profile",

          linkedin:
            "LinkedIn",

          email:
            "Email",
        },

        members: {
          memberOne: {
            name:
              "Dr. Yin-Hsong Hsu",

            role:
              "President",

            bio:
              "Dr. Yin-Hsong Hsu is the Founder and President of Repurgenesis. He leads the development of the company's Bio + AI platform for drug repurposing that combines basic biomedical practice together with computer-based methods, trials, experimental validation and strategic collaboration.",
          },

          memberTwo: {
            name:
              "Dr. Yin-Hsong Hsu",

            role:
              "President",

            bio:
              "Dr. Yin-Hsong Hsu is the Founder and President of Repurgenesis. He leads the development of the company's Bio + AI platform for drug repurposing that combines basic biomedical practice together with computer-based methods, trials, experimental validation and strategic collaboration.",
          },
        },
      },
    },
    // technology page
    technology: {
      hero: {
        label:
          "Intelligent Orchestrator",

        title:
          "Orchestrated AI for evidence-driven drug repurposing",

        description:
          "The Intelligent Orchestrator is Repurgenesis's internally developed drug repurposing platform. It coordinates specialized AI agents, multimodal biomedical data, analytical models, and domain expertise to identify and evaluate new therapeutic opportunities for existing medicines.",
      },

      cards: {
        orchestration: {
          title:
            "Multi-Agent Orchestration",

          description:
            "Specialized AI agents coordinate evidence retrieval, biological analysis, model execution, evidence assessment, and candidate evaluation.",

          tag:
            "Core Platform",
        },

        evidence: {
          title:
            "Multimodal Evidence Integration",

          description:
            "Drug structure, molecular targets, pathways, gene expression, knowledge graphs, literature, and clinical evidence are interpreted within one research context.",

          tag:
            "Bio + AI",
        },

        prioritization: {
          title:
            "Candidate Prioritization",

          description:
            "Therapeutic opportunities are evaluated using biological rationale, evidence consistency, unmet medical need, validation feasibility, intellectual property potential, and commercial relevance.",

          tag:
            "Decision Support",
        },

        validation: {
          title:
            "Validation and IP Readiness",

          description:
            "Selected opportunities progress through expert review, experimental validation, mechanism assessment, and intellectual property evaluation.",

          tag:
            "Translation",
        },
      },

      pipeline: {
        label:
          "Discovery Workflow",

        title:
          "From research question to validated opportunity",
      },
      pipelineSteps: {
        definition: {
          label:
            "Research Definition",
          description:
            "Define the medicine, disease, biological mechanism, development need, and commercial objective.",
        },
        orchestration: {
          label:
            "Evidence Orchestration",
          description:
            "Coordinate relevant data sources, analytical models, and specialized AI agents.",
        },
        prioritization: {
          label:
            "Candidate Prioritization",
          description:
            "Rank opportunities using evidence strength, biological rationale, feasibility, and development potential.",
        },
        validation: {
          label:
            "Experimental Validation",
          description:
            "Evaluate prioritized opportunities through appropriate laboratory studies.",
        },
        partnering: {
          label:
            "IP and Partnering",
          description:
            "Develop intellectual property strategy and assess licensing or joint development opportunities.",
        },
      },
    },
    validation: {
      label:
        "Platform Validation",
      title:
        "Connecting computational insight with experimental evidence",
      overview:
        "Platform generated candidates are treated as research hypotheses rather than final conclusions. Opportunities must undergo expert assessment and appropriate experimental validation before advancing to intellectual property development or commercial partnership evaluation.",
      candidateStrategy:
        "Candidates are assessed using evidence strength, biological plausibility, unmet medical need, experimental feasibility, intellectual property potential, and commercial relevance.",
      portfolio:
        "Repurgenesis is developing a portfolio of drug repurposing opportunities across selected disease areas. Each program advances in stages according to available evidence, expert review, and validation results.",
    },
    business: {
      label:
        "Business Model",
      title:
        "An IP focused and partnership driven business model",
      overview:
        "Repurgenesis operates an asset light model focused on AI enabled candidate discovery, early validation, intellectual property creation, and strategic collaboration.",
      models: {
        assetLicensing: {
          title:
            "New Indication and Therapeutic Use Licensing",
          description:
            "Following expert review, initial validation, and intellectual property assessment, qualified opportunities may progress through licensing, joint development, or revenue sharing arrangements with pharmaceutical companies, biotechnology companies, and research organizations.",
        },
        platformPartnership: {
          title:
            "Platform and Technology Partnerships",
          description:
            "Repurgenesis supports partners through research projects, technology licensing, platform access, and joint development programs designed around specific diseases, medicines, combinations, or data environments.",
        },
      },
      value:
        "This model enables Repurgenesis to focus on creating differentiated therapeutic opportunities while working with partners that possess clinical, regulatory, manufacturing, and commercialization capabilities.",
    },
    // solution page
    solutionsPage: {
      header: {
        label: "Therapeutic Focus",
        title: "Solutions across disease areas",
        description:
          "We partner with pharmaceutical companies, academic institutions, and patient advocacy organizations to address diseases where conventional drug development timelines leave patients without treatment options.",
      },
      faq: {
        label: "FAQ",
        title: "Common Questions",
        askDirectly: "Ask us directly",
        closeAll: "Collapse all",
        items: {
          efficiency: {
            question:
              "What makes drug repurposing more efficient than de novo development?",
            answer:
              "Repurposed compounds have already completed important safety evaluation steps. This can reduce early development time and risk. Our AI platform further evaluates candidates by predicted efficacy, helping narrow thousands of compounds into a smaller group of high-confidence candidates.",
          },

          diseaseAreas: {
            question:
              "Which disease areas does Repurgenesis currently focus on?",
            answer:
              "Our current focus includes rare diseases, oncology, neurodegeneration, and metabolic disorders. We also work with pharmaceutical and biotechnology partners that bring target hypotheses to our platform for feasibility assessment.",
          },

          validation: {
            question:
              "How do you validate computational predictions?",
            answer:
              "Each computational hypothesis follows a structured experimental validation process. Depending on the project, this may include target engagement assays, disease-relevant cell models, and patient-derived biological models.",
          },

          licensing: {
            question:
              "Can established pharmaceutical companies license your platform?",
            answer:
              "We support several collaboration models, including platform access, co-development agreements, and milestone-based partnerships. Contact our business development team to discuss the most appropriate structure.",
          },
        },
      },
    },
    // news & events
   news: {
      label: "Company Updates",
      title: "Latest News & Events",
      filter: "Filter",
      scroll: "Scroll",
      allNews: "All News",

      filters: {
        all: "All",
        pressRelease: "Press Release",
        publication: "Publication",
        partnership: "Partnership",
        event: "Event",
      },
      articles: {
        seriesB: {
          date: "June 2025",
          title:
            "Repurgenesis Completes Series B Funding Round of €42M",
          excerpt:
            "The funding will accelerate our lead rare disease program into Phase II clinical trials and expand our computational infrastructure across three new sites.",
        },
        fibrosisStudy: {
          date: "April 2025",
          title:
            "New Study Validates Repurgenesis AI Model in Fibrosis Targets",
          excerpt:
            "Published in Nature Medicine, our research demonstrates 87% concordance between model predictions and in-vitro fibrosis assay outcomes.",
        },
        hospitalAlliance: {
          date: "February 2025",
          title:
            "Strategic Alliance with University Hospital Network Announced",
          excerpt:
            "Access to biobank data from 28,000 patients will power next-generation disease stratification models across five therapeutic areas.",
        },
        jpmorgan2025: {
          date: "January 2025",
          title:
            "Repurgenesis Presents at JPMorgan Healthcare Conference 2025",
          excerpt:
            "CEO Dr. Wei-Lin Chen presented the company's pipeline progress and long-term vision to a global audience of healthcare investors in San Francisco.",
        },
        benchmarkResults: {
          date: "November 2024",
          title:
            "Repurgenesis Publishes Benchmark Results in Cell Chemical Biology",
          excerpt:
            "Our multi-omics pipeline outperforms existing state-of-the-art methods for compound-target interaction prediction across 14 disease categories.",
        },

        bioEurope2024: {
          date: "October 2024",
          title:
            "Repurgenesis Joins BIO-Europe 2024 as Featured Speaker",
          excerpt:
            "Our Chief Scientific Officer presented the molecular repurposing platform to more than 4,000 delegates, leading to three new partnership discussions.",
        },
        orphanDesignation: {
          date: "August 2024",
          title:
            "Repurgenesis Receives EMA Orphan Drug Designation for Lead Program",
          excerpt:
            "The European Medicines Agency has granted Orphan Drug Designation to RG-201 for the treatment of a rare pulmonary fibrosis subtype.",
        },
        karolinskaAgreement: {
          date: "July 2024",
          title:
            "Joint Research Agreement Signed with Karolinska Institutet",
          excerpt:
            "The collaboration will focus on identifying neurodegeneration targets using Repurgenesis's proprietary AI and Karolinska's patient cohort datasets.",
        },
        rg101Publication: {
          date: "May 2024",
          title:
            "Preclinical Data on RG-101 Published in Journal of Medicinal Chemistry",
          excerpt:
            "RG-101, a repurposed kinase inhibitor, demonstrates potent activity in ALS motor neuron models with a favorable CNS penetration profile.",
        },
      },
    },
    // contact page
    contact: {
      header: {
        label: "Contact Us",
        title: "Let's Talk!",
        description:
          "We would love to hear from you! Whether you are interested in partnerships, research collaboration, investment opportunities, or media enquiries, our team is ready to help.",
      },
      details: {
        email: "Email",
        phone: "Phone",
        fax: "Fax",
        office: "Office",
        addressLine1:
          "Neihu Technology Park 6F, No. 21, Ln. 583, Ruiguang Rd.", 
        addressLine2:
          "Neihu Dist, Taipei City 114694, Taiwan.",
      },
     map: {
        title: "Repurgenesis Office Map",
        companyName: "REPURGENESIS CO., LTD",
        logoAlt: "Repurgenesis Company Logo",
        openMap: "View on Google Maps",
      },
      form: {
        title: "Send us a message",
        description:
          "Fill in the form below and our team will respond shortly.",
        enquiryType: "Question Type",
        enquiryTypes: {
          general: "General",
          partnerships: "Partnerships",
          investors: "Investors",
          careers: "Careers",
          others: "Others",
        },
        placeholders: {
          name: "Your name *",
          email: "Your email *",
          phone: "Phone number",
          organization: "Organization",
          message: "Tell us about your project or question...",
        },
        submit: "Send Message",
        captchaRequired: "Please complete the reCAPTCHA.",
      },
      success: {
        title: "Message Sent!",
        description:
          "Thank you for contacting us. Our team will get back to you as soon as possible.",
        sendAnother: "Send another message",
      },
    },
    // investor page
    investors: {
      tabs: {
        overview: "Overview",
        updates: "News & Events",
        milestones: "Funding & Milestones",
        governance: "Governance",
        resources: "Resources",
        contact: "Investor Contact",
      },

      landing: {
        menuLabel: "Investor Home",
        label: "Investor Relations",
        title: "Explore Repurgenesis",
        description:
          "Select a section above to explore company updates, development milestones, governance information, investor resources, and contact details.",
        cards: {
          overviewTitle: "Company Overview",
          overviewDescription:
            "Learn about our company, technology strategy, and development priorities.",

          updatesTitle: "News & Events",
          updatesDescription:
            "Access approved announcements, presentations, events, and media materials.",

          resourcesTitle: "Investor Resources",
          resourcesDescription:
            "View approved company documents, presentations, and downloadable materials.",
        },
      },
      common: {
        back: "Back to Investors",
        contactTeam: "Contact our team",
      },
      sections: {
        overview: {
          label: "Investor Overview",
          title: "Building the next generation of drug repurposing",
          description:
            "Explore Repurgenesis company information, development strategy, partnerships, and approved investor materials.",

          cards: {
            companyProfileTitle: "Company Profile",
            companyProfileDescription:
              "Add the company approved introduction, business model, and long term vision here.",

            technologyStrategyTitle: "Technology Strategy",
            technologyStrategyDescription:
              "Present the approved explanation of the AI platform, data capabilities, and validation workflow.",

            growthPrioritiesTitle: "Growth Priorities",
            growthPrioritiesDescription:
              "Summarize the company approved development priorities and strategic opportunities.",
          },
        },
        updates: {
          label: "Company Updates",
          title: "News, events and presentations",
          description:
            "Official corporate announcements, investor presentations, events, and media materials.",
          cards: {
            announcementsTitle: "Corporate Announcements",
            announcementsDescription:
              "Publish approved company announcements and important business updates.",

            eventsTitle: "Events & Presentations",
            eventsDescription:
              "Provide presentation materials and information about upcoming or previous events.",

            mediaTitle: "Media Coverage",
            mediaDescription:
              "Share approved interviews, articles, and external media references.",
          },
        },
        milestones: {
          label: "Company Development",
          title: "Funding and milestones",
          description:
            "A structured overview of approved financing information and company development milestones.",

          cards: {
            fundingHistoryTitle: "Funding History",
            fundingHistoryDescription:
              "Add approved funding round information and investor details.",

            developmentMilestonesTitle: "Development Milestones",
            developmentMilestonesDescription:
              "Show important scientific, operational, and commercial achievements.",

            upcomingPrioritiesTitle: "Upcoming Priorities",
            upcomingPrioritiesDescription:
              "Present approved near term objectives without publishing confidential information.",
          },
        },
        governance: {
          label: "Corporate Governance",
          title: "Leadership and governance",
          description:
            "Approved leadership information, corporate policies, and governance materials.",

          cards: {
            leadershipTitle: "Leadership",
            leadershipDescription:
              "Introduce approved executive leadership and board information.",

            policiesTitle: "Corporate Policies",
            policiesDescription:
              "Provide privacy, compliance, ethics, and governance documents.",

            riskTitle: "Risk Management",
            riskDescription:
              "Add an approved overview of corporate and operational risk management.",
          },
        },
        resources: {
          label: "Investor Materials",
          title: "Resources and downloads",
          description:
            "Central access to approved company documents and investor materials.",
          cards: {
            presentationTitle: "Company Presentation",
            presentationDescription:
              "Upload the approved investor presentation through the future CMS.",
            factSheetTitle: "Company Fact Sheet",
            factSheetDescription:
              "Provide a downloadable summary of approved company information.",
            mediaAssetsTitle: "Brand and Media Assets",
            mediaAssetsDescription:
              "Provide approved logos, images, and company descriptions.",
          },
        },
        contact: {
          label: "Investor Relations",
          title: "Connect with our team",
          description:
            "Contact Repurgenesis for approved investor information, meetings, and document requests.",
          cards: {
            enquiriesTitle: "General Enquiries",
            enquiriesDescription:
              "Direct general investor enquiries to the appropriate company contact.",
            meetingsTitle: "Meeting Requests",
            meetingsDescription:
              "Request a meeting with the Repurgenesis team.",
            documentsTitle: "Document Access",
            documentsDescription:
              "Request access to approved non public investor materials.",
          },
        },
      },
    },
    // partner page
    partners: {
      page: {
        label: "Ecosystem",
        title: "Our Partners & Collaborations",
        description:
          "Repurgenesis thrives through collaboration. Our network spans BioData, AI technology for biology, CRO, wet lab, research institutions, medical centers, biopharma companies, and patient organizations across global innovation hubs.",
      },
      map: {
        all: "All",
        website: "Website",
        googleMaps: "Google Maps",
        logo: "logo",

        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
        resetZoom: "Reset map zoom",

        showPartner: "Show partner",
      },
      categories: {
        bioData: "BioData",
        aiTechForBio: "AI Tech for Bio",
        croWetLab: "CRO & Wet Lab",
        researchInstitute: "Research Institute",
        medicalCenter: "Medical Center",
        bioPharma: "Bio Pharma",
        patientGroup: "Patient Group",
      },

      locations: {
        trinetx: {
          name: "TriNetX",
          city: "Cambridge, MA",
          country: "United States",
          description:
            "Real world healthcare data and analytics network supporting clinical research and evidence generation.",
        },

        seedsupply: {
          name: "SEEDSUPPLY",
          city: "Tokyo",
          country: "Japan",
          description:
            "Japan based BioData partner. Replace this summary after confirming the official company profile.",
        },

        medinsights: {
          name: "MedInsights",
          city: "Paris",
          country: "France",
          description:
            "France based AI technology partner for biomedical insights. Replace this summary after confirming official details.",
        },

        energenesisBiomedical: {
          name: "Energenesis Biomedical 華安醫學",
          displayName: "Energenesis Biomedical",
          city: "Taipei",
          country: "Taiwan",
          address:
            "6F.-3, No. 21, Ln. 583, Ruiguang Rd., Neihu Dist., Taipei, Taiwan",
          description:
            "Taiwan based biomedical company with drug development and bio service capabilities.",
        },

        quodata: {
          name: "QuoData",
          city: "Dresden",
          country: "Germany",
          description:
            "Germany based research and data analytics organization. Replace this summary after confirming the exact collaboration scope.",
        },

        itri: {
          name: "Industrial Technology Research Institute",
          displayName: "ITRI",
          city: "Hsinchu",
          country: "Taiwan",
          description:
            "Taiwanese applied research and technology development institute.",
        },

        taichungVgh: {
          name: "Taichung Veterans General Hospital",
          displayName: "Taichung VGH",
          city: "Taichung",
          country: "Taiwan",
          address:
            "No. 1650, Sec. 4, Taiwan Blvd., Xitun Dist., Taichung, Taiwan",
          description:
            "Major medical center in Taichung supporting clinical and translational healthcare collaboration.",
        },

        orfenix: {
          name: "Orfenix",
          city: "Netherlands",
          country: "Netherlands",
          description:
            "Netherlands based Bio Pharma partner. Replace this summary after confirming official company details.",
        },

        twiBiotech: {
          name: "TWi Biotechnology",
          displayName: "TWi Biotech",
          city: "Taipei",
          country: "Taiwan",
          description:
            "Taiwan based Bio Pharma partner. Replace this summary after confirming official website and location.",
        },

        exonoxBioscience: {
          name: "ExoNox BioScience",
          city: "Taipei",
          country: "Taiwan",
          description:
            "Taiwan based Bio Pharma partner. Replace this summary after confirming official company details.",
        },

        debraUk: {
          name: "DEBRA UK",
          city: "London",
          country: "United Kingdom",
          description:
            "Patient organization and medical research charity supporting people affected by epidermolysis bullosa.",
        },
      },

      cta: {
        label: "Collaborate",
        title: "Become a partner",
        description:
          "Whether you are an academic research group, a pharmaceutical company with an unexplored target, a technology or data provider, or an investor looking for deep-tech biotech opportunities, we want to hear from you.",
        button: "Start a conversation",
      },
    },
    // footer 
    footer: {
      brandName: "Repurgenesis",

      companyHeading: "Our Company",
      getInTouchHeading: "Get in Touch",

      careers: "Careers",
      contactUs: "Contact Us",

      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",

      copyrightCompany:
        "Repurgenesis Co., LTD.",
      allRightsReserved:
        "All Rights Reserved.",

      social: {
        linkedin:
          "Repurgenesis on LinkedIn",
        x:
          "Repurgenesis on X",
        youtube:
          "Repurgenesis on YouTube",
      },
    },
  },

  zh: {
    // navbar
    nav: {
      about: "關於我們",
      technology: "技術平台",
      solutions: "解決方案",
      news: "最新消息",
      investors: "投資人專區",
      partners: "合作夥伴",
      contact: "聯絡我們",
    },
    company: {
      identity: {
        legalName: "源華智醫股份有限公司",
        brandName: "源華智醫",
        parentCompany: "華安醫學股份有限公司",
      },
      positioning: {
        eyebrow:
          "智慧協奏 Bio + AI 加速藥物再利用",
        headline:
          "轉化 多元生醫證據\u00a0\u00a0\u00a0成為\u00a0\u00a0\u00a0可推進的治療機會",
        summary:
          "源華智醫 結合智慧協奏人工智慧與跨領域生醫專業，系統化探索評估 並 驗證既有藥物的新治療機會。",
        shortSummary:
          "我們整合 Bio + AI，推動藥物再利用從假說產生、候選排序，到實驗驗證與智慧財產權布局。",
      },
      overview: {
        label:
          "關於源華智醫",
        title:
          "以 Bio + AI 推動務實轉譯的藥物再利用公司",
        paragraph1:
          "源華智醫運用人工智慧探索既有藥物具潛力的新適應症。透過整合既有的藥理、安全性、臨床及科學證據，我們致力於降低早期探索的不確定性，並協助具潛力的候選機會更有效率地進入實驗驗證與商業開發。",
        paragraph2:
          "源華智醫並非以自行完成完整臨床開發、製造及銷售為主要模式，而是聚焦於藥物開發價值鏈前端的高價值活動，包括候選機會發掘、多模態證據整合、早期實驗驗證及智慧財產權策略。",
        mission:
          "我們致力於為尚未被充分滿足的醫療需求，創造兼具臨床意義與商業發展潛力的治療機會。",
      },
      relationship: {
        label:
          "公司架構",
        title:
          "結合既有藥物開發經驗與新世代 AI 能力",
        description:
          "源華智醫為華安醫學旗下全資子公司，可運用其既有藥物開發經驗、產業網絡與國際合作基礎，並專注發展 AI 藥物再利用、候選資產驗證、智慧財產權及策略合作。",
      },
    },
    brandPillars: {
      orchestration: {
        label:
          "智慧協奏",
        title:
          "讓 Bio + AI 成為一套整合運作的研發系統",
        description:
          "我們將專業 AI Agent、生醫資料、分析方法與領域專家整合至一致的研發流程。源華智醫不只是 AI 軟體供應商，而是兼具生醫與運算能力的跨領域藥物研發夥伴。",
      },
      acceleration: {
        label:
          "精準加速",
        title:
          "加速證據產出，讓研發決策更加聚焦",
        description:
          "平台透過多來源證據整合與交叉評估，協助團隊將研發資源優先投入於具較強生物合理性、證據一致性及驗證潛力的候選機會。",
      },
      translation: {
        label:
          "務實致遠",
        title:
          "聚焦驗證、智慧財產權與可落地的商業價值",
        description:
          "我們重視可衡量的研發成果，而非停留於抽象的 AI 能力展示。具潛力的候選項目將由運算分析進入專家審議、實驗驗證、智財評估及商業合作分析。",
      },
    },
    // homepage
    stats: {
      bioAi:
        "跨領域生醫及人工智慧",
      orchestration:
        "多重 AI Agent 協同分析",
      evidence:
        "具可追溯性的候選機會排序",
      validation:
        "從研究假說到實驗驗證規劃",
    },
    home: {
      hero: {
        label:
          "AI 智慧協奏藥物再利用",
        title:
          "從生醫證據，走向可驗證的治療機會",
        description:
          "源華智醫將 AI Agent、多模態生醫資料與領域專家整合在同一套研發流程中，協助團隊更有系統地探索既有藥物的新用途，並建立通往實驗驗證的清晰路徑。",
        primaryButton:
          "探索技術平台",
        secondaryButton:
          "與我們合作",
        scroll:
          "向下探索",
      },
      heroHighlights: {
        bioAi: {
          value:
            "Bio + AI",

          label:
            "整合生醫，藥物開發與人工智慧",
        },

        orchestration: {
          value:
            "AI 智慧協奏",

          label:
            "協調資料 分析模型與專家審議",
        },

        evidence: {
          value:
            "證據整合",

          label:
            "整合基因體及結構 文獻與臨床證據",
        },

        validation: {
          value:
            "轉譯",

          label:
            "候選排序進行實驗與智財評估",
        },
      },
      workflows: {
        label:
          "雙向探索",

        title:
          "從藥物或疾病出發",

        description:
          "從兩種方向探索藥物再利用機會。",

        drugToDisease: {
          label:
            "藥物到疾病",
        },

        diseaseToDrug: {
          label:
            "疾病到藥物",
        },

        button:
          "探索研發流程",
      },

      evidence: {
        label:
          "整合證據",

        title:
          "三層證據，一套決策",

        description:
          "整合結構、知識圖譜與基因表現，優先篩選候選項目。",

        layers: {
          expression: {
            title:
              "基因表現",

            description:
              "比對藥物與疾病表現特徵。",
          },

          structure: {
            title:
              "結構建模",

            description:
              "預測藥物與標的交互作用。",
          },

          knowledge: {
            title:
              "知識圖譜",

            description:
              "串聯藥物、標的、路徑與疾病。",
          },
        },
      },

      translation: {
        label:
          "轉譯路徑",

        title:
          "從預測走向驗證",

        description:
          "將優先候選項目推進至專家審議、濕實驗與智財評估。",

        steps: {
          evidence:
            "整合證據",

          review:
            "專家審議",

          validation:
            "實驗驗證",

          partnering:
            "智財合作",
        },
      },

      research: {
        label:
          "研究驗證",

        title:
          "以實際研究為基礎",

        description:
          "研究涵蓋結構建模、知識圖譜、基因表現與濕實驗驗證。",

        button:
          "查看研究成果",
      },

      cta: {
        title:
          "您有藥物、標的或疾病問題嗎？",

        description:
          "了解 Bio + AI 如何支援您的研發策略。",

        button:
          "開始洽談",
      },
    },
    // about page
    about: {
      intro: {
        label:
          "關於我們",

        titleLine1:
          "科學驅動。",

        titleLine2:
          "以病患為核心。",

        titleLine3:
          "持續探索。",

        paragraph1:
          "源華智醫結合生醫專業與智慧協奏 AI，探索既有藥物的新治療用途。",

        paragraph2:
          "具潛力的候選項目將經證據評估、實驗驗證與智財分析。",
          
        imageAlt:
          "源華智醫生醫研發團隊",
      },

      journey: {
        label: "發展歷程",
        title: "十年的探索與突破",

        timeline: {
          year2013:
            "於台北成立，致力於縮短罕見疾病患者取得治療的時間。",
          year2016:
            "完成首個運算平台部署，第一年即分析 120 種化合物。",
          year2018:
            "完成 A 輪募資、擴建實驗室，並首次於纖維化研究中完成再利用藥物的濕實驗驗證。",
          year2021:
            "主要開發項目進入 IND 支持研究階段，並正式啟動多體學分析平台。",
          year2023:
            "研究成果發表於 Nature Medicine，並開始與歐洲監管機構進行交流。",
          year2025:
            "完成 B 輪募資、確定第二期臨床試驗設計，並啟動三項新的治療開發計畫。",
        },
      },
      leadership: {
        label:
          "領導團隊",

        title:
          "推動科學與創新的專業團隊",

        actions: {
          viewProfile:
            "查看完整介紹",

          closeProfile:
            "關閉介紹",

          linkedin:
            "LinkedIn",

          email:
            "電子郵件",
        },

        members: {
          memberOne: {
            name:
              "許銀雄 博士",

            role:
              "創辦人暨總經理",

            bio:
              "許銀雄博士 為 源華智醫之創辦人暨總經理，帶領公司發展 Bio + AI 老藥新用平台，結合生醫研究、人工智慧、實驗驗證以及策略合作，推動極具潛力的治療機會 進入後續轉譯與商業評估。",
          },

          memberTwo: {
            name:
              "許銀雄 博士",

            role:
              "創辦人暨總經理",

            bio:
              "請在此加入經公司核准的專業介紹，說明其研究專長、藥物開發經驗、學術背景與領導職責。",
          },
        },
      },
    },
    // technology page
    technology: {
      hero: {
        label:
          "智慧協奏平台",

        title:
          "以協奏式 AI 推動證據導向的藥物再利用",

        description:
          "智慧協奏（Intelligent Orchestrator）是源華智醫自主研發的藥物再利用平台。平台協調專業 AI Agent、多模態生醫資料、分析模型與領域知識，系統化探索並評估既有藥物的新治療機會。",
      },

      cards: {
        orchestration: {
          title:
            "多重 AI Agent 協奏",

          description:
            "協調證據檢索、生物分析、模型執行、證據評估與候選機會判讀等專業任務。",

          tag:
            "核心平台",
        },

        evidence: {
          title:
            "多模態證據整合",

          description:
            "將藥物結構、分子標的、疾病路徑、基因表現、知識圖譜、文獻與臨床證據納入一致的研究脈絡。",

          tag:
            "Bio + AI",
        },

        prioritization: {
          title:
            "候選機會排序",

          description:
            "依據生物合理性、證據一致性、未滿足醫療需求、驗證可行性、智財潛力及商業價值進行綜合評估。",

          tag:
            "決策支援",
        },

        validation: {
          title:
            "驗證與智財準備",

          description:
            "通過篩選的候選機會將進入專家審議、實驗驗證、作用機制評估及智慧財產權分析。",

          tag:
            "轉譯應用",
        },
      },

      pipeline: {
        label:
          "研發流程",

        title:
          "從研發問題到可驗證的治療機會",
      },
      pipelineSteps: {
        definition: {
          label:
            "研發問題定義",
          description:
            "定義藥物、疾病、生物機制、開發需求及商業目標。",
        },
        orchestration: {
          label:
            "證據智慧協奏",
          description:
            "協調相關資料來源、分析模型及專業 AI Agent。",
        },
        prioritization: {
          label:
            "候選機會排序",
          description:
            "依證據強度、生物合理性、可行性及開發潛力進行排序。",
        },
        validation: {
          label:
            "實驗驗證",
          description:
            "運用適當的實驗方法驗證優先候選機會。",
        },
        partnering: {
          label:
            "智財與商業合作",
          description:
            "建立智慧財產權策略，並評估授權或共同開發機會。",
        },
      },
    },
    validation: {
      label:
        "平台能力驗證",
      title:
        "連結運算洞察與實驗證據",
      overview:
        "平台產出的候選藥物與新適應症屬於研究假說，而非最終結論。候選機會必須經過專家評估及適當的實驗驗證，才會進一步進入智慧財產權布局或商業合作評估。",
      candidateStrategy:
        "候選機會將依證據強度、生物合理性、未滿足醫療需求、實驗可行性、智財潛力及商業價值進行綜合評估。",
      portfolio:
        "源華智醫正逐步建立跨疾病領域的藥物再利用候選組合，各項目將依據現有證據、專家審議及驗證結果分階段推進。",
    },
    business: {
      label:
        "商業模式",
      title:
        "以智慧財產權為核心、以策略合作為導向的商業模式",
      overview:
        "源華智醫採取輕資產模式，聚焦於 AI 候選機會發掘、早期驗證、智慧財產權創造及策略合作。",
      models: {
        assetLicensing: {
          title:
            "新適應症與治療用途授權",
          description:
            "候選機會完成專家審議、初步驗證及智財評估後，可與藥廠、生技公司或研究機構推進授權、共同開發或分潤合作。",
        },
        platformPartnership: {
          title:
            "平台與技術合作",
          description:
            "源華智醫可透過研究專案、技術授權、平台使用及共同開發，支援合作夥伴針對特定疾病、藥物、組合或資料環境進行分析與候選機會探索。",
        },
      },
      value:
        "此模式使源華智醫能聚焦於創造差異化治療機會，並與具備臨床、法規、製造及市場能力的合作夥伴共同推進後續開發。",
    },
    // solution page
    solutionsPage: {
      header: {
        label: "治療領域",
        title: "跨疾病領域的解決方案",
        description:
          "我們與製藥公司、學術研究機構及病友倡議組織合作，致力於改善傳統藥物開發時程過長，導致病患缺乏治療選項的疾病領域。",
      },

      faq: {
        label: "常見問題",
        title: "常見問題與解答",
        askDirectly: "直接聯絡我們",
        closeAll: "全部收合",
        items: {
          efficiency: {
            question:
              "藥物再利用為什麼比全新藥物開發更有效率？",
            answer:
              "再利用藥物通常已完成部分重要的安全性評估，因此可減少早期開發所需的時間與風險。我們的 AI 平台會進一步依照預測療效評估候選藥物，將數千種化合物縮小為少量高可信度候選項目。",
          },

          diseaseAreas: {
            question:
              "Repurgenesis 目前專注於哪些疾病領域？",
            answer:
              "我們目前聚焦於罕見疾病、腫瘤疾病、神經退化性疾病及代謝疾病。我們也與製藥及生技公司合作，透過平台評估合作夥伴所提出的疾病標靶假說。",
          },

          validation: {
            question:
              "你們如何驗證運算模型提出的預測？",
            answer:
              "每一項運算假說都會經過結構化的實驗驗證流程。依照不同專案需求，驗證方式可能包括標靶結合實驗、疾病相關細胞模型及病患來源的生物模型。",
          },

          licensing: {
            question:
              "大型製藥公司可以授權使用你們的平台嗎？",
            answer:
              "我們提供多種合作模式，包括平台使用、共同開發協議及依里程碑執行的合作方案。歡迎聯絡商務開發團隊，討論適合雙方需求的合作方式。",
          },
        },
      },
    },
    // news & events
    news: {
      label: "公司動態",
      title: "最新消息與活動",
      filter: "分類",
      scroll: "scroll",
      allNews: "所有消息",

      filters: {
        all: "全部",
        pressRelease: "新聞稿",
        publication: "研究發表",
        partnership: "合作消息",
        event: "活動",
      },

      articles: {
        seriesB: {
          date: "2025 年 6 月",
          title:
            "Repurgenesis 完成 4,200 萬歐元 B 輪募資",
          excerpt:
            "本輪資金將協助主要罕見疾病開發項目進入第二期臨床試驗，並擴充三個據點的運算基礎設施。",
        },

        fibrosisStudy: {
          date: "2025 年 4 月",
          title:
            "最新研究驗證 Repurgenesis AI 模型於纖維化標靶的預測能力",
          excerpt:
            "研究結果顯示，模型預測與體外纖維化實驗結果達到 87% 的一致性。",
        },

        hospitalAlliance: {
          date: "2025 年 2 月",
          title:
            "宣布與大學醫院網絡建立策略合作",
          excerpt:
            "合作將運用 28,000 名病患的生物資料庫資訊，推動五個治療領域的下一代疾病分群模型。",
        },

        jpmorgan2025: {
          date: "2025 年 1 月",
          title:
            "Repurgenesis 於 2025 年摩根大通醫療健康大會發表",
          excerpt:
            "執行長 Wei-Lin Chen 博士於舊金山向全球醫療投資人說明公司的研發管線進展與長期發展願景。",
        },

        benchmarkResults: {
          date: "2024 年 11 月",
          title:
            "Repurgenesis 於 Cell Chemical Biology 發表基準測試結果",
          excerpt:
            "我們的多體學分析流程在 14 個疾病類別的化合物與標靶交互作用預測中，優於現有方法。",
        },

        bioEurope2024: {
          date: "2024 年 10 月",
          title:
            "Repurgenesis 受邀於 BIO-Europe 2024 發表",
          excerpt:
            "科學長向超過 4,000 名與會者介紹分子再利用平台，並促成三項新的合作討論。",
        },

        orphanDesignation: {
          date: "2024 年 8 月",
          title:
            "Repurgenesis 主要開發項目獲得 EMA 孤兒藥資格認定",
          excerpt:
            "歐洲藥品管理局已授予 RG-201 孤兒藥資格，用於治療一種罕見的肺纖維化亞型。",
        },

        karolinskaAgreement: {
          date: "2024 年 7 月",
          title:
            "與卡羅琳斯卡學院簽署共同研究協議",
          excerpt:
            "雙方將結合 Repurgenesis 的專有 AI 技術與卡羅琳斯卡學院的病患資料，探索神經退化性疾病的新標靶。",
        },

        rg101Publication: {
          date: "2024 年 5 月",
          title:
            "RG-101 臨床前研究結果發表於 Journal of Medicinal Chemistry",
          excerpt:
            "再利用激酶抑制劑 RG-101 在 ALS 運動神經元模型中展現顯著活性，並具有良好的中樞神經系統穿透能力。",
        },
      },
    },
    // contact page
    contact: {
      header: {
        label: "Contact Us",
        title: "Let's Talk!",
        description:
          "We would love to hear from you! Whether you are interested in partnerships, research collaboration, investment opportunities, or media enquiries, our team is ready to help.",
      },

      details: {
        email: "電子信箱",
        phone: "電話",
        fax: "傳真",
        office: "辦公室",
        addressFull: "台北市 114694 內湖區瑞光路 583 巷 21 號 6 樓",
      },

      map: {
        title: "Repurgenesis 辦公室地圖",
        companyName: "源華智醫",
        logoAlt: "Repurgenesis 公司標誌",
        openMap: "在 Google Map 中查看",
    },

      form: {
        title: "Send us a message",
        description:
          "Fill in the form below and our team will respond shortly.",

        enquiryType: "Question Type",

        enquiryTypes: {
          general: "General",
          partnerships: "Partnerships",
          investors: "Investors",
          careers: "Careers",
          others: "Others",
        },

        placeholders: {
          name: "Your name *",
          email: "Your email *",
          phone: "Phone number",
          organization: "Organization",
          message: "Tell us about your project or question...",
        },

        submit: "Send Message",
        captchaRequired: "Please complete the reCAPTCHA.",
      },

      success: {
        title: "Message Sent!",
        description:
          "Thank you for contacting us. Our team will get back to you as soon as possible.",
        sendAnother: "Send another message",
      },
    },
    // investor page
    investors: {
      tabs: {
        overview: "投資人總覽",
        updates: "最新消息與活動",
        milestones: "募資與里程碑",
        governance: "公司治理",
        resources: "投資人資源",
        contact: "投資人聯絡",
      },
      landing: {
        menuLabel: "投資人首頁",
        label: "投資人關係",
        title: "探索 Repurgenesis",
        description:
          "請選擇上方專區，了解公司動態、發展里程碑、公司治理、投資人資源及聯絡資訊。",
        cards: {
          overviewTitle: "公司概覽",
          overviewDescription:
            "了解我們的公司、技術策略與發展重點。",

          updatesTitle: "最新消息與活動",
          updatesDescription:
            "查看經核准的公告、簡報、活動與媒體資料。",

          resourcesTitle: "投資人資源",
          resourcesDescription:
            "查看經核准的公司文件、簡報與可下載資料。",
        },
      },
      common: {
        back: "返回投資人專區",
        contactTeam: "聯絡我們的團隊",
      },
      sections: {
        overview: {
          label: "投資人總覽",
          title: "打造新一代藥物再定位平台",
          description:
            "了解 Repurgenesis 的公司資訊、發展策略、合作夥伴及經核准的投資人資料。",

          cards: {
            companyProfileTitle: "公司概況",
            companyProfileDescription:
              "於此提供經公司核准的介紹、商業模式與長期願景。",

            technologyStrategyTitle: "技術策略",
            technologyStrategyDescription:
              "說明經核准的 AI 平台、資料能力及驗證流程。",

            growthPrioritiesTitle: "成長重點",
            growthPrioritiesDescription:
              "概述公司核准的發展優先事項與策略機會。",
          },
        },
        updates: {
          label: "公司動態",
          title: "最新消息、活動與簡報",
          description:
            "官方公司公告、投資人簡報、活動與媒體資料。",

          cards: {
            announcementsTitle: "公司公告",
            announcementsDescription:
              "發布經核准的公司公告及重要業務動態。",

            eventsTitle: "活動與簡報",
            eventsDescription:
              "提供即將舉辦或過往活動的簡報資料與相關資訊。",

            mediaTitle: "媒體報導",
            mediaDescription:
              "分享經核准的訪談、文章與外部媒體報導。",
          },
        },
        milestones: {
          label: "公司發展",
          title: "募資與里程碑",
          description:
            "經核准的融資資訊與公司發展里程碑總覽。",

          cards: {
            fundingHistoryTitle: "募資歷程",
            fundingHistoryDescription:
              "提供經核准的募資輪次資訊與投資人資料。",

            developmentMilestonesTitle: "發展里程碑",
            developmentMilestonesDescription:
              "呈現重要的科學、營運與商業成果。",

            upcomingPrioritiesTitle: "近期重點",
            upcomingPrioritiesDescription:
              "呈現經核准的近期目標，並避免揭露機密資訊。",
          },
        },
        governance: {
          label: "公司治理",
          title: "領導團隊與公司治理",
          description:
            "經核准的管理團隊資訊、公司政策與治理資料。",

          cards: {
            leadershipTitle: "管理團隊",
            leadershipDescription:
              "介紹經核准的高階主管與董事會資訊。",

            policiesTitle: "公司政策",
            policiesDescription:
              "提供隱私、法規遵循、倫理及治理文件。",

            riskTitle: "風險管理",
            riskDescription:
              "提供經核准的公司與營運風險管理概述。",
          },
        },

        resources: {
          label: "投資人資料",
          title: "資源與下載",
          description:
            "集中提供經核准的公司文件與投資人資料。",

          cards: {
            presentationTitle: "公司簡報",
            presentationDescription:
              "未來可透過 CMS 上傳經核准的投資人簡報。",

            factSheetTitle: "公司資訊摘要",
            factSheetDescription:
              "提供可下載的公司資訊摘要。",

            mediaAssetsTitle: "品牌與媒體素材",
            mediaAssetsDescription:
              "提供經核准的標誌、圖片與公司簡介。",
          },
        },
        contact: {
          label: "投資人關係",
          title: "與我們的團隊聯繫",
          description:
            "如需投資資訊、會議安排或文件申請，請聯絡 Repurgenesis。",
          cards: {
            enquiriesTitle: "一般詢問",
            enquiriesDescription:
              "將一般投資人詢問轉交給適當的公司聯絡窗口。",
            meetingsTitle: "會議申請",
            meetingsDescription:
              "申請與 Repurgenesis 團隊安排會議。",
            documentsTitle: "文件存取",
            documentsDescription:
              "申請存取經核准的非公開投資人資料。",
          },
        },
      },
    },
    // partner page
    partners: {
      page: {
        label: "Ecosystem",
        title: "Our Partners & Collaborations",
        description:
          "Repurgenesis thrives through collaboration. Our network spans BioData, AI technology for biology, CRO, wet lab, research institutions, medical centers, biopharma companies, and patient organizations across global innovation hubs.",
      },

      map: {
        all: "All",
        website: "Website",
        googleMaps: "Google Maps",
        logo: "logo",

        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
        resetZoom: "Reset map zoom",

        showPartner: "Show partner",
      },

      categories: {
        bioData: "BioData",
        aiTechForBio: "AI Tech for Bio",
        croWetLab: "CRO & Wet Lab",
        researchInstitute: "Research Institute",
        medicalCenter: "Medical Center",
        bioPharma: "Bio Pharma",
        patientGroup: "Patient Group",
      },

      locations: {
        trinetx: {
          name: "TriNetX",
          city: "Cambridge, MA",
          country: "United States",
          description:
            "Real world healthcare data and analytics network supporting clinical research and evidence generation.",
        },

        seedsupply: {
          name: "SEEDSUPPLY",
          city: "Tokyo",
          country: "Japan",
          description:
            "Japan based BioData partner. Replace this summary after confirming the official company profile.",
        },

        medinsights: {
          name: "MedInsights",
          city: "Paris",
          country: "France",
          description:
            "France based AI technology partner for biomedical insights. Replace this summary after confirming official details.",
        },

        energenesisBiomedical: {
          name: "Energenesis Biomedical 華安醫學",
          displayName: "Energenesis Biomedical",
          city: "Taipei",
          country: "Taiwan",
          address:
            "6F.-3, No. 21, Ln. 583, Ruiguang Rd., Neihu Dist., Taipei, Taiwan",
          description:
            "Taiwan based biomedical company with drug development and bio service capabilities.",
        },

        quodata: {
          name: "QuoData",
          city: "Dresden",
          country: "Germany",
          description:
            "Germany based research and data analytics organization. Replace this summary after confirming the exact collaboration scope.",
        },

        itri: {
          name: "Industrial Technology Research Institute",
          displayName: "ITRI",
          city: "Hsinchu",
          country: "Taiwan",
          description:
            "Taiwanese applied research and technology development institute.",
        },

        taichungVgh: {
          name: "Taichung Veterans General Hospital",
          displayName: "Taichung VGH",
          city: "Taichung",
          country: "Taiwan",
          address:
            "No. 1650, Sec. 4, Taiwan Blvd., Xitun Dist., Taichung, Taiwan",
          description:
            "Major medical center in Taichung supporting clinical and translational healthcare collaboration.",
        },

        orfenix: {
          name: "Orfenix",
          city: "Netherlands",
          country: "Netherlands",
          description:
            "Netherlands based Bio Pharma partner. Replace this summary after confirming official company details.",
        },

        twiBiotech: {
          name: "TWi Biotechnology",
          displayName: "TWi Biotech",
          city: "Taipei",
          country: "Taiwan",
          description:
            "Taiwan based Bio Pharma partner. Replace this summary after confirming official website and location.",
        },

        exonoxBioscience: {
          name: "ExoNox BioScience",
          city: "Taipei",
          country: "Taiwan",
          description:
            "Taiwan based Bio Pharma partner. Replace this summary after confirming official company details.",
        },

        debraUk: {
          name: "DEBRA UK",
          city: "London",
          country: "United Kingdom",
          description:
            "Patient organization and medical research charity supporting people affected by epidermolysis bullosa.",
        },
      },

      cta: {
        label: "Collaborate",
        title: "Become a partner",
        description:
          "Whether you are an academic research group, a pharmaceutical company with an unexplored target, a technology or data provider, or an investor looking for deep-tech biotech opportunities, we want to hear from you.",
        button: "Start a conversation",
      },
    },
    // footer
    footer: {
      brandName: "Repurgenesis",

      companyHeading: "Our Company",
      getInTouchHeading: "Get in Touch",

      careers: "人才招募",
      contactUs: "聯絡我們",

      privacyPolicy: "隱私權政策",
      termsOfUse: "使用條款",

      copyrightCompany:
        "源華智醫股份有限公司",
      allRightsReserved:
        "版權所有。",

      social: {
        linkedin:
          "Repurgenesis LinkedIn",
        x:
          "Repurgenesis X",
        youtube:
          "Repurgenesis YouTube",
      },
    },
  },
} as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
// ─── Navbar ─────────────────────────────────────────────────────────────────────
export const NAV_ITEMS: { key: string; page: Page }[] = [
  { key: "nav.about", page: "about" },
  { key: "nav.technology", page: "technology" },
  { key: "nav.solutions", page: "solutions" },
  { key: "nav.news", page: "news" },
  { key: "nav.investors", page: "investors" },
  { key: "nav.partners", page: "partners" },
];

// ─── Homepage ─────────────────────────────────────────────────────────────────────
export const HOME_PAGE_DATA = {
  heroImage:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=900&fit=crop&auto=format",
    // "src/app/data/background/moa_homepage.jpg", 
    // Image Source: https://sci-draw.com/mechanism-figure-generator
  heroImagePosition:
    "58% center",
  
  technologyImage:
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&h=500&fit=crop&auto=format",
} as const;

export const HOME_HERO_HIGHLIGHTS = [
  {
    id: "bio-ai",
    valueKey:
      "home.heroHighlights.bioAi.value",
    labelKey:
      "home.heroHighlights.bioAi.label",
  },
  {
    id: "orchestration",
    valueKey:
      "home.heroHighlights.orchestration.value",
    labelKey:
      "home.heroHighlights.orchestration.label",
  },
  {
    id: "evidence",
    valueKey:
      "home.heroHighlights.evidence.value",
    labelKey:
      "home.heroHighlights.evidence.label",
  },
  {
    id: "validation",
    valueKey:
      "home.heroHighlights.validation.value",
    labelKey:
      "home.heroHighlights.validation.label",
  },
] as const;

export const HOME_EVIDENCE_LAYERS = [
  {
    id: "expression",
    icon: "📊",
    titleKey:
      "home.evidence.layers.expression.title",
    descriptionKey:
      "home.evidence.layers.expression.description",
  },
  {
    id: "structure",
    icon: "🧬",
    titleKey:
      "home.evidence.layers.structure.title",
    descriptionKey:
      "home.evidence.layers.structure.description",
  },
  {
    id: "knowledge",
    icon: "🔗",
    titleKey:
      "home.evidence.layers.knowledge.title",
    descriptionKey:
      "home.evidence.layers.knowledge.description",
  },
] as const;

export const HOME_WORKFLOWS = [
  {
    id: "drug-to-disease",
    direction: "01",
    icon: "pill",
    labelKey:
      "home.workflows.drugToDisease.label",
  },

  {
    id: "disease-to-drug",
    direction: "02",
    icon: "dna",
    labelKey:
      "home.workflows.diseaseToDrug.label",
  },
] as const;

export const HOME_TRANSLATION_STEPS = [
  {
    id: "evidence",
    labelKey:
      "home.translation.steps.evidence",
  },
  {
    id: "review",
    labelKey:
      "home.translation.steps.review",
  },
  {
    id: "validation",
    labelKey:
      "home.translation.steps.validation",
  },
  {
    id: "partnering",
    labelKey:
      "home.translation.steps.partnering",
  },
] as const;

export type HomeLogoMarqueeItem = {
  id: string;
  name: string;
  logo: string;
};

export const HOME_LOGO_MARQUEE_ITEMS:
  ReadonlyArray<HomeLogoMarqueeItem> =
  Array.from(
    {
      length: 8,
    },
    (_, index) => ({
      id: `repurgenesis-logo-${index + 1}`,
      name: "Repurgenesis",
      logo: repurgenesisWhiteLogoTotal,
    }),
  );

// ─── Solutions ────────────────────────────────────────────────────────────────────
export const SOLUTIONS = [
  {
    id:
      "rare-diseases",
    label:
      "Rare Diseases",
    description:
      "Accelerating treatment timelines for orphan conditions where de novo drug development is prohibitively slow and expensive.",
    labelKey:
      "solutionCards.rareDiseases.label",
    descriptionKey:
      "solutionCards.rareDiseases.description",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop&auto=format",
  },
  {
    id:
      "oncology",
    label:
      "Oncology",
    description:
      "Re-engineering established compounds for combination oncology regimens with improved tolerability profiles.",
    labelKey:
      "solutionCards.oncology.label",
    descriptionKey:
      "solutionCards.oncology.description",
    image:
      "https://www.sciencedaily.com/images/1920/targeting-cancer-cells-ultrasound.webp",
  },
  {
    id:
      "neurodegeneration",
    label:
      "Neurodegeneration",
    description:
      "Targeting CNS pathways with repurposed molecules to slow progression in Alzheimer's, Parkinson's, and ALS.",
    labelKey:
      "solutionCards.neurodegeneration.label",
    descriptionKey:
      "solutionCards.neurodegeneration.description",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&auto=format",
  },
  {
    id:
      "metabolic-disorders",
    label:
      "Metabolic Disorders",
    description:
      "Leveraging existing metabolic modulators against emerging targets in NASH, type 2 diabetes, and obesity.",
    labelKey:
      "solutionCards.metabolicDisorders.label",
    descriptionKey:
      "solutionCards.metabolicDisorders.description",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&auto=format",
  },
] as const;

// ─── Solutions FAQ ───────────────────────────────────────────────────────────
export type SolutionFaqDefinition = {
  id: string;
  questionKey: string;
  answerKey: string;
};

export const SOLUTION_FAQS = [
  {
    id: "efficiency",
    questionKey:
      "solutionsPage.faq.items.efficiency.question",
    answerKey:
      "solutionsPage.faq.items.efficiency.answer",
  },

  {
    id: "disease-areas",
    questionKey:
      "solutionsPage.faq.items.diseaseAreas.question",
    answerKey:
      "solutionsPage.faq.items.diseaseAreas.answer",
  },

  {
    id: "validation",
    questionKey:
      "solutionsPage.faq.items.validation.question",
    answerKey:
      "solutionsPage.faq.items.validation.answer",
  },

  {
    id: "licensing",
    questionKey:
      "solutionsPage.faq.items.licensing.question",
    answerKey:
      "solutionsPage.faq.items.licensing.answer",
  },
] as const satisfies ReadonlyArray<SolutionFaqDefinition>;

// ─── Technology ────────────────────────────────────────────────────────────────────
export type TechnologyCardDefinition = {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  tagKey: string;
};

export const TECHNOLOGY_CARDS = [
  {
    id: "orchestration",
    icon: "🧬",
    titleKey:
      "technology.cards.orchestration.title",
    descriptionKey:
      "technology.cards.orchestration.description",
    tagKey:
      "technology.cards.orchestration.tag",
  },
  {
    id: "evidence",
    icon: "🔗",
    titleKey:
      "technology.cards.evidence.title",
    descriptionKey:
      "technology.cards.evidence.description",
    tagKey:
      "technology.cards.evidence.tag",
  },
  {
    id: "prioritization",
    icon: "🎯",
    titleKey:
      "technology.cards.prioritization.title",
    descriptionKey:
      "technology.cards.prioritization.description",
    tagKey:
      "technology.cards.prioritization.tag",
  },
  {
    id: "validation",
    icon: "🔬",
    titleKey:
      "technology.cards.validation.title",
    descriptionKey:
      "technology.cards.validation.description",
    tagKey:
      "technology.cards.validation.tag",
  },
] as const satisfies ReadonlyArray<TechnologyCardDefinition>;

export type TechnologyStepDefinition = {
  step: string;
  labelKey: string;
  descriptionKey: string;
};

export const steps = [
  {
    step: "01",
    labelKey:
      "technology.pipelineSteps.ingestion.label",
    descriptionKey:
      "technology.pipelineSteps.ingestion.description",
  },
  {
    step: "02",
    labelKey:
      "technology.pipelineSteps.scoring.label",
    descriptionKey:
      "technology.pipelineSteps.scoring.description",
  },
  {
    step: "03",
    labelKey:
      "technology.pipelineSteps.shortlist.label",
    descriptionKey:
      "technology.pipelineSteps.shortlist.description",
  },
  {
    step: "04",
    labelKey:
      "technology.pipelineSteps.validation.label",
    descriptionKey:
      "technology.pipelineSteps.validation.description",
  },
  {
    step: "05",
    labelKey:
      "technology.pipelineSteps.filing.label",
    descriptionKey:
      "technology.pipelineSteps.filing.description",
  },
] as const satisfies ReadonlyArray<TechnologyStepDefinition>;

// ─── News ────────────────────────────────────────────────────────────────────
export type NewsTagId =
  | "pressRelease"
  | "publication"
  | "partnership"
  | "event";

export type NewsFilterId =
  | "all"
  | NewsTagId;

export type NewsArticleDefinition = {
  id: string;
  dateKey: string;
  tagId: NewsTagId;
  tagKey: string;
  titleKey: string;
  excerptKey: string;
  image: string;
};

export type LocalizedNewsArticle = {
  id: string;
  date: string;
  tagId: NewsTagId;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  image: string;
};

export const NEWS_FILTERS = [
  {
    id: "all",
    labelKey: "news.filters.all",
  },
  {
    id: "pressRelease",
    labelKey: "news.filters.pressRelease",
  },
  {
    id: "publication",
    labelKey: "news.filters.publication",
  },
  {
    id: "partnership",
    labelKey: "news.filters.partnership",
  },
  {
    id: "event",
    labelKey: "news.filters.event",
  },
] as const satisfies ReadonlyArray<{
  id: NewsFilterId;
  labelKey: string;
}>;

export const TAG_COLOR: Record<
  NewsFilterId,
  string
> = {
  all: "#f09f74",
  pressRelease: "#f09f74",
  publication: "#5b8dd9",
  partnership: "#62b08a",
  event: "#a07fd4",
};

export const ALL_NEWS = [
  {
    id: "series-b-2025",
    dateKey: "news.articles.seriesB.date",
    tagId: "pressRelease",
    tagKey: "news.filters.pressRelease",
    titleKey: "news.articles.seriesB.title",
    excerptKey: "news.articles.seriesB.excerpt",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "fibrosis-study-2025",
    dateKey: "news.articles.fibrosisStudy.date",
    tagId: "publication",
    tagKey: "news.filters.publication",
    titleKey: "news.articles.fibrosisStudy.title",
    excerptKey: "news.articles.fibrosisStudy.excerpt",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "hospital-alliance-2025",
    dateKey: "news.articles.hospitalAlliance.date",
    tagId: "partnership",
    tagKey: "news.filters.partnership",
    titleKey: "news.articles.hospitalAlliance.title",
    excerptKey: "news.articles.hospitalAlliance.excerpt",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "jpmorgan-healthcare-2025",
    dateKey: "news.articles.jpmorgan2025.date",
    tagId: "event",
    tagKey: "news.filters.event",
    titleKey: "news.articles.jpmorgan2025.title",
    excerptKey: "news.articles.jpmorgan2025.excerpt",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "benchmark-results-2024",
    dateKey: "news.articles.benchmarkResults.date",
    tagId: "publication",
    tagKey: "news.filters.publication",
    titleKey: "news.articles.benchmarkResults.title",
    excerptKey: "news.articles.benchmarkResults.excerpt",
    image:
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/68a7f67cc21cd2001dfa8ed9.jpg",
  },

  {
    id: "bio-europe-2024",
    dateKey: "news.articles.bioEurope2024.date",
    tagId: "event",
    tagKey: "news.filters.event",
    titleKey: "news.articles.bioEurope2024.title",
    excerptKey: "news.articles.bioEurope2024.excerpt",
    image:
      "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "ema-orphan-designation-2024",
    dateKey: "news.articles.orphanDesignation.date",
    tagId: "pressRelease",
    tagKey: "news.filters.pressRelease",
    titleKey: "news.articles.orphanDesignation.title",
    excerptKey: "news.articles.orphanDesignation.excerpt",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "karolinska-agreement-2024",
    dateKey: "news.articles.karolinskaAgreement.date",
    tagId: "partnership",
    tagKey: "news.filters.partnership",
    titleKey: "news.articles.karolinskaAgreement.title",
    excerptKey: "news.articles.karolinskaAgreement.excerpt",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=300&fit=crop&auto=format",
  },

  {
    id: "rg101-publication-2024",
    dateKey: "news.articles.rg101Publication.date",
    tagId: "publication",
    tagKey: "news.filters.publication",
    titleKey: "news.articles.rg101Publication.title",
    excerptKey: "news.articles.rg101Publication.excerpt",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop&auto=format",
  },
] as const satisfies ReadonlyArray<NewsArticleDefinition>;

export function localizeNewsArticle(
  article: NewsArticleDefinition,
  t: Translator,
): LocalizedNewsArticle {
  return {
    id: article.id,
    date: t(article.dateKey),
    tagId: article.tagId,
    tag: t(article.tagKey),
    tagColor: TAG_COLOR[article.tagId],
    title: t(article.titleKey),
    excerpt: t(article.excerptKey),
    image: article.image,
  };
}

// ─── Investor ─────────────────────────────────────────────────────────────────────
type InvestorCardDefinition = {
  id: string;
  titleKey: string;
  descriptionKey: string;
};

type InvestorSectionDefinition = {
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
  cards: InvestorCardDefinition[];
};

type InvestorLandingCardDefinition = {
  id: string;
  section: InvestorSection;
  titleKey: string;
  descriptionKey: string;
};

type InvestorTabDefinition = {
  id: InvestorSection;
  labelKey: string;
};

export const INVESTOR_TABS = [
  {
    id: "overview",
    labelKey: "investors.tabs.overview",
  },
  {
    id: "updates",
    labelKey: "investors.tabs.updates",
  },
  {
    id: "milestones",
    labelKey: "investors.tabs.milestones",
  },
  {
    id: "governance",
    labelKey: "investors.tabs.governance",
  },
  {
    id: "resources",
    labelKey: "investors.tabs.resources",
  },
  {
    id: "contact",
    labelKey: "investors.tabs.contact",
  },
] satisfies InvestorTabDefinition[];

export const INVESTOR_LANDING_CARDS = [
  {
    id: "overview",
    section: "overview",
    titleKey: "investors.landing.cards.overviewTitle",
    descriptionKey:
      "investors.landing.cards.overviewDescription",
  },
  {
    id: "updates",
    section: "updates",
    titleKey: "investors.landing.cards.updatesTitle",
    descriptionKey:
      "investors.landing.cards.updatesDescription",
  },
  {
    id: "resources",
    section: "resources",
    titleKey: "investors.landing.cards.resourcesTitle",
    descriptionKey:
      "investors.landing.cards.resourcesDescription",
  },
] satisfies InvestorLandingCardDefinition[];

export const INVESTOR_CONTENT: Record<
  InvestorSection,
  InvestorSectionDefinition
> = {
  overview: {
    labelKey: "investors.sections.overview.label",
    titleKey: "investors.sections.overview.title",
    descriptionKey:
      "investors.sections.overview.description",

    cards: [
      {
        id: "company-profile",
        titleKey:
          "investors.sections.overview.cards.companyProfileTitle",
        descriptionKey:
          "investors.sections.overview.cards.companyProfileDescription",
      },
      {
        id: "technology-strategy",
        titleKey:
          "investors.sections.overview.cards.technologyStrategyTitle",
        descriptionKey:
          "investors.sections.overview.cards.technologyStrategyDescription",
      },
      {
        id: "growth-priorities",
        titleKey:
          "investors.sections.overview.cards.growthPrioritiesTitle",
        descriptionKey:
          "investors.sections.overview.cards.growthPrioritiesDescription",
      },
    ],
  },

  updates: {
    labelKey: "investors.sections.updates.label",
    titleKey: "investors.sections.updates.title",
    descriptionKey:
      "investors.sections.updates.description",

    cards: [
      {
        id: "corporate-announcements",
        titleKey:
          "investors.sections.updates.cards.announcementsTitle",
        descriptionKey:
          "investors.sections.updates.cards.announcementsDescription",
      },
      {
        id: "events-presentations",
        titleKey:
          "investors.sections.updates.cards.eventsTitle",
        descriptionKey:
          "investors.sections.updates.cards.eventsDescription",
      },
      {
        id: "media-coverage",
        titleKey:
          "investors.sections.updates.cards.mediaTitle",
        descriptionKey:
          "investors.sections.updates.cards.mediaDescription",
      },
    ],
  },

  milestones: {
    labelKey:
      "investors.sections.milestones.label",
    titleKey:
      "investors.sections.milestones.title",
    descriptionKey:
      "investors.sections.milestones.description",

    cards: [
      {
        id: "funding-history",
        titleKey:
          "investors.sections.milestones.cards.fundingHistoryTitle",
        descriptionKey:
          "investors.sections.milestones.cards.fundingHistoryDescription",
      },
      {
        id: "development-milestones",
        titleKey:
          "investors.sections.milestones.cards.developmentMilestonesTitle",
        descriptionKey:
          "investors.sections.milestones.cards.developmentMilestonesDescription",
      },
      {
        id: "upcoming-priorities",
        titleKey:
          "investors.sections.milestones.cards.upcomingPrioritiesTitle",
        descriptionKey:
          "investors.sections.milestones.cards.upcomingPrioritiesDescription",
      },
    ],
  },

  governance: {
    labelKey:
      "investors.sections.governance.label",
    titleKey:
      "investors.sections.governance.title",
    descriptionKey:
      "investors.sections.governance.description",

    cards: [
      {
        id: "leadership",
        titleKey:
          "investors.sections.governance.cards.leadershipTitle",
        descriptionKey:
          "investors.sections.governance.cards.leadershipDescription",
      },
      {
        id: "corporate-policies",
        titleKey:
          "investors.sections.governance.cards.policiesTitle",
        descriptionKey:
          "investors.sections.governance.cards.policiesDescription",
      },
      {
        id: "risk-management",
        titleKey:
          "investors.sections.governance.cards.riskTitle",
        descriptionKey:
          "investors.sections.governance.cards.riskDescription",
      },
    ],
  },

  resources: {
    labelKey:
      "investors.sections.resources.label",
    titleKey:
      "investors.sections.resources.title",
    descriptionKey:
      "investors.sections.resources.description",

    cards: [
      {
        id: "company-presentation",
        titleKey:
          "investors.sections.resources.cards.presentationTitle",
        descriptionKey:
          "investors.sections.resources.cards.presentationDescription",
      },
      {
        id: "company-fact-sheet",
        titleKey:
          "investors.sections.resources.cards.factSheetTitle",
        descriptionKey:
          "investors.sections.resources.cards.factSheetDescription",
      },
      {
        id: "brand-media-assets",
        titleKey:
          "investors.sections.resources.cards.mediaAssetsTitle",
        descriptionKey:
          "investors.sections.resources.cards.mediaAssetsDescription",
      },
    ],
  },

  contact: {
    labelKey:
      "investors.sections.contact.label",
    titleKey:
      "investors.sections.contact.title",
    descriptionKey:
      "investors.sections.contact.description",

    cards: [
      {
        id: "general-enquiries",
        titleKey:
          "investors.sections.contact.cards.enquiriesTitle",
        descriptionKey:
          "investors.sections.contact.cards.enquiriesDescription",
      },
      {
        id: "meeting-requests",
        titleKey:
          "investors.sections.contact.cards.meetingsTitle",
        descriptionKey:
          "investors.sections.contact.cards.meetingsDescription",
      },
      {
        id: "document-access",
        titleKey:
          "investors.sections.contact.cards.documentsTitle",
        descriptionKey:
          "investors.sections.contact.cards.documentsDescription",
      },
    ],
  },
};

// ─── About  ─────────────────────────────────────────────────────────────────────
export const ABOUT_TIMELINE = [
  {
    year: "2013",
    eventKey: "about.journey.timeline.year2013",
  },
  {
    year: "2016",
    eventKey: "about.journey.timeline.year2016",
  },
  {
    year: "2018",
    eventKey: "about.journey.timeline.year2018",
  },
  {
    year: "2021",
    eventKey: "about.journey.timeline.year2021",
  },
  {
    year: "2023",
    eventKey: "about.journey.timeline.year2023",
  },
  {
    year: "2025",
    eventKey: "about.journey.timeline.year2025",
  },
];

export const ABOUT_PAGE_DATA = {
  introImage:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&h=500&fit=crop&auto=format",
  introImageAltKey:
    "about.intro.imageAlt",
};


export type LeadershipMemberDefinition = {
  id: string;
  image: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  email?: string;
  linkedinUrl?: string;
};

const HSU_PROFILE = {
  image: memberOneImage,

  nameKey:
    "about.leadership.members.memberOne.name",

  roleKey:
    "about.leadership.members.memberOne.role",

  bioKey:
    "about.leadership.members.memberOne.bio",

  email:
    "yh.hsu@repurgenesis.com",

  linkedinUrl:
    "https://www.linkedin.com/in/yinhsong-hsu-740b0999/",
} as const;

export const LEADERSHIP_MEMBERS = [
  {
    id: "hsu-1",
    ...HSU_PROFILE,
  },
  {
    id: "hsu-2",
    ...HSU_PROFILE,
  },
  {
    id: "hsu-3",
    ...HSU_PROFILE,
  },
  {
    id: "hsu-4",
    ...HSU_PROFILE,
  },
  {
    id: "hsu-5",
    ...HSU_PROFILE,
  },
  {
    id: "hsu-6",
    ...HSU_PROFILE,
  },
] as const satisfies ReadonlyArray<LeadershipMemberDefinition>;



// export type Person = typeof ABOUT_PEOPLE[number];




// ─── Contact ─────────────────────────────────────────────────────────────
export const CONTACT_BRAND = {
  logoUrl: repurgenesisLogo,
} as const;

/*
  Only use these as <iframe src={...} />
*/
const CONTACT_MAP_EMBED_EN =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.627421245661!2d121.5677716!3d25.0806142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6e503cc987%3A0x225af594f3b18b23!2sNo.%2021%2C%20Lane%20583%2C%20Ruiguang%20Rd%2C%20Xihu%20Village%2C%20Neihu%20District%2C%20Taipei%20City%2C%20114!5e0!3m2!1sen!2stw!4v1783957527396!5m2!1sen!2stw";

const CONTACT_MAP_EMBED_ZH =
  CONTACT_MAP_EMBED_EN.replace(
    /!1sen!2stw/g,
    "!1szh-TW!2stw",
  );

/*
  Use this for:
  Office
  View on Google Maps
  Company logo
*/
const CONTACT_MAP_OPEN_EN =
  "https://www.google.com/maps/place/No.+21,+Lane+583,+Ruiguang+Rd,+Xihu+Village,+Neihu+District,+Taipei+City,+114/@25.0806142,121.5677716,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ac6e503cc987:0x225af594f3b18b23!8m2!3d25.0806142!4d121.5677716!16s%2Fg%2F11q2nhnpn9?hl=en&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";
const CONTACT_MAP_OPEN_ZH = "https://maps.app.goo.gl/B5ZjHtdSEpy3mb668";
  
export const CONTACT_MAPS: Record<
  Language,
  {
    embedUrl: string;
    openUrl: string;
  }
> = {
  en: {
    embedUrl: CONTACT_MAP_EMBED_EN,
    openUrl: CONTACT_MAP_OPEN_EN,
  },

  zh: {
    embedUrl: CONTACT_MAP_EMBED_ZH,
    openUrl: CONTACT_MAP_OPEN_ZH,
  },
};

export type ContactEnquiryType =
  | "general"
  | "partnerships"
  | "investors"
  | "careers"
  | "others";

export const CONTACT_ENQUIRY_TYPES = [
  {
    id: "general",
    labelKey: "contact.form.enquiryTypes.general",
  },
  {
    id: "partnerships",
    labelKey: "contact.form.enquiryTypes.partnerships",
  },
  {
    id: "investors",
    labelKey: "contact.form.enquiryTypes.investors",
  },
  {
    id: "careers",
    labelKey: "contact.form.enquiryTypes.careers",
  },
  {
    id: "others",
    labelKey: "contact.form.enquiryTypes.others",
  },
] satisfies Array<{
  id: ContactEnquiryType;
  labelKey: string;
}>;

// ─── Partner ─────────────────────────────────────────────────────────────────────
export const PARTNER_CATEGORIES = [
  {
    id: "bioData",
    labelKey: "partners.categories.bioData",
    color: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    id: "aiTechForBio",
    labelKey: "partners.categories.aiTechForBio",
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    id: "croWetLab",
    labelKey: "partners.categories.croWetLab",
    color: "#059669",
    bg: "#D1FAE5",
  },
  {
    id: "researchInstitute",
    labelKey: "partners.categories.researchInstitute",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    id: "medicalCenter",
    labelKey: "partners.categories.medicalCenter",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    id: "bioPharma",
    labelKey: "partners.categories.bioPharma",
    color: "#0891B2",
    bg: "#CFFAFE",
  },
  {
    id: "patientGroup",
    labelKey: "partners.categories.patientGroup",
    color: "#DB2777",
    bg: "#FCE7F3",
  },
] as const;

export type PartnerCategory =
  (typeof PARTNER_CATEGORIES)[number]["id"];

export type PartnerFilter =
  | "all"
  | PartnerCategory;

export type PartnerCategoryDefinition =
  (typeof PARTNER_CATEGORIES)[number];

export const PARTNER_CATEGORY_IDS =
  PARTNER_CATEGORIES.map(
    (category) => category.id,
  ) as PartnerCategory[];

export type PartnerFilterDefinition = {
  id: PartnerFilter;
  labelKey: string;
  color: string;
};

export const PARTNER_FILTERS: PartnerFilterDefinition[] = [
  {
    id: "all",
    labelKey: "partners.map.all",
    color: "#CBD5E1",
  },

  ...PARTNER_CATEGORIES.map((category) => ({
    id: category.id,
    labelKey: category.labelKey,
    color: category.color,
  })),
];

export function getPartnerCategory(
  categoryId: PartnerCategory,
): PartnerCategoryDefinition {
  const category =
    PARTNER_CATEGORIES.find(
      (item) => item.id === categoryId,
    );

  if (!category) {
    throw new Error(
      `Unknown partner category: ${categoryId}`,
    );
  }

  return category;
}

export const PARTNER_MAP_CONFIG = {
  geoUrl:
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",

  width: 980,
  height: 380,
  projectionScale: 150,

  initialCoordinates: [
    20,
    18,
  ] as [number, number],

  initialZoom: 1.08,
  minZoom: 1,
  maxZoom: 4,
  zoomStep: 0.35,
} as const;

export type PartnerLocationDefinition = {
  id: string;

  nameKey: string;
  displayNameKey?: string;

  category: PartnerCategory;

  cityKey: string;
  countryKey: string;
  countryCode: string;

  addressKey?: string;
  descriptionKey?: string;

  coordinates: [
    number,
    number,
  ];

  mapsUrl?: string;
  websiteUrl?: string;

  logoText: string;
  logoUrl?: string;
};

export type LocalizedPartnerLocation = {
  id: string;

  name: string;
  displayName: string;

  category: PartnerCategory;

  city: string;
  country: string;
  countryCode: string;

  address?: string;
  description?: string;

  coordinates: [
    number,
    number,
  ];

  mapsUrl?: string;
  websiteUrl?: string;

  logoText: string;
  logoUrl?: string;
};

export const PARTNER_LOCATIONS = [
  {
    id: "trinetx",

    nameKey:
      "partners.locations.trinetx.name",

    category: "bioData",

    cityKey:
      "partners.locations.trinetx.city",

    countryKey:
      "partners.locations.trinetx.country",

    countryCode: "US",

    coordinates: [
      -71.1097,
      42.3736,
    ],

    websiteUrl:
      "https://trinetx.com",

    descriptionKey:
      "partners.locations.trinetx.description",

    logoText: "TX",
  },

  {
    id: "seedsupply",

    nameKey:
      "partners.locations.seedsupply.name",

    category: "bioData",

    cityKey:
      "partners.locations.seedsupply.city",

    countryKey:
      "partners.locations.seedsupply.country",

    countryCode: "JP",

    coordinates: [
      139.6917,
      35.6895,
    ],

    descriptionKey:
      "partners.locations.seedsupply.description",

    logoText: "SS",
  },

  {
    id: "medinsights",

    nameKey:
      "partners.locations.medinsights.name",

    category: "aiTechForBio",

    cityKey:
      "partners.locations.medinsights.city",

    countryKey:
      "partners.locations.medinsights.country",

    countryCode: "FR",

    coordinates: [
      2.3522,
      48.8566,
    ],

    descriptionKey:
      "partners.locations.medinsights.description",

    logoText: "MI",
  },

  {
    id: "energenesis-biomedical",

    nameKey:
      "partners.locations.energenesisBiomedical.name",

    displayNameKey:
      "partners.locations.energenesisBiomedical.displayName",

    category: "croWetLab",

    cityKey:
      "partners.locations.energenesisBiomedical.city",

    countryKey:
      "partners.locations.energenesisBiomedical.country",

    countryCode: "TW",

    addressKey:
      "partners.locations.energenesisBiomedical.address",

    descriptionKey:
      "partners.locations.energenesisBiomedical.description",

    coordinates: [
      121.5677563,
      25.0806552,
    ],

    mapsUrl:
      "https://maps.app.goo.gl/Lw3CgFDiCmutFdnq9",

    websiteUrl:
      "https://www.energenesis-biomedical.com/en",

    logoText: "EB",
    logoUrl: energenesisBiomedicalLogo,
  },

  {
    id: "quodata",

    nameKey:
      "partners.locations.quodata.name",

    category: "researchInstitute",

    cityKey:
      "partners.locations.quodata.city",

    countryKey:
      "partners.locations.quodata.country",

    countryCode: "DE",

    coordinates: [
      13.7373,
      51.0504,
    ],

    websiteUrl:
      "https://www.quodata.de",

    descriptionKey:
      "partners.locations.quodata.description",

    logoText: "QD",
  },

  {
    id: "itri",

    nameKey:
      "partners.locations.itri.name",

    displayNameKey:
      "partners.locations.itri.displayName",

    category: "researchInstitute",

    cityKey:
      "partners.locations.itri.city",

    countryKey:
      "partners.locations.itri.country",

    countryCode: "TW",

    coordinates: [
      120.9719,
      24.8016,
    ],

    websiteUrl:
      "https://www.itri.org.tw/english/",

    descriptionKey:
      "partners.locations.itri.description",

    logoText: "ITRI",
  },

  {
    id: "taichung-vgh",

    nameKey:
      "partners.locations.taichungVgh.name",

    displayNameKey:
      "partners.locations.taichungVgh.displayName",

    category: "medicalCenter",

    cityKey:
      "partners.locations.taichungVgh.city",

    countryKey:
      "partners.locations.taichungVgh.country",

    countryCode: "TW",

    addressKey:
      "partners.locations.taichungVgh.address",

    descriptionKey:
      "partners.locations.taichungVgh.description",

    coordinates: [
      120.6039,
      24.1837,
    ],

    websiteUrl:
      "https://www.vghtc.gov.tw",

    logoText: "VGH",
  },

  {
    id: "orfenix",

    nameKey:
      "partners.locations.orfenix.name",

    category: "bioPharma",

    cityKey:
      "partners.locations.orfenix.city",

    countryKey:
      "partners.locations.orfenix.country",

    countryCode: "NL",

    coordinates: [
      5.2913,
      52.1326,
    ],

    descriptionKey:
      "partners.locations.orfenix.description",

    logoText: "OF",
  },

  {
    id: "twi-biotech",

    nameKey:
      "partners.locations.twiBiotech.name",

    displayNameKey:
      "partners.locations.twiBiotech.displayName",

    category: "bioPharma",

    cityKey:
      "partners.locations.twiBiotech.city",

    countryKey:
      "partners.locations.twiBiotech.country",

    countryCode: "TW",

    coordinates: [
      121.5654,
      25.033,
    ],

    descriptionKey:
      "partners.locations.twiBiotech.description",

    logoText: "TWi",
  },

  {
    id: "exonox-bioscience",

    nameKey:
      "partners.locations.exonoxBioscience.name",

    category: "bioPharma",

    cityKey:
      "partners.locations.exonoxBioscience.city",

    countryKey:
      "partners.locations.exonoxBioscience.country",

    countryCode: "TW",

    coordinates: [
      121.5654,
      25.033,
    ],

    descriptionKey:
      "partners.locations.exonoxBioscience.description",

    logoText: "EX",
  },

  {
    id: "debra-uk",

    nameKey:
      "partners.locations.debraUk.name",

    category: "patientGroup",

    cityKey:
      "partners.locations.debraUk.city",

    countryKey:
      "partners.locations.debraUk.country",

    countryCode: "UK",

    coordinates: [
      -0.1276,
      51.5072,
    ],

    websiteUrl:
      "https://www.debra.org.uk",

    descriptionKey:
      "partners.locations.debraUk.description",

    logoText: "DEBRA",
  },
] satisfies PartnerLocationDefinition[];

export function localizePartnerLocation(
  partner: PartnerLocationDefinition,
  t: Translator,
): LocalizedPartnerLocation {
  return {
    id: partner.id,

    name:
      t(partner.nameKey),

    displayName:
      t(
        partner.displayNameKey ??
          partner.nameKey,
      ),

    category:
      partner.category,

    city:
      t(partner.cityKey),

    country:
      t(partner.countryKey),

    countryCode:
      partner.countryCode,

    address:
      partner.addressKey
        ? t(partner.addressKey)
        : undefined,

    description:
      partner.descriptionKey
        ? t(partner.descriptionKey)
        : undefined,

    coordinates:
      partner.coordinates,

    mapsUrl:
      partner.mapsUrl,

    websiteUrl:
      partner.websiteUrl,

    logoText:
      partner.logoText,

    logoUrl:
      partner.logoUrl,
  };
}

// ─── Footers ─────────────────────────────────────────────────────────────
export const CONTACT_DETAILS = {
  email: "rp@repurgenesis.com",
  emailHref: "mailto:rp@repurgenesis.com",

  phone: "(+886) 2-8751-1368",
  phoneHref: "tel:+886287511368",

  fax: "(+886) 2-8751-1369",
  faxHref: "tel:+886287511369",

  // Address: Use CONTACT_MAP_OPEN_EN and CONTACT_MAP_OPEN_ZH here
} as const;

export const FOOTER_LINKS = {
  careersUrl:
    "https://www.104.com.tw/company/1a2x6bimnc",

  privacyUrl: "#",
  termsUrl: "#",

  social: [
    {
      id: "linkedin",
      labelKey: "footer.social.linkedin",
      url:
        "https://linkedin.com/company/repurgenesis/",
    },
    {
      id: "x",
      labelKey: "footer.social.x",
      url: "https://x.com",
    },
    {
      id: "youtube",
      labelKey: "footer.social.youtube",
      url: "https://youtube.com",
    },
  ],
} as const;

function resolveTranslation(
  language: Language,
  key: string,
): string {
  const result = key
    .split(".")
    .reduce<unknown>((current, segment) => {
      if (
        current &&
        typeof current === "object" &&
        segment in current
      ) {
        return (
          current as Record<string, unknown>
        )[segment];
      }

      return undefined;
    }, TEXT[language]);

  if (typeof result !== "string") {
    console.warn(
      `[translation] Missing key "${key}" for language "${language}"`,
    );

    return key;
  }

  return result;
}