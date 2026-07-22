import type {
  InvestorSection,
  Page,
  Language,
  Translator,
} from "@app/types";

import energenesisBiomedicalLogo from "./company_logo/processed/bg_remove/partner/energenesis_biomedical_bg.jpg";
import repurgenesisLogo from "./company_logo/processed/bg_remove/repurgenesis_bg.jpg";
import repurgenesisWhiteLogoTotal from "./company_logo/processed/bg_remove/repurgenesis_white.png";
import repurgenesisWhiteLogo from "./company_logo/processed/bg_remove/repurgenesis_white1.png";
import repurgenesisWhiteText from "./company_logo/processed/bg_remove/repurgenesis_white2.png";
import repurgenesisCoralLogo from "./company_logo/processed/bg_remove/repurgenesis_coral1.png";
import repurgenesisCoralText from "./company_logo/processed/bg_remove/repurgenesis_coral2.png";
import repurgenesisColorLogo from "./company_logo/processed/bg_remove/repurgenesis_bg1.png";
import repurgenesisColorText from "./company_logo/processed/bg_remove/repurgenesis_bg2.png";
import memberOneImage from "./people/chen.jpg?url";
import memberTwoImage from "./people/hsu.jpg?url";
import intlConferencesImage from "./news/intlConferences.jpg";
import gtcTaipei2026Image from "./news/gtcTaipei2026.jpg";
import bioAsiaTaiwan2026Image from "./news/bioAsia2026.jpg";
import AICompanionImage from "./news/AICompanion.jpg";

import gtc2026PosterPdf from "./news/posters/GTC POSTER_REPURGENESIS_final.pdf?url";
import bioIt2026PosterPdf from "./news/posters/BioIT_poster_v6.pdf?url";
import idr26PosterPdf from "./news/posters/idr26_poster A0.pdf?url";

// ─── Feature Flags ────────────────────────────────────────────────────────────
export const FEATURE_FLAGS = {
  investors:
    false,
} as const;

