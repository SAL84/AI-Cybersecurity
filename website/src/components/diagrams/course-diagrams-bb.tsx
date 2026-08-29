import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR AUDIT — MODULE 4: THE FILE, THE FIRM AND THE SECOND YEAR ============ */
export const InspectorQuestionDiagram = () => {
  const findings = [
    { h: 'reliance the file cannot explain', l: ['why this tool, on this evidence, was', 'reasonable — the file never says'] },
    { h: 'evidence that is a screenshot', l: ['output existed; what went in and what', 'anyone did about it are not recorded'] },
    { h: 'a conclusion nobody tied back', l: ['output fed the opinion with no source', 'document opened behind it'] },
  ];
  const questions = [
    ['what did the tool do —', 'which procedures did', 'its output feed?'],
    ['what went in — was it', 'within what the firm', 'permits to enter?'],
    ['what came out — and', 'where is that output', 'held now?'],
    ['what did the team do —', 'flags followed to source,', 'and the rest resolved?'],
    ['why was reliance', 'reasonable — what did', 'the firm know of it?'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="The inspector’s AI questions are the profession’s old questions attached to a new object — answerable in advance or not at all.">
      <defs><marker id="arrowAUd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The file is written under deadline and read at leisure, sceptically</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">that asymmetry has always disciplined audit work — AI hands the sceptical reader a new object, not a new discipline</text>
      <rect x="30" y="54" width="740" height="82" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="46" y="70" width="200" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="146" y="85" textAnchor="middle" fill={COLORS.slate600} fontSize="7">assembled under deadline</text>
      <text x="146" y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="7">by the team that wrote it</text>
      <line x1="250" y1="88" x2="296" y2="88" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUd1)" />
      <text x="273" y="80" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">archive</text>
      <rect x="300" y="70" width="200" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="400" y="85" textAnchor="middle" fill={COLORS.slate600} fontSize="7">closed — nothing can be</text>
      <text x="400" y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="7">added to it afterwards</text>
      <line x1="504" y1="88" x2="550" y2="88" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUd1)" />
      <text x="527" y="80" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">years pass</text>
      <rect x="554" y="70" width="200" height="36" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="654" y="85" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">read by reviewers and inspectors</text>
      <text x="654" y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="7">whose duty is scepticism of its authors</text>
      <text x="400" y="126" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">whatever was relied on — a junior’s schedule, a specialist’s valuation, an analytics routine or a tool — unexplained reliance is a finding</text>
      <rect x="30" y="146" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="146" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="159" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE PREDICTABLE FINDINGS WRITE THEMSELVES</text>
      {findings.map((f, i) => (
        <g key={i}>
          <rect x={46 + i * 242} y="172" width="226" height="46" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={159 + i * 242} y="186" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">{f.h}</text>
          {f.l.map((t, j) => <text key={j} x={159 + i * 242} y={198 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="231" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">none is a new category of finding — the old questions, attached to the newest thing in the file</text>
      <rect x="30" y="248" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="248" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="261" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE WORKPAPER QUESTIONS — ANSWERABLE IN ADVANCE OR NOT AT ALL</text>
      {questions.map((q, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="274" width="136" height="42" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {q.map((t, j) => <text key={j} x={110 + i * 146} y={288 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="400" y="332" textAnchor="middle" fill={COLORS.red} fontSize="6.9" fontStyle="italic">the hardest follow-up concerns the misstatement the tool did not flag — the only defence is procedures that did not stop at its flags</text>
      <rect x="30" y="352" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="352" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="365" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FIRM ABOVE THE FILE — QUALITY MANAGEMENT (ISQM TERRITORY) NOW GOVERNS THE TOOLS</text>
      <rect x="46" y="378" width="250" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
      <text x="171" y="392" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">ONE FILE</text>
      <text x="171" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">“why did this team rely on this tool?”</text>
      <line x1="300" y1="396" x2="344" y2="396" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUd1)" />
      <text x="322" y="388" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">× every team</text>
      <rect x="348" y="378" width="406" height="36" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="551" y="392" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">THE FIRM’S SYSTEM</text>
      <text x="551" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">“how does the firm know, for every team, that the answer is a good one?”</text>
      <text x="400" y="430" textAnchor="middle" fill={COLORS.slate600} fontSize="6.9">a tool adopted faster than the firm noticed is an unidentified risk to engagement quality — a gap here predicts findings in files not yet inspected</text>
      <rect x="30" y="448" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="467" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE ANSWERS EXIST IN ADVANCE OR NOT AT ALL</text>
      <text x="400" y="484" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a file cannot be explained backwards three years on — and neither can a firm’s decision to permit the tool</text>
    </DiagramFrame>
  );
};
export const ToolBeforeRelianceDiagram = () => {
  const four = [
    { h: 'TESTED ON WHAT', l: ['whose documents, which', 'languages, what quality', 'of scan — and how near', 'to your engagements?'] },
    { h: 'HOW IT ERRS', l: ['what it misses and what', 'it invents, how often —', 'and where the errors', 'cluster by document type'] },
    { h: 'HOW IT IS VERSIONED', l: ['what changes between', 'releases, on whose', 'schedule — is the firm', 'told before it shifts?'] },
    { h: 'WHO ANSWERS FOR IT', l: ['a named owner inside', 'the firm who approved', 'it — never a vendor’s', 'support desk'] },
  ];
  const steps = [
    ['sample its reading against a', 'person’s, on documents like yours —', 'not the vendor’s demonstration set'],
    ['measure misses and inventions', 'separately — they do different', 'damage in an audit file'],
    ['repeat when the version changes —', 'last quarter’s results describe', 'last quarter’s tool'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="An approved-tool list reads as bureaucracy from the team’s side — from the firm’s side it is a control, and it controls three specific things.">
      <defs><marker id="arrowAUd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Before any team leans on it, someone must be able to answer for it</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the questions a firm would ask of any expert whose work feeds audit evidence — none beyond a practitioner’s reach</text>
      <rect x="30" y="54" width="740" height="126" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FOUR ANSWERS THE FIRM SHOULD HOLD BEFORE RELIANCE BEGINS</text>
      {four.map((f, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="80" width="176" height="70" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={130 + i * 182} y="94" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">{f.h}</text>
          {f.l.map((t, j) => <text key={j} x={130 + i * 182} y={106 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="400" y="168" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the same questions the firm asks before relying on any expert — a tool earns reliance the same way, and in advance</text>
      <rect x="30" y="190" width="360" height="148" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="190" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="203" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT THE APPROVED LIST ACTUALLY CONTROLS</text>
      <text x="44" y="224" fill={COLORS.slate600} fontSize="7.2">· the record that the validation questions were</text>
      <text x="44" y="236" fill={COLORS.slate600} fontSize="7.2">{'  '}asked before reliance began</text>
      <text x="44" y="252" fill={COLORS.slate600} fontSize="7.2">· the route by which the answers reach every</text>
      <text x="44" y="264" fill={COLORS.slate600} fontSize="7.2">{'  '}engagement, not only the team that asked</text>
      <text x="44" y="280" fill={COLORS.slate600} fontSize="7.2">· the boundary keeping client data out of</text>
      <text x="44" y="292" fill={COLORS.slate600} fontSize="7.2">{'  '}tools nobody has assessed</text>
      <text x="44" y="316" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">a control from the firm’s side — it only reads as a</text>
      <text x="44" y="327" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">queue from the engagement team’s</text>
      <rect x="410" y="190" width="360" height="148" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="190" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="203" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">TWO PREDICTABLE FAILURE MODES</text>
      <text x="424" y="226" fill={COLORS.red} fontSize="7.2" fontWeight="700">the list nobody maintains</text>
      <text x="424" y="238" fill={COLORS.slate600} fontSize="7">goes quietly stale while AI features keep arriving</text>
      <text x="424" y="249" fill={COLORS.slate600} fontSize="7">inside software the firm already licenses</text>
      <text x="424" y="270" fill={COLORS.red} fontSize="7.2" fontWeight="700">the prohibition with no permitted alternative</text>
      <text x="424" y="282" fill={COLORS.slate600} fontSize="7">produces quiet unapproved use nobody monitors —</text>
      <text x="424" y="293" fill={COLORS.slate600} fontSize="7">the firm carries the risk without the visibility</text>
      <text x="424" y="316" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">exception requests are the health signal — a list</text>
      <text x="424" y="327" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">nobody ever asks to extend is being routed around</text>
      <rect x="30" y="348" width="740" height="102" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="366" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">VALIDATION IS ITS OWN DISCIPLINE — AND ITS SHAPE IS FAMILIAR TO ANY AUDITOR</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="376" width="208" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          {s.map((t, j) => <text key={j} x={150 + i * 240} y={390 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{t}</text>)}
          {i < 2 && <line x1={256 + i * 240} y1="398" x2={282 + i * 240} y2="398" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUd2)" />}
        </g>
      ))}
      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">keep the validation evidence — the inspector’s question, why did the firm approve this, deserves a written answer</text>
      <rect x="30" y="458" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE LIST IS A CONTROL, NOT BUREAUCRACY</text>
      <text x="400" y="495" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">it records that the questions were asked before reliance began — and carries the answers further than the team that asked them</text>
    </DiagramFrame>
  );
};
export const RecurringEngagementDriftDiagram = () => {
  const reasks = [
    { h: 'OF THE FIRM', l: ['has the tool changed —', 'version, model,', 'configuration — and was', 'it revalidated afterwards?'] },
    { h: 'OF THE CLIENT', l: ['was the model behind each', 'estimate retrained or', 're-owned — does last year’s', 'understanding still hold?'] },
    { h: 'OF THE EVIDENCE', l: ['do this year’s flags mean', 'what last year’s meant —', 'same thresholds, same', 'populations, same “clean”?'] },
    { h: 'OF THE CIRCUMSTANCES', l: ['moved jurisdiction, changed', 'data arrangements, altered', 'rules on what may enter', 'which tool?'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Neither change announces itself — both arrive silently inside things that look unchanged, so they have to be found, not assumed away.">
      <defs><marker id="arrowAUd3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Year two is not year one again</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a recurring engagement runs on rolled-forward understanding — and both sides of it can silently move</text>
      <rect x="30" y="54" width="360" height="132" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE CLIENT’S SIDE MOVED</text>
      <rect x="46" y="82" width="150" height="38" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="121" y="96" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">year one</text>
      <text x="121" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the model as the file describes it</text>
      <line x1="200" y1="101" x2="230" y2="101" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowAUd3)" />
      <rect x="234" y="82" width="140" height="38" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="304" y="96" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">year two</text>
      <text x="304" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">a system the file no longer describes</text>
      <text x="44" y="140" fill={COLORS.slate600} fontSize="7">retrained, refitted on new data, or handed to a new</text>
      <text x="44" y="152" fill={COLORS.slate600} fontSize="7">owner — the control changed between your test dates</text>
      <text x="44" y="172" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">last year’s understanding describes a system that no longer exists</text>
      <rect x="410" y="54" width="360" height="132" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="54" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="590" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">YOUR OWN SIDE MOVED TOO</text>
      <rect x="426" y="82" width="150" height="38" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="501" y="96" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">year one</text>
      <text x="501" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the tool as the firm validated it</text>
      <line x1="580" y1="101" x2="610" y2="101" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowAUd3)" />
      <rect x="614" y="82" width="140" height="38" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="684" y="96" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">year two</text>
      <text x="684" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">a new model, the same interface</text>
      <text x="424" y="140" fill={COLORS.slate600} fontSize="7">a new version on the vendor’s schedule — the screens</text>
      <text x="424" y="152" fill={COLORS.slate600} fontSize="7">the team works in look exactly as they did last year</text>
      <text x="424" y="172" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">this year’s flags are not produced by last year’s process</text>
      <rect x="30" y="196" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="196" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="209" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE ROLL-FORWARD TRAP — “SAME TOOL AS LAST YEAR”</text>
      <rect x="60" y="224" width="280" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="200" y="240" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">true of the licence</text>
      <text x="200" y="253" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the name on the invoice is stable</text>
      <text x="400" y="252" textAnchor="middle" fill={COLORS.red} fontSize="14" fontWeight="700">≠</text>
      <rect x="460" y="224" width="280" height="40" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="600" y="240" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">false of the tool</text>
      <text x="600" y="253" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the model behind the interface is not</text>
      <text x="400" y="278" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a version update moves what is flagged, what is missed and how confidently wrong output reads — with nothing visible on screen</text>
      <text x="400" y="291" textAnchor="middle" fill={COLORS.red} fontSize="7.2">rolling reliance forward on the name rests this year’s evidence on last year’s validation of a different system</text>
      <rect x="30" y="310" width="740" height="134" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="310" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="323" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">RELIANCE IS RE-EARNED ANNUALLY — WHAT TO RE-ASK, AND OF WHOM</text>
      {reasks.map((r, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="336" width="176" height="66" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={130 + i * 182} y="350" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">{r.h}</text>
          {r.l.map((t, j) => <text key={j} x={130 + i * 182} y={362 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="400" y="422" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">then write the answers into the file — a reviewer can tell a file that asked from a file that assumed at a glance</text>
      <rect x="30" y="454" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="474" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">COMPARABILITY OF EVIDENCE IS A PROPERTY TO ESTABLISH, NOT ONE TO ASSUME</text>
      <text x="400" y="491" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">re-earning reliance costs one honest question — what changed — asked of the vendor, the firm’s tool owner and the client</text>
    </DiagramFrame>
  );
};
export const AuditJobShiftDiagram = () => {
  const compresses = [
    { n: 'reading', a: 26 },
    { n: 'vouching', a: 30 },
    { n: 'flagging', a: 22 },
    { n: 'tying populations', a: 24 },
    { n: 'drafting', a: 28 },
  ];
  const stays = [
    'judging what the assembled evidence means',
    'evaluating an estimate’s assumptions against the business',
    'deciding an explanation does not hold together',
    'the difficult conversation that follows',
    'the signature',
  ];
  const emerging = [
    ['deliberate practice: juniors vouch a', 'sample the tool has already read, then', 'compare against the tool’s and a senior’s'],
    ['rotation through follow-up on flagged', 'items — where documents are still opened', 'and the strange ones concentrate'],
    ['training redesigned to teach evidence', 'evaluation earlier — reordering the', 'sequence, if the volume cannot return'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 546" caption="The tool changes the cost of one list and nothing about the other — and the junior-work question underneath is honestly unsolved.">
      <defs><marker id="arrowAUd4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What compresses, and what the compression exists to serve</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an honest account of the auditor’s job — the first list gets cheaper, the second list does not move</text>
      <rect x="30" y="54" width="360" height="180" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="210" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT COMPRESSES</text>
      {compresses.map((c, i) => (
        <g key={i}>
          <text x="44" y={94 + i * 24} fill={COLORS.slate700} fontSize="7">{c.n}</text>
          <rect x="150" y={86 + i * 24} width="170" height="7" rx="3" fill={COLORS.slate300} />
          <rect x="150" y={95 + i * 24} width={c.a} height="7" rx="3" fill={COLORS.emerald} />
        </g>
      ))}
      <rect x="44" y="210" width="10" height="5" fill={COLORS.slate300} />
      <text x="59" y="216" fill={COLORS.slate500} fontSize="6.4">before — junior weeks</text>
      <rect x="170" y="210" width="10" height="5" fill={COLORS.emerald} />
      <text x="185" y="216" fill={COLORS.slate500} fontSize="6.4">after — hours, with a person confirming the match</text>
      <rect x="410" y="54" width="360" height="180" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="54" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="590" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT DOES NOT COMPRESS</text>
      {stays.map((t, i) => (
        <g key={i}>
          <rect x="424" y={86 + i * 24} width="6" height="10" rx="2" fill={COLORS.amber} />
          <text x="438" y={94 + i * 24} fill={COLORS.slate700} fontSize="7">{t}</text>
        </g>
      ))}
      <text x="424" y="212" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">everything the compression exists to serve —</text>
      <text x="424" y="223" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the cost of these was never the reading time</text>
      <text x="400" y="253" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontWeight="700">the risk is not that judgement gets automated — it is that a firm prices as though it were, and stops paying for its hours</text>
      <rect x="30" y="268" width="740" height="116" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="268" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="281" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE JUNIOR-WORK QUESTION — STATED HONESTLY: UNSOLVED</text>
      <rect x="46" y="296" width="204" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="148" y="310" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">thousands of ordinary documents</text>
      <text x="148" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">vouched by hand, in years nobody enjoys</text>
      <line x1="254" y1="314" x2="282" y2="314" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUd4)" />
      <rect x="286" y="296" width="180" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="376" y="310" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">the pattern library</text>
      <text x="376" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">built quietly by the tedium</text>
      <line x1="470" y1="314" x2="498" y2="314" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUd4)" />
      <rect x="502" y="296" width="252" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="628" y="310" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">the partner who can smell a wrong invoice</text>
      <text x="628" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">judgement trained by volume</text>
      <text x="400" y="348" textAnchor="middle" fill={COLORS.red} fontSize="7.2">the machine now does the vouching — the tedium goes, and takes the pattern library with it</text>
      <text x="400" y="361" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the gap is generational: it surfaces a decade from now, in people promoted on experience they were never given the chance to accumulate</text>
      <text x="400" y="375" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">naming the problem honestly is currently ahead of most published answers to it</text>
      <rect x="30" y="394" width="740" height="92" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="412" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE EMERGING ANSWERS, DESCRIBED AS EMERGING — NONE PROVEN AT SCALE</text>
      {emerging.map((e, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="422" width="224" height="44" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.2" />
          {e.map((t, j) => <text key={j} x={158 + i * 240} y={436 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="479" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the firms experimenting with these mostly do not publish results</text>
      <rect x="30" y="494" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="514" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE HOURS THE TOOL FREES ARE THE HOURS JUDGEMENT NEEDS</text>
      <text x="400" y="531" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">spend them there and the trade can be an honest one — the junior-work question stays open either way</text>
    </DiagramFrame>
  );
};
export const AuditSourceLadderDiagram = () => {
  const rungs = [
    { c: COLORS.blue, w: 58, n: 'Standards and regulation', s: 'binding — everything below it is a reading', d: ['The instruments that bind the engagement', 'whether or not anyone summarises them', 'accurately. Readings drift; the text does not.'], e: ['The IAASB’s ISAs; PCAOB auditing', 'standards; the ISQM quality-management', 'standards; the IESBA Code; national regimes'] },
    { c: COLORS.cyan, w: 47, n: 'Regulator and inspection guidance', s: 'how the standards meet real files', d: ['Not standards themselves, but the closest', 'available statement of how they will be', 'applied to files like yours. Dates quickly.'], e: ['Inspection reports and findings;', 'thematic reviews from national audit', 'regulators on technology and AI in audit'] },
    { c: COLORS.emerald, w: 36, n: 'Academic evidence', s: 'disinterested and method-transparent — and slow', d: ['No product to sell, and the method is on', 'the page. Describes populations, not your', 'engagement, and lags practice by years.'], e: ['The automation-bias literature;', 'research on audit data analytics and', 'technology adoption in audit practice'] },
    { c: COLORS.amber, w: 24, n: 'Practitioner commentary', s: 'fast and concrete, but nobody checked it', d: ['Says what deployment actually feels like,', 'which no regulator writes down. Generalises', 'from one firm, and is reviewed by no one.'], e: ['Conference talks, firm newsletters,', 'blog posts, and single-engagement', 'experience written up informally'] },
    { c: COLORS.red, w: 12, n: 'Vendor material', s: 'written by the party selling the answer', d: ['The only source for what a product actually', 'does, and the least disinterested thing you', 'will ever read about whether it does it well.'], e: ['Product pages, accuracy claims,', 'demonstrations, and case studies', 'with no independent replication'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Every rung has a use — the ladder is about how much weight a claim carries on its own.">
      <defs><marker id="arrowAUd5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Weighing what you read about AI in audit</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the higher the rung, the more weight a claim carries on its own — weight increases upwards</text>
      <text x="44" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">RUNG</text>
      <text x="258" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT IT IS, AND WHY IT SITS HERE</text>
      <text x="510" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">EXAMPLES BEHIND THIS COURSE</text>
      <text x="706" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WEIGHT</text>
      <line x1="17" y1="392" x2="17" y2="72" stroke={COLORS.slate300} strokeWidth="2" markerEnd="url(#arrowAUd5)" />
      {rungs.map((r, i) => (
        <g key={i}>
          <rect x="30" y={70 + i * 66} width="740" height="58" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          <rect x="30" y={70 + i * 66} width="7" height="58" rx="3" fill={r.c} />
          <text x="46" y={92 + i * 66} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{r.n}</text>
          <text x="46" y={106 + i * 66} fill={COLORS.slate500} fontSize="7.8">{r.s}</text>
          {r.d.map((t, j) => <text key={j} x="258" y={90 + i * 66 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>)}
          {r.e.map((t, j) => <text key={j} x="510" y={90 + i * 66 + j * 12} fill={COLORS.slate700} fontSize="8">{t}</text>)}
          <rect x="706" y={95 + i * 66} width="58" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="706" y={95 + i * 66} width={r.w} height="8" rx="4" fill={r.c} />
        </g>
      ))}
      <rect x="30" y="404" width="740" height="38" rx="8" fill={COLORS.slate700} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">Closest to you and not on this ladder: your firm’s methodology, its approved-tool list and its independence rules —</text>
      <text x="400" y="434" textAnchor="middle" fill={COLORS.slate300} fontSize="8.4">the only sources that know your firm, your clients and your engagement, and the group that settles the most real questions</text>
      <rect x="30" y="450" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Read downwards to find what binds you; read upwards to check what you were told</text>
      <text x="400" y="486" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">This course is not on the ladder — it is model-drafted orientation, edited but unreviewed, and it carries no authority at all</text>
    </DiagramFrame>
  );
};
