import type { CourseModule } from '../../types/course';

const auM3: CourseModule = {
  id: 'au-m3',
  title: 'Auditing the Client\'s AI',
  icon: 'layers',
  summary: 'The other half of the dual question — the client\'s models are already inside the numbers, so this module covers finding where they run, auditing estimates nobody can re-derive, testing controls whose logic moves during the year, and holding the management conversation that reveals which kind of client you have.',
  lessons: [
    {
      id: 'au3l1',
      title: 'The Numbers a Model Helped Produce',
      diagram: 'ModelBehindTheNumber',
      slides: [
        {
          heading: 'The Client Got There First',
          body: 'The dual question has a second half, and it does not wait for the audit team\'s permission. Whether or not the engagement uses any AI at all, the client almost certainly does. Expected-credit-loss models set provisions. Valuation models produce fair-value marks for positions nobody trades. Fraud filters decide which transactions a human being ever looks at. Automated postings write journals that no clerk has read. None of this needed the auditor\'s agreement, and much of it arrived without an announcement — a vendor upgrade here, a finance-transformation project there, a filter that operations switched on because the volumes demanded it. The consequence is plain: the numbers under audit are already model-touched, in ways that vary by industry but rarely amount to nothing. The engagement audits the output of models either way; the only decision left to the team is whether it does so knowingly, or by accident.',
          bullets: [
            'The client\'s use of AI does not depend on the audit team\'s — provisions, marks, filters and postings already carry it',
            'Fraud and anomaly filters shape which transactions any human at the client ever examines',
            'Much of the model footprint arrived quietly, through vendor upgrades and projects finance did not run',
            'The team audits model-touched numbers either way; the choice is whether knowingly',
          ],
        },
        {
          heading: 'Where the Models Sit in the Statements',
          body: 'It helps to walk the statements rather than the technology. Provisions and impairments lean on expected-loss models fed by data pipelines few people can describe end to end. Fair values for thinly traded positions come from valuation models whose assumptions moved during the year. Revenue systems apply automated rules — and increasingly learned ones — to recognition timing and cash matching. Fraud and anomaly filters sit in front of the transaction population, which means they decide what management itself ever investigates, and therefore what ever surfaces as an exception. Automated journal postings mean the ledger contains entries no individual authorised one by one. Each of these is familiar audit territory with a new resident: the same assertions and the same accounts, but a process step whose behaviour was learned from data rather than written in a procedure manual. At this stage the map matters more than the mechanism.',
          bullets: [
            'Provisions, impairments and fair values rest on models whose data pipelines few at the client can describe',
            'Filters in front of the transaction population decide what management ever sees as an exception',
            'Automated postings put entries in the ledger that no individual authorised one by one',
            'Same assertions, same accounts — but a process step learned from data, not written in a manual',
          ],
        },
        {
          heading: 'Knowingly or by Accident',
          body: 'The uncomfortable version of this lesson is the engagement that never asks. A team that does not find out where models run will still audit their outputs — it will simply do so on the silent assumption that a system is a fixed calculation, tested once and trusted thereafter. That assumption is exactly what learned components break. Risk identification, which is the territory of the ISAs on understanding the entity and its environment, has always asked what could go wrong in the processes that produce the numbers; a model that management barely understands is a candidate answer to that question, not a specialist curiosity. So the first procedure is not technical, and needs no data scientist. It is the ordinary one: find out what is there. The rest of this module is about how to do that finding out, and what to do with what you find.',
          bullets: [
            'An engagement that never asks still audits model outputs — on an unexamined assumption of fixed logic',
            'Learned components break the assumption that a system tested once behaves the same all year',
            'Understanding what could go wrong in the processes behind the numbers has always been the risk work',
            'The first procedure is not technical: find out what is there',
          ],
        },
      ],
    },
    {
      id: 'au3l2',
      title: 'Understanding the Client\'s Use of AI',
      diagram: 'ClientAIInventory',
      slides: [
        {
          heading: 'The Inventory Question',
          body: 'Begin with a question that sounds administrative and is actually diagnostic: does management know where models run? A client with a working answer can produce a list — which systems contain learned or statistical components, what each one decides or influences, who owns it, and what changed this year. A client without one will offer a tour of enthusiasm instead: the transformation programme, the vendor\'s roadmap, the pilot that finance is excited about. The difference is audit-relevant before any model is examined, because the inventory is itself evidence about the control environment. An organisation that cannot say where its models are cannot be monitoring them, cannot be managing their changes, and cannot have considered what happens when one of them is wrong. The inventory question costs one meeting, and its answer shapes the risk assessment more than any technical detail will.',
          bullets: [
            'First question: does management know where models run, who owns each, and what changed this year',
            'A real answer is a list; a substitute answer is a tour of the transformation programme',
            'The inventory is evidence about the control environment before any model is examined',
            'An entity that cannot locate its models cannot be monitoring or change-managing them',
          ],
        },
        {
          heading: 'The Red Flags',
          body: 'Four answers should raise the audit antennae. Nobody owns it: the model was a project, the project closed, and the outputs kept coming. No fallback: asked what happens when the model is wrong or unavailable, management describes the model again. Vendor-only understanding: the supplier is the sole party who can explain the behaviour, which converts a modelling question into a contractual one at the worst possible moment. And the deployment surprise: finance discovered the model after IT or operations had already put it into the flow of transactions, which tells you that decisions affecting the statements are being made outside the controllership\'s field of view. None of these is a misstatement, and none of them alone condemns the client. Each is a fact about how the entity governs things that touch the numbers — and that is precisely the material risk assessment is made of.',
          bullets: [
            'No named owner: the project closed and the outputs kept coming, answerable to nobody',
            'No fallback: asked what happens when it is wrong, management describes the model again',
            'Vendor-only understanding turns a modelling question into a contractual one at the worst moment',
            'Finance discovering a deployed model late means statement-relevant decisions happen out of its view',
          ],
        },
        {
          heading: 'What to Write Down',
          body: 'What goes in the file at this stage is unglamorous and valuable. The inventory as management provided it, or the note that management could not provide one — the absence is a finding about the environment, not a gap in your work. For each model that plausibly touches the statements: what it feeds, who owns it, what changed in the year, and what management does when it misbehaves. The red flags observed, recorded in neutral language and tied to the risks they inform, rather than left as corridor impressions. And the decisions taken: which model-touched areas the team treats as higher risk, where a specialist may be needed, and what the planned response is. Write it as you would any understanding-the-entity work. The point is that a reviewer can watch the reasoning travel from what was learned to what the plan does about it.',
          bullets: [
            'File the inventory as given — or the note that none exists, which is itself a finding',
            'Per model: what it feeds, who owns it, what changed, and what management does when it misbehaves',
            'Red flags go in as neutral observations tied to the risks they inform',
            'A reviewer should watch the reasoning travel from what was learned to what the plan does',
          ],
        },
      ],
    },
    {
      id: 'au3l3',
      title: 'Auditing an Estimate You Cannot Re-Derive',
      diagram: 'BlackBoxEstimate',
      slides: [
        {
          heading: 'An Old Discipline Meets a New Opacity',
          body: 'An estimate produced by a model the client cannot fully explain feels like a new problem, and mostly is not. The estimates standards have always asked, in substance, for the same three-part scrutiny: the data the estimate rests on, the assumptions embedded in it, and the method that connects them — together with an honest eye on management\'s tendency to lean the estimate the convenient way. A learned model changes the texture of each part without changing the list. Data questions become pipeline questions: what fed the model, over what period, with what known gaps. Assumption questions move from named inputs on a spreadsheet to choices made in training — what the model was optimised for, and what it was allowed to ignore. Method questions become behaviour questions: how it acts at the edges, and how anyone would know. Harder, certainly. Different in kind, no.',
          bullets: [
            'The estimates discipline was already data, assumptions and method — the list survives the technology',
            'Data scrutiny becomes pipeline scrutiny: what fed the model, over what period, with what gaps',
            'Assumptions now live in training choices — what was optimised for, what was allowed to be ignored',
            'Method questions become behaviour questions: what happens at the edges, and how anyone would know',
          ],
        },
        {
          heading: 'Management\'s Governance Is Evidence',
          body: 'When the method cannot be inspected line by line, the process around it starts doing evidential work. Whether management validated the model before relying on it, whether anyone monitors its output against actual outcomes, whether changes are controlled and recorded, whether someone independent of the builders ever reviewed it — these are not courtesies. They are facts that bear directly on how much the number can be believed, which is why the risk work of the previous lesson feeds straight into the estimate work of this one. A model surrounded by working governance is a different audit object from the same model running unwatched. The vocabulary for all of this — model risk management, independent validation, explainability duties — belongs to this site\'s AI for Finance course, and this lesson borrows its conclusions rather than re-teaching them. The auditor\'s need is narrower: enough grip on the client\'s governance to weigh it as evidence, and the nerve to say when it is too thin to weigh.',
          bullets: [
            'Validation, monitoring, change control and independent review are facts that bear on believability',
            'A governed model and the same model running unwatched are different audit objects',
            'The inventory and red-flag work from the previous lesson feeds directly into the estimate response',
            'The auditor needs enough grip to weigh governance as evidence — and to say when it is too thin',
          ],
        },
        {
          heading: 'Grounds, Not Re-Derivation',
          body: 'The honest line of this lesson: you do not need to re-derive the number; you need auditable grounds for believing the process that produced it. Grounds are things a file can hold — the data lineage examined, the validation reviewed, the monitoring evidence obtained, the sensitivity of the estimate to the choices management made, the record of past model outputs against what actually happened. When the team\'s own grip runs out, the answer is escalation rather than surrender: an auditor\'s specialist, engaged in the territory of the standards on using the work of experts, who can interrogate the method on the team\'s behalf — and whose work the team must still understand well enough to stand behind. What is never available is the shrug. \'The model is too complex to audit\' is not a conclusion; it is the absence of one, and an estimate does not become exempt from evidence by being sophisticated.',
          bullets: [
            'Not re-derivation — auditable grounds for believing the process that produced the number',
            'Grounds live in the file: lineage, validation, monitoring, sensitivity, and outcomes against past outputs',
            'When the team\'s grip runs out, bring the auditor\'s specialist — and still understand the work relied on',
            '\'Too complex to audit\' is not a conclusion; sophistication does not exempt an estimate from evidence',
          ],
        },
      ],
    },
    {
      id: 'au3l4',
      title: 'Controls When Software Decides',
      diagram: 'ModelInControl',
      slides: [
        {
          heading: 'Automated No Longer Means Consistent',
          body: 'Controls testing has long rested on a comfortable asymmetry: manual controls vary, so you test many instances; automated controls repeat, so you test one and lean on it, provided change management holds. A model inside a control quietly breaks that asymmetry. Logic that is retrained, recalibrated or continuously learning is not the same logic all year. A fraud filter tuned in March behaves differently in November; a matching threshold that adapts to volume is a different control in the busy season than it was in the quiet one. The test-of-one was never truly a test of one — it was a test of one plus an assumption of constancy, and the assumption is the part that learned components remove. None of this makes such controls unauditable. It makes the question of what changed, when, and under whose authority the centre of the controls work rather than its afterthought.',
          bullets: [
            'Test-of-one was always a test of one plus an assumption of constancy',
            'Retrained or adaptive logic is not the same control between your test date and year-end',
            'A filter tuned in March and the same filter in November are different controls in substance',
            'The controls question becomes what changed, when, and under whose authority',
          ],
        },
        {
          heading: 'Change Management Becomes the Control',
          body: 'Once the logic can move, the discipline around movement is what stands between the test date and year-end. The questions are recognisable from ordinary IT change territory, tightened for models: who may change or retrain the model, what approval that requires, whether changes are logged with dates and reasons, whether behaviour is tested before and after, and whether an emergency path exists that bypasses all of the above — because the bypass, if it exists, is where the year\'s real changes probably went. A client that can produce a change log with named approvers has given the team something to test. A client that says the vendor pushes updates automatically has said something different: the control the team hoped to rely on is operated by a third party, under a contract nobody in the room has read recently, on a schedule the client neither approves nor logs.',
          bullets: [
            'Who may retrain, what approval it takes, what is logged, what is tested before and after',
            'The emergency bypass, if it exists, is where the year\'s real changes probably went',
            'A change log with named approvers is testable; enthusiasm about agility is not',
            'Vendor-pushed updates mean the relied-upon control is operated outside the client\'s own approval',
          ],
        },
        {
          heading: 'Drift Is a Controls Question',
          body: 'A model can change with no change ticket at all: the world moves, the data mix shifts, and yesterday\'s thresholds quietly start misfiring — drift, in the trade\'s vocabulary. The instinct is to file this under modelling, somebody else\'s speciality. Resist it. Whether anyone would notice the model going wrong is a control question of the most classical kind — it is monitoring — and its absence means errors accumulate until something downstream hurts enough to investigate. So the auditor asks controls questions. Does management compare model output against outcomes, at what frequency, against what tolerance, and what happened the last time a threshold was breached? A breach that led to investigation and recalibration is comforting evidence that the monitoring is alive. A monitoring report that nobody reads is a control that exists in the design and not in the year under audit.',
          bullets: [
            'Drift changes a model with no change ticket — the world moves and the thresholds misfire',
            'Whether anyone would notice is monitoring, a controls question in its most classical form',
            'Ask for the last breach: investigation and recalibration is evidence the monitoring is alive',
            'A monitoring report nobody reads exists in the design, not in the year under audit',
          ],
        },
      ],
    },
    {
      id: 'au3l5',
      title: 'The Conversation With Management',
      diagram: 'ManagementAIConversation',
      slides: [
        {
          heading: 'Questions, Not a Checklist',
          body: 'The conversation with management about AI fails in two familiar ways. Run as a checklist, it collects nouns — a list of systems, a vendor name, a yes to every governance question — and the answers optimise themselves to end the meeting. Run as enthusiasm-matching, it becomes a shared admiration of the transformation programme. The productive version is the ordinary sceptical interview, aimed at a new object: open questions, then follow the answer. Ask what the model decides, and then ask what happened the last time it was wrong. Ask who owns it, and then ask what that person changed this year. Ask what management would do if the model were unavailable tomorrow morning. The follow-up question is where the information lives, because the first answer is what the organisation tells itself, and the second answer is what it actually knows.',
          bullets: [
            'A checklist collects nouns, and the answers optimise themselves to end the meeting',
            'Open questions, then follow the answer — the second answer is what the entity actually knows',
            'Pair every capability question with a failure question: what happened last time it was wrong',
            'The unavailability question — what would you do tomorrow without it — exposes the fallback honestly',
          ],
        },
        {
          heading: 'What a Good Answer Sounds Like',
          body: 'Good answers share a texture, and it is not technical fluency. A named owner who turns out, when asked, to actually make decisions about the model. Known limits stated without prompting — where it performs badly, which cases are routed to a person, what it was never designed to handle. A fallback that has been used at least once, not merely described. A change log that matches the year the team has just walked through. Bad answers share a texture too: enthusiasm without ownership, benefits without limits, governance vocabulary recited a little too smoothly, and the tell that recurs throughout this course — confidence about the model\'s outputs from people who cannot say how they would know if those outputs went wrong. Neither texture is a conclusion, and neither replaces testing. Both are evidence about the environment, and both belong in the risk assessment.',
          bullets: [
            'Named owner, unprompted limits, a fallback that has actually been used, a change log that matches the year',
            'Enthusiasm without ownership and benefits without limits are the texture of a bad answer',
            'Governance vocabulary recited too smoothly is a prompt for follow-up, not reassurance',
            'The recurring tell: confidence in outputs from people who could not detect those outputs going wrong',
          ],
        },
        {
          heading: 'From Conversation to File',
          body: 'A conversation that changes the audit and leaves no trace has, for the file\'s purposes, not happened. What goes in: who was asked, what was asked, and the substance of the answers — including the follow-ups, because \'management stated the model is monitored\' and \'management could not describe the monitoring when asked\' are different workpapers describing the same meeting. The red flags observed, connected to the risks they inform rather than left as atmosphere. The corroboration planned, since representations about governance are still representations and want the same tie-back to evidence as any other. And the effect on the plan: what the team now treats differently because of what it heard. The standard the record should meet is this module\'s recurring one — a reviewer who was not in the room can see what was learned, what it meant, and what the audit did about it.',
          bullets: [
            'Record the follow-ups: the failed answer to a second question is often the finding',
            'Red flags enter the file tied to risks, not as atmosphere the reviewer must reconstruct',
            'Representations about governance are still representations — plan the corroboration',
            'The test: a reviewer who was not in the room sees what was learned and what the audit did about it',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'The engagement team decides not to use any AI tools this year. What does that decision mean for the client\'s models?',
      options: [
        'The audit is unaffected, because model risk enters the engagement only through the tools the team itself chooses to bring to the work',
        'The client\'s models become the territory of IT audit, and the financial statement team can rely on that work without further attention',
        'Very little — the numbers under audit are already model-touched, and the team audits them either way; the choice is whether knowingly',
        'The team should ask management to suspend model-driven postings for the period under audit so that the population is stable',
      ],
      correct: 2,
    },
    {
      q: 'During walkthroughs the team learns that finance first heard about a transaction-scoring model after operations had deployed it. Why does this matter?',
      options: [
        'It shows decisions touching the statements are made outside the controllership\'s view — evidence about the control environment',
        'It does not matter yet — deployment is an operational choice, and the model becomes audit-relevant only if a misstatement is traced to it',
        'It matters mainly for the management letter, as a process-improvement observation rather than an input to risk assessment',
        'It means the model must be treated as a fraud risk, because systems deployed without finance\'s knowledge indicate management override',
      ],
      correct: 0,
    },
    {
      q: 'Management\'s provision comes from a model the client cannot fully explain, and the team cannot re-derive the number. What does the evidence job require?',
      options: [
        'A specialist engaged to rebuild the model independently, because an estimate that cannot be reproduced by the auditor cannot be audited',
        'A written representation from management confirming that the model was validated and is operating as intended',
        'The auditor\'s own independent estimate in every such case, since evidence about the client\'s process can never be sufficient on its own',
        'Auditable grounds for believing the process that produced it — data, assumptions, method, and governance',
      ],
      correct: 3,
    },
    {
      q: 'What audit relevance does the client\'s own governance over a model — validation, monitoring, change control — actually have?',
      options: [
        'None directly, because governance is management\'s activity and the auditor must obtain evidence that is independent of it in every respect',
        'It is evidence about the reliability of the process behind the estimate — and thin governance changes what the number can support',
        'It substitutes for procedures on the estimate itself, provided the governance framework is documented and approved by those charged with governance',
        'It is relevant only where the team plans a controls-reliance strategy for the transaction cycle the model sits in',
      ],
      correct: 1,
    },
    {
      q: 'Why does a learning model inside an automated control undermine the traditional test-of-one approach?',
      options: [
        'Test-of-one relied on an assumption of constancy, and logic that updates is not the same control all year',
        'Because models run on infrastructure that changes more frequently than the platforms older automated controls ran on',
        'It does not, provided the control operated effectively on the date the team selected for its testing',
        'Because model-based controls are manual controls in substance, and should therefore be tested with the larger samples manual controls require',
      ],
      correct: 0,
    },
    {
      q: 'A client explains that the vendor pushes model updates automatically, with no internal approval step. What has the auditor learned?',
      options: [
        'That change management is likely strong, since an established vendor runs more disciplined release processes than an in-house team would',
        'That the model sits outside audit scope, because controls operated by third parties are the territory of the vendor\'s own assurance providers',
        'Nothing significant yet — automatic vendor updates are standard practice and carry no audit meaning on their own',
        'That the control the team hoped to rely on is operated by a third party, outside the client\'s own approval and logging',
      ],
      correct: 3,
    },
    {
      q: 'Which answer from management, taken alone, is the most reassuring signal about a model that feeds the statements?',
      options: [
        'A confident account of the model\'s accuracy from the project sponsor who championed its purchase and led the deployment',
        'An unprompted description of where the model performs badly and which cases are routed to a person',
        'A statement that the vendor is well regarded and is used by several of the client\'s industry peers',
        'Fluent use of governance vocabulary — validation, monitoring, drift — throughout the whole meeting',
      ],
      correct: 1,
    },
    {
      q: 'After a revealing conversation with the CFO about model use, what makes the discussion capable of supporting the audit?',
      options: [
        'A note that the discussion took place, with the date and attendees, since detailed minutes carry the risk of misquoting management',
        'The CFO\'s written agreement to the team\'s summary of the meeting, obtained before the planning file is closed',
        'A record of what was asked and answered, tied to the risks it informs and to what the plan now does differently',
        'The meeting invitation and the CFO\'s presentation slides retained in the file as evidence that the topic was covered',
      ],
      correct: 2,
    },
  ],
};

export default auM3;