// ─── Company Assets (Logo + Text) ────────────────────────────────────────────────────────────
export const BRAND_ASSETS = {
  navbar: {
    light: {
      logo:
        repurgenesisWhiteLogo,
      text:
        repurgenesisWhiteText,
    },

    color: {
      logo:
        repurgenesisColorLogo,
      text:
        repurgenesisColorText,
    },
  },

  footer: {
    white: {
      logo:
        repurgenesisWhiteLogo,
      text:
        repurgenesisWhiteText,
    },

    orange: {
      logo:
        repurgenesisColorLogo,
      text:
        repurgenesisColorText,
    },

    coral: {
      logo:
        repurgenesisCoralLogo,
      text:
        repurgenesisCoralText,
    },
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

        titleStart:
          "Start with a Drug",

        titleAccent:
          "or",

        titleEnd:
          "Disease",

        drugToDisease: {
          title:
            "Drug to Disease",

          description:
            "Find new indications for known compounds.",
        },

        diseaseToDrug: {
          title:
            "Disease to Drug",

          description:
            "Match disease biology with viable candidates.",
        },

        button:
          "Explore the Workflow",
      },

      evidence: {
        titleStart:
          "Three Evidence Layers &",

        titleAccent:
          "One Decision.",

        layers: {
          expression: {
            title:
              "Gene Expression",

            description:
              "Compare transcriptomic signatures across tissues and disease states.",
          },

          structure: {
            title:
              "Structure Modeling",

            description:
              "Evaluate 3D binding geometry and predicted target affinity.",
          },

          knowledge: {
            title:
              "Knowledge Graphs",

            description:
              "Connect biomedical relationships across scientific literature.",
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
        
        cta: "See our approach",

        stats: {
          programs: {
            value: "20+",
            label: "Programs screened",
          },
          assets: {
            value: "6",
            label: "Assets in validation",
          },
          signals: {
            eyebrow: "AI-Orchestrated",
            value: "2000",
            label:
              "Small-molecule drugs in screening scope"
          },
        },
      },
      journey: {
        label:
          "Our Journey",

        title:
          "Repurgenesis Development Journey",

        description:
          "From early academic collaboration to an independent Bio + AI company presenting its research on the international stage.",

        phases: {
          preparation:
            "Preparation",

          operations:
            "Official Operations",
        },

        dragHint:
          "Drag to explore",

        timeline: {
          teamEstablished: {
            event:
              "Established the AI research team.",
          },

          ntuCollaboration: {
            event:
              "Energenesis Biomedical began an industry–academia collaboration with National Taiwan University.",
          },

          nycuCollaboration: {
            event:
              "The Energenesis team began an industry–academia collaboration with National Yang Ming Chiao Tung University.",
          },

          companyEstablished: {
            event:
              "Repurgenesis was officially established.",
          },

          nvidiaInception: {
            event:
              "Repurgenesis joined the NVIDIA Inception program.",
          },

          vitiligoPatent: {
            event:
              "Filed a patent application covering a potential therapeutic indication for vitiligo.",
          },

          gtcTopEight: {
            event:
              "The Intelligent Orchestrator research was selected among the top eight poster finalists at NVIDIA GTC 2026.",
          },

          idr26Presentation: {
            event:
              "Selected to present research at the International Drug Repurposing Conference (iDR26).",
          },

          bioItPresentation: {
            event:
              "Selected to present research at Bio-IT World 2026.",
          },
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
              "Dr. Han-Min Chen",

            role:
              "CEO",

            bio:
              "Dr. Han-Min Chen is the CEO of Repurgenesis and Chairman of Energenesis Biomedical (6657). With more than two decades of experience in biomedical research and drug development, he brings deep expertise in biochemistry, enzyme chemistry, monoclonal antibody production, and systems-biology-based drug discovery. At Repurgenesis, he guides the company's long-term strategy, bringing together established drug-development experience and AI-driven drug repurposing to advance promising therapeutic opportunities toward experimental validation, intellectual property development, and global collaboration.",
          },
          memberTwo: {
            name:
              "Dr. Yin-Hsong Hsu",

            role:
              "President",

            bio:
              "Dr. Yin-Hsong Hsu is the President of Repurgenesis. He leads the development of the company's Bio + AI platform for drug repurposing that combines basic biomedical practice together with computer-based methods, trials, experimental validation and strategic collaboration.",
          },
        },
      },
    },
    // technology page
    technology: {
      hero: {
        label: "Technology",
        title: "An AI-powered, multi-modal discovery engine",
        description:
          "A unified AI framework for drug repurposing—coordinating specialized agents, multimodal biomedical data, and domain experts to uncover new uses for existing medicines.",
        imageAlt:
          "Unified AI framework integrating gene, structure, and knowledge-graph evidence",
      },

      flow: {
        label: "Our Platform Flow",
        title: "Two directions, one framework",
        description:
          "Repurgenesis runs discovery both ways—starting from a known drug or from disease biology—bringing structure, gene expression, knowledge graphs, and literature into one orchestrated flow.",

        drugToDisease: {
          source: "Drug",
          target: "Disease",
          mode: "Structure-based",
          imageAlt:
            "Drug-to-disease workflow moving from a known compound through structure-based screening and expert review toward a new indication",
        },

        diseaseToDrug: {
          source: "Disease",
          target: "Drug",
          mode: "Knowledge-driven",
          imageAlt:
            "Disease-to-drug workflow moving from disease signals and knowledge graphs through candidate agents toward a potential drug",
        },
      },

      bidirectional: {
        label: "Bidirectional Discovery",
        title:
          "One disease, one target, one drug. That model is too simple.",
        description:
          "Repurgenesis runs discovery in both directions—drug to disease and disease to drug—in parallel and at scale, so evidence guides every candidate rather than a single up-front guess.",
      },

      approaches: {
        drugTarget: {
          label: "Drug → Disease",
          title: "Drug-Target Driven",
          description:
            "Structure-based screening and AI-powered binding prediction for small molecules and proteins—moving from a known drug toward promising new disease indications.",
          imageAlt:
            "Data collection and AI-assisted binding prediction with wet-lab validation",

          tags: {
            docking:
              "Docking & rescoring",
            binding:
              "Binding prediction",
            wetLab:
              "Wet-lab validation",
          },
        },

        diseaseGene: {
          label: "Disease → Drug",
          title: "Disease-Gene Driven",
          description:
            "AI agents operate on biomedical knowledge graphs and retrieval-augmented generation, supported by gene-expression analysis—moving from disease biology toward viable candidates.",
          imageAlt:
            "Biomedical knowledge graph, AI agent, and gene-expression tools",

          tags: {
            knowledgeGraphs:
              "Knowledge graphs",
            ragAgents:
              "RAG agents",
            geneExpression:
              "Gene expression",
          },
        },
      },

      challenges: {
        label: "The Problem",
        title: "Challenges we're solving",

        items: {
          integration: {
            title:
              "Integration Complexity",
            body:
              "Unify heterogeneous data types—including proteins, genes, small molecules, and literature—across text, graphs, sequences, and three-dimensional structures.",
          },

          scale: {
            title:
              "Scalability",
            body:
              "Orchestrate multiple AI models across large and complex biomedical datasets.",
          },

          workflow: {
            title:
              "Workflow Orchestration",
            body:
              "Connect dry-lab predictions with wet-lab validation to support translational relevance and real-world impact.",
          },

          interoperability: {
            title:
              "Interoperability",
            body:
              "Streamline drug-repurposing workflows so therapeutic innovation can become faster, more affordable, and more scalable.",
          },
        },
      },

      accelerated: {
        label:
          "Accelerated Computing",
        title:
          "An intelligent, orchestrated platform",
        description:
          "An AI-orchestrated platform for drug repurposing that integrates multimodal data, data sources, and analytical methods, powered by NVIDIA BioNeMo and NVIDIA cuGraph to support scalable coordination across diverse AI models.",
        imageAlt:
          "NVIDIA BioNeMo powering the Intelligent Orchestrator pipeline",

        tags: {
          bioNeMo:
            "NVIDIA BioNeMo",
          cuGraph:
            "NVIDIA cuGraph",
          inception:
            "Member of NVIDIA Inception",
        },
      },

      portfolio: {
        label:
          "Portfolio",
        title:
          "Translational pipeline",
        description:
          "Drug-repurposing programs advancing across disease areas, with each program progressing in stages as evidence, validation, and intellectual property mature.",

        columns: {
          diseaseArea:
            "Disease Area",
          indication:
            "Indication",
        },

        stages: {
          drugId:
            "Drug ID",
          pocValidation:
            "PoC Validation",
          ipFiling:
            "IP Filing",
          preClinical:
            "Pre-Clinical",
        },

        rows: {
          autoimmune: {
            area:
              "Autoimmune",
            indication:
              "Vitiligo",
          },

          fibrosis: {
            area:
              "Fibrosis",
            indication:
              "Idiopathic Pulmonary Fibrosis",
          },

          neurology: {
            area:
              "Neurology",
            indication:
              "Spinocerebellar Ataxia",
          },
        },

        legend: {
          reached:
            "Stage reached",
          upcoming:
            "Upcoming",
        },
      },

      cards: {
        orchestration: {
          title: "Multi-Agent Orchestration",
          description:
            "AI agents coordinate retrieval, analysis, and evaluation.",
        },
        evidence: {
          title: "Multimodal Evidence Integration",
          description:
            "Structure, gene expression, graphs, and literature as one.",
        },
        prioritization: {
          title: "Candidate Prioritization",
          description:
            "Ranked by rationale, feasibility, and commercial value.",
        },
        validation: {
          title: "Validation & IP Readiness",
          description:
            "Expert review, wet-lab testing, and IP assessment.",
        },
      },

      pipeline: {
        label: "Discovery Workflow",
        titleLine1: "From research question to",
        titleLine2: "validated opportunity",
      },

      pipelineSteps: {
        definition: {
          label: "Research Definition",
          description: "Define the drug, disease, and goal.",
        },
        orchestration: {
          label: "Evidence Orchestration",
          description: "Coordinate data, models, and AI agents.",
        },
        prioritization: {
          label: "Candidate Prioritization",
          description: "Rank by evidence and feasibility.",
        },
        validation: {
          label: "Experimental Validation",
          description: "Validate through lab studies.",
        },
        partnering: {
          label: "IP & Partnering",
          description: "Build IP and assess collaboration.",
        },
      },
    },

    // solution page
    solutionsPage: {
      header: {
        label:
          "Therapeutic Focus",

        title:
          "Solutions Across Disease Areas",

        description:
          "We apply Bio + AI to identify new therapeutic opportunities for existing medicines, with a current emphasis on immune-mediated skin diseases such as vitiligo and psoriasis.",
      },

      solutionCards: {
        rareDiseases: {
          label:
            "Rare Diseases",

          description:
            "Exploring new therapeutic options for conditions where limited patient populations and long development timelines leave major unmet needs.",
        },

        dermatology: {
          label:
            "Immune-Mediated Skin Diseases",

          description:
            "Exploring new therapeutic uses for existing medicines in vitiligo, psoriasis, and other immune-mediated skin conditions.",
        },

        neurodegeneration: {
          label:
            "Neurodegeneration",

          description:
            "Evaluating existing medicines against disease-relevant pathways in neurological and neurodegenerative conditions.",
        },

        metabolicDisorders: {
          label:
            "Metabolic Disorders",

          description:
            "Investigating new therapeutic applications for existing metabolic and immunomodulatory medicines.",
        },
      },

      faq: {
        label:
          "FAQ",

        title:
          "Common Questions",

        askDirectly:
          "Ask us directly",

        closeAll:
          "Collapse all",

        items: {
          efficiency: {
            question:
              "What makes drug repurposing different from developing a completely new medicine?",

            answer:
              "Existing medicines may already have pharmacological, safety, manufacturing, or clinical information that can support evaluation for a new therapeutic use. This can reduce selected early-stage uncertainties, although every new indication still requires appropriate experimental, regulatory, and clinical validation.",
          },

          diseaseAreas: {
            question:
              "Which disease areas does Repurgenesis currently focus on?",

            answer:
              "Our current priority is immune-mediated skin disease, particularly vitiligo and psoriasis. We also evaluate opportunities in rare diseases, neurodegeneration, and metabolic disorders, while working with partners on additional indications where drug repurposing may provide meaningful scientific and commercial value.",
          },

          validation: {
            question:
              "How do you validate computational predictions?",

            answer:
              "Each computational hypothesis moves through expert review and a structured validation process. Depending on the program, this may include mechanistic studies, disease-relevant cell assays, skin or tissue models, organoids, animal studies, and additional translational evaluation.",
          },

          licensing: {
            question:
              "Can pharmaceutical and biotechnology companies work with Repurgenesis?",

            answer:
              "Yes. We support several collaboration models, including research projects, candidate evaluation, platform partnerships, technology licensing, co-development, and milestone-based agreements. The appropriate structure depends on the disease, medicine, available evidence, and development objective.",
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
      loadMore: "Load more",
      references: "News Coverage & References",
      share: "Share with",
      shareLinkedIn: "Share on LinkedIn",
      shareX: "Share on X",
      backToNews: "Back to News",
      notFound: "Article not found.",
      backHome: "Back to home",

      filters: {
        all: "All",
        press: "Press",
        partnership: "Partnership",
        event: "Event",
        publication: "Publications",
      },

      categories: {
        press: "Press",
        partnership: "Partnership",
        event: "Event",
        publication: "Publication",
      },

      related: {
        label: "Keep Reading",
        title: "You may also like",
        readArticle: "Read article",
      },
      posters: {
        label:
          "Research Posters",

        title:
          "Explore Our Conference Posters",

        description:
          "View the research presented by Repurgenesis at NVIDIA GTC, Bio-IT World, and iDR26.",

        preview:
          "Preview Poster",

        closePreview:
          "Close Preview",

        openPdf:
          "Open Full PDF",

        pdfLabel:
          "Research Poster · PDF",

        cards: {
          gtc2026: {
            event:
              "NVIDIA GTC 2026",

            title:
              "AI-Driven Drug Repurposing with Intelligent Orchestration",

            description:
              "Poster P81062 presents how coordinated AI agents and multimodal biomedical evidence support the discovery of new indications for existing medicines.",

            meta:
              "San Jose · Poster P81062",
          },

          bioIt2026: {
            event:
              "Bio-IT World 2026",

            title:
              "Drug Repurposing with an Intelligent Orchestrating Platform",

            description:
              "A research poster introducing the Intelligent Orchestrator and its integrated workflow for evidence-driven drug-repurposing research.",

            meta:
              "Boston · Poster P62",
          },

          idr26: {
            event:
              "iDR26",

            title:
              "AI-Orchestrated Multimodal Evidence for Drug Repurposing",

            description:
              "An integrated approach combining knowledge graphs, structure modeling, and gene-expression evidence for more traceable candidate evaluation.",

            meta:
              "Brussels · International Drug Repurposing Conference",
          },
        },
      },
      articles: {
        researchPosters2026: {
          date:
            "May 2026",

          title:
            "2026 Conference Research Poster Collection",

          excerpt:
            "Explore Repurgenesis research presented at NVIDIA GTC, Bio-IT World, and iDR26.",

          lead:
            "This dedicated poster collection brings together three international conference presentations showcasing how Repurgenesis applies intelligent orchestration, multimodal biomedical evidence, and AI-driven workflows to drug repurposing.",

          body: {
            paragraph1:
              "The collection includes Repurgenesis research presented at NVIDIA GTC 2026 in San Jose, Bio-IT World 2026 in Boston, and the International Drug Repurposing Conference iDR26 in Brussels.",

            paragraph2:
              "Together, the posters introduce the Intelligent Orchestrator and demonstrate how knowledge graphs, structure-based analysis, gene-expression evidence, biomedical data, and coordinated AI workflows can support the discovery and evaluation of new therapeutic uses for existing medicines.",

            paragraph3:
              "Select a poster below to preview the full high-resolution PDF directly in the browser, or open the original file in a separate tab for closer reading.",
          },
        },

        bioAsiaTaiwan2026: {
          date:
            "July 16, 2026",

          title:
            "Repurgenesis Showcases Intelligent Orchestrator at BIO Asia–Taiwan 2026",

          excerpt:
            "Visit Booth M632 to explore how our AI-powered platform brings multimodal evidence and intelligent workflows into drug-repurposing research.",

          lead:
            "We are excited to welcome biotechnology, pharmaceutical, research, healthcare, and AI teams to meet Repurgenesis at BIO Asia–Taiwan 2026 and experience the Intelligent Orchestrator in action.",
          
          imageAlt:
            "Repurgenesis attends BIO Asia–Taiwan 2026",
          body: {
            paragraph1:
              "Repurgenesis is exhibiting at BIO Asia–Taiwan 2026 from July 16 to 19 at Taipei Nangang Exhibition Center. Visitors can meet the team at Booth M632 and learn how the independently developed Intelligent Orchestrator supports AI-driven drug discovery and drug repurposing.",

            paragraph2:
              "The platform brings together multimodal biomedical data, multiple AI technologies, specialized analytical tools, and intelligent workflows. By coordinating these capabilities within one research process, Repurgenesis aims to accelerate candidate discovery, evidence integration, prioritization, and experimental validation planning.",

            paragraph3:
              "During the exhibition, General Manager Dr. Yin-Hsong Hsu also shared the platform's development direction at the Taipei Biotech Pavilion. Repurgenesis is actively engaging with biotechnology and pharmaceutical companies, research institutions, healthcare organizations, and AI technology teams to explore technical exchange, joint research, candidate validation, and future commercialization opportunities.",
          },

          references: {
            linkedin:
              "Visit Repurgenesis at Booth M632 during BIO Asia–Taiwan 2026",

            cnyes:
              "Repurgenesis Connects Its AI Drug-Development Platform with the Global Biotechnology Industry",

            officialEvent:
              "BIO Asia–Taiwan 2026 Exhibition Information",
          },
        },
        gtcTaipei2026: {
          date: "June 1, 2026",
          title:
            "Repurgenesis Takes the Stage at NVIDIA GTC Taipei 2026",
          excerpt:
            "Repurgenesis will present its agent-orchestrated drug-repurposing workflow in NVIDIA GTC Taipei's AI for Science program.",
          lead:
            "Following a standout presentation at NVIDIA GTC in San Jose, Repurgenesis is returning to the global NVIDIA community—this time in Taipei—to show how coordinated AI agents can make drug repurposing more systematic, scalable, and actionable.",
          imageAlt:
            "Repurgenesis attends NVIDIA GTC Taipei 2026",
          body: {
            paragraph1:
              "Dr. Yin-Hsong Hsu, General Manager of Repurgenesis, will deliver the session \"Toward Intelligent Drug Repurposing: Orchestrating AI-Driven Drug Development With Agents.\" The talk will share how the Intelligent Orchestrator connects specialized AI agents, biomedical data, analytical models, and drug-development tools within one coordinated workflow.",
            paragraph2:
              "The platform uses NVIDIA NeMo Agent Toolkit to coordinate NVIDIA BioNeMo models and other research tools, bringing large language models, multi-agent collaboration, multimodal evidence, and expert review into a unified process. The goal is not simply to generate more predictions, but to help research teams move faster toward better-supported development decisions.",
            paragraph3:
              "As a member of NVIDIA Inception, Repurgenesis continues to strengthen its Bio + AI capabilities and build relationships across the global life-sciences ecosystem. GTC Taipei marks another exciting step toward turning advanced AI into practical therapeutic opportunities for existing medicines.",
          },
          references: {
            ltn:
              "Repurgenesis to Join NVIDIA GTC Taipei and Showcase Its AI Drug-Repurposing Platform",
            nvidiaSession:
              "Toward Intelligent Drug Repurposing: Orchestrating AI-Driven Drug Development With Agents",
            nvidiaEvent:
              "NVIDIA GTC Taipei 2026",
          },
        },

        internationalRecognition2026: {
          date: "May 29, 2026",
          title:
            "Repurgenesis Earns International Recognition at iDR26 and Bio-IT World",
          excerpt:
            "Global experts responded positively to the Intelligent Orchestrator platform, opening new conversations around collaboration and licensing.",
          lead:
            "After presenting at two major international forums, Repurgenesis returned with more than visibility: the team gained valuable expert feedback, new industry connections, and stronger confidence in the global potential of its AI-driven drug-repurposing strategy.",
          body: {
            paragraph1:
              "At iDR26 and Bio-IT World 2026, Repurgenesis shared the latest progress of the Intelligent Orchestrator with pharmaceutical companies, biotechnology teams, researchers, and AI specialists from around the world. The conversations focused on how AI can support drug repurposing, multimodal evidence integration, and more automated research workflows.",
            paragraph2:
              "The platform's coordinated approach—combining structure-based modeling, knowledge-graph reasoning, gene-expression analysis, and expert interpretation—received encouraging feedback from cross-disciplinary participants. These exchanges also helped the team better understand what global partners expect from an AI drug-development platform in real research settings.",
            paragraph3:
              "Repurgenesis has begun early discussions with biotechnology companies, research institutions, and related organizations in Europe and the United States. The company will continue expanding international collaborations and exploring licensing, joint research, and co-development opportunities that can bring promising drug-repurposing programs closer to patients.",
          },
          references: {
            ctee:
              "Repurgenesis AI Platform Gains International Recognition and Targets Global Licensing Opportunities",
            idr26:
              "iDR26 International Drug Repurposing Conference",
            bioIt:
              "Bio-IT World Conference & Expo 2026",
          },
        },

        idrBioitSelected2026: {
          date: "April 29, 2026",
          title:
            "Repurgenesis Selected to Present at iDR26 and Bio-IT World 2026",
          excerpt:
            "The Intelligent Orchestrator will be featured at two leading international meetings in drug repurposing and biomedical informatics.",
          lead:
            "Fresh from its NVIDIA GTC debut, Repurgenesis has been selected to share its research at iDR26 in Brussels and Bio-IT World in Boston—two major stages for drug repurposing, life-science data, and AI-enabled discovery.",
          imageAlt:
            "Repurgenesis representatives attending an international biomedical and artificial-intelligence conference",
          body: {
            paragraph1:
              "iDR26 brings together the international drug-repurposing community on May 12–13, while Bio-IT World convenes leaders in life sciences, informatics, data, and AI on May 19–21. Presenting at both meetings gives Repurgenesis a valuable opportunity to exchange ideas with researchers, pharmaceutical teams, technology partners, and patient-focused organizations.",
            paragraph2:
              "The company's Intelligent Orchestrator integrates structure-based evidence, gene-expression analysis, biomedical knowledge graphs, and coordinated AI workflows to identify and evaluate new therapeutic opportunities for existing medicines. The platform is designed to make candidate selection more traceable, interpretable, and ready for experimental follow-up.",
            paragraph3:
              "The two presentations represent another meaningful milestone for the team. Repurgenesis will use the opportunity to gather international feedback, strengthen its research methodology, and build new relationships for validation, intellectual-property development, and future partnering.",
          },
          references: {
            udn:
              "Energenesis Announces Repurgenesis Presentations at Two Major International Biomedical Conferences",
            gbi:
              "Repurgenesis to Present AI Drug-Development Research at Two International Conferences",
            scienceOpen:
              "AI-Orchestrated Integration of Knowledge Graph, Structure, and Gene-Expression Evidence for Drug Repurposing",
          },

        },

        gtcFinalist2026: {
          date: "March 17, 2026",
          title:
            "Repurgenesis Named a Top-8 Finalist at NVIDIA GTC 2026",
          excerpt:
            "The Intelligent Orchestrator was the only BioPharma project among the event's eight selected poster finalists.",
          lead:
            "Repurgenesis made a memorable NVIDIA GTC debut: its AI-orchestrated drug-repurposing research advanced from a global field of submissions to the event's top eight poster finalists.",
          body: {
            paragraph1:
              "The project was selected from 158 poster entries and stood out as the only finalist representing the BioPharma field. For the team, the recognition was an exciting validation of its effort to connect advanced AI with practical biomedical research and drug-repurposing challenges.",
            paragraph2:
              "The Intelligent Orchestrator incorporates NVIDIA BioNeMo and integrates structural data, gene expression, biomedical knowledge graphs, and clinical evidence through coordinated analytical models. This multimodal approach helps the platform cross-check candidate opportunities and create a clearer path from computational hypothesis to experimental evaluation.",
            paragraph3:
              "Beyond the finalist recognition, GTC created opportunities to exchange ideas with global AI, pharmaceutical, and research organizations. Repurgenesis will continue improving platform accuracy, validating high-potential candidates, strengthening its intellectual-property portfolio, and exploring international partnerships.",
          },
          references: {
            gbi:
              "Energenesis and Repurgenesis Present AI Drug-Repurposing Platform, Named a Top-8 GTC Finalist",
          },
        },

        gtcPreview2026: {
          date:
            "March 2026",

          title:
            "Meet Repurgenesis at NVIDIA GTC 2026",

          excerpt:
            "At Poster P81062, Repurgenesis will present how its AI-orchestrated platform accelerates the search for new therapeutic uses of existing medicines.",

          lead:
            "Repurgenesis is heading to NVIDIA GTC 2026 in San Jose to share how coordinated AI, multimodal biomedical evidence, and drug-repurposing expertise can turn existing medicines into new therapeutic opportunities.",

          imageAlt:
            "Repurgenesis presenting its Intelligent Orchestrator platform at NVIDIA GTC 2026",

          body: {
            paragraph1:
              "Visitors can meet the Repurgenesis team and explore Poster P81062, which presents the company's AI-powered drug-repurposing platform and its approach to identifying potential new indications for existing medicines.",

            paragraph2:
              "The Intelligent Orchestrator integrates structure-based analysis, gene-expression evidence, biomedical knowledge graphs, literature, and coordinated AI workflows. Rather than relying on a single model, the platform brings complementary evidence together to support more traceable candidate prioritization and experimental planning.",

            paragraph3:
              "NVIDIA GTC offers an exciting opportunity to exchange ideas with AI researchers, biotechnology teams, pharmaceutical companies, and technology partners. Repurgenesis looks forward to discussing how orchestrated Bio + AI can make drug-repurposing research faster, more systematic, and more actionable.",
          },
          references: {
            linkedin:
              "Meet Repurgenesis at NVIDIA GTC 2026 and visit Poster P81062",

            nvidia:
              "NVIDIA GTC San Jose 2026",

            gbi:
              "Repurgenesis Presents Its AI Drug-Repurposing Platform and Reaches the GTC Top Eight",
          },
        },
        presidentAiInterview2026: {
          date:
            "January 10, 2026",

          title:
            "Dr. Yin-Hsong Hsu on AI Companions, Critical Thinking, and Staying Human",

          excerpt:
            "Repurgenesis President Dr. Yin-Hsong Hsu discusses how AI may reshape work, learning, companionship, and human decision-making.",

          lead:
            "As AI becomes more capable and more personal, Dr. Yin-Hsong Hsu believes the defining human advantage will not be access to information, but the ability to question, interpret, and make thoughtful decisions.",

          imageAlt:
            "Dr. Yin-Hsong Hsu discussing AI companions, critical thinking, and human judgment",

          body: {
            paragraph1:
              "In an interview with UDN Health, Dr. Hsu described a future in which people may rely on several AI companions: one for work, another for daily life, and perhaps another for personal conversation. These systems may become increasingly personalized, multimodal, and integrated into everyday routines.",

            paragraph2:
              "He also emphasized that AI should remain a tool rather than a decision-maker. As AI becomes more persuasive and capable, people need stronger critical-thinking skills, clearer personal judgment, and the confidence to question the information and recommendations they receive.",

            paragraph3:
              "For Dr. Hsu, technological progress should ultimately help people return to meaningful real-world relationships. Responsible AI therefore requires not only better models, but also empathy, governance, transparency, and an ongoing connection to family, community, and the physical world.",
          },

          references: {
            udn:
              "Can AI Hear Loneliness? Yin-Hsong Hsu on the Boundary Between Human Judgment and Artificial Intelligence",
          },
        },
        altosPartnership: {
          date: "October 30, 2025",
          title:
            "Repurgenesis and Altos Computing Join Forces on High-Performance AI Drug Development",
          excerpt:
            "The partnership combines biomedical AI, high-performance computing, and scalable infrastructure to accelerate drug-repurposing research.",
          lead:
            "Repurgenesis has signed a strategic agreement with Altos Computing, an Acer Group company, to co-develop a next-generation AI drug-development platform built for speed, scale, and practical research.",
          body: {
            paragraph1:
              "The collaboration brings together Repurgenesis's biomedical AI and drug-repurposing capabilities with Altos Computing's expertise in high-performance computing and AI infrastructure. Together, the teams aim to improve model performance, platform scalability, and the efficiency of early drug-development research.",
            paragraph2:
              "Repurgenesis will connect its Intelligent Orchestrator with the Altos aiWorks platform to support large-scale model training, flexible resource allocation, and more efficient execution of complex biomedical workflows. This infrastructure will help the team evaluate more evidence while keeping the research process coordinated and traceable.",
            paragraph3:
              "The agreement is an important milestone in Repurgenesis's technology and partnership strategy. By combining complementary strengths across AI, computing, and biomedical science, both companies hope to turn promising drug-repurposing ideas into faster, more scalable development programs.",
          },
          references: {
            gbi:
              "Repurgenesis and Altos Computing Partner on High-Performance AI Drug Development",
          },
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
          "5F, No. 21, Ln. 583, Ruiguang Rd.", 
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
        title: "Send us a Message",
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

        light: "Light",
        dark: "Dark",
        legendTitle: "Partner Types",
        selectAll: "All",
        selectNone: "None",
        directions: "Directions",
        closeDetails: "Close partner details",
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
        label: "AI 智慧協奏藥物再利用",
        title: "從生醫證據，走向可驗證的治療機會",
        description:
          "源華智醫將 AI Agent、多模態生醫資料與領域專家整合於同一套研發流程，協助探索既有藥物的新用途，並建立通往實驗驗證的清晰路徑。",
        primaryButton: "探索技術平台",
        secondaryButton: "與我們合作",
        scroll: "向下探索",
      },
      heroHighlights: {
        bioAi: {
          value: "Bio + AI",
          label: "整合生醫、藥物開發與人工智慧",
        },
        orchestration: {
          value: "AI 智慧協奏",
          label: "協調資料、分析模型與專家審議",
        },
        evidence: {
          value: "證據整合",
          label: "整合基因體、結構、文獻與臨床證據",
        },
        validation: {
          value: "轉譯銜接",
          label: "候選排序進行實驗與智財評估",
        },
      },
      workflows: {
        label:
          "雙向探索",

        titleStart:
          "從藥物",

        titleAccent:
          "或",

        titleEnd:
          "疾病出發",

        drugToDisease: {
          title:
            "藥物到疾病",

          description:
            "探索既有藥物新的潛在適應症。",
        },

        diseaseToDrug: {
          title:
            "疾病到藥物",

          description:
            "依疾病機制匹配候選藥物。",
        },

        button:
          "探索研發流程",
      },

      evidence: {
        titleStart:
          "三層證據，",

        titleAccent:
          "一套決策。",

        layers: {
          expression: {
            title:
              "基因表現",

            description:
              "比對不同組織與疾病的體學特徵。",
          },

          structure: {
            title:
              "結構建模",

            description:
              "評估 3D 結構及預測標的親和力。",
          },

          knowledge: {
            title:
              "知識圖譜",

            description:
              "串聯科學文獻中的生醫意義與關聯。",
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
        
        cta: "了解我們的方法",

        stats: {
          programs: {
            value: "20+",
            label: "評估項目",
          },
          assets: {
            value: "6",
            label: "驗證中專利",
          },
          signals: {
            eyebrow: "AI 智慧協奏",
            value: "2000",
            label: "AI 篩選範圍的小分子藥物",
          },
        },
      },

      journey: {
        label:
          "發展歷程",

        title:
          "源華智醫發展歷程",

        description:
          "從跨校產學合作、AI 研發團隊建立，到正式成立並登上國際生醫與人工智慧舞台。",

        phases: {
          preparation:
            "籌備期",

          operations:
            "正式營運期",
        },

        dragHint:
          "拖曳查看更多",

        timeline: {
          teamEstablished: {
            event:
              "AI 研發團隊成立。",
          },

          ntuCollaboration: {
            event:
              "華安醫學與國立臺灣大學展開產學合作。",
          },

          nycuCollaboration: {
            event:
              "華安團隊與國立陽明交通大學展開產學合作。",
          },

          companyEstablished: {
            event:
              "源華智醫正式成立。",
          },

          nvidiaInception: {
            event:
              "源華智醫成為 NVIDIA Inception 新創計畫成員。",
          },

          vitiligoPatent: {
            event:
              "提出白斑症潛在治療適應症的專利申請。",
          },

          gtcTopEight: {
            event:
              "智慧協奏研究成果入選 NVIDIA GTC 2026 前八名優選海報。",
          },

          idr26Presentation: {
            event:
              "獲選於國際藥物再利用大會 iDR26 發表研究成果。",
          },

          bioItPresentation: {
            event:
              "獲選於 Bio-IT World 2026 發表研究成果。",
          },
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
              "陳翰民 博士",

            role:
              "董事長",

            bio:
              "陳翰民博士為源華智醫創辦人暨董事長，並擔任華安醫學（6657）董事長。擁有逾二十年生物醫學研究與藥物開發經驗，專長涵蓋生物化學、酵素化學、單株抗體製備及系統生物學藥物開發。於源華智醫，他負責公司長期策略與發展方向，結合既有的新藥研發經驗與 AI 驅動的藥物再利用能力，推動具潛力的治療機會進入實驗驗證、智慧財產布局與國際合作。",
          },

          memberTwo: {
            name:
              "許銀雄 博士",

            role:
              "總經理",

            bio:
              "許銀雄博士 為 源華智醫之總經理，帶領公司發展 Bio + AI 老藥新用平台，結合生醫研究、人工智慧、實驗驗證以及策略合作，推動極具潛力的治療機會 進入後續轉譯與商業評估。",
          },
        },
      },
    },
    // technology page
    technology: {
      hero: {
        label: "技術平台",
        title: "AI 驅動的多模態藥物探索引擎",
        description:
          "一套整合式 AI 藥物再利用框架，協調專業 AI Agent、多模態生醫資料與領域專家，系統化探索既有藥物的新治療用途。",
        imageAlt:
          "整合基因、結構與知識圖譜證據的統一 AI 框架",
      },

      flow: {
        label: "平台流程",
        title: "雙向探索，同一套智慧協奏框架",
        description:
          "源華智醫可從既有藥物或疾病生物學雙向啟動探索，將結構、基因表現、知識圖譜與科學文獻整合於同一套協奏流程。",

        drugToDisease: {
          source: "藥物",
          target: "疾病",
          mode: "結構導向",
          imageAlt:
            "從既有藥物出發，經結構式篩選與專家審議，探索新適應症的藥物至疾病研發流程",
        },

        diseaseToDrug: {
          source: "疾病",
          target: "藥物",
          mode: "知識導向",
          imageAlt:
            "從疾病訊號與知識圖譜出發，經候選分析尋找潛在藥物的疾病至藥物研發流程",
        },
      },

      bidirectional: {
        label: "雙向探索",
        title:
          "單一疾病、單一標的、單一藥物的研發模型，過於簡化。",
        description:
          "源華智醫以「藥物到疾病」與「疾病到藥物」兩條路徑並行且規模化地進行探索，讓每一項候選機會由整合證據引導，而非依賴單一的前置假設。",
      },

      approaches: {
        drugTarget: {
          label: "藥物 → 疾病",
          title: "藥物－標的導向",
          description:
            "透過結構式篩選與 AI 結合預測分析小分子與蛋白質，從既有藥物出發，探索具潛力的新疾病適應症。",
          imageAlt:
            "資料蒐集、AI 輔助結合預測與濕實驗驗證流程",

          tags: {
            docking:
              "分子對接與重新評分",
            binding:
              "結合預測",
            wetLab:
              "濕實驗驗證",
          },
        },

        diseaseGene: {
          label: "疾病 → 藥物",
          title: "疾病－基因導向",
          description:
            "AI Agent 運行於生醫知識圖譜與檢索增強生成（RAG）流程，並搭配基因表現分析，從疾病生物學出發尋找可行的候選藥物。",
          imageAlt:
            "生醫知識圖譜、AI Agent 與基因表現分析工具",

          tags: {
            knowledgeGraphs:
              "生醫知識圖譜",
            ragAgents:
              "RAG Agent",
            geneExpression:
              "基因表現",
          },
        },
      },

      challenges: {
        label: "研發挑戰",
        title: "我們正在解決的關鍵問題",

        items: {
          integration: {
            title:
              "整合複雜度",
            body:
              "整合蛋白質、基因、小分子與科學文獻等異質資料，並涵蓋文字、圖譜、序列與三維結構等不同形式。",
          },

          scale: {
            title:
              "可擴展性",
            body:
              "在龐大且複雜的生醫資料環境中，協調多種 AI 模型進行分析。",
          },

          workflow: {
            title:
              "研發流程協奏",
            body:
              "串聯乾實驗預測與濕實驗驗證，提升研究成果的轉譯價值與實際應用潛力。",
          },

          interoperability: {
            title:
              "系統互通性",
            body:
              "簡化藥物再利用研發流程，使治療創新更快速、更具成本效益，也更容易擴展。",
          },
        },
      },

      accelerated: {
        label:
          "加速運算",
        title:
          "智慧協奏的一體化平台",
        description:
          "以 AI 智慧協奏推動藥物再利用，整合多模態資料、資料來源與分析方法，並運用 NVIDIA BioNeMo 與 NVIDIA cuGraph，支援多元 AI 模型的可擴展協同運作。",
        imageAlt:
          "由 NVIDIA BioNeMo 支援的智慧協奏藥物研發流程",

        tags: {
          bioNeMo:
            "NVIDIA BioNeMo",
          cuGraph:
            "NVIDIA cuGraph",
          inception:
            "NVIDIA Inception 計畫成員",
        },
      },

      portfolio: {
        label:
          "候選組合",
        title:
          "轉譯研發管線",
        description:
          "跨疾病領域的藥物再利用專案，依據證據、驗證結果與智慧財產成熟度分階段推進。",

        columns: {
          diseaseArea:
            "疾病領域",
          indication:
            "適應症",
        },

        stages: {
          drugId:
            "藥物辨識",
          pocValidation:
            "概念驗證",
          ipFiling:
            "智財申請",
          preClinical:
            "臨床前研究",
        },

        rows: {
          autoimmune: {
            area:
              "自體免疫",
            indication:
              "白斑症",
          },

          fibrosis: {
            area:
              "纖維化疾病",
            indication:
              "特發性肺纖維化",
          },

          neurology: {
            area:
              "神經疾病",
            indication:
              "脊髓小腦共濟失調",
          },
        },

        legend: {
          reached:
            "已達成階段",
          upcoming:
            "後續階段",
        },
      },

      cards: {
        orchestration: {
          title: "多重 AI Agent 協奏",
          description: "AI Agent 協調檢索、分析與評估。",
        },
        evidence: {
          title: "多模態證據整合",
          description: "整合結構、基因表現、圖譜與文獻。",
        },
        prioritization: {
          title: "候選機會排序",
          description: "依合理性、可行性與商業價值排序。",
        },
        validation: {
          title: "驗證與智財準備",
          description: "專家審議、濕實驗驗證與智財評估。",
        },
      },

      pipeline: {
        label: "研發流程",
        titleLine1: "從研發問題",
        titleLine2: "到可驗證的治療機會",
      },

      pipelineSteps: {
        definition: {
          label: "研發問題定義",
          description: "定義藥物、疾病與目標。",
        },
        orchestration: {
          label: "證據智慧協奏",
          description: "協調資料、模型與 AI Agent。",
        },
        prioritization: {
          label: "候選機會排序",
          description: "依證據強度與可行性排序。",
        },
        validation: {
          label: "實驗驗證",
          description: "以適當實驗方法驗證。",
        },
        partnering: {
          label: "智財與商業合作",
          description: "建立智財並評估合作。",
        },
      },
    },
    // solution page
    solutionsPage: {
      header: {
        label:
          "治療領域",

        title:
          "跨疾病領域的治療解決方案",

        description:
          "源華智醫運用 Bio + AI，探索既有藥物的新治療機會，目前特別聚焦於白斑症、乾癬等免疫相關皮膚疾病。",
      },

      solutionCards: {
        rareDiseases: {
          label:
            "罕見疾病",

          description:
            "針對病患人數有限、開發時程較長且治療選擇不足的疾病，探索既有藥物的新治療機會。",
        },

        dermatology: {
          label:
            "免疫相關皮膚疾病",

          description:
            "聚焦白斑症、乾癬及其他免疫相關皮膚疾病，探索既有藥物的新適應症與轉譯潛力。",
        },

        neurodegeneration: {
          label:
            "神經退化性疾病",

          description:
            "依據疾病相關機制與生醫證據，評估既有藥物於神經及神經退化疾病中的新用途。",
        },

        metabolicDisorders: {
          label:
            "代謝疾病",

          description:
            "探索既有代謝調節與免疫調節藥物於其他疾病領域中的潛在治療應用。",
        },
      },

      faq: {
        label:
          "常見問題",

        title:
          "常見問題與解答",

        askDirectly:
          "直接聯絡我們",

        closeAll:
          "全部收合",

        items: {
          efficiency: {
            question:
              "藥物再利用與開發全新藥物有什麼不同？",

            answer:
              "既有藥物通常已累積部分藥理、安全性、製造或臨床資訊，可作為評估新治療用途的重要基礎，並降低部分早期研發的不確定性。不過，每一項新適應症仍須經過適當的實驗、法規及臨床驗證。",
          },

          diseaseAreas: {
            question:
              "源華智醫目前聚焦哪些疾病領域？",

            answer:
              "目前的優先方向為免疫相關皮膚疾病，特別是白斑症與乾癬。我們也持續評估罕見疾病、神經退化性疾病及代謝疾病中的藥物再利用機會，並與合作夥伴共同探索其他具有科學與商業發展潛力的適應症。",
          },

          validation: {
            question:
              "你們如何驗證運算模型提出的預測？",

            answer:
              "每一項運算假說都會先經過領域專家審議，再進入結構化的驗證流程。依照不同研發項目，驗證方式可能包括作用機制研究、疾病相關細胞實驗、皮膚或組織模型、類器官、動物實驗及其他轉譯評估。",
          },

          licensing: {
            question:
              "製藥與生技公司可以如何與源華智醫合作？",

            answer:
              "我們提供多種合作模式，包括研究專案、候選藥物評估、平台合作、技術授權、共同開發及里程碑式合作。實際合作架構將依疾病、藥物、現有證據與開發目標進行規劃。",
          },
        },
      },
    },
    // news & events
    news: {
      label: "公司動態",
      title: "最新消息與活動",
      filter: "分類",
      scroll: "捲動",
      allNews: "所有消息",
      loadMore: "載入更多",
      references: "媒體報導與參考來源",
      share: "分享到平台",
      shareLinkedIn: "分享至 LinkedIn",
      shareX: "分享至 X",
      backToNews: "返回最新消息",
      notFound: "找不到文章。",
      backHome: "返回首頁",

      filters: {
        all: "全部",
        press: "新聞發布",
        partnership: "合作消息",
        event: "活動資訊",
      },

      categories: {
        press: "新聞發布",
        partnership: "合作消息",
        event: "活動資訊",
      },

      related: {
        label: "延伸閱讀",
        title: "你可能也感興趣",
        readArticle: "閱讀全文",
      },
      posters: {
        label:
          "研究海報",

        title:
          "國際會議研究海報",

        description:
          "查看源華智醫於 NVIDIA GTC、Bio-IT World 與 iDR26 發表的研究成果。",

        preview:
          "預覽海報",

        closePreview:
          "關閉預覽",

        openPdf:
          "開啟完整 PDF",

        pdfLabel:
          "研究海報 · PDF",

        cards: {
          gtc2026: {
            event:
              "NVIDIA GTC 2026",

            title:
              "以智慧協奏 AI 推動藥物再利用",

            description:
              "P81062 研究海報介紹如何協調 AI Agent 與多模態生醫證據，探索既有藥物的新治療用途。",

            meta:
              "美國聖荷西 · P81062 海報",
          },

          bioIt2026: {
            event:
              "Bio-IT World 2026",

            title:
              "以智慧協奏平台推動藥物再利用",

            description:
              "介紹智慧協奏平台如何整合多元證據與研究流程，推動證據導向的藥物再利用研究。",

            meta:
              "美國波士頓 · P62 海報",
          },

          idr26: {
            event:
              "iDR26",

            title:
              "以 AI 協奏整合多模態藥物再利用證據",

            description:
              "整合知識圖譜、結構建模與基因表現證據，使候選藥物評估更具可追溯性。",

            meta:
              "比利時布魯塞爾 · 國際藥物再利用大會",
          },
        },
},
      articles: {
        researchPosters2026: {
          date:
            "2026 年 5 月",

          title:
            "2026 國際會議研究海報專區",

          excerpt:
            "一次查看源華智醫於 NVIDIA GTC、Bio-IT World 與 iDR26 發表的研究成果。",

          lead:
            "本專區收錄源華智醫於三項國際會議發表的研究海報，呈現智慧協奏平台如何整合多模態生醫證據、AI 技術與智慧化工作流程，推動藥物再利用研究。",

          body: {
            paragraph1:
              "本次收錄的研究成果分別發表於美國聖荷西 NVIDIA GTC 2026、美國波士頓 Bio-IT World 2026，以及比利時布魯塞爾國際藥物再利用大會 iDR26。",

            paragraph2:
              "三份研究海報共同介紹智慧協奏（Intelligent Orchestrator）平台，並展示如何整合知識圖譜、結構式分析、基因表現證據、生醫資料與 AI 協同工作流程，協助探索及評估既有藥物的新治療用途。",

            paragraph3:
              "您可以在下方選擇任一研究海報，直接於網頁中預覽高解析度 PDF，或另開分頁查看完整原始檔案。",
          },
        },

        bioAsiaTaiwan2026: {
          date:
            "2026 年 7 月 16 日",

          title:
            "源華智醫亮相 BIO Asia–Taiwan 2026，展示智慧協奏 AI 藥物研發平台",

          excerpt:
            "歡迎蒞臨 M632 攤位，了解智慧協奏如何整合多模態證據與 AI 工作流程，加速藥物再利用研究。",

          lead:
            "源華智醫誠摯邀請生技製藥公司、研究機構、醫療單位與 AI 技術團隊，在 BIO Asia–Taiwan 2026 與我們相見，一起探索智慧協奏平台帶來的藥物研發新可能。",
          
          imageAlt:
            "源華智醫團隊亮相 BIO Asia–Taiwan 2026",
          body: {
            paragraph1:
              "源華智醫於 7 月 16 至 19 日參與在台北南港展覽館舉行的 BIO Asia–Taiwan 2026。展會期間，團隊將於 M632 攤位展示自主研發的智慧協奏（Intelligent Orchestrator）AI 藥物研發平台，分享平台如何支援 AI 驅動的藥物探索與藥物再利用。",

            paragraph2:
              "智慧協奏平台整合多模態生醫資料、多元 AI 技術、專業分析工具與智慧化工作流程，將不同研發能力協調於同一套研究架構中，協助加速候選藥物探索、證據整合、優先排序及後續實驗驗證規劃。",

            paragraph3:
              "展會期間，源華智醫總經理許銀雄博士亦於台北生技館分享平台的發展方向。公司目前積極與生技製藥公司、研究機構、醫療單位及 AI 技術團隊交流，並探索技術合作、共同研發、候選藥物驗證與未來商業合作的更多可能。",
          },

          references: {
            linkedin:
              "歡迎蒞臨 BIO Asia–Taiwan 2026 M632 攤位與源華智醫交流",

            cnyes:
              "源華智醫 AI 藥物研發接軌國際，開啟 AI 藥物開發新藍海",

            officialEvent:
              "BIO Asia–Taiwan 2026 亞洲生技大展資訊",
          },
        },
        gtcTaipei2026: {
          date: "2026 年 6 月 1 日",
          title:
            "源華智醫登上 NVIDIA GTC Taipei 2026，分享智慧協奏 AI 藥物研發",
          excerpt:
            "源華智醫將於 AI for Science 議程，分享以 AI Agent 協奏藥物再利用研發流程的實務成果。",
          lead:
            "繼今年 3 月於 NVIDIA GTC San Jose 亮相並獲得正面迴響後，源華智醫再度站上 NVIDIA 國際舞台，這次將在台北分享如何透過 AI Agent，讓藥物再利用研究更系統化、更具擴展性，也更接近實際研發決策。",
          imageAlt:
            "源華智醫團隊參與 NVIDIA GTC Taipei 2026",
          body: {
            paragraph1:
              "源華智醫總經理許銀雄博士將以「邁向智慧化的藥物再利用：Agents 智慧協奏 AI 驅動的藥物開發流程」為題進行演講，介紹智慧協奏（Intelligent Orchestrator）如何串聯專業 AI Agent、生醫資料、分析模型與藥物研發工具，形成一套協同運作的研究流程。",
            paragraph2:
              "平台運用 NVIDIA NeMo Agent Toolkit 協調 NVIDIA BioNeMo 模型及其他研究工具，將大型語言模型、多代理人協作、多模態證據與專家審議整合於同一架構中。目標不只是產生更多預測，而是協助團隊更快聚焦於具充分證據支持、值得進一步驗證的候選機會。",
            paragraph3:
              "作為 NVIDIA Inception 新創計畫成員，源華智醫將持續深化 Bio + AI 技術能力，並拓展與全球生醫及科技產業的合作連結。此次 GTC Taipei 分享，是公司將前沿 AI 轉化為實際治療機會的又一個重要里程碑。",
          },
          references: {
            ltn:
              "華安旗下源華智醫將參加輝達台北電腦展大會，展示 AI 老藥新用平台",
            nvidiaSession:
              "邁向智慧化的藥物再利用：以 Agents 智慧協奏 AI 驅動藥物開發",
            nvidiaEvent:
              "NVIDIA GTC Taipei 2026",
          },
        },

        internationalRecognition2026: {
          date: "2026 年 5 月 29 日",
          title:
            "源華智醫 AI 平台獲國際好評，啟動更多合作與授權對話",
          excerpt:
            "智慧協奏平台於 iDR26 與 Bio-IT World 獲得跨領域專家正面回饋，並開啟更多國際合作機會。",
          lead:
            "完成兩場重要國際會議發表後，源華智醫帶回的不只是曝光度，更包括來自專家與產業夥伴的具體回饋、新的國際連結，以及對 AI 藥物再利用全球發展潛力更清晰的信心。",
          body: {
            paragraph1:
              "在 iDR26 與 Bio-IT World 2026 期間，源華智醫向來自全球的藥廠、生技公司、研究機構與 AI 團隊，分享智慧協奏（Intelligent Orchestrator）平台的最新進展。交流重點涵蓋 AI 藥物再利用、多模態證據整合，以及如何建立更自動化、更可追溯的研發流程。",
            paragraph2:
              "平台整合結構式建模、知識圖譜推理、基因表現分析與專家判讀的協奏方法，獲得多位跨領域與會者正面回應。這些討論也讓團隊更深入理解，國際合作夥伴在實際研發場景中，對 AI 藥物開發平台的可信度、可解釋性與落地能力有何期待。",
            paragraph3:
              "源華智醫已與部分歐美生技公司、研究機構及相關組織展開初步交流。未來將持續拓展國際合作，並評估授權、共同研究與共同開發等模式，讓具潛力的藥物再利用專案更快走向實驗驗證與病患需求。",
          },
          references: {
            ctee:
              "源華智醫 AI 平台進軍國際獲好評，瞄準全球授權商機",
            idr26:
              "iDR26 國際藥物再利用大會",
            bioIt:
              "Bio-IT World Conference & Expo 2026",
          },
        },

        idrBioitSelected2026: {
          date: "2026 年 4 月 29 日",
          title:
            "源華智醫獲選於 iDR26 與 Bio-IT World 2026 發表研究成果",
          excerpt:
            "智慧協奏平台將接連登上藥物再利用與生醫資訊領域兩項重要國際會議。",
          lead:
            "繼 NVIDIA GTC 首次國際亮相後，源華智醫再傳好消息：團隊獲選於布魯塞爾 iDR26 與波士頓 Bio-IT World 發表研究成果，持續把台灣 Bio + AI 研發能量帶上全球舞台。",
          imageAlt:
            "源華智醫團隊參與國際生醫與人工智慧會議",
          body: {
            paragraph1:
              "iDR26 將於 5 月 12 至 13 日匯聚全球藥物再利用社群；Bio-IT World 則於 5 月 19 至 21 日集結生命科學、生物資訊、資料科學與 AI 領域的重要團隊。接連參與兩項會議，讓源華智醫能與研究者、藥廠、科技夥伴及病患導向組織深入交流。",
            paragraph2:
              "源華智醫自主研發的智慧協奏平台，整合結構式證據、基因表現分析、生醫知識圖譜與 AI 協同工作流程，用於發掘並評估既有藥物的新治療機會。平台強調候選排序的可追溯性、可解釋性，以及後續實驗驗證的可行性。",
            paragraph3:
              "此次獲選是團隊另一項重要里程碑。公司將藉由國際發表蒐集專業回饋、持續優化研究方法，並拓展實驗驗證、智慧財產布局與未來商業合作的國際連結。",
          },
          references: {
            udn:
              "華安 AI 研發傳捷報，子公司源華智醫五月於兩大國際指標會議發表成果",
            gbi:
              "源華智醫五月登兩項國際會議，發表 AI 藥物開發成果",
            scienceOpen:
              "以 AI 協奏整合知識圖譜、結構式模型與基因表現證據，提升藥物再利用準確度",
          },
        },

        gtcFinalist2026: {
          date: "2026 年 3 月 17 日",
          title:
            "源華智醫入選 NVIDIA GTC 前八名，智慧協奏成唯一 BioPharma 優選",
          excerpt:
            "智慧協奏研究自 158 件作品中脫穎而出，成為前八名中唯一的生物製藥領域專案。",
          lead:
            "源華智醫首次登上 NVIDIA GTC 就傳回令人振奮的好消息：AI 藥物再利用研究從全球投稿中獲選展示，並進一步入選大會前八名優選海報。",
          body: {
            paragraph1:
              "本次研究自 158 件海報作品中脫穎而出，也是前八名優選中唯一來自 BioPharma 領域的專案。這項肯定不只提升團隊的國際能見度，也證明將先進 AI 與實際生醫研發需求深度結合，正在形成具有差異化的研究價值。",
            paragraph2:
              "智慧協奏平台導入 NVIDIA BioNeMo，並整合結構資料、基因表現、生醫知識圖譜與臨床證據，透過多模型協作進行交叉分析。這種多模態架構有助於提高候選機會的證據一致性，並建立從運算假說走向實驗評估的清晰路徑。",
            paragraph3:
              "除了入選肯定，GTC 也讓團隊與全球 AI、生技製藥與研究機構展開交流。源華智醫將持續提升平台準確度、推進高潛力候選案驗證、強化智慧財產布局，並積極尋找國際合作夥伴。",
          },
          references: {
            gbi:
              "華安攜源華智醫發表 AI 老藥新用平台，入選 GTC 前八名優選展示",
          },
        },

        gtcPreview2026: {
          date:
            "2026 年 3 月",

          title:
            "與源華智醫相約 NVIDIA GTC 2026",

          excerpt:
            "歡迎參觀 P81062 海報，了解智慧協奏平台如何運用 AI，加速探索既有藥物的新治療用途。",

          lead:
            "源華智醫將前往美國聖荷西參與 NVIDIA GTC 2026，分享如何結合智慧協奏 AI、多模態生醫證據與藥物再利用專業，為既有藥物開拓新的治療機會。",

          imageAlt:
            "源華智醫於 NVIDIA GTC 2026 展示智慧協奏平台",

          body: {
            paragraph1:
              "歡迎於 NVIDIA GTC 2026 與源華智醫團隊交流，並參觀編號 P81062 的研究海報。海報將介紹公司自主研發的 AI 藥物再利用平台，以及如何運用人工智慧探索既有藥物的新適應症。",

            paragraph2:
              "智慧協奏平台整合結構式分析、基因表現證據、生醫知識圖譜、科學文獻與 AI 協同工作流程。平台不依賴單一模型，而是交叉整合互補證據，協助候選機會排序更具可追溯性，並建立後續實驗驗證方向。",

            paragraph3:
              "NVIDIA GTC 是與全球 AI 研究者、生技團隊、藥廠及技術夥伴交流的重要機會。源華智醫期待分享智慧協奏 Bio + AI 如何讓藥物再利用研究更快速、更系統化，也更接近實際研發應用。",
          },

          references: {
            linkedin:
              "歡迎於 NVIDIA GTC 2026 與源華智醫交流並參觀 P81062 海報",

            nvidia:
              "NVIDIA GTC San Jose 2026",

            gbi:
              "華安攜源華智醫發表 AI 老藥新用平台，入選 GTC 前八名優選",
          },
        },
        presidentAiInterview2026: {
          date:
            "2026 年 1 月 10 日",

          title:
            "許銀雄談 AI 夥伴、思辨力與人之所以為人",

          excerpt:
            "源華智醫總經理許銀雄分享 AI 如何改變工作、學習、陪伴與人類決策。",

          lead:
            "當 AI 變得更強大、更個人化，許銀雄博士認為，人類真正重要的能力不只是取得資訊，而是質疑、理解、轉化資訊，並做出屬於自己的判斷。",

          imageAlt:
            "許銀雄博士分享 AI 夥伴、思辨力與人類判斷的重要性",

          body: {
            paragraph1:
              "接受元氣網專訪時，許銀雄博士描繪了一個每個人都擁有多個 AI 夥伴的未來：有些協助工作，有些照顧生活，也可能有些成為日常對話與情感陪伴的角色。隨著文字、圖像與聲音整合，AI 將更自然地進入人們的日常生活。",

            paragraph2:
              "他同時強調，AI 應該是工具，而不是替人做主的主人。AI 能協助整理資料、補足思考盲點並提供不同觀點，但使用者仍需要保有自己的立場、判斷力與思辨能力，主動質疑 AI 的回答，而不是被動接受。",

            paragraph3:
              "在許銀雄博士看來，科技最終仍應協助人們回到真實世界，建立更有溫度的人際關係。負責任的 AI 除了需要更好的模型，也需要同理心、透明度、治理機制，以及對家庭、朋友、社群與真實生活的重視。",
          },

          references: {
            udn:
              "AI 能聽見孤獨嗎？許銀雄：思辨力，是人與人工智慧的界線",
          },
        },
        altosPartnership: {
          date: "2025 年 10 月 30 日",
          title:
            "源華智醫攜手安圖斯科技，共建高效能 AI 藥物開發平台",
          excerpt:
            "雙方結合生醫 AI、高效能運算與可擴展基礎架構，加速藥物再利用研究。",
          lead:
            "源華智醫與宏碁集團旗下安圖斯科技正式簽署策略合作協議，將共同打造兼具速度、規模與實務研發能力的新世代 AI 藥物開發平台。",
          body: {
            paragraph1:
              "本次合作結合源華智醫在生醫 AI 與藥物再利用的研發能力，以及安圖斯科技在高效能運算與 AI 基礎架構的專業。雙方希望進一步提升模型效能、平台擴展性，以及早期藥物研發流程的執行效率。",
            paragraph2:
              "源華智醫將智慧協奏平台與 Altos aiWorks 串接，支援大規模模型訓練、彈性資源配置與複雜生醫工作流程的高效運行。更穩定的運算基礎，將協助團隊在維持研究流程可追溯性的同時，評估更多元的生醫證據。",
            paragraph3:
              "這項合作是源華智醫技術與生態系布局的重要里程碑。透過 AI、運算與生醫科學的跨域整合，雙方期待讓具潛力的藥物再利用構想，更快成為可擴展、可驗證的研發計畫。",
          },
          references: {
            gbi:
              "源華智醫、安圖斯科技攜手，高效 AI 攻藥物開發",
          },
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
        all: "全部",
        website: "官方網站",
        googleMaps: "Google 地圖",
        logo: "標誌",

        zoomIn: "放大",
        zoomOut: "縮小",
        resetZoom: "重設地圖",
        showPartner: "查看合作夥伴",

        light: "淺色",
        dark: "深色",
        legendTitle: "合作夥伴類型",
        selectAll: "全選",
        selectNone: "清除",
        directions: "查看路線",
        closeDetails: "關閉合作夥伴資訊",
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
const ALL_NAV_ITEMS: {
  key: string;
  page: Page;
}[] = [
  {
    key:
      "nav.about",

    page:
      "about",
  },

  {
    key:
      "nav.technology",

    page:
      "technology",
  },

  {
    key:
      "nav.solutions",

    page:
      "solutions",
  },

  {
    key:
      "nav.news",

    page:
      "news",
  },

  {
    key:
      "nav.investors",

    page:
      "investors",
  },

  {
    key:"nav.partners",
    page:"partners",
  },
];

export const NAV_ITEMS =
  ALL_NAV_ITEMS.filter(
    (item) =>
      FEATURE_FLAGS.investors ||
      item.page !==
        "investors",
  );

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

export type HomeWorkflowDefinition = {
  id: string;
  direction: string;
  icon: "pill" | "dna";
  titleKey: string;
  descriptionKey: string;
};

export const HOME_WORKFLOWS = [
  {
    id:
      "drug-to-disease",

    direction:
      "01",

    icon:
      "pill",

    titleKey:
      "home.workflows.drugToDisease.title",

    descriptionKey:
      "home.workflows.drugToDisease.description",
  },

  {
    id:
      "disease-to-drug",

    direction:
      "02",

    icon:
      "dna",

    titleKey:
      "home.workflows.diseaseToDrug.title",

    descriptionKey:
      "home.workflows.diseaseToDrug.description",
  },
] as const satisfies ReadonlyArray<HomeWorkflowDefinition>;

export type HomeEvidenceLayerDefinition = {
  id:
    | "expression"
    | "structure"
    | "knowledge";
  number: string;
  titleKey: string;
  descriptionKey: string;
};

export const HOME_EVIDENCE_LAYERS = [
  {
    id:
      "expression",

    number:
      "01",

    titleKey:
      "home.evidence.layers.expression.title",

    descriptionKey:
      "home.evidence.layers.expression.description",
  },

  {
    id:
      "structure",

    number:
      "02",

    titleKey:
      "home.evidence.layers.structure.title",

    descriptionKey:
      "home.evidence.layers.structure.description",
  },

  {
    id:
      "knowledge",

    number:
      "03",

    titleKey:
      "home.evidence.layers.knowledge.title",

    descriptionKey:
      "home.evidence.layers.knowledge.description",
  },
] as const satisfies ReadonlyArray<HomeEvidenceLayerDefinition>;

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
      "immune-mediated-skin-diseases",

    label:
      "Immune-Mediated Skin Diseases",

    description:
      "Exploring new therapeutic uses for existing medicines in vitiligo, psoriasis, and other immune-mediated skin conditions.",

    labelKey:
      "solutionsPage.solutionCards.dermatology.label",

    descriptionKey:
      "solutionsPage.solutionCards.dermatology.description",

    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&auto=format",
  },
  {
    id:
      "rare-diseases",
    label:
      "Rare Diseases",
    description:
      "Accelerating treatment timelines for orphan conditions where de novo drug development is prohibitively slow and expensive.",
    labelKey:
      "solutionsPage.solutionCards.rareDiseases.label",
    descriptionKey:
      "solutionsPage.solutionCards.rareDiseases.description",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop&auto=format",
  },
  {
    id:
      "neurodegeneration",
    label:
      "Neurodegeneration",
    description:
      "Targeting CNS pathways with repurposed molecules to slow progression in Alzheimer's, Parkinson's, and ALS.",
    labelKey:
      "solutionsPage.solutionCards.neurodegeneration.label",
    descriptionKey:
      "solutionsPage.solutionCards.neurodegeneration.description",
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
      "solutionsPage.solutionCards.metabolicDisorders.label",
    descriptionKey:
      "solutionsPage.solutionCards.metabolicDisorders.description",
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
export const TECHNOLOGY_DRUG_TARGET_TAGS = [
  {
    id: "docking",
    labelKey:
      "technology.approaches.drugTarget.tags.docking",
  },
  {
    id: "binding",
    labelKey:
      "technology.approaches.drugTarget.tags.binding",
  },
  {
    id: "wet-lab",
    labelKey:
      "technology.approaches.drugTarget.tags.wetLab",
  },
] as const;

export const TECHNOLOGY_DISEASE_GENE_TAGS = [
  {
    id: "knowledge-graphs",
    labelKey:
      "technology.approaches.diseaseGene.tags.knowledgeGraphs",
  },
  {
    id: "rag-agents",
    labelKey:
      "technology.approaches.diseaseGene.tags.ragAgents",
  },
  {
    id: "gene-expression",
    labelKey:
      "technology.approaches.diseaseGene.tags.geneExpression",
  },
] as const;

export const TECHNOLOGY_ACCELERATED_TAGS = [
  {
    id: "bionemo",
    labelKey:
      "technology.accelerated.tags.bioNeMo",
  },
  {
    id: "cugraph",
    labelKey:
      "technology.accelerated.tags.cuGraph",
  },
  {
    id: "inception",
    labelKey:
      "technology.accelerated.tags.inception",
  },
] as const;

export const TECHNOLOGY_CHALLENGES = [
  {
    id: "integration",
    num: "01",
    titleKey:
      "technology.challenges.items.integration.title",
    bodyKey:
      "technology.challenges.items.integration.body",
  },
  {
    id: "scale",
    num: "02",
    titleKey:
      "technology.challenges.items.scale.title",
    bodyKey:
      "technology.challenges.items.scale.body",
  },
  {
    id: "workflow",
    num: "03",
    titleKey:
      "technology.challenges.items.workflow.title",
    bodyKey:
      "technology.challenges.items.workflow.body",
  },
  {
    id: "interop",
    num: "04",
    titleKey:
      "technology.challenges.items.interoperability.title",
    bodyKey:
      "technology.challenges.items.interoperability.body",
  },
] as const;

export const TECHNOLOGY_PIPELINE_STAGES = [
  {
    id: "drug-id",
    labelKey:
      "technology.portfolio.stages.drugId",
  },
  {
    id: "poc-validation",
    labelKey:
      "technology.portfolio.stages.pocValidation",
  },
  {
    id: "ip-filing",
    labelKey:
      "technology.portfolio.stages.ipFiling",
  },
  {
    id: "pre-clinical",
    labelKey:
      "technology.portfolio.stages.preClinical",
  },
] as const;

export const TECHNOLOGY_PIPELINE_ROWS = [
  {
    id: "autoimmune-vitiligo",
    areaKey:
      "technology.portfolio.rows.autoimmune.area",
    indicationKey:
      "technology.portfolio.rows.autoimmune.indication",
    reached: 3,
  },
  {
    id: "fibrosis-ipf",
    areaKey:
      "technology.portfolio.rows.fibrosis.area",
    indicationKey:
      "technology.portfolio.rows.fibrosis.indication",
    reached: 1,
  },
  {
    id: "neurology-sca",
    areaKey:
      "technology.portfolio.rows.neurology.area",
    indicationKey:
      "technology.portfolio.rows.neurology.indication",
    reached: 1,
  },
] as const;

export type TechnologyStepDefinition = {
  step: string;
  labelKey: string;
  descriptionKey: string;
};

export const steps = [
  {
    step: "01",
    labelKey: "technology.pipelineSteps.definition.label",
    descriptionKey: "technology.pipelineSteps.definition.description",
  },
  {
    step: "02",
    labelKey: "technology.pipelineSteps.orchestration.label",
    descriptionKey: "technology.pipelineSteps.orchestration.description",
  },
  {
    step: "03",
    labelKey: "technology.pipelineSteps.prioritization.label",
    descriptionKey: "technology.pipelineSteps.prioritization.description",
  },
  {
    step: "04",
    labelKey: "technology.pipelineSteps.validation.label",
    descriptionKey: "technology.pipelineSteps.validation.description",
  },
  {
    step: "05",
    labelKey: "technology.pipelineSteps.partnering.label",
    descriptionKey: "technology.pipelineSteps.partnering.description",
  },
] as const satisfies ReadonlyArray<TechnologyStepDefinition>;

// ─── News Page ────────────────────────────────────────────────────────────────────
// ============================================================
// News
// ============================================================

export const NEWS_FILTERS = [
  {
    id: "all",
    labelKey: "news.filters.all",
  },
  {
    id: "press",
    labelKey: "news.filters.press",
  },
  {
    id: "partnership",
    labelKey: "news.filters.partnership",
  },
  {
    id: "event",
    labelKey: "news.filters.event",
  },
  {
    id: "publication",
    labelKey: "news.filters.publication",
  },
] as const;

export type NewsFilterId =
  (typeof NEWS_FILTERS)[number]["id"];

// Articles cannot use "all" as a category.
export type NewsTagId =
  Exclude<NewsFilterId, "all">;

export const TAG_COLOR:
  Record<NewsTagId, string> = {
    press: "#B5473C",
    partnership: "#2f9e6f",
    event: "#5b6ee1",
    publication: "#2F6B8A",
  };

export interface NewsReference {
  outlet: string;
  titleKey: string;
  url: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  tagId: NewsTagId;

  image?: string;
  imageAltKey?: string;

  dateKey: string;
  titleKey: string;
  excerptKey: string;
  leadKey: string;
  bodyKeys: readonly string[];

  references:
    readonly NewsReference[];
}

export interface LocalizedNewsReference {
  outlet: string;
  title: string;
  url: string;
}

export interface LocalizedNewsArticle {
  id: string;
  slug: string;
  tagId: NewsTagId;

  tag: string;
  tagColor: string;

  image?: string;
  imageAlt?: string;

  date: string;
  title: string;
  excerpt: string;
  lead: string;
  body: string[];

  references:
    LocalizedNewsReference[];
}

export function localizeNewsArticle(
  article: NewsArticle,
  t: Translator,
): LocalizedNewsArticle {
  return {
    id:
      article.id,

    slug:
      article.slug,

    tagId:
      article.tagId,

    tag:
      t(
        `news.categories.${article.tagId}`,
      ),

    tagColor:
      TAG_COLOR[article.tagId],

    image:
      article.image,

    imageAlt:
      article.imageAltKey
        ? t(article.imageAltKey)
        : undefined,

    date:
      t(article.dateKey),

    title:
      t(article.titleKey),

    excerpt:
      t(article.excerptKey),

    lead:
      t(article.leadKey),

    body:
      article.bodyKeys.map(
        (key) => t(key),
      ),

    references:
      article.references.map(
        (reference) => ({
          outlet:
            reference.outlet,

          title:
            t(
              reference.titleKey,
            ),

          url:
            reference.url,
        }),
      ),
  };
}

export const ALL_NEWS = [
    {
    id:
      "bio-asia-taiwan-2026",

    slug:
      "bio-asia-taiwan-2026",

    tagId:
      "event",

    dateKey:
      "news.articles.bioAsiaTaiwan2026.date",

    titleKey:
      "news.articles.bioAsiaTaiwan2026.title",

    excerptKey:
      "news.articles.bioAsiaTaiwan2026.excerpt",

    leadKey:
      "news.articles.bioAsiaTaiwan2026.lead",
    
    image: bioAsiaTaiwan2026Image,
    imageAltKey: "news.articles.bioAsiaTaiwan2026.imageAlt",
    bodyKeys: [
      "news.articles.bioAsiaTaiwan2026.body.paragraph1",
      "news.articles.bioAsiaTaiwan2026.body.paragraph2",
      "news.articles.bioAsiaTaiwan2026.body.paragraph3",
    ],

    references: [
      {
        outlet:
          "Repurgenesis LinkedIn",

        titleKey:
          "news.articles.bioAsiaTaiwan2026.references.linkedin",

        url:
          "https://lnkd.in/gfBWmkwn",
      },

      {
        outlet:
          "鉅亨網 Anue",

        titleKey:
          "news.articles.bioAsiaTaiwan2026.references.cnyes",

        url:
          "https://news.cnyes.com/news/id/6535542",
      },

      {
        outlet:
          "BIO Asia–Taiwan",

        titleKey:
          "news.articles.bioAsiaTaiwan2026.references.officialEvent",

        url:
          "https://expo.bioasiataiwan.com/en/",
      },
    ],
  },
  {
    id: "gtc-taipei-2026",
    slug: "gtc-taipei-2026",
    tagId: "event",
    dateKey: "news.articles.gtcTaipei2026.date",
    titleKey: "news.articles.gtcTaipei2026.title",
    excerptKey: "news.articles.gtcTaipei2026.excerpt",
    leadKey: "news.articles.gtcTaipei2026.lead",
    bodyKeys: [
      "news.articles.gtcTaipei2026.body.paragraph1",
      "news.articles.gtcTaipei2026.body.paragraph2",
      "news.articles.gtcTaipei2026.body.paragraph3",
    ],
    image: gtcTaipei2026Image,
    imageAltKey: "news.articles.gtcTaipei2026.imageAlt",
    references: [
      {
        outlet: "自由時報 Liberty Times",
        titleKey: "news.articles.gtcTaipei2026.references.ltn",
        url: "https://stock.ltn.com.tw/article/dce8ntjymv7a",
      },
      {
        outlet: "NVIDIA On-Demand",
        titleKey: "news.articles.gtcTaipei2026.references.nvidiaSession",
        url: "https://www.nvidia.com/en-us/on-demand/playlist/playList-60b0b94a-7ace-4948-8e0a-e87058bc3e5a/?gtcnavinherit=true",
      },
      {
        outlet: "NVIDIA",
        titleKey: "news.articles.gtcTaipei2026.references.nvidiaEvent",
        url: "https://www.nvidia.com/en-tw/gtc/taipei/",
      },
    ],
  },
  {
    id: "international-recognition-2026",
    slug: "international-recognition-2026",
    tagId: "press",
    dateKey: "news.articles.internationalRecognition2026.date",
    titleKey: "news.articles.internationalRecognition2026.title",
    excerptKey: "news.articles.internationalRecognition2026.excerpt",
    leadKey: "news.articles.internationalRecognition2026.lead",
    bodyKeys: [
      "news.articles.internationalRecognition2026.body.paragraph1",
      "news.articles.internationalRecognition2026.body.paragraph2",
      "news.articles.internationalRecognition2026.body.paragraph3",
    ],
    references: [
      {
        outlet: "工商時報 Commercial Times",
        titleKey: "news.articles.internationalRecognition2026.references.ctee",
        url: "https://www.ctee.com.tw/news/20260521701577-430503",
      },
      {
        outlet: "REMEDi4ALL",
        titleKey: "news.articles.internationalRecognition2026.references.idr26",
        url: "https://remedi4all.org/2026-international-drug-repurposing-conference/",
      },
      {
        outlet: "Bio-IT World",
        titleKey: "news.articles.internationalRecognition2026.references.bioIt",
        url: "https://www.bio-itworldexpo.com/",
      },
    ],
  },
  {
    id: "research-posters-2026",
    slug: "research-posters-2026",
    tagId: "publication",
    dateKey: "news.articles.researchPosters2026.date",
    titleKey: "news.articles.researchPosters2026.title",
    excerptKey: "news.articles.researchPosters2026.excerpt",
    leadKey: "news.articles.researchPosters2026.lead",
    bodyKeys: [
      "news.articles.researchPosters2026.body.paragraph1",
      "news.articles.researchPosters2026.body.paragraph2",
      "news.articles.researchPosters2026.body.paragraph3",
    ],
    references: [],
  },
  {
    id: "idr-bioit-selected-2026",
    slug: "idr-bioit-selected-2026",
    tagId: "event",
    dateKey: "news.articles.idrBioitSelected2026.date",
    titleKey: "news.articles.idrBioitSelected2026.title",
    excerptKey: "news.articles.idrBioitSelected2026.excerpt",
    leadKey: "news.articles.idrBioitSelected2026.lead",
    bodyKeys: [
      "news.articles.idrBioitSelected2026.body.paragraph1",
      "news.articles.idrBioitSelected2026.body.paragraph2",
      "news.articles.idrBioitSelected2026.body.paragraph3",
    ],
    image: intlConferencesImage,
    imageAltKey: "news.articles.idrBioitSelected2026.imageAlt",
    references: [
      {
        outlet: "經濟日報 Economic Daily News",
        titleKey: "news.articles.idrBioitSelected2026.references.udn",
        url: "https://money.udn.com/money/story/5612/9472011",
      },
      {
        outlet: "環球生技月刊 GBI Monthly",
        titleKey: "news.articles.idrBioitSelected2026.references.gbi",
        url: "https://news.gbimonthly.com/tw/invest/show.php?num=85843",
      },
      {
        outlet: "ScienceOpen / Drug Repurposing Central",
        titleKey: "news.articles.idrBioitSelected2026.references.scienceOpen",
        url: "https://www.scienceopen.com/hosted-document?doi=10.14293%2FiDR.26.019YH",
      },
    ],
  },
  {
    id: "gtc-finalist-2026",
    slug: "gtc-finalist-2026",
    tagId: "press",
    dateKey: "news.articles.gtcFinalist2026.date",
    titleKey: "news.articles.gtcFinalist2026.title",
    excerptKey: "news.articles.gtcFinalist2026.excerpt",
    leadKey: "news.articles.gtcFinalist2026.lead",
    bodyKeys: [
      "news.articles.gtcFinalist2026.body.paragraph1",
      "news.articles.gtcFinalist2026.body.paragraph2",
      "news.articles.gtcFinalist2026.body.paragraph3",
    ],
    references: [
      {
        outlet: "環球生技月刊 GBI Monthly",
        titleKey: "news.articles.gtcFinalist2026.references.gbi",
        url: "https://news.gbimonthly.com/tw/invest/show.php?num=84630",
      },
    ],
  },
  {
    id: "gtc-preview-2026",
    slug: "gtc-preview-2026",
    tagId: "event",
    dateKey: "news.articles.gtcPreview2026.date",
    titleKey: "news.articles.gtcPreview2026.title",
    excerptKey: "news.articles.gtcPreview2026.excerpt",
    leadKey: "news.articles.gtcPreview2026.lead",
    bodyKeys: [
      "news.articles.gtcPreview2026.body.paragraph1",
      "news.articles.gtcPreview2026.body.paragraph2",
      "news.articles.gtcPreview2026.body.paragraph3",
    ],
    references: [
      {
        outlet: "Repurgenesis LinkedIn",
        titleKey: "news.articles.gtcPreview2026.references.linkedin",
        url: "https://www.linkedin.com/posts/tzutang-lin_nvidiagtc-ai-drugdiscovery-activity-7439267330905354240-09jS",
      },
      {
        outlet: "NVIDIA",
        titleKey: "news.articles.gtcPreview2026.references.nvidia",
        url: "https://www.nvidia.com/gtc/",
      },
      {
        outlet: "環球生技月刊 GBI Monthly",
        titleKey: "news.articles.gtcPreview2026.references.gbi",
        url: "https://news.gbimonthly.com/tw/invest/show.php?num=84630",
      },
    ],
  },
  {
    id: "president-ai-interview-2026",
    slug: "president-ai-interview-2026",
    tagId: "press",
    dateKey: "news.articles.presidentAiInterview2026.date",
    titleKey: "news.articles.presidentAiInterview2026.title",
    excerptKey: "news.articles.presidentAiInterview2026.excerpt",
    leadKey: "news.articles.presidentAiInterview2026.lead",
    image: AICompanionImage,
    imageAltKey: "news.articles.presidentAiInterview2026.imageAlt",
    bodyKeys: [
      "news.articles.presidentAiInterview2026.body.paragraph1",
      "news.articles.presidentAiInterview2026.body.paragraph2",
      "news.articles.presidentAiInterview2026.body.paragraph3",
    ],
    references: [
      {
        outlet: "元氣網 UDN Health",
        titleKey: "news.articles.presidentAiInterview2026.references.udn",
        url: "https://health.udn.com/health/story/5999/9247942",
      },
    ],
  },
  {
    id: "altos-partnership-2025",
    slug: "altos-partnership-2025",
    tagId: "partnership",
    dateKey: "news.articles.altosPartnership.date",
    titleKey: "news.articles.altosPartnership.title",
    excerptKey: "news.articles.altosPartnership.excerpt",
    leadKey: "news.articles.altosPartnership.lead",
    bodyKeys: [
      "news.articles.altosPartnership.body.paragraph1",
      "news.articles.altosPartnership.body.paragraph2",
      "news.articles.altosPartnership.body.paragraph3",
    ],
    references: [
      {
        outlet: "環球生技月刊 GBI Monthly",
        titleKey: "news.articles.altosPartnership.references.gbi",
        url: "https://news.gbimonthly.com/tw/invest/show.php?num=81158",
      },
    ],
  },
] as const satisfies
  ReadonlyArray<NewsArticle>;

export function getArticleBySlug(
  slug: string,
): NewsArticle | undefined {
  return ALL_NEWS.find(
    (article) =>
      article.slug === slug,
  );
}

export type NewsPosterCardDefinition = {
  id: string;

  eventKey: string;
  titleKey: string;
  descriptionKey: string;
  metaKey: string;

  pdfUrl: string;
  filename: string;

  /*
   * Determines which article pages show
   * this individual poster card.
   */
  articleSlugs: readonly string[];
};

export const NEWS_POSTER_CARDS:
  ReadonlyArray<NewsPosterCardDefinition> = [
    {
      id:
        "gtc-2026-poster",

      eventKey:
        "news.posters.cards.gtc2026.event",

      titleKey:
        "news.posters.cards.gtc2026.title",

      descriptionKey:
        "news.posters.cards.gtc2026.description",

      metaKey:
        "news.posters.cards.gtc2026.meta",

      pdfUrl:
        gtc2026PosterPdf,

      filename:
        "Repurgenesis-NVIDIA-GTC-2026-P81062.pdf",

      articleSlugs: [
        "research-posters-2026",
      ],
    },

    {
      id:
        "bioit-2026-poster",

      eventKey:
        "news.posters.cards.bioIt2026.event",

      titleKey:
        "news.posters.cards.bioIt2026.title",

      descriptionKey:
        "news.posters.cards.bioIt2026.description",

      metaKey:
        "news.posters.cards.bioIt2026.meta",

      pdfUrl:
        bioIt2026PosterPdf,

      filename:
        "Repurgenesis-BioIT-World-2026-P62.pdf",

      articleSlugs: [
        "research-posters-2026",
      ],
    },

    {
      id:
        "idr26-poster",

      eventKey:
        "news.posters.cards.idr26.event",

      titleKey:
        "news.posters.cards.idr26.title",

      descriptionKey:
        "news.posters.cards.idr26.description",

      metaKey:
        "news.posters.cards.idr26.meta",

      pdfUrl:
        idr26PosterPdf,

      filename:
        "Repurgenesis-iDR26-Poster.pdf",

      articleSlugs: [
        "research-posters-2026",
      ],
    },
  ];

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
export type AboutTimelinePhase =
  | "preparation"
  | "operations";

export type AboutTimelineItem = {
  id: string;
  year: string;
  month: string;
  phase: AboutTimelinePhase;
  eventKeys: readonly string[];
};

export const ABOUT_TIMELINE = [
  {
    id:
      "2023-06-ai-team",

    year:
      "2023",

    month:
      "06",

    phase:
      "preparation",

    eventKeys: [
      "about.journey.timeline.teamEstablished.event",
    ],
  },

  {
    id:
      "2023-07-ntu-collaboration",

    year:
      "2023",

    month:
      "07",

    phase:
      "preparation",

    eventKeys: [
      "about.journey.timeline.ntuCollaboration.event",
    ],
  },

  {
    id:
      "2024-04-nycu-collaboration",

    year:
      "2024",

    month:
      "04",

    phase:
      "preparation",

    eventKeys: [
      "about.journey.timeline.nycuCollaboration.event",
    ],
  },

  {
    id:
      "2025-08-company-established",

    year:
      "2025",

    month:
      "08",

    phase:
      "operations",

    eventKeys: [
      "about.journey.timeline.companyEstablished.event",
    ],
  },

  {
    id:
      "2025-10-nvidia-inception",

    year:
      "2025",

    month:
      "10",

    phase:
      "operations",

    eventKeys: [
      "about.journey.timeline.nvidiaInception.event",
    ],
  },

  {
    id:
      "2026-03-patent-and-gtc",

    year:
      "2026",

    month:
      "03",

    phase:
      "operations",

    eventKeys: [
      "about.journey.timeline.vitiligoPatent.event",
      "about.journey.timeline.gtcTopEight.event",
    ],
  },

  {
    id:
      "2026-05-international-conferences",

    year:
      "2026",

    month:
      "05",

    phase:
      "operations",

    eventKeys: [
      "about.journey.timeline.idr26Presentation.event",
      "about.journey.timeline.bioItPresentation.event",
    ],
  },
] as const satisfies
  ReadonlyArray<AboutTimelineItem>;

export const ABOUT_PAGE_DATA = {
  introImage:
    AICompanionImage,
  introImageAltKey:
    "about.intro.imageAlt",
};


export type LeadershipMemberDefinition = {
  id: string;
  image: string;
  imagePosition?: string;

  nameKey: string;
  roleKey: string;
  bioKey: string;

  email?: string;
  linkedinUrl?: string;
};

const CHEN_PROFILE = {
  image: memberOneImage,
  /*
   * Move the photo slightly downward
   * inside the cropped image frame.
   */
  imagePosition:
    // "center 5%",
    "center -20%",

  nameKey:
    "about.leadership.members.memberOne.name",

  roleKey:
    "about.leadership.members.memberOne.role",

  bioKey:
    "about.leadership.members.memberOne.bio",
  linkedinUrl:
    "https://www.linkedin.com/in/steven-han-min-chen-b4341237/",
} as const;

const HSU_PROFILE = {
  image: memberTwoImage,

  nameKey:
    "about.leadership.members.memberTwo.name",

  roleKey:
    "about.leadership.members.memberTwo.role",

  bioKey:
    "about.leadership.members.memberTwo.bio",

  email:
    "yh.hsu@repurgenesis.com",

  linkedinUrl:
    "https://www.linkedin.com/in/yinhsong-hsu-740b0999/",
} as const;


export const LEADERSHIP_MEMBERS = [
  {
    id: "chen-1",
    ...CHEN_PROFILE,
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