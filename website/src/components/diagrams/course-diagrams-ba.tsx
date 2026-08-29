import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR AUDITORS — MODULE 3: AUDITING THE CLIENT'S AI ============ */
export const ModelBehindTheNumberDiagram = () => {
  const sits = [
    ['expected-credit-loss and', 'provision models set the', 'provisions and the', 'impairments'],
    ['valuation models produce', 'fair-value marks for', 'positions nobody', 'trades'],
    ['fraud and anomaly filters', 'decide which transactions', 'a human being ever', 'looks at'],
    ['automated postings write', 'journals no clerk has read', 'or authorised', 'one by one'],
  ];
  const filterNote = ['so the model decides what management', 'itself ever investigates — and therefore', 'what ever surfaces as an exception'];
  const asks = ['finds out what is there — the ordinary first', 'procedure, needing no data scientist —', 'and plans the response knowingly'];
  const never = ['still audits the model outputs, on the silent', 'assumption that the system is a fixed', 'calculation, tested once and trusted after'];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Provisions, marks, filters and postings already carry the client’s models — the audit meets them with or without asking.">
      <defs><marker id="arrowAUc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The client got there first</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">whether or not the engagement uses any AI at all, the client almost certainly does — and nobody asked the audit team</text>
      <rect x="30" y="54" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHERE MODELS ALREADY SIT IN THE CLIENT’S REPORTING — NONE OF IT NEEDED THE AUDITOR’S AGREEMENT</text>
      {sits.map((s, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="80" width="176" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {s.map((t, j) => <text key={j} x={130 + i * 182} y={94 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="150" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">much of it arrived without an announcement — a vendor upgrade, a transformation project, a filter operations switched on because volumes demanded it</text>
      <rect x="30" y="168" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="168" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="181" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FILTER SITS IN FRONT OF THE TRANSACTION POPULATION</text>
      <rect x="46" y="200" width="170" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="131" y="219" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the full transaction population</text>
      <line x1="220" y1="215" x2="252" y2="215" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUc1)" />
      <rect x="256" y="200" width="120" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="316" y="219" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the model’s filter</text>
      <line x1="380" y1="209" x2="424" y2="201" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUc1)" />
      <line x1="380" y1="221" x2="424" y2="229" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUc1)" />
      <rect x="428" y="186" width="152" height="24" rx="5" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
      <text x="504" y="201" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6">what a human investigates</text>
      <rect x="428" y="218" width="152" height="24" rx="5" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="504" y="233" textAnchor="middle" fill={COLORS.red} fontSize="6.6">what nobody ever examines</text>
      {filterNote.map((t, i) => <text key={i} x="596" y={200 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <text x="400" y="256" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">familiar audit territory with a new resident — the same assertions and accounts, but a process step learned from data, not written in a manual</text>
      <rect x="30" y="274" width="740" height="104" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="292" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">TWO ENGAGEMENTS, ONE POPULATION OF MODEL-TOUCHED NUMBERS</text>
      <rect x="46" y="302" width="340" height="60" rx="7" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="216" y="316" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontWeight="700">THE TEAM THAT ASKS</text>
      {asks.map((t, i) => <text key={i} x="216" y={330 + i * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
      <rect x="414" y="302" width="340" height="60" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="584" y="316" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">THE TEAM THAT NEVER ASKS</text>
      {never.map((t, i) => <text key={i} x="584" y={330 + i * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
      <text x="400" y="374" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">learned components break exactly that assumption — what could go wrong in these processes has always been the risk question</text>
      <rect x="30" y="390" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="410" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE ENGAGEMENT AUDITS THE OUTPUT OF MODELS EITHER WAY</text>
      <text x="400" y="427" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the only decision left to the team is whether it does so knowingly, or by accident</text>
    </DiagramFrame>
  );
};
export const ClientAIInventoryDiagram = () => {
  const list = ['· which systems contain learned or statistical components', '· what each one decides or influences', '· who owns it — a name, currently in post', '· what changed this year'];
  const tour = ['· the transformation programme', '· the vendor’s roadmap', '· the pilot finance is excited about'];
  const flags = [
    { h: 'nobody owns it', l: ['the model was a project, the', 'project closed, and the', 'outputs kept coming'] },
    { h: 'no fallback', l: ['asked what happens when it', 'is wrong, management', 'describes the model again'] },
    { h: 'vendor-only understanding', l: ['only the supplier can explain', 'it — a modelling question', 'becomes a contractual one'] },
    { h: 'the deployment surprise', l: ['finance found out after IT', 'had put it into the flow', 'of transactions'] },
  ];
  const file = [
    ['the inventory as given — or', 'the note that none exists,', 'which is itself a finding'],
    ['per model: what it feeds, who', 'owns it, what changed, what', 'happens when it misbehaves'],
    ['red flags in neutral language,', 'tied to the risks they inform,', 'not corridor impressions'],
    ['the decisions: higher-risk', 'areas, where a specialist may', 'be needed, and the response'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="The inventory is evidence about the control environment before a single model is examined.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Does management know where its models run?</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a question that sounds administrative and is actually diagnostic — it costs one meeting, and the answer is evidence</text>
      <rect x="30" y="54" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE INVENTORY QUESTION — ASKED FIRST, BEFORE ANY MODEL IS EXAMINED</text>
      <rect x="46" y="80" width="348" height="72" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
      <text x="58" y="94" fill={COLORS.emerald} fontSize="7" fontWeight="700">A WORKING ANSWER IS A LIST</text>
      {list.map((t, i) => <text key={i} x="58" y={107 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <rect x="406" y="80" width="348" height="72" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="418" y="94" fill={COLORS.red} fontSize="7" fontWeight="700">A SUBSTITUTE ANSWER IS A TOUR OF ENTHUSIASM</text>
      {tour.map((t, i) => <text key={i} x="418" y={107 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <text x="418" y="146" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the difference is audit-relevant before any model is opened</text>
      <rect x="30" y="176" width="740" height="116" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="176" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="189" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FOUR ANSWERS THAT SHOULD RAISE THE AUDIT ANTENNAE</text>
      {flags.map((f, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="202" width="176" height="58" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={130 + i * 182} y="216" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">{f.h}</text>
          {f.l.map((t, j) => <text key={j} x={130 + i * 182} y={229 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <text x="400" y="278" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">none of these is a misstatement, and none alone condemns the client — each is a fact about how the entity governs things that touch the numbers</text>
      <rect x="30" y="302" width="740" height="102" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="320" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">WHAT TO WRITE DOWN — UNGLAMOROUS AND VALUABLE</text>
      {file.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="328" width="176" height="52" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={130 + i * 182} y={344 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="394" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">write it as ordinary understanding-the-entity work — a reviewer can watch the reasoning travel from what was learned to what the plan does</text>
      <rect x="30" y="416" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="436" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN ENTITY THAT CANNOT SAY WHERE ITS MODELS ARE CANNOT BE MONITORING THEM</text>
      <text x="400" y="453" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the inventory question shapes the risk assessment more than any technical detail will</text>
    </DiagramFrame>
  );
};
export const BlackBoxEstimateDiagram = () => {
  const scrutiny = [
    { h: 'DATA → PIPELINE', l: ['what fed the model, over what', 'period, with what known gaps —', 'not just which spreadsheet'] },
    { h: 'ASSUMPTIONS → TRAINING CHOICES', l: ['what the model was optimised', 'for, and what it was', 'allowed to ignore'] },
    { h: 'METHOD → BEHAVIOUR', l: ['how it acts at the edges,', 'and how anyone', 'would know'] },
  ];
  const gov = [
    ['validated before anyone', 'relied on it'],
    ['output monitored against', 'actual outcomes'],
    ['changes controlled,', 'recorded and dated'],
    ['reviewed by someone', 'independent of the builders'],
  ];
  const specialist = ['escalation, not surrender: an auditor’s specialist,', 'engaged to interrogate the method on the', 'team’s behalf — whose work the team must still', 'understand well enough to stand behind'];
  const shrug = ['“the model is too complex to audit” is not a', 'conclusion — it is the absence of one, and an', 'estimate does not become exempt from', 'evidence by being sophisticated'];
  const grounds = [
    ['the data lineage', 'examined'],
    ['the validation', 'reviewed'],
    ['the monitoring', 'evidence obtained'],
    ['sensitivity to the choices', 'management made'],
    ['past outputs against what', 'actually happened'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Scrutiny of data, assumptions, method and governance builds grounds for belief the file can hold.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The estimate you cannot re-derive</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an old discipline meets a new opacity — the three-part scrutiny survives the technology, and only its texture changes</text>
      <rect x="30" y="54" width="740" height="106" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SAME THREE-PART SCRUTINY, A NEW TEXTURE FOR EACH PART</text>
      {scrutiny.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 242} y="80" width="230" height="58" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={161 + i * 242} y="94" textAnchor="middle" fill={COLORS.blue} fontSize="6.6" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => <text key={j} x={161 + i * 242} y={107 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <text x="400" y="152" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">together with an honest eye on management’s tendency to lean the estimate the convenient way</text>
      <rect x="30" y="170" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="170" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="183" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">MANAGEMENT’S OWN GOVERNANCE IS EVIDENCE ABOUT RELIABILITY — NOT A COURTESY</text>
      {gov.map((g, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="196" width="176" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          {g.map((t, j) => <text key={j} x={130 + i * 182} y={211 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="248" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">a model surrounded by working governance and the same model running unwatched are different audit objects</text>
      <rect x="30" y="274" width="360" height="94" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="274" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="210" y="287" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHEN THE TEAM’S GRIP RUNS OUT</text>
      {specialist.map((t, i) => <text key={i} x="44" y={306 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="410" y="274" width="360" height="94" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="274" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="287" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT IS NEVER AVAILABLE — THE SHRUG</text>
      {shrug.map((t, i) => <text key={i} x="424" y={306 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="30" y="378" width="740" height="54" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="394" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">GROUNDS ARE THINGS A FILE CAN HOLD</text>
      {grounds.map((g, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="400" width="136" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {g.map((t, j) => <text key={j} x={110 + i * 146} y={411 + j * 9.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="442" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="462" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AUDITABLE GROUNDS FOR BELIEVING THE PROCESS — NOT A RE-DERIVATION OF THE NUMBER</text>
      <text x="400" y="479" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">when the grip runs out, the answer is a specialist — never a shrug</text>
    </DiagramFrame>
  );
};
export const ModelInControlDiagram = () => {
  const cm = [
    ['who may change or', 'retrain the model,', 'and on what authority'],
    ['what approval a', 'change requires,', 'before it ships'],
    ['changes logged with', 'dates, reasons and', 'named approvers'],
    ['behaviour tested', 'before and after', 'each change'],
    ['whether an emergency', 'path bypasses all', 'of the above'],
  ];
  const vendor = ['the relied-upon control is operated by a third', 'party, under a contract nobody in the room has', 'read recently, on a schedule the client neither', 'approves nor logs'];
  const drift = ['the world moves, the data mix shifts, and the', 'thresholds quietly start misfiring — whether', 'anyone would notice is monitoring, a controls', 'question of the most classical kind'];
  return (
    <DiagramFrame viewBox="0 0 800 484" caption="What changed, when, and under whose authority is now the centre of the controls work, not its afterthought.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A model inside a control breaks “automated means consistent”</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">test-of-one was always a test of one plus an assumption of constancy — and the assumption is the part learned logic removes</text>
      <rect x="30" y="54" width="740" height="132" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SAME CONTROL IS NOT THE SAME CONTROL ALL YEAR</text>
      <line x1="60" y1="150" x2="740" y2="150" stroke={COLORS.slate400} strokeWidth="1.2" />
      <polyline points="70,102 730,102" fill="none" stroke={COLORS.blue} strokeWidth="1.8" />
      <polyline points="70,122 200,122 200,113 340,113 340,128 480,128 480,110 620,110 620,120 730,120" fill="none" stroke={COLORS.amber} strokeWidth="1.8" />
      <line x1="180" y1="86" x2="180" y2="150" stroke={COLORS.slate500} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="180" y="82" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontWeight="700">your test date — the filter as tuned in March</text>
      <line x1="660" y1="86" x2="660" y2="150" stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="660" y="82" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">year-end — a different control in substance</text>
      <rect x="70" y="156" width="10" height="4" fill={COLORS.blue} />
      <text x="86" y="162" fill={COLORS.slate600} fontSize="6.2">written logic — the same all year</text>
      <rect x="290" y="156" width="10" height="4" fill={COLORS.amber} />
      <text x="306" y="162" fill={COLORS.slate600} fontSize="6.2">learned logic — retrained, recalibrated, adapting to volume</text>
      <text x="740" y="162" textAnchor="end" fill={COLORS.slate500} fontSize="6.2">time →</text>
      <text x="400" y="178" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">a matching threshold that adapts to volume is a different control in the busy season than it was in the quiet one</text>
      <rect x="30" y="196" width="740" height="110" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="196" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="209" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CHANGE MANAGEMENT BECOMES THE CONTROL THAT MATTERS</text>
      {cm.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="222" width="136" height="46" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={110 + i * 146} y={237 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <text x="400" y="282" textAnchor="middle" fill={COLORS.red} fontSize="7.2">the bypass, if it exists, is where the year’s real changes probably went</text>
      <text x="400" y="296" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a change log with named approvers gives the team something to test — enthusiasm about agility does not</text>
      <rect x="30" y="316" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="316" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="329" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">“THE VENDOR PUSHES UPDATES AUTOMATICALLY”</text>
      {vendor.map((t, i) => <text key={i} x="44" y={347 + i * 12} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="44" y="404" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the control sits outside the client’s own approval and logging</text>
      <rect x="410" y="316" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="316" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="329" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">DRIFT — A CHANGE WITH NO CHANGE TICKET AT ALL</text>
      {drift.map((t, i) => <text key={i} x="424" y={347 + i * 12} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="424" y="404" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">ask for the last breach — investigation and recalibration means it is alive</text>
      <rect x="30" y="424" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="444" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">LOGIC THAT UPDATES IS A CONTROL THAT CHANGES BETWEEN THE TEST DATE AND YEAR-END</text>
      <text x="400" y="461" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a monitoring report nobody reads is a control that exists in the design, not in the year under audit</text>
    </DiagramFrame>
  );
};
export const ManagementAIConversationDiagram = () => {
  const pairs = [
    { q: 'what does the model decide?', a: 'and what happened the last time it was wrong?' },
    { q: 'who owns it?', a: 'and what did that person change this year?' },
    { q: 'what would you do if it were unavailable tomorrow morning?', a: 'the answer exposes the fallback honestly' },
  ];
  const good = ['· a named owner who actually makes decisions about it', '· known limits stated without prompting — where it', '  performs badly, which cases are routed to a person', '· a fallback that has been used at least once,', '  not merely described', '· a change log that matches the year just walked through'];
  const bad = ['· enthusiasm without ownership', '· benefits without limits', '· governance vocabulary recited a little too smoothly', '· and the recurring tell — confidence about the outputs', '  from people who cannot say how they would know', '  if those outputs went wrong'];
  const file = [
    ['who was asked, what was', 'asked, and the substance —', 'including the follow-ups'],
    ['“stated it is monitored” and', '“could not describe it” are', 'different workpapers'],
    ['red flags tied to the risks', 'they inform, not left', 'as atmosphere'],
    ['corroboration planned —', 'representations are still', 'representations'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="Open questions and their follow-ups are evidence about the environment — record them like it.">
      <defs><marker id="arrowAUc5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The second answer is what the entity actually knows</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the first answer is what the organisation tells itself — so open questions, and then follow the answer</text>
      <rect x="30" y="54" width="740" height="140" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="70" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">TWO FAMILIAR FAILURES, AND THE PRODUCTIVE SHAPE</text>
      <rect x="46" y="78" width="348" height="30" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="220" y="90" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">run as a checklist, it collects nouns</text>
      <text x="220" y="101" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the answers optimise themselves to end the meeting</text>
      <rect x="406" y="78" width="348" height="30" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="580" y="90" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">run as enthusiasm-matching, it becomes admiration</text>
      <text x="580" y="101" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">a shared appreciation of the transformation programme</text>
      {pairs.map((p, i) => (
        <g key={i}>
          <rect x="46" y={116 + i * 25} width="320" height="18" rx="4" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x="206" y={128 + i * 25} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{p.q}</text>
          <line x1="370" y1={125 + i * 25} x2="396" y2={125 + i * 25} stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUc5)" />
          <rect x="400" y={116 + i * 25} width="354" height="18" rx="4" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x="577" y={128 + i * 25} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{p.a}</text>
        </g>
      ))}
      <rect x="30" y="204" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="204" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="217" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT A GOOD ANSWER SOUNDS LIKE</text>
      {good.map((t, i) => <text key={i} x="44" y={235 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <rect x="410" y="204" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="204" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="217" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT A BAD ANSWER SOUNDS LIKE</text>
      {bad.map((t, i) => <text key={i} x="424" y={235 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <text x="400" y="322" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">neither texture is a conclusion, and neither replaces testing — both are evidence about the environment, and both belong in the risk assessment</text>
      <rect x="30" y="334" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="334" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="347" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FROM CONVERSATION TO FILE</text>
      {file.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="360" width="176" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={130 + i * 182} y={374 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="420" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and the effect on the plan: what the team now treats differently because of what it heard</text>
      <rect x="30" y="438" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A CONVERSATION THAT CHANGES THE AUDIT AND LEAVES NO TRACE HAS, FOR THE FILE, NOT HAPPENED</text>
      <text x="400" y="475" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the test: a reviewer who was not in the room sees what was learned, what it meant, and what the audit did about it</text>
    </DiagramFrame>
  );
};
