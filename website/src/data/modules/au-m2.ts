import type { CourseModule } from '../../types/course';

const auM2: CourseModule = {
  id: 'au-m2',
  title: 'Using AI Without Surrendering the Judgement',
  icon: 'zap',
  summary: 'How to use AI in audit fieldwork without giving up the thing the signature certifies — treating confident output as an unverified representation, tying every claim back to source documents, writing the file so a stranger can follow it, keeping client data inside the boundary, and testing the machine\'s reading the way you would test a junior\'s.',
  lessons: [
    {
      id: 'au2l1',
      title: 'Scepticism Meets the Confident Tool',
      diagram: 'ScepticismVsTool',
      slides: [
        {
          heading: 'The Profession That Teaches Doubt',
          body: 'Professional scepticism is the audit profession\'s founding discipline: the trained refusal to accept a claim because it is fluent, convenient, or comes from someone confident. The literature on automation bias — much of it written or cited by the profession itself — describes people deferring to a system\'s output precisely because it arrives formatted, consistent and sure of itself. Auditors are taught to resist that pull in clients: the polished reconciliation, the confident controller, the schedule that ties too neatly. An AI tool presents the same temptation from inside the engagement team. Its summary of a contract population arrives in seconds, reads like the work of a careful senior, and rarely hedges. Nothing about that presentation is evidence of accuracy. The first discipline of this module is simply to notice that the scepticism you already practise has acquired a new object.',
          bullets: [
            'Automation bias is the profession\'s own literature applied to itself, not a new discovery',
            'The confident summary invites exactly the reliance auditors are trained to resist in clients',
            'Speed, polish and decisiveness are the output\'s default texture, not indicators of accuracy',
            'The scepticism you already practise has a new object: the tool inside your own team',
          ],
        },
        {
          heading: 'Why the Output Reads as Reliable',
          body: 'The cues a reviewer uses to judge work were calibrated on people. Hesitation, inconsistency and vagueness signal that something was rushed; clean structure, steady terminology and decisive phrasing signal that someone was careful. A language model produces the second set of signals regardless of whether care was involved, because fluency is what it is built to produce — it is the output\'s default texture, not a marker of quality. It never looks tired at the end of a long population, never varies in tone between the contract it parsed well and the one it mangled, and never flags its own uncertainty unless asked, and not reliably then. This is why experienced reviewers are not naturally protected: their instincts are excellent instruments pointed at the wrong object. The signals still mean something when a person produced the page; from a tool, they mean only that a tool produced it.',
          bullets: [
            'Reviewer instincts were calibrated on people, where fluency and structure signal care',
            'A model produces those signals whether or not care was involved — fluency is its default',
            'Tone never varies between the document it parsed well and the one it mangled',
            'Experience is not protection: good instincts pointed at the wrong object still mislead',
          ],
        },
        {
          heading: 'Treat It as a Management Representation',
          body: 'The working discipline is borrowed from something every auditor already does. When management asserts a figure, the assertion is noted, weighed and corroborated; it directs the work, but it is not the evidence. Treat tool output the same way: a representation from a fast, tireless, occasionally wrong colleague with no professional duty and no signature at risk. It tells you where to look and what to ask, and nothing it says is settled until it has been corroborated against something the tool did not produce. This framing has a practical virtue — it requires no new methodology, no policy paper and no training course, because the corroboration habits already exist. It also sets the right emotional register: you can be glad of the help, use it hard, and still owe it nothing. Reliance is earned by verification, not conferred by fluency.',
          bullets: [
            'Treat tool output as a management representation: useful, directional, unverified until corroborated',
            'It directs the work — where to look, what to ask — but it is not the evidence',
            'No new methodology needed: the corroboration habits already exist in every auditor',
            'Reliance is earned by verification, never conferred by fluency',
          ],
        },
      ],
    },
    {
      id: 'au2l2',
      title: 'Evidence, and What the Tool Produces',
      diagram: 'EvidenceNotOutput',
      slides: [
        {
          heading: 'A Pointer, Not the Thing Itself',
          body: 'The canon of this course, stated for audit: AI output is a pointer to evidence, not evidence. A summary of a contract is not the contract; an extracted clause is a claim that the clause exists; a flagged journal entry is a hypothesis about a journal entry. Each of these is useful in the way an index is useful — it tells you where the evidence might be and roughly what shape it might have. The assurance enters at the moment a person follows the pointer to the source document and finds the thing actually there, and not before. This ordering matters because tools present conclusions in finished form, which quietly reverses it: the summary arrives looking like the end of the work when it is the beginning. Every figure or claim a tool produces is tied back to source by a person before it enters the file.',
          bullets: [
            'A summary of a contract is not the contract; a flag on a journal entry is a hypothesis',
            'Tool output works like an index: it says where evidence might be, not that it is there',
            'Assurance enters when a person follows the pointer to source and finds the thing there',
            'Finished-looking output reverses the ordering: the summary is the beginning of the work, not the end',
          ],
        },
        {
          heading: 'Relevance and Reliability Still Decide',
          body: 'Nothing in the arrival of AI changes what evidence is. The IAASB\'s standards on audit evidence — and the PCAOB\'s, on their side of the water — ask, in substance, the same two questions they have always asked: is this relevant to the assertion, and is it reliable given where it came from and how it was produced? Tool output sits awkwardly against the second question, because it is derived information whose derivation you usually cannot inspect, produced by a process with a known tendency to be fluent when wrong. That does not make it worthless; it makes it low on the reliability ladder, roughly where an unverified analysis prepared by the client would sit. The tie-back to source documents is what moves the underlying fact up the ladder. The output itself never climbs; the evidence it pointed to does.',
          bullets: [
            'The evidence standards ask, in substance, what they always have: relevance and reliability',
            'Tool output is derived information from a process you usually cannot inspect',
            'It sits low on the reliability ladder, near an unverified client-prepared analysis',
            'Tie-back moves the underlying fact up the ladder; the output itself never climbs',
          ],
        },
        {
          heading: 'Demand the Locator',
          body: 'The practical rule that makes the canon usable at speed: demand a locator, not an assertion. A tool that reports a change-of-control clause should say which document, which page, which passage — and a person opens the document and reads the passage before the clause is treated as existing. A locator is cheap to check and hard to fake convincingly, whereas a source name alone is exactly what a language model invents best. Tools that cannot point are not useless — they can draft, structure and suggest — but their output cannot support anything in the file, and the team should know which kind of tool it is holding before the busy season, not during it. Where the volume makes opening everything unrealistic, the answer is a deliberate sample of the tool\'s pointers, which is the subject of the last lesson of this module.',
          bullets: [
            'Demand document, page and passage — then a person opens the document and reads',
            'A locator is cheap to check; a bare source name is what a model invents best',
            'Tools that cannot point can still draft and structure, but cannot support the file',
            'Where volume defeats opening everything, sample the pointers deliberately',
          ],
        },
      ],
    },
    {
      id: 'au2l3',
      title: 'The Workpaper Question',
      diagram: 'WorkpaperQuestion',
      slides: [
        {
          heading: 'What Went In, What Came Out',
          body: 'When a tool did the reading, the file answers four questions. What went in: which documents, which population, which version of it, and what was excluded. What came out: the output actually relied on, kept as produced rather than as remembered. What the auditor did about it: the follow-up performed, the pointers opened, the exceptions resolved or escalated. And why reliance was reasonable: what the team knew about the tool, the checking performed on its work, and the thinking that connected its output to the conclusion drawn. None of this is a new documentation philosophy — it is the ordinary discipline of the workpaper applied to a new kind of preparer. The uncomfortable part is only that the tool will not remember for you: what went in and what came out must be captured at the time, because neither can be counted on to be reconstructable afterwards.',
          bullets: [
            'What went in: documents, population, version, and what was excluded',
            'What came out: the output relied on, kept as produced rather than as remembered',
            'What the auditor did, and why reliance was reasonable, connect output to conclusion',
            'Capture at the time — inputs and outputs are rarely reconstructable afterwards',
          ],
        },
        {
          heading: 'The Reviewer, and the Inspector Three Years On',
          body: 'The test for whether the documentation is enough has two audiences. The first is the reviewer this year, who must be able to see what was done and challenge it. The second is harder: an inspector three years from now, reading the file cold, with the tool by then updated, replaced or retired. Could someone explain, from the file alone and without the tool in the room, what the tool did, what went in, what came out, and why the team relied on it? If the answer requires a live demonstration of software that no longer exists in that form, the file does not support the reliance — and audit files are precisely the documents that get read years later by people whose professional duty is scepticism about you. Write for that reader. They are the one the file was always for.',
          bullets: [
            'Two readers: the reviewer this year, and an inspector years later reading cold',
            'The test: explain the reliance from the file alone, without the tool in the room',
            'Tools update, get replaced and retire; the file must not depend on a live demonstration',
            'Audit files are read years later by people whose duty is scepticism about you',
          ],
        },
        {
          heading: 'A Screenshot Is Not an Explanation',
          body: 'The most common documentation instinct is also the weakest: capture an image of the results screen and file it. A screenshot records what the software displayed at one moment. It does not record what was loaded, what settings shaped the run, what the tool failed to flag, what the team did with the flags, or why any of it justified reliance — which is to say, it records none of the four questions. It has the form of documentation without the content, and fluent form standing in for absent content is this course\'s recurring warning in miniature. The better habit costs little more: export the inputs and outputs where the tool allows it, note the configuration and the date, and write the short paragraph of reasoning a reviewer actually needs. A paragraph of honest reasoning outlives any interface.',
          bullets: [
            'A screenshot records what was displayed — none of the four questions the file must answer',
            'Form without content is this course\'s recurring warning, here in miniature',
            'Export inputs and outputs where possible; note configuration and date',
            'The short paragraph of honest reasoning outlives any interface',
          ],
        },
      ],
    },
    {
      id: 'au2l4',
      title: 'Confidentiality, Independence and the Paste Problem',
      diagram: 'AuditPasteProblem',
      slides: [
        {
          heading: 'Approved Tools, and Where the Boundary Sits',
          body: 'Client data goes only into firm-approved tools. The sentence is short because the reasoning behind it is not the engagement team\'s to redo: confidentiality is a professional duty — the territory of the IESBA Code and its national equivalents — and it is also a contractual one, set by engagement terms the team may never have read in full. A consumer AI tool reached through a personal login sits outside every one of those protections, whatever its settings claim, and the convenience of the paste is not a factor the duty recognises. The approved list is therefore not bureaucracy slowing the team down; it is the visible edge of an agreement between the firm, its clients and its regulators about where client information may travel. If a tool is not on the list, the question is not \'is this probably fine\' but \'who do I ask\'.',
          bullets: [
            'Client data goes only into firm-approved tools — the boundary is not the team\'s to move',
            'Confidentiality is IESBA Code territory and engagement-contract territory at once',
            'A consumer tool on a personal login sits outside every protection, whatever its settings claim',
            'Off the list, the question is never \'probably fine\' — it is \'who do I ask\'',
          ],
        },
        {
          heading: 'The Independence Angles',
          body: 'Confidentiality is the familiar half; independence is the newer one, and this course raises it at orientation level only. Two shapes are worth recognising. First, a firm that advises a client on selecting, building or tuning an AI system, and then audits numbers that system helped produce, is standing near the self-review line the profession has spent decades drawing — where exactly the line falls is a question for the firm\'s independence function, not for a course. Second, a tool trained or tuned on one client\'s data that later assists another client\'s engagement raises a question the old rules never had to phrase: whose information is doing the work? Neither shape has a settled, universal answer yet. What the practitioner needs is not the answer but the reflex — recognise the shape, and route it to the people whose job the answer is.',
          bullets: [
            'Advising on the same AI the firm audits stands near the self-review line',
            'A tool tuned on one client\'s data assisting another\'s engagement asks: whose information is working?',
            'Neither shape has a settled universal answer yet, and pretending otherwise would mislead',
            'The practitioner\'s job is the reflex: recognise the shape, route it to the independence function',
          ],
        },
        {
          heading: 'The Question This Course Will Not Answer',
          body: 'There is an obvious question this lesson looks like it should end with: what, concretely, may never be pasted into an AI tool? This course declines to answer it, and the refusal is the lesson. Any general list would be wrong somewhere — the boundary moves with the jurisdiction and its data rules, with each engagement\'s terms, with the firm\'s own policies and tooling, and with regulatory expectations that are still being written. A course that handed you a tidy list would be doing the thing it has warned you about since module one: producing a confident, fluent answer without the grounding to support it. The genuinely portable answer is a procedure, not a list. Know that the boundary exists; assume it is nearer than convenience suggests; and know the name of the person or policy at your firm that answers it — before the moment you need it.',
          bullets: [
            'Any generic never-paste list would be wrong somewhere — jurisdiction, terms, policy and regulation all move it',
            'A confident list here would repeat the exact failure this course warns about',
            'The portable answer is a procedure: assume the boundary is nearer than convenience suggests',
            'Know the person or policy at your firm that answers this, before you need it',
          ],
        },
      ],
    },
    {
      id: 'au2l5',
      title: 'Review at Volume',
      diagram: 'AuditReviewAtVolume',
      slides: [
        {
          heading: 'The False Comfort of Coverage',
          body: 'Volume is where the tools earn their keep: contract populations, confirmation responses, board minutes, correspondence — reading work that consumed juniors for weeks now compresses into hours. It is also where the most seductive sentence in the brochure lives: \'we reviewed one hundred per cent of the population.\' Read as an auditor, the claim dissolves under one question — reviewed to what standard? A tool that skims everything at a shallow standard has not reviewed the population; it has filtered it, and coverage of the haystack is not assurance about any particular straw. The canon caveat from module one applies with full force here: a shallow test of everything can be weaker evidence than a deep test of a sample, and a flagged anomaly is a question, not a finding, until a person has followed it back to the source documents.',
          bullets: [
            'Volume reading — contracts, confirmations, minutes, correspondence — compresses from weeks to hours',
            '\'One hundred per cent reviewed\' dissolves under one question: reviewed to what standard?',
            'Shallow coverage of everything can be weaker evidence than a deep sample',
            'A flagged anomaly is a question, not a finding, until followed to source',
          ],
        },
        {
          heading: 'Testing the Machine\'s Reading',
          body: 'The tool\'s reading is work performed by someone else, and the profession already knows what to do with that: review it. Take a sample of documents the tool summarised and read them yourself, in full, against its output. Take a sample of what it flagged and see how many flags dissolve on inspection; take a sample of what it did not flag and see what it missed, because the silent misses are where the audit risk actually lives. Track the kinds of error you find — wrong party, wrong date, missed clause, invented confidence — the way you would track a junior\'s, and let the observed error rate set how much you lean on the tool next time. The rigorous method behind this — evaluation sets, regression testing, measuring quality over time — is the subject of this site\'s Does Your AI Actually Work? course.',
          bullets: [
            'The tool\'s reading is someone else\'s work: review it the way you would a junior\'s',
            'Sample what it summarised, what it flagged, and — above all — what it did not flag',
            'Track error types and let the observed rate set how far you lean next time',
            'Silent misses, not noisy false flags, are where the audit risk actually lives',
          ],
        },
        {
          heading: 'The Hours That Judgement Needs',
          body: 'This module has been a list of disciplines, so it should end on what the disciplines buy. The hours that volume review used to consume were mostly not judgement hours; they were reading hours — necessary, honest, and spent before the interesting questions could even be asked. When a tool does the reading and a person verifies the tool, those hours come back, and the honest version of this technology\'s promise is what they come back for: following the anomalies that deserve following, sitting longer with the estimate that does not smell right, having the difficult conversation with management properly prepared. None of that appears in a productivity metric, which is why firms under fee pressure are tempted to bank the hours instead. The judgement was never the part anyone wanted to automate. It was the part there was never enough time for.',
          bullets: [
            'The hours volume review consumed were mostly reading hours, not judgement hours',
            'They come back for following anomalies, sitting with estimates, preparing hard conversations',
            'Fee pressure tempts firms to bank the hours; the judgement work is why they were freed',
            'Judgement was never the part to automate — it was the part there was never time for',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'An AI tool summarises a loan agreement fluently, confidently and in the house style of a careful senior. Why does this module treat that presentation as a risk rather than a comfort?',
      options: [
        'Because auditors lack the technical background to judge how language models produce text, so any assessment of the output is unreliable',
        'Because the polish invites the reliance auditors are trained to resist in clients',
        'Because a tool\'s summaries are wrong more often than a junior\'s reading of the same agreement',
        'Because professional scepticism, properly understood, rules out using generated summaries at all',
      ],
      correct: 1,
    },
    {
      q: 'The module proposes a working discipline for handling tool output. Which is it?',
      options: [
        'Treat it as audit evidence once the tool has passed the firm\'s approval process',
        'Treat it as the work of an auditor\'s specialist, reliable once competence and objectivity have been established',
        'Treat it as a draft conclusion for the engagement partner to accept or amend',
        'Treat it as a management representation — useful and directional, unverified until corroborated',
      ],
      correct: 3,
    },
    {
      q: 'A tool extracts a change-of-control clause from a contract. When does assurance about the clause actually arise?',
      options: [
        'When a person opens the contract and finds the clause there',
        'When the extraction is consistent with the tool\'s reading of similar contracts in the population',
        'When the tool reports high confidence in the extraction alongside the clause text',
        'When the firm\'s approval of the tool confirms its extraction accuracy was tested',
      ],
      correct: 0,
    },
    {
      q: 'What does the locator rule require of a tool before its output can support anything in the file?',
      options: [
        'A confidence score for each extracted figure or clause, kept with the output',
        'A list of every document the tool consulted while producing its answer',
        'The document, page and passage, which a person then opens and reads',
        'A second run over the same documents to confirm the output is stable',
      ],
      correct: 2,
    },
    {
      q: 'A tool read the receivables correspondence and the team relied on its exception list. What does the file need to contain?',
      options: [
        'What went in, what came out, what the team did about it, and why reliance was reasonable',
        'The tool\'s name, version and approval status, since the firm\'s validation already covers the rest',
        'A screenshot of the exception list as it appeared on the day the work was done',
        'Only the conclusions reached, because the tool is a working method rather than evidence',
      ],
      correct: 0,
    },
    {
      q: 'Why is a screenshot of the tool\'s dashboard weak documentation?',
      options: [
        'Because screenshots can be altered after the event, so the file needs the tool\'s original export instead',
        'Because inspectors do not accept images as part of an audit file',
        'Because the dashboard may look different by the time the file is reviewed',
        'Because it records what was displayed, not what went in, what was done, or why reliance was justified',
      ],
      correct: 3,
    },
    {
      q: 'Who answers the question of what may never be pasted into an AI tool?',
      options: [
        'The engagement partner alone, deciding case by case as an exercise of professional judgement',
        'The tool\'s provider, whose terms of service define what data it can accept',
        'Your firm and its policies, read with the engagement terms and the jurisdiction\'s rules',
        'No one needs to, because approved tools already screen out sensitive material',
      ],
      correct: 2,
    },
    {
      q: 'A tool reviewed the entire contract population and produced twelve flags. What has the coverage claim established?',
      options: [
        'That the population is free of the kinds of issue the tool was configured to find',
        'That everything was read at the tool\'s standard, which is untested until someone samples its work',
        'That the twelve flags are misstatements the team should now correct',
        'That the unflagged contracts need no further audit attention this year',
      ],
      correct: 1,
    },
  ],
};

export default auM2;
