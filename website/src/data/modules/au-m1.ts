import type { CourseModule } from '../../types/course';

const auM1: CourseModule = {
  id: 'au-m1',
  title: 'The Honest Map of AI in Audit',
  icon: 'target',
  summary: 'Where AI genuinely sits in the audit — the engagement walked stage by stage, the honest headline of full-population testing and its caveats, why a profession built on signatures and inspection is an unusually bad place for fluent guessing, and why most firm pilots die of governance rather than technology.',
  lessons: [
    {
      id: 'au1l1',
      title: 'What This Course Is, and Is Not',
      sectionLabel: 'Scope',
      diagram: 'AuditScopeSafety',
      slides: [
        {
          heading: 'Orientation, Not Audit Guidance',
          body: 'This course is a map of where AI meets financial audit, written for people who do the work: staff, managers, partners, and the methodology owners who decide what engagement teams may touch. It is orientation, not audit guidance, and the distinction is load-bearing. What a given engagement must document, what a firm may rely on, and what an inspector will accept vary by jurisdiction, by framework — ISA territory and PCAOB territory answer some questions differently — and by each firm\'s own methodology, which sits closer to your engagement than any course can. So the course deliberately answers at the level that holds everywhere: the shape of the arguments, the vocabulary, and the questions worth asking. Where an answer is jurisdictional or firm-specific, it says so, because knowing that a question is local is itself the useful knowledge, and pretending otherwise is how orientation material quietly turns into bad guidance.',
          bullets: [
            'Orientation for practitioners: the map, the vocabulary and the questions — never a methodology or a basis for a procedure',
            'Requirements vary by jurisdiction, by framework and by firm methodology, and the course does not pretend otherwise',
            'ISA territory and PCAOB territory answer some questions differently, and your firm\'s methodology sits closer still',
            'Where the honest answer is that it depends on your firm and your regulator, the course says exactly that',
          ],
        },
        {
          heading: 'The Dual Question',
          body: 'The course borrows a framing that has served other professions on this site: two questions, held at once. The first is what AI does to your audit work — the tools that read journals, contracts, confirmations and minutes, and what using them does to evidence, documentation and review. The second is what your audit work does about AI — because whether or not your team uses a single tool, the client already does, in provision models, fair-value marks, fraud filters and automated postings, so the numbers under audit are model-touched either way. The first question occupies the first half of the course; the second occupies the third module; the firm and the file, which have to hold both questions at once, close it. Neither question is optional, and answering one well while ignoring the other is the most common way firms get this wrong.',
          bullets: [
            'Question one: what AI does to your audit work — reading, flagging, drafting, and what that does to evidence',
            'Question two: what your audit does about the client\'s AI — the numbers are model-touched whether you look or not',
            'The two halves meet in the firm and the file, which must hold both questions on every engagement',
            'Answering one question well while ignoring the other is the commonest failure, and it runs in both directions',
          ],
        },
        {
          heading: 'What Changes, and What Does Not',
          body: 'It helps to fix, before the detail, what this technology moves and what it leaves alone. What moves is the cost of reading: tools can now pass over every journal line, every contract in the data room, every confirmation reply, and surface what looks unusual — work that sampling and staffing once rationed. What does not move is everything the profession would recognise as the job. Professional scepticism is not automatable, because it is a disposition, not a procedure. The evidence standards still ask, in substance, whether what is in the file is relevant and reliable, however it was found. The documentation duty still asks whether a reviewer can follow what was done. And the signature still belongs to a person who answers for the opinion. The course returns to these four fixed points repeatedly, because every tempting mistake in this territory is a quiet attempt to move one of them.',
          bullets: [
            'What moves: the cost of reading — every line, every contract, every reply, flagged for attention',
            'What does not: scepticism, the evidence standard, the documentation duty and the signature',
            'Scepticism is a disposition, not a procedure, which is why no tool can perform it for you',
            'Most mistakes in this territory are quiet attempts to relocate one of the four fixed points',
          ],
        },
      ],
    },
    {
      id: 'au1l2',
      title: 'Where AI Actually Sits in the Audit',
      diagram: 'AuditAIMap',
      slides: [
        {
          heading: 'The Engagement, Walked',
          body: 'Set the brochure aside and walk the engagement. In risk assessment and planning, tools digest prior-year files, board minutes and industry material to suggest where risk might sit. In journal-entry testing, they score every posting against patterns worth a look — weekend entries, round amounts, unusual account pairings, back-dated postings. In document and contract review, they extract terms, dates and obligations from populations too large to read. Around confirmations, they chase, match replies and flag exceptions. In analytics, they extend the disaggregation and expectation work auditors already do to a finer grain. And in drafting, they produce first versions of memos, summaries and client requests. Every one of these sits inside an existing procedure; none of them is a new procedure. That placement matters, because a tool assisting a procedure inherits the procedure\'s evidence rules, and the auditor performing it still owns the conclusion.',
          bullets: [
            'Planning and risk assessment: prior files, minutes and industry material digested into suggestions, not risk assessments',
            'Journal-entry testing: every posting scored against patterns worth attention rather than a sample scored deeply',
            'Documents, contracts and confirmations: extraction, matching and exception-flagging across whole populations',
            'Drafting and summarisation: first versions of memos and requests, which are the beginning of work, not the end',
          ],
        },
        {
          heading: 'The Brochure and the Floor',
          body: 'Between what a tool genuinely does and what its marketing implies sits most of the disappointment in this field. The brochure says the tool finds fraud; on the floor it ranks journal entries by unusualness, and unusual is mostly legitimate — month-end corrections, one-off transactions, a new revenue stream the model has not seen before. The brochure says it reviews contracts; on the floor it extracts clauses with good but imperfect recall, and the misses are silent. The brochure says it automates confirmations; on the floor it automates the chasing and the matching, while the judgement about an exception remains exactly where it was. None of this makes the tools useless — the compression of reading time is real and large. It makes them assistants with a specific shape, and buying decisions and reliance decisions both go wrong when the shape is taken from the brochure.',
          bullets: [
            'Ranked unusualness is not detected fraud: most flags are legitimate, and the ranking is the actual product',
            'Extraction has good but imperfect recall, and what it misses it misses silently',
            'Automated confirmation handling automates chasing and matching; the exception judgement does not move',
            'The reading-time compression is real and large — the error is taking the tool\'s shape from the brochure',
          ],
        },
        {
          heading: 'The Pattern Under the Map',
          body: 'Walk back over the map and one pattern covers all of it: AI compresses reading and flagging, and stops there. It does not perform procedures — a procedure includes deciding what the results mean, and the tools do not decide. It does not evaluate evidence — relevance and reliability are judgements about the source and the assertion, and a similarity score is neither. And it does not conclude — a conclusion is a position a person takes and defends, first to a reviewer, eventually perhaps to an inspector. The practical consequence is a simple sorting rule for any claimed capability: locate it on the line that runs from reading, through flagging, to deciding. Left of the line, expect genuine and growing competence. Right of it, expect a demonstration that worked on well-behaved documents. This one rule filters most vendor conversations, and most internal enthusiasm, faster than any evaluation framework.',
          bullets: [
            'The reliable pattern: compression of reading and flagging, across every stage of the engagement',
            'Performing a procedure includes deciding what the results mean, which is precisely what tools do not do',
            'Relevance and reliability are judgements about source and assertion; a similarity score is neither',
            'Sort any claimed capability along reading, flagging, deciding — and be sceptical to the right of that line',
          ],
        },
      ],
    },
    {
      id: 'au1l3',
      title: 'From Sampling to the Full Population',
      diagram: 'FullPopulationTesting',
      slides: [
        {
          heading: 'Sampling Was a Concession',
          body: 'Sampling has always been a concession, and it is worth remembering to what. Auditors never believed thirty items out of thirty thousand were the ideal evidence; they believed reading thirty thousand was impossible at a price anyone would pay, and built a discipline — statistical and otherwise — for saying something defensible about a population from a fraction of it. That discipline is genuine, and the concession was still a concession: every sample leaves most of the population unread, and everyone signing knew it. What has changed is the cost of reading. A tool can now pass over every journal line, every invoice, every contract in the population, at a cost closer to computing than to labour. The honest headline of AI in audit is exactly this — the constraint that made sampling necessary is gone in specific, bounded places — and honest headlines deserve precise handling, which is what the next two slides are for.',
          bullets: [
            'Sampling was never the ideal — it was the defensible answer to reading being unaffordable',
            'The discipline built around sampling is real, and it still left most of the population unread',
            'What changed is the cost of reading: whole populations can now be passed over at machine cost',
            'The headline is honest but bounded, which is why the caveats that follow are part of the claim',
          ],
        },
        {
          heading: 'What Full Population Actually Buys',
          body: 'Full-population work buys two things, and they are worth naming exactly. First, coverage of the haystack: nothing was excluded by the sample design, so the unusual item in the unexamined ninety-nine per cent — the one a well-designed sample was always statistically likely to miss — has at least been read by something. Risks that live in rare items, unusual postings and related-party traces among them, are exactly where that matters. Second, better targeting: instead of spreading effort evenly across a random selection, follow-up hours concentrate on the items most worth a person\'s attention, ranked by how anomalous they look. Notice what is absent from this list: neither benefit is a conclusion. Coverage means everything was read, not that everything read was understood; targeting means attention lands better, not that whatever it lands on is a misstatement. The buying is real, and all of it sits upstream of judgement.',
          bullets: [
            'Coverage: nothing excluded by sample design, so rare unusual items have at least been read by something',
            'Targeting: follow-up hours concentrate where the anomaly ranking points, instead of spreading evenly at random',
            'Risks living in rare items — unusual postings, related-party traces — are where coverage genuinely matters',
            'Neither benefit is a conclusion: both sit upstream of the judgement work, which has not moved',
          ],
        },
        {
          heading: 'The Caveat That Keeps It Honest',
          body: 'Now the caveat that keeps the headline honest, and it is canon for this whole course: more coverage is not automatically more assurance. A shallow pass over everything can be weaker evidence than a deep test of a well-chosen sample, because assurance comes from what the auditor did about what was found, not from how much was scanned. A flagged outlier is a question, not a finding: until someone follows it to the source documents — the invoice, the approval, the contract, the bank entry — it is a statistical observation about the population, and statistical observations do not support opinions. And that follow-up still costs what it always cost, which is why full-population testing that flags ten thousand items has not automated the audit; it has generated ten thousand decisions about where the follow-up budget goes. Coverage claims in planning discussions deserve the same scepticism as any other confident assertion.',
          bullets: [
            'More coverage is not more assurance: a shallow pass over everything can be weaker than a deep sample',
            'A flagged outlier is a question — it points to evidence only when followed to the source documents',
            'Follow-up costs what it always cost, and ten thousand flags is ten thousand budgeting decisions',
            'Treat a coverage claim in planning the way you would treat any confident assertion: ask what was actually done',
          ],
        },
      ],
    },
    {
      id: 'au1l4',
      title: 'Why Audit Is an Unusually Bad Place to Guess',
      diagram: 'AuditExposure',
      slides: [
        {
          heading: 'The File Outlives the Engagement',
          body: 'Every profession has somewhere it can afford to be sloppy. Audit\'s problem is that its written record is examined, years later, by people whose entire job is scepticism about the person who wrote it. An engagement file is reviewed within the team, then, on many engagements, by an engagement quality reviewer, then possibly selected for internal inspection, then possibly for a regulator\'s inspection two or three years after sign-off. Each layer reads with less context and less charity than the last. A working assumption that seemed obviously fine in March of the engagement year must still look defensible to a stranger reading in a different economic climate, after the client has restated, when hindsight has hardened into certainty. This is the environment into which model-drafted text and model-produced figures are now arriving — a written record built to be doubted, examined by professional doubters, on a delay that removes every author from the room.',
          bullets: [
            'The file is read by team review, quality review, internal inspection and regulators — with falling charity at each step',
            'Inspection arrives years after sign-off, with hindsight hardened and the authors gone',
            'What seemed obviously fine during fieldwork must survive a sceptical stranger in a different climate',
            'Model output is entering the one written record professionally built to be doubted',
          ],
        },
        {
          heading: 'Under a Signature',
          body: 'Elsewhere on this site, a fabricated figure is an embarrassment: a wrong number in an email, a bad slide, an apology. In an audit file it is something else, because everything in the file sits under a signature that asserts the work supports the opinion. A figure a tool invented, a citation to a document that does not say what the workpaper claims, a summary of a contract clause that is not in the contract — these do not read, later, as tool errors. They read as evidence that was not obtained, work that was not done, and reliance that was not justified, attributed to the people who signed. The tool will not be in the room when the question is asked, and no engagement letter with a vendor changes whose name is on the file. The distance between an embarrassing mistake and a professional finding is the signature, and audit is the profession that invented putting one on everything.',
          bullets: [
            'Everything in the file sits under a signature asserting that the work supports the opinion',
            'An invented figure or citation reads later as work not done, not as a tool malfunction',
            'Attribution lands on the people who signed, and the tool will not be in the room',
            'The signature is what separates an embarrassing error from a professional finding',
          ],
        },
        {
          heading: 'Fluency Reads as Care',
          body: 'The finance course on this site makes an argument about confident wrong numbers; here is its audit form. The signals an experienced reviewer uses to judge whether work was done carefully — precise figures, tidy cross-references, the cadence of a well-drafted memo, terminology used correctly — are exactly the signals a language model produces by default, whether or not any care occurred. A fabricated number arrives with plausible precision. An invented citation arrives formatted like a real one. A summary that quietly dropped the one exception arrives more polished than the honest, hedged version a junior would have written. This breaks a reviewer\'s oldest heuristic: sloppy presentation used to flag sloppy work, so clean presentation earned a measure of trust. That correlation is gone from anything a model touched. Fluency is now a property of the generator, not of the underlying work, and review habits calibrated over whole careers quietly assume otherwise.',
          bullets: [
            'The cues reviewers read as care — precision, tidy references, correct terminology — are the model\'s default register',
            'Fabrications arrive formatted exactly like diligence, which is what makes them dangerous here',
            'The old heuristic — clean presentation suggests careful work — fails on anything a model touched',
            'Fluency is a property of the generator, not the work, and review habits need recalibrating to that',
          ],
        },
      ],
    },
    {
      id: 'au1l5',
      title: 'Where Pilots Die in Audit Firms',
      diagram: 'AuditPilotsDie',
      slides: [
        {
          heading: 'The Graveyard',
          body: 'Audit firms have now run enough AI pilots for the failure patterns to be recognisable, and most deaths happen before the technology gets a chance to disappoint anyone. The commonest grave is client data access nobody cleared: a pilot planned around real engagement files discovers, months in, that engagement terms, confidentiality duties and sometimes the client\'s own regulators stand between the data and the tool, and nobody had asked. Next to it lies methodology approval that arrives after the busy season: a tool cleared for use in April is a tool nobody will risk learning in the one period the firm actually works, so by the next busy season the licence has lapsed and the champion has moved on. Both deaths share a cause. The pilot was planned as a technology project, and in an audit firm the binding constraints were never technical in the first place.',
          bullets: [
            'Most pilots die before the technology gets a chance to disappoint anyone',
            'Client data access nobody cleared: engagement terms and confidentiality duties discovered months in',
            'Methodology approval landing after busy season means a tool nobody will risk learning until next year',
            'The shared cause: pilots planned as technology projects when the binding constraints were never technical',
          ],
        },
        {
          heading: 'The Quieter Deaths',
          body: 'Two quieter failures kill the pilots that survive the first year. The first is inspection fear. A partner weighing a new tool is weighing an asymmetry: the upside is saved hours, the downside is standing in front of an inspector defending a novel way of working with no precedent to point at. Rational partners retreat to the old way, and a firm that has not decided — at firm level — how it will explain tool reliance to its regulator has silently decided that its partners will not rely. The second is transfer failure: a tool tuned on one engagement\'s documents meets another engagement\'s chaos — different systems, different formats, a client whose contracts live in scanned images — and the accuracy that justified the rollout quietly does not come with it. The pilot\'s results were real. They were results about the pilot.',
          bullets: [
            'The partner\'s asymmetry: saved hours against defending a novel approach to an inspector without precedent',
            'A firm that has not decided how to explain tool reliance has decided its partners will not rely',
            'A tool tuned on one engagement\'s documents rarely survives another engagement\'s formats and chaos',
            'Pilot results are results about the pilot — transfer to the next engagement is a separate claim',
          ],
        },
        {
          heading: 'What the Survivors Had',
          body: 'The pilots that became practice share three unglamorous features. They had a named owner — one person answerable for the tool\'s behaviour, its approval status and its results, which sounds like bureaucracy until you watch an unowned pilot dissolve the first time it produces a strange output and everyone assumes someone else is looking into it. They had a bounded first use: one procedure, one document type, one engagement whose partner volunteered, chosen so that failure would be cheap, contained and informative rather than a firm-wide embarrassment. And they had methodology and quality sign-off before rollout, not after — the people who answer for the firm\'s system of quality management involved while the answer could still be no. None of this is technical, which is the point: the survivors treated adoption as an extension of how the firm already governs its work, not as an exception to it.',
          bullets: [
            'A named owner: one person answerable for the tool\'s behaviour, approval status and results',
            'A bounded first use: one procedure, one document type, one volunteer engagement, cheap to fail',
            'Methodology and quality sign-off before rollout, while the answer could still be no',
            'Nothing on the list is technical — survivors extended the firm\'s existing governance rather than working around it',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'This course declines to state what documentation a particular tool use requires. Why?',
      options: [
        'Because no standard-setter has yet written documentation requirements for AI-assisted audit work, so there is nothing definitive to state yet',
        'Because documentation is a matter of professional judgement on which general guidance would be inappropriate',
        'Because the answer varies by jurisdiction, framework and firm methodology, and a course that holds everywhere must stay at that level',
        'Because documentation questions belong to the final module of the course rather than the first',
      ],
      correct: 2,
    },
    {
      q: 'Across risk assessment, journal-entry testing, document review and drafting, what is the one pattern in what current tools contribute?',
      options: [
        'They compress reading and flagging; they do not perform procedures, evaluate evidence or conclude',
        'They perform the routine procedures end to end, leaving evaluation and conclusions to the engagement team',
        'They replace sampling in substantive testing but add little to risk assessment or drafting',
        'They mainly reduce documentation effort, since the reading itself still has to be done by a person',
      ],
      correct: 0,
    },
    {
      q: 'A full-population journal-entry tool flags 4,000 postings as unusual. What are those flags?',
      options: [
        'Misstatements that the team must now correct, or have management correct, before sign-off',
        'Evidence of a control weakness, since a well-controlled ledger should not produce that many anomalies',
        'Noise to be removed by tightening the tool\'s threshold until the count becomes manageable',
        'Questions — statistical observations answered only by following them to the source documents',
      ],
      correct: 3,
    },
    {
      q: 'How can testing every item in a population produce weaker evidence than testing a sample?',
      options: [
        'It cannot — coverage of every item is by definition stronger evidence than coverage of a fraction of them',
        'When the full-population pass is shallow, because assurance comes from what was done about findings, not from how much was scanned',
        'Only when the tool\'s error rate is higher than the sampling risk that it replaced',
        'When the population is small enough that a sample would have covered most of it anyway',
      ],
      correct: 1,
    },
    {
      q: 'A model-drafted workpaper cites a contract clause that does not exist. Years later, at inspection, how does that read?',
      options: [
        'As evidence not obtained and reliance not justified, attributed to the people who signed',
        'As a tool malfunction, provided the firm can show the tool was on its approved list at the time',
        'As a documentation tidiness issue, since the underlying procedure may still have been performed',
        'As the vendor\'s liability, transferred through the licensing terms the firm negotiated',
      ],
      correct: 0,
    },
    {
      q: 'A model-drafted memo arrives polished, precisely formatted and fluent. What does that presentation tell a reviewer about the underlying work?',
      options: [
        'That the drafter took care, since polish has always correlated with careful work',
        'That the memo is more likely to be accurate, because fluency errors and factual errors tend to co-occur',
        'That the figures are probably right, though the judgements will still need review',
        'Nothing — fluency is a property of the generator, not of the work behind it',
      ],
      correct: 3,
    },
    {
      q: 'What did the audit-firm pilots that became standing practice have in common?',
      options: [
        'A more capable tool than the failed pilots had, selected through a longer vendor evaluation',
        'A named owner, a bounded first use, and methodology and quality sign-off before rollout',
        'Firm-wide deployment from the start, so that the benefits were visible at scale early',
        'A start date outside busy season, giving teams unpressured time to learn the tool',
      ],
      correct: 1,
    },
    {
      q: 'What is the dual question this course is organised around?',
      options: [
        'Whether to build AI capability in-house or buy it from providers, and how to govern each choice',
        'How to automate audit procedures, and how to document that automation for inspection',
        'What AI does to your audit work, and what your audit work does about the client\'s AI',
        'Whether AI raises or lowers audit quality, and how a firm should measure the difference',
      ],
      correct: 2,
    },
  ],
};

export default auM1;
