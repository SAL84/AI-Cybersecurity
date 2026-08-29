import type { CourseModule } from '../../types/course';

const auM4: CourseModule = {
  id: 'au-m4',
  title: 'The File, the Firm and the Second Year',
  icon: 'shield',
  summary: 'What holds the whole course together — the inspection that arrives years after the signature, the firm-level decision about which tools deserve reliance before any engagement leans on them, the second-year engagement where the client\'s model and your own tool have both quietly changed, and an honest account of which parts of the auditor\'s job compress and which parts stay stubbornly human.',
  lessons: [
    {
      id: 'au4l1',
      title: 'What the Inspector Will Ask',
      diagram: 'InspectorQuestion',
      slides: [
        {
          heading: 'The File Is Read Years Later, Sceptically',
          body: 'The audit file is an unusual work product: assembled under deadline, then read at leisure, years later, by reviewers and inspectors whose professional duty is scepticism about the team that wrote it. That asymmetry has always disciplined audit work, and AI does not change it — it hands the sceptical reader a new object. The predictable findings write themselves: reliance on a tool the file cannot explain; evidence that turns out to be a screenshot of a results screen; a conclusion resting on output nobody tied back to a source document. None of these is a new category of finding. Inspectors have always asked why the team relied on what it relied on, whether the thing relied on was a junior\'s schedule, a specialist\'s valuation or an analytics routine. The questions are old; the tool is merely the newest thing they attach to.',
          bullets: [
            'The file is written under deadline and read years later by people paid to be sceptical of its authors',
            'Reliance the file cannot explain is a finding, whatever was relied on — junior, specialist or tool',
            'A screenshot records that output existed, not what produced it or what anyone did about it',
            'The inspector\'s AI questions are the profession\'s old questions attached to a new object',
          ],
        },
        {
          heading: 'The Questions, Concretely',
          body: 'The questions themselves are worth rehearsing, because they are answerable in advance or not at all. What did the tool do on this engagement — which procedures did its output feed? What went into it, and was that within what the firm permits? What came out, and where is it now? What did the team do about the output — which flags were followed to source documents, and what happened to the rest? And why was reliance reasonable — what did the team, or the firm on its behalf, actually know about how the tool behaves? These are the workpaper questions from earlier in this course, unchanged by the setting. The uncomfortable follow-up is the one about the misstatement the tool did not flag: the only defensible answer is a file showing that the team\'s procedures did not stop where the tool\'s flags stopped.',
          bullets: [
            'What the tool did, what went in, what came out, what the team did about it, and why reliance was reasonable',
            'The answers exist in advance or not at all — a file cannot be explained backwards three years on',
            'Flags followed to source documents are evidence; flags noted and filed are a list of open questions',
            'The hardest question concerns what the tool missed, and the answer is procedures that did not stop at its flags',
          ],
        },
        {
          heading: 'The Firm Above the File',
          body: 'Above the engagement sits the firm, and above the file sits the firm\'s system of quality management. The quality-management standards — ISQM 1 is the international instrument — ask, in substance, that a firm identify risks to engagement quality and design responses to them. A tool that engagement teams adopted faster than the firm noticed is precisely such a risk: nobody assessed it, nobody monitors it, nobody trained anyone on its failure modes, and yet audit evidence now passes through it. The firm\'s system is inspection territory as well as the individual file, because a gap at firm level predicts findings in files not yet inspected. The firm-level questions are the workpaper question at scale: not why did this team rely on this tool, but how does the firm know, for every team, that the answer is a good one.',
          bullets: [
            'Firm-level quality management is meant to govern how audits are performed, and tools are now part of how',
            'A tool adopted faster than the firm noticed is an unidentified, unanswered risk to engagement quality',
            'A gap in the firm\'s system predicts findings in files that have not been inspected yet',
            'The firm-scale question: how does the firm know every team\'s reliance would survive the same scrutiny',
          ],
        },
      ],
    },
    {
      id: 'au4l2',
      title: 'Before the Firm Relies on a Tool',
      diagram: 'ToolBeforeReliance',
      slides: [
        {
          heading: 'Four Things the Firm Should Know First',
          body: 'Before any engagement team leans on a tool, someone at the firm should be able to answer four questions about it. What was it tested on — whose documents, in which languages, at what quality of scan, and how closely that population resembles the engagements it will actually meet? How does it err — what does it miss, what does it invent, how often, and whether its errors cluster in particular document types rather than spreading evenly? How is it versioned — what changes between releases, on whose schedule, and whether the firm is told before behaviour shifts? And who answers for it — a named person inside the firm who owns the decision to approve it, not a vendor\'s support desk. None of these questions is technical beyond a practitioner\'s reach. They are the questions a firm would ask before relying on any expert whose work feeds audit evidence.',
          bullets: [
            'Tested on what: whose documents, which languages, what scan quality, and how close to your engagements',
            'How it errs: what it misses, what it invents, how often, and where the errors cluster',
            'How it versions: what changes, when, and whether the firm hears about it before behaviour shifts',
            'Who answers: a named owner inside the firm, never a vendor\'s support desk',
          ],
        },
        {
          heading: 'The Approved List Is a Control',
          body: 'From the engagement team\'s side, an approved-tool list reads as bureaucracy — a queue between them and something useful. From the firm\'s side it is a control, and it is worth being precise about what it controls. The list is the record that the validation questions were asked before reliance began, and the mechanism by which the answers reach every engagement rather than only the team that asked. It is also the boundary that keeps client data out of tools nobody assessed. Two failure modes are predictable. A list nobody maintains goes quietly stale while AI features arrive inside software the firm already licenses. And a prohibition with no permitted alternative produces unapproved use that nobody monitors — the worst of both positions, because the firm carries the risk without the visibility. Exception requests are the health signal: a list nobody ever asks to extend is being routed around.',
          bullets: [
            'The list records that validation happened before reliance began, and carries the answers to every team',
            'It is the boundary that keeps client data out of tools the firm has never assessed',
            'An unmaintained list goes stale while AI features arrive inside software already licensed',
            'Prohibition without a permitted route produces unmonitored use; exception requests are the health signal',
          ],
        },
        {
          heading: 'Validation Is Its Own Discipline',
          body: 'What validation actually involves is a discipline of its own, and its shape is familiar to any auditor. Sample the tool\'s reading against a person\'s reading of the same documents, on material that resembles the firm\'s engagements rather than the vendor\'s demonstration set. Measure what it missed and what it invented, separately, because the two errors do different damage in an audit file. Repeat the exercise when the version changes, because last quarter\'s results describe last quarter\'s tool. The method for doing this properly — building evaluation sets, regression testing, measuring against a baseline — is the territory of this site\'s course Does Your AI Actually Work?, and it transfers to audit tools with little adaptation. The audit-specific point is what happens to the results: the validation evidence is itself a record the firm should keep, because the inspector\'s question — why did the firm approve this? — deserves a written answer.',
          bullets: [
            'Sample the tool\'s reading against a person\'s, on documents like yours, not the vendor\'s demonstration set',
            'Measure misses and inventions separately — they do different damage in an audit file',
            'Revalidate on version change: last quarter\'s results describe last quarter\'s tool',
            'Keep the validation evidence — the firm\'s approval decision deserves a written answer too',
          ],
        },
      ],
    },
    {
      id: 'au4l3',
      title: 'The Recurring Engagement Problem',
      diagram: 'RecurringEngagementDrift',
      slides: [
        {
          heading: 'Year Two Is Not Year One Again',
          body: 'A recurring engagement runs on accumulated understanding: the team knows the client, the file rolls forward, and much of year two is testing whether year one\'s picture still holds. AI disturbs this from both directions at once. On the client\'s side, the model behind an estimate may have been retrained, refitted on new data or handed to a new owner, so the understanding documented last year describes a system that no longer exists. On the audit\'s side, the firm\'s own tool may have updated between years — a new version, a new model behind the same interface — so this year\'s flags are not produced by the process that produced last year\'s. Neither change reliably announces itself; both arrive silently inside things that look unchanged. The file must still support a reader comparing the two years, which means the changes have to be found, not assumed away.',
          bullets: [
            'Recurring audits run on rolled-forward understanding, and both sides of it can silently move',
            'The client\'s model may have been retrained or re-owned since the file last described it',
            'The firm\'s own tool may no longer be the process that produced last year\'s evidence',
            'Year-on-year comparability of evidence is a property to establish, not one to assume',
          ],
        },
        {
          heading: 'The Roll-Forward Trap',
          body: 'Same tool as last year is the recurring engagement\'s quietest trap, because the sentence can be true of the licence and false of the tool. The name on the invoice is stable; the model behind the interface is not. A version update can change what gets flagged, what gets missed and how confidently wrong output reads, without any visible difference in the screens the team uses. Rolling reliance forward on the strength of the name means resting this year\'s evidence on last year\'s validation of a different system. The same shape appears on the client\'s side of the file, where a control containing a model that updates is a control that changed between your test date and year-end — module three\'s territory. The general rule is short: reliance decisions are re-earned annually. Re-earning one costs a single honest question — what changed — asked of the vendor, the firm\'s owner for the tool, and the client.',
          bullets: [
            'Same tool as last year can be true of the licence and false of the tool behind it',
            'A version change moves what is flagged and what is missed with no visible change on screen',
            'Rolling reliance forward rests this year\'s evidence on last year\'s validation of a different system',
            'Reliance is re-earned annually, starting with one question: what changed',
          ],
        },
        {
          heading: 'What to Re-Ask Annually',
          body: 'The annual re-ask is short enough to be done and specific enough to matter. Of the firm: has the tool changed since last year — version, underlying model, configuration — and was it revalidated after the change? Of the client: has the model behind each significant estimate been retrained, refitted or re-owned, and does the understanding in last year\'s file still describe it? Of the evidence: do this year\'s flags mean what last year\'s meant — same thresholds, same populations, same definitions — or has a moved threshold quietly changed what clean means? And of the engagement\'s circumstances: has anything moved jurisdiction, changed data arrangements, or altered what may be put into which tool? Then write the answers into the file. A year-two file that shows the team asked these questions is a different document from one that assumed continuity, and a reviewer can tell them apart at a glance.',
          bullets: [
            'Ask the firm: did the tool change this year, and was it revalidated afterwards',
            'Ask the client: was the model retrained or re-owned, and does last year\'s understanding still hold',
            'Ask the evidence: do this year\'s flags mean what last year\'s meant, or did a threshold quietly move',
            'Write the answers down — a file that asked is visibly different from a file that assumed',
          ],
        },
      ],
    },
    {
      id: 'au4l4',
      title: 'The Auditor\'s Job, Honestly',
      diagram: 'AuditJobShift',
      slides: [
        {
          heading: 'What Compresses, and What Does Not',
          body: 'An honest account of what changes starts with what compresses. Reading compresses: contracts, minutes, correspondence and confirmations that consumed junior weeks can be flagged and summarised in hours. Vouching compresses, where the tool can point from a recorded amount to a supporting document and a person confirms the match. Tying populations together compresses, and so does drafting. What does not compress is everything the compression exists to serve: judging what the evidence means once it is assembled, evaluating an estimate\'s assumptions against what the team knows about the business, deciding that an explanation from management does not hold together, having the conversation that follows, and signing. The tool changes the cost of the first list and nothing about the second. The risk is not that judgement gets automated — it is that a firm prices as though it were, and stops paying for the hours judgement takes.',
          bullets: [
            'Reading, vouching, flagging, tying and drafting compress — the work that consumed junior weeks',
            'Judgement, estimate evaluation, the difficult conversation and the signature do not compress',
            'The compression exists to serve the judgement, not to replace it',
            'The commercial risk: pricing as if judgement compressed too, and starving it of hours',
          ],
        },
        {
          heading: 'The Junior-Work Question',
          body: 'The profession\'s judgement has always been trained by volume. A partner who can smell a wrong invoice acquired that sense across thousands of ordinary ones, vouched by hand in the years nobody enjoys. If the machine now does the vouching, the tedium goes — and so does the pattern library the tedium was quietly building. This is a real problem, and the honest position is that the profession has not solved it. It is tempting to wave at higher-value work from day one, but evaluation is a skill built on exposure, and a junior who has never handled the documents has less to evaluate with. The question compounds over time: today\'s partners were trained the old way, so the gap will surface a decade from now, in people promoted on experience they were never given the chance to accumulate. Naming the problem honestly is currently ahead of most published answers to it.',
          bullets: [
            'Judgement was trained by volume: thousands of ordinary documents taught what a wrong one looks like',
            'When the machine vouches, the tedium goes and takes its pattern library with it',
            'Higher-value work from day one assumes evaluation skills that exposure was meant to build',
            'The gap is generational and will surface years from now, which is exactly why it is easy to defer',
          ],
        },
        {
          heading: 'The Emerging Answers, Described as Emerging',
          body: 'Answers are emerging, and they should be described as emerging rather than as solutions. Some firms run deliberate practice: juniors vouch a sample the tool has already read, then compare their reading against the tool\'s and against a senior\'s, which turns the machine\'s coverage into training material rather than a replacement for it. Some rotate juniors through the follow-up on flagged items, which is where documents are still opened and where the strange ones concentrate. Some are redesigning training to teach evidence evaluation earlier, on the theory that the sequence can be reordered even if the volume cannot be replaced. None of this is proven at scale, and the firms experimenting with it mostly do not publish results. What can be said is what module two said about review at volume: the hours the tool frees are the hours judgement needs — if firms spend them there, the trade can be an honest one.',
          bullets: [
            'Deliberate practice: juniors vouch a sample the tool has already read, then compare readings',
            'Rotation through flag follow-up, where documents are still opened and the oddities concentrate',
            'Training redesigned to teach evidence evaluation earlier in the sequence',
            'All emerging, none proven at scale — and the freed hours only help if they are spent on judgement',
          ],
        },
      ],
    },
    {
      id: 'au4l5',
      title: 'Checking This Course Against the Sources',
      diagram: 'AuditSourceLadder',
      sectionLabel: 'References',
      slides: [
        {
          heading: 'How This Course Was Made',
          body: 'This course was drafted by an AI model working to an editorial brief and then edited. It has not been reviewed by a practising auditor, an audit methodology owner or an inspector in any jurisdiction, and it claims no authority. Treat it as orientation: vocabulary, the shape of the arguments, and the questions worth putting to the people whose job it is to be right about them. It is not a basis for an audit procedure, a reliance decision, a documentation approach or a compliance position — each of those needs a source that carries responsibility for the answer, and a course page does not. That is why the lessons name standards bodies and instrument families but never quote a clause, and why they say where an answer is jurisdictional or firm-specific instead of supplying one. Where the course could not be sure of a claim, the claim is not here — the final slide says exactly which ones.',
          bullets: [
            'Model-drafted to an editorial brief and edited — not reviewed by a practising auditor or an inspector',
            'Orientation only: vocabulary, the shape of the arguments, and the questions worth asking',
            'Never a basis for an audit procedure, a reliance decision or a compliance position',
            'Where an answer is jurisdictional or firm-specific, the course says so instead of guessing',
          ],
        },
        {
          heading: 'The Source Ladder',
          body: 'When you read anything about AI in audit, including this course, the useful first question is which rung it came from. At the top sit the standards and the law: the IAASB\'s International Standards on Auditing, PCAOB auditing standards, the quality-management standards, the IESBA Code and national regimes — these bind engagements whether or not anyone has summarised them accurately. Below them sits regulator and inspection guidance: thematic reviews and inspection findings, not standards themselves, but the closest available statement of how the standards will be applied to real files. Below that, academic evidence — the automation-bias literature and the audit-technology research — disinterested and method-transparent, but general and slow. Then practitioner commentary, which is fast, concrete and reviewed by nobody. Vendor material sits last: the only source for what a product actually does, and the least disinterested thing you will ever read about whether it does it well.',
          bullets: [
            'Standards and law bind the engagement; everything beneath them is somebody\'s reading, and readings drift',
            'Inspection guidance and thematic reviews are the nearest statement of how standards meet real files',
            'Academic evidence is disinterested and slow; practitioner commentary is fast and reviewed by nobody',
            'Vendor material is the only source for what a product does, and the least disinterested about how well',
          ],
        },
        {
          heading: 'The Sources This Course Rests On',
          body: 'These are the anchors the lessons were written against, grouped by rung and named by issuing body and subject so you can read them rather than take this course\'s word for anything. They are deliberately unlinked, because links rot and the issuing body\'s own site is where the current text lives. They are also deliberately without clause numbers, because a model-drafted course quoting clause numbers would be exactly the fluent, source-shaped confidence this course has spent four modules warning about. Two caveats matter more than the list itself. Standards and regimes differ by jurisdiction, and nothing here says which instrument governs your engagement — that is a question for your firm\'s methodology, not for a course page. And the final group settles more real questions than all of the others together, because it is the only one that knows your firm, your clients and your engagement letters.',
          bullets: [
            'Standards: the IAASB\'s ISAs on evidence, estimates, risk identification and using the work of experts; ISQM 1 on firm-level quality management; the IESBA Code on confidentiality and independence; PCAOB auditing standards',
            'Regulators and inspection: PCAOB inspection reports, and thematic work from the FRC and other national audit regulators on audit technology and the use of AI in audit',
            'Evidence: the academic literature on automation bias, and the research literature on audit data analytics and on technology adoption in audit practice',
            'Closest to you, and not on this page: your firm\'s methodology, its approved-tool list and its independence rules — the only sources that know your engagement',
          ],
        },
        {
          heading: 'Rejected for Uncertainty, and Keeping Current',
          body: 'This is the course\'s most honest slide: the claims it declined to make because it could not be sure, listed specifically so a practitioner reviewer can treat them as a research agenda rather than a shrug. Each is a real question with a real answer somewhere — in a standard\'s current text, a regulator\'s current position or a firm\'s legal advice — that a model working from training data could not pin down responsibly. On keeping current: the standard-setters named in this module have active projects on technology and AI in audit, and inspection regimes are publishing their early findings now, so positions taken here can quietly date without anything being retracted. Check the issuing body\'s own text rather than any summary, this one included. And if you find an error here, report it — naming sources is an invitation to check them, not a claim to have got them right.',
          bullets: [
            'Declined: whether and when any auditing standard or regulator requires disclosure of AI use in the audit — to those charged with governance, in the auditor\'s report, or in the file; the current IAASB and PCAOB texts and your own regulator\'s position are where the answer lives',
            'Declined: the precise documentation each framework requires when a tool performs the reading — inputs, versions, outputs, review steps; the answer differs between ISA and PCAOB territory and needs the current text of each, read for your framework',
            'Declined: jurisdiction-specific rules on data residency and cross-border processing of audit evidence and client data; this needs local counsel and your firm\'s own data arrangements, and no general course can answer it',
            'Declined: how inspection regimes currently treat AI reliance in live inspections, and where liability sits when a validated, firm-approved tool errs on an engagement — both are moving now, and only current inspection reports and legal advice can say',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'An inspection finds that a team relied on a tool\'s summaries of loan agreements, and the file contains a screenshot of the tool\'s results screen. What is the inspector likely to conclude?',
      options: [
        'That the screenshot is adequate evidence, provided the tool was on the firm\'s approved list at the time of the engagement',
        'That the team should have printed the summaries in full rather than capturing them as an image in the workpaper',
        'That the file shows output existed, but not what went in, what the team did about it, or why reliance was reasonable',
        'That the reliance was acceptable, because inspection is concerned with the audit\'s conclusions rather than with the methods used to reach them',
      ],
      correct: 2,
    },
    {
      q: 'A firm discovers that several engagement teams adopted an AI review tool before anyone at firm level assessed it. In quality-management terms, what has happened?',
      options: [
        'A risk to engagement quality has arisen that the firm\'s quality system did not identify or respond to',
        'Nothing yet — quality management is engaged only when a misstatement is actually missed on a completed engagement',
        'The teams have breached independence requirements, because unapproved tools compromise the firm\'s objectivity',
        'The firm should discipline the teams involved and withdraw the tool, which resolves the quality question entirely',
      ],
      correct: 0,
    },
    {
      q: 'Before engagement teams may lean on a document-reading tool, which question matters most to the firm\'s validation of it?',
      options: [
        'Whether the vendor is large enough to still exist at the end of the retention period that applies to the firm\'s files',
        'Whether the tool completes its reading faster than the manual process it replaces on a typical engagement',
        'Whether partners find the tool\'s interface clear enough to demonstrate confidently to audit committees',
        'What it was tested on, how it errs, how its versions change, and who inside the firm answers for it',
      ],
      correct: 3,
    },
    {
      q: 'An audit senior describes the firm\'s approved-tool list as bureaucracy. What is the list actually doing when it works?',
      options: [
        'Protecting the firm commercially by concentrating its spending on a small number of centrally negotiated licences',
        'Recording that validation happened before reliance began, and giving teams a permitted route to the tools',
        'Satisfying the inspector that the firm holds documentation, whatever the engagement teams actually use in practice',
        'Preventing junior staff from experimenting with tools before they have the experience needed to judge them',
      ],
      correct: 1,
    },
    {
      q: 'In year two, the team plans to rely on the same tool as last year. What makes that phrase a trap?',
      options: [
        'The tool may have updated between years, so last year\'s validation may describe a system that no longer exists',
        'Tools may not be reused across financial years without the client\'s written consent to each new version of the software',
        'Reliance in a second year always requires a larger sample of the tool\'s output than reliance in the first year did',
        'The phrase suggests the team has not considered switching to a newer and more capable tool for the engagement',
      ],
      correct: 0,
    },
    {
      q: 'A client retrained the model behind a significant estimate between year one and year two. What does that change for the recurring audit?',
      options: [
        'Nothing, provided the model\'s outputs remain within the range observed during the prior year\'s testing of the estimate',
        'The audit must treat the model as an entirely new system and repeat every prior-year procedure from the beginning',
        'The retraining is a client matter that concerns the audit only if management chooses to raise it with the team',
        'The prior year\'s understanding no longer automatically holds, and the team must ask what changed and record it',
      ],
      correct: 3,
    },
    {
      q: 'Which part of the auditor\'s job compresses least as AI tools improve?',
      options: [
        'Tying transaction populations together across systems and flagging the unusual items within them for follow-up',
        'Evaluating what the assembled evidence means and having the difficult conversation with management',
        'Summarising long contracts into the handful of terms that matter for the engagement\'s procedures',
        'Vouching recorded amounts back to the supporting documents that the client\'s systems reference',
      ],
      correct: 1,
    },
    {
      q: 'The final lesson lists claims this course declined to make. Why publish that list rather than simply omitting the claims?',
      options: [
        'Because listing the omissions protects the course\'s authors from liability for any errors that remain elsewhere in it',
        'Because readers are entitled to a complete course, and publishing the list lets the missing content be supplied on request',
        'Because the list tells a practitioner reviewer exactly where checking is needed before anyone relies on those points',
        'Because standard-setters require model-drafted material to disclose its omissions alongside the claims it does make',
      ],
      correct: 2,
    },
  ],
};

export default auM4;
