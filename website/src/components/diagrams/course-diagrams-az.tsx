import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR AUDIT — MODULE 2: USING AI WITHOUT SURRENDERING THE JUDGEMENT ============ */
export const ScepticismVsToolDiagram = () => {
  const cues = [['clean structure and', 'steady terminology'], ['decisive phrasing,', 'no hedging anywhere'], ['house style of a', 'careful senior'], ['never tired at the end', 'of a long population']];
  const client = ['· the polished reconciliation', '· the confident controller', '· the schedule that ties too neatly', '· the explanation offered a little too quickly'];
  const team = ['· a contract population summarised in seconds', '· one steady tone for the document it parsed well', '  and the document it mangled', '· uncertainty never flagged unless asked — and', '  not reliably then'];
  const rep = [
    ['noted, weighed and', 'corroborated — never', 'accepted on assertion'],
    ['it directs the work —', 'where to look, what to', 'ask — it is not the evidence'],
    ['a fast, tireless colleague', 'with no professional duty', 'and no signature at risk'],
    ['no new methodology —', 'the corroboration habits', 'already exist'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="The scepticism auditors already practise has acquired a new object — the confident tool inside their own team.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The profession that teaches doubt meets a tool that never doubts itself</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">automation bias is the profession’s own literature applied to itself — deference to output that arrives formatted, consistent and sure</text>
      <rect x="30" y="54" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SIGNALS OF CARE, SUPPLIED WITHOUT THE CARE</text>
      {cues.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 180} y="80" width="170" height="32" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={131 + i * 180} y={94 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
        </g>
      ))}
      <text x="400" y="126" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">reviewer instincts were calibrated on people, where these signals mean care was taken</text>
      <text x="400" y="139" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a model produces them whether or not care was involved — fluency is its default texture, so experience alone is not protection</text>
      <rect x="30" y="158" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="158" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="171" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FROM THE CLIENT — RELIANCE RESISTED</text>
      {client.map((t, i) => <text key={i} x="44" y={192 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="256" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the trained refusal to accept a claim because it is</text>
      <text x="44" y="267" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">fluent, convenient, or comes from someone confident</text>
      <rect x="410" y="158" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="158" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="171" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FROM INSIDE THE TEAM — RELIANCE INVITED</text>
      {team.map((t, i) => <text key={i} x="424" y={192 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="267" fill={COLORS.red} fontSize="6.8" fontStyle="italic">the same temptation, presented from the wrong side of the desk</text>
      <line x1="390" y1="222" x2="410" y2="222" stroke={COLORS.slate400} strokeWidth="1.4" strokeDasharray="4 3" />
      <rect x="30" y="296" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="314" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">THE WORKING DISCIPLINE — TREAT THE OUTPUT AS A MANAGEMENT REPRESENTATION</text>
      {rep.map((r, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="322" width="176" height="50" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {r.map((t, j) => <text key={j} x={130 + i * 182} y={338 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">nothing it says is settled until corroborated against something the tool did not produce — use it hard, and owe it nothing</text>
      <rect x="30" y="416" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="435" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RELIANCE IS EARNED BY VERIFICATION, NEVER CONFERRED BY FLUENCY</text>
      <text x="400" y="452" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">speed, polish and decisiveness are the output’s default texture, not indicators of accuracy</text>
    </DiagramFrame>
  );
};
export const EvidenceNotOutputDiagram = () => {
  const outputs = [['a summary of', 'a contract'], ['an extracted', 'clause'], ['a flagged', 'journal entry']];
  const really = [['is not the', 'contract'], ['is a claim that the', 'clause exists'], ['is a hypothesis about', 'a journal entry']];
  const ladder = [
    { y: 0, w: 560, c: COLORS.emerald, t: 'the source document, opened and read by a person' },
    { y: 1, w: 440, c: COLORS.blue, t: 'client-prepared analysis, verified against source' },
    { y: 2, w: 300, c: COLORS.amber, t: 'client-prepared analysis, unverified' },
    { y: 3, w: 300, c: COLORS.red, t: 'tool output — derivation uninspectable, fluent when wrong' },
  ];
  const loc = [['which document —', 'named, and in the', 'population supplied'], ['which page, which', 'passage — precise', 'enough to open'], ['a person opens it and', 'reads the passage', 'before the clause exists'], ['a bare source name is', 'exactly what a model', 'invents best']];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Assurance enters when a person follows the pointer to the source and finds the thing actually there — not before.">
      <defs><marker id="arrowAUb2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A pointer to evidence, not evidence</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">tools present conclusions in finished form — the summary arrives looking like the end of the work when it is the beginning</text>
      <rect x="30" y="54" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      {outputs.map((o, i) => (
        <g key={i}>
          <rect x="46" y={64 + i * 30} width="120" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          {o.map((t, j) => <text key={j} x={106} y={75 + i * 30 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
          <line x1="170" y1={77 + i * 30} x2="196" y2={77 + i * 30} stroke={COLORS.slate500} strokeWidth="1.2" markerEnd="url(#arrowAUb2)" />
          <rect x="200" y={64 + i * 30} width="140" height="26" rx="5" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.3" />
          {really[i].map((t, j) => <text key={j} x={270} y={75 + i * 30 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <line x1="344" y1="106" x2="392" y2="106" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUb2)" />
      <text x="368" y="99" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">an index</text>
      <rect x="396" y="82" width="168" height="48" rx="7" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="480" y="100" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">where evidence might be,</text>
      <text x="480" y="112" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">roughly what shape</text>
      <line x1="568" y1="106" x2="596" y2="106" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowAUb2)" />
      <rect x="600" y="76" width="154" height="60" rx="7" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="677" y="94" textAnchor="middle" fill={COLORS.emerald} fontSize="7.2" fontWeight="700">a person follows the</text>
      <text x="677" y="106" textAnchor="middle" fill={COLORS.emerald} fontSize="7.2" fontWeight="700">pointer to the source</text>
      <text x="677" y="120" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">assurance enters here,</text>
      <text x="677" y="130" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">and not before</text>
      <text x="400" y="150" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">every figure or claim a tool produces is tied back to source by a person before it enters the file</text>
      <rect x="30" y="168" width="740" height="140" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="168" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="181" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">RELEVANCE AND RELIABILITY STILL DECIDE — THE EVIDENCE STANDARDS ASK WHAT THEY ALWAYS HAVE</text>
      {ladder.map((l, i) => (
        <g key={i}>
          <rect x="60" y={196 + i * 22} width={l.w} height="16" rx="4" fill={l.c} fillOpacity="0.85" />
      <text x="70" y={207 + i * 22} fill={COLORS.white} fontSize="6.8" fontWeight="700">{l.t}</text>
        </g>
      ))}
      <text x="638" y="230" fill={COLORS.slate500} fontSize="6.4">↑ reliability</text>
      <text x="400" y="296" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">tie-back moves the underlying fact up the ladder — the output itself never climbs; the evidence it pointed to does</text>
      <rect x="30" y="318" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">THE LOCATOR RULE — DEMAND A LOCATOR, NOT AN ASSERTION</text>
      {loc.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="344" width="176" height="50" rx="6" fill={COLORS.slate50} stroke={i === 3 ? COLORS.red : COLORS.emerald} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={130 + i * 182} y={360 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="410" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">tools that cannot point can still draft and structure — but their output cannot support anything in the file</text>
      <text x="400" y="422" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">know which kind of tool the team is holding before the busy season, not during it</text>
      <rect x="30" y="438" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="457" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A SUMMARY OF A CONTRACT IS NOT THE CONTRACT</text>
      <text x="400" y="474" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">where volume defeats opening everything, sample the pointers deliberately — the subject of this module’s last lesson</text>
    </DiagramFrame>
  );
};
export const WorkpaperQuestionDiagram = () => {
  const four = [
    { h: 'WHAT WENT IN', l: ['which documents, which', 'population, which version —', 'and what was excluded'] },
    { h: 'WHAT CAME OUT', l: ['the output actually relied on,', 'kept as produced rather', 'than as remembered'] },
    { h: 'WHAT THE AUDITOR DID', l: ['the follow-up performed, the', 'pointers opened, exceptions', 'resolved or escalated'] },
    { h: 'WHY RELIANCE WAS REASONABLE', l: ['what the team knew of the tool,', 'the checking of its work, the', 'thinking output-to-conclusion'] },
  ];
  const habit = [['export the inputs and', 'outputs where the', 'tool allows it'], ['note the configuration', 'and the date of', 'the run'], ['write the short paragraph', 'of reasoning a reviewer', 'actually needs']];
  return (
    <DiagramFrame viewBox="0 0 800 478" caption="Write for the inspector reading the file cold, years on, without the tool in the room — the reader the file was always for.">
      <defs><marker id="arrowAUb3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What goes in the file when a tool did the reading</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">not a new documentation philosophy — the ordinary discipline of the workpaper, applied to a new kind of preparer</text>
      <rect x="30" y="54" width="740" height="108" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FOUR QUESTIONS THE FILE ANSWERS</text>
      {four.map((f, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="80" width="176" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
      <text x={130 + i * 182} y="94" textAnchor="middle" fill={COLORS.blue} fontSize="6.2" fontWeight="700">{f.h}</text>
          {f.l.map((t, j) => <text key={j} x={130 + i * 182} y={106 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="400" y="152" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontStyle="italic">capture at the time — the tool will not remember for you, and neither input nor output is reconstructable afterwards</text>
      <rect x="30" y="172" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="172" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="185" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE TEST — AN INSPECTOR, THREE YEARS ON, WITHOUT THE TOOL IN THE ROOM</text>
      <rect x="46" y="200" width="170" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="131" y="214" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">this year: the reviewer</text>
      <text x="131" y="226" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">sees the work, challenges it</text>
      <line x1="220" y1="217" x2="256" y2="217" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUb3)" />
      <rect x="260" y="200" width="200" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="360" y="214" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">meanwhile: the tool is updated,</text>
      <text x="360" y="226" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">replaced or retired</text>
      <line x1="464" y1="217" x2="500" y2="217" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUb3)" />
      <rect x="504" y="196" width="250" height="42" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.6" />
      <text x="629" y="212" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">three years on: the file alone must explain</text>
      <text x="629" y="224" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">what the tool did, what went in and came out,</text>
      <text x="629" y="234" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">and why the team relied on it</text>
      <text x="400" y="256" textAnchor="middle" fill={COLORS.red} fontSize="7.2">if the answer requires a live demonstration of software that no longer exists in that form, the file does not support the reliance</text>
      <text x="400" y="270" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">audit files are precisely the documents read years later by people whose professional duty is scepticism about you</text>
      <rect x="30" y="300" width="300" height="118" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="300" width="300" height="18" rx="9" fill={COLORS.red} />
      <text x="180" y="313" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A SCREENSHOT IS NOT AN EXPLANATION</text>
      <text x="44" y="334" fill={COLORS.slate600} fontSize="7">it records what the software displayed</text>
      <text x="44" y="346" fill={COLORS.slate600} fontSize="7">at one moment — not what was loaded, what</text>
      <text x="44" y="358" fill={COLORS.slate600} fontSize="7">settings shaped the run, what went unflagged,</text>
      <text x="44" y="370" fill={COLORS.slate600} fontSize="7">or why any of it justified reliance</text>
      <text x="44" y="390" fill={COLORS.red} fontSize="6.8" fontStyle="italic">the form of documentation without the content —</text>
      <text x="44" y="401" fill={COLORS.red} fontSize="6.8" fontStyle="italic">it answers none of the four questions</text>
      <rect x="350" y="300" width="420" height="118" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="350" y="300" width="420" height="18" rx="9" fill={COLORS.emerald} />
      <text x="560" y="313" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE BETTER HABIT — IT COSTS LITTLE MORE</text>
      {habit.map((h, i) => (
        <g key={i}>
          <rect x={364 + i * 132} y="326" width="124" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {h.map((t, j) => <text key={j} x={426 + i * 132} y={342 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="560" y="392" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">fluent form standing in for absent content is this course’s</text>
      <text x="560" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">recurring warning, here in miniature</text>
      <rect x="30" y="428" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="447" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PARAGRAPH OF HONEST REASONING OUTLIVES ANY INTERFACE</text>
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">what went in, what came out, what the auditor did, and why reliance was reasonable — captured at the time</text>
    </DiagramFrame>
  );
};
export const AuditPasteProblemDiagram = () => {
  const outside = ['· outside the engagement terms the team may never have read in full', '· outside the professional duty of confidentiality and its protections', '· outside anything the firm has assessed — whatever its settings claim'];
  const shapes = [
    { h: 'THE SELF-REVIEW SHAPE', l: ['the firm advises a client on selecting,', 'building or tuning an AI system —', 'then audits numbers that system', 'helped produce'], n: ['standing near the self-review line the', 'profession has spent decades drawing'] },
    { h: 'WHOSE INFORMATION IS WORKING?', l: ['a tool trained or tuned on one client’s', 'data later assists another client’s', 'engagement — a question the old rules', 'never had to phrase'], n: ['neither shape has a settled, universal', 'answer yet'] },
  ];
  const movers = [['the jurisdiction', 'and its data rules'], ['each engagement’s', 'terms'], ['the firm’s own policies', 'and tooling'], ['regulatory expectations', 'still being written']];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="A course that handed you a tidy never-paste list would be producing a confident, fluent answer without the grounding to support it.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The paste problem — and the question this course refuses to answer</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">confidentiality is a professional duty and a contractual one at once — the reasoning behind the rule is not the team’s to redo</text>
      <rect x="30" y="54" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CLIENT DATA GOES ONLY INTO FIRM-APPROVED TOOLS — THE BOUNDARY IS NOT THE TEAM’S TO MOVE</text>
      <rect x="46" y="82" width="180" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
      <text x="136" y="97" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">the approved list</text>
      <text x="136" y="109" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the visible edge of an agreement between</text>
      <text x="136" y="128" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">firm, clients and regulators about</text>
      <text x="136" y="138" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">where client information may travel</text>
      <rect x="250" y="82" width="230" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="365" y="97" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">a consumer tool on a personal login</text>
      <text x="365" y="109" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">sits outside every one of those protections:</text>
      {outside.map((t, i) => <text key={i} x="250" y={128 + i * 11} fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
      <rect x="504" y="82" width="250" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="629" y="97" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">off the list?</text>
      <text x="629" y="109" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the question is never ‘is this probably fine’</text>
      <text x="629" y="130" textAnchor="middle" fill={COLORS.emerald} fontSize="7.2" fontWeight="700">it is ‘who do I ask’</text>
      <text x="629" y="142" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">the convenience of the paste is not a factor the duty recognises</text>
      <rect x="30" y="176" width="740" height="122" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="176" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="189" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE INDEPENDENCE ANGLES — ORIENTATION LEVEL: RECOGNISE THE SHAPE, ROUTE IT ON</text>
      {shapes.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 370} y="202" width="354" height="84" rx="7" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
      <text x={223 + i * 370} y="216" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => <text key={j} x={60 + i * 370} y={230 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
          {s.n.map((t, j) => <text key={j} x={60 + i * 370} y={270 + j * 10} fill={COLORS.slate500} fontSize="6.4" fontStyle="italic">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="308" width="740" height="130" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="308" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="321" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">‘WHAT MAY NEVER BE PASTED?’ — ANY GENERIC LIST WOULD BE WRONG SOMEWHERE, BECAUSE THE BOUNDARY MOVES WITH:</text>
      {movers.map((m, i) => (
        <g key={i}>
          <rect x={46 + i * 182} y="330" width="172" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {m.map((t, j) => <text key={j} x={132 + i * 182} y={m.length === 1 ? 349 : 343 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <text x="400" y="376" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">a tidy list here would repeat the exact failure this course warns about — a confident answer without the grounding</text>
      <text x="400" y="394" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontWeight="700">the portable answer is a procedure, not a list</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">know that the boundary exists · assume it is nearer than convenience suggests ·</text>
      <text x="400" y="420" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">know the person or policy at your firm that answers it — before the moment you need it</text>
      <rect x="30" y="448" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="467" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE REFUSAL TO HAND YOU A LIST IS THE LESSON</text>
      <text x="400" y="484" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the boundary is a firm and jurisdictional question — the practitioner’s job is the reflex, not the answer</text>
    </DiagramFrame>
  );
};
export const AuditReviewAtVolumeDiagram = () => {
  const pop = ['contract populations', 'confirmation responses', 'board minutes', 'correspondence'];
  const tests = [
    ['sample what it summarised —', 'read the documents yourself,', 'in full, against its output'],
    ['sample what it flagged —', 'count the flags that dissolve', 'on inspection'],
    ['sample what it did not flag —', 'the silent misses are where', 'the audit risk actually lives'],
    ['track error types — wrong party,', 'wrong date, missed clause,', 'invented confidence'],
  ];
  const hours = [['following the anomalies', 'that deserve following'], ['sitting longer with the', 'estimate that does not', 'smell right'], ['having the difficult', 'conversation with management,', 'properly prepared']];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Coverage of the haystack is not assurance about any particular straw — sample the tool’s work the way you would a junior’s.">
      <defs><marker id="arrowAUb5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Review at volume — the claim, the check, and what the hours are for</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">reading work that consumed juniors for weeks now compresses into hours — volume is where the tools earn their keep</text>
      <rect x="30" y="54" width="740" height="64" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      {pop.map((t, i) => (
        <g key={i}>
          <rect x={46 + i * 150} y="66" width="140" height="24" rx="5" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.3" />
      <text x={116 + i * 150} y="81" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      <line x1="646" y1="78" x2="676" y2="78" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUb5)" />
      <text x="722" y="75" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">weeks → hours</text>
      <text x="722" y="87" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">the tool does the reading</text>
      <text x="400" y="108" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">and with the speed arrives the most seductive sentence in the brochure</text>
      <rect x="30" y="128" width="740" height="106" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="128" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="141" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FALSE COMFORT OF COVERAGE</text>
      <rect x="46" y="154" width="270" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="181" y="173" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontStyle="italic">“we reviewed one hundred per cent of the population”</text>
      <line x1="320" y1="169" x2="352" y2="169" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUb5)" />
      <rect x="356" y="154" width="170" height="30" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="441" y="173" textAnchor="middle" fill={COLORS.amber} fontSize="7.4" fontWeight="700">reviewed to what standard?</text>
      <line x1="530" y1="169" x2="562" y2="169" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowAUb5)" />
      <rect x="566" y="150" width="188" height="38" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="660" y="165" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">skimmed at a shallow standard,</text>
      <text x="660" y="177" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">the population was filtered, not reviewed</text>
      <text x="400" y="204" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a shallow test of everything can be weaker evidence than a deep test of a sample</text>
      <text x="400" y="218" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and a flagged anomaly is a question, not a finding, until a person has followed it back to the source documents</text>
      <rect x="30" y="244" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="244" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="257" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE TOOL’S READING IS SOMEONE ELSE’S WORK — REVIEW IT THE WAY YOU WOULD A JUNIOR’S</text>
      {tests.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="270" width="176" height="50" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={130 + i * 182} y={286 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
        </g>
      ))}
      <text x="400" y="334" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">let the observed error rate set how much you lean on the tool next time</text>
      <text x="400" y="347" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">the rigorous method behind this — evaluation sets, regression testing, quality over time — is the Does Your AI Actually Work? course</text>
      <rect x="30" y="366" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="366" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="379" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE UPSIDE — THE HOURS WERE READING HOURS, AND THEY COME BACK FOR JUDGEMENT</text>
      {hours.map((h, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="392" width="234" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {h.map((t, j) => <text key={j} x={163 + i * 246} y={(h.length === 2 ? 409 : 404) + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{t}</text>)}
        </g>
      ))}
      <text x="400" y="446" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">fee pressure tempts firms to bank the hours instead — the judgement work is why they were freed</text>
      <rect x="30" y="464" width="740" height="30" rx="10" fill={COLORS.slate900} />
      <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">JUDGEMENT WAS NEVER THE PART TO AUTOMATE — IT WAS THE PART THERE WAS NEVER TIME FOR</text>
    </DiagramFrame>
  );
};
