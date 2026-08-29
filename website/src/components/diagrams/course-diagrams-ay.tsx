import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR AUDIT — MODULE 1: THE HONEST MAP OF AI IN AUDIT ============ */
export const AuditScopeSafetyDiagram = () => {
  const q1 = ['tools that read journals, contracts,', 'confirmations and minutes — and what', 'using them does to evidence,', 'documentation and review'];
  const q2 = ['the client already uses models — provision', 'models, fair-value marks, fraud filters,', 'automated postings — so the numbers are', 'model-touched whether you look or not'];
  const layers = [
    { w: 344, t: 'the jurisdiction — what an inspector will accept varies by regulator' },
    { w: 316, t: 'the framework — different territories answer some questions differently' },
    { w: 288, t: 'your firm’s methodology — closer to your engagement than any course' },
  ];
  const fixed = [['scepticism —', 'a disposition,', 'not a procedure'], ['the evidence standard —', 'relevant and reliable,', 'however it was found'], ['the documentation duty —', 'a reviewer can follow', 'what was done'], ['the signature —', 'a person answers', 'for the opinion']];
  return (
    <DiagramFrame viewBox="0 0 800 474" caption="Orientation for practitioners — the map, the vocabulary and the questions; never a methodology, never a basis for a procedure.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A map of where AI meets audit — orientation, not audit guidance</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">what a file must document, what a firm may rely on and what an inspector will accept are local questions</text>
      <rect x="30" y="56" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE DUAL QUESTION — HELD AT ONCE, BECAUSE NEITHER HALF IS OPTIONAL</text>
      <rect x="46" y="82" width="340" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x="216" y="94" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">WHAT AI DOES TO YOUR AUDIT WORK</text>
      {q1.map((t, i) => <text key={i} x="216" y={104 + i * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
      <rect x="414" y="82" width="340" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x="584" y="94" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">WHAT YOUR AUDIT DOES ABOUT THE CLIENT’S AI</text>
      {q2.map((t, i) => <text key={i} x="584" y={104 + i * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
      <text x="400" y="152" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the two halves meet in the firm and the file, which must hold both questions on every engagement</text>
      <text x="400" y="163" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">answering one well while ignoring the other is the commonest failure — and it runs in both directions</text>
      <rect x="30" y="178" width="740" height="126" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="178" width="740" height="18" rx="9" fill={COLORS.amber} /> <text x="400" y="191" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHY ANSWERS STAY AT THE LEVEL THAT HOLDS EVERYWHERE</text>
      <rect x="46" y="206" width="330" height="60" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" /> <text x="211" y="220" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">WHERE THIS COURSE ANSWERS</text>
      <text x="211" y="234" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the shape of the arguments, the vocabulary</text>
      <text x="211" y="245" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">and the questions worth asking —</text>
      <text x="211" y="256" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">nothing that depends on where you audit</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="410" y={206 + i * 24} width={l.w} height="18" rx="4" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.3" /> <text x={410 + l.w / 2} y={218 + i * 24} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{l.t}</text>
        </g>
      ))}
      <text x="410" y="286" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">each layer sits closer to your engagement than the one above it</text>
      <text x="400" y="298" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">where the honest answer is that it depends on your firm and your regulator, the course says exactly that — a question being local is itself useful knowledge</text>
      <rect x="30" y="314" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="332" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">WHAT THIS TECHNOLOGY MOVES — AND THE FOUR FIXED POINTS IT DOES NOT</text>
      <rect x="46" y="342" width="180" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" /> <text x="136" y="356" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">WHAT MOVES</text>
      <text x="136" y="368" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the cost of reading —</text>
      <text x="136" y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">every line, every contract, every</text>
      <text x="136" y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">reply, flagged for attention</text>
      {fixed.map((f, i) => (
        <g key={i}>
          <rect x={246 + i * 130} y="342" width="118" height="56" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          {f.map((t, j) => <text key={j} x={305 + i * 130} y={360 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="420" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="440" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PRETENDING A LOCAL QUESTION HAS A GLOBAL ANSWER IS HOW ORIENTATION BECOMES BAD GUIDANCE</text> <text x="400" y="457" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">every tempting mistake in this territory is a quiet attempt to move one of the four fixed points</text>
    </DiagramFrame>
  );
};
export const AuditAIMapDiagram = () => {
  const rows = [
    { s: ['risk assessment', 'and planning'], f: ['digests prior-year files, minutes and industry', 'material into suggestions of where risk might sit'], b: ['“it assesses risk” — a suggestion', 'is not a risk assessment'] },
    { s: ['journal-entry', 'testing'], f: ['scores every posting against patterns worth a look —', 'weekend entries, round amounts, unusual pairings'], b: ['“it finds fraud” — unusual is mostly', 'legitimate; the ranking is the product'] },
    { s: ['document and', 'contract review'], f: ['extracts terms, dates and obligations from populations', 'too large to read — good but imperfect recall'], b: ['“it reviews contracts” —', 'the misses are silent'] },
    { s: ['confirmations'], f: ['chases replies, matches them and flags the exceptions', 'for a person to take a view on'], b: ['“it automates confirmations” — the', 'exception judgement does not move'] },
    { s: ['analytics'], f: ['extends the disaggregation and expectation work', 'auditors already do to a finer grain'], b: ['“it audits the numbers” — expectations', 'and explanations remain yours'] },
    { s: ['drafting'], f: ['produces first versions of memos, summaries', 'and client requests'], b: ['“it writes the workpaper” — a first', 'version is the beginning of work'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="None of the six is a new procedure — a tool assisting a procedure inherits the procedure’s evidence rules, and the auditor still owns the conclusion.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Set the brochure aside and walk the engagement</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">six places tools genuinely sit — every one inside an existing procedure whose evidence rules it inherits</text>
      <rect x="30" y="54" width="740" height="280" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE ENGAGEMENT, WALKED — THE FLOOR AGAINST THE BROCHURE</text>
      <text x="112" y="84" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4" fontWeight="700">STAGE</text>
      <text x="196" y="84" fill={COLORS.emerald} fontSize="6.4" fontWeight="700">WHAT THE TOOL GENUINELY DOES</text>
      <text x="490" y="84" fill={COLORS.red} fontSize="6.4" fontWeight="700">WHAT THE BROCHURE IMPLIES</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="42" y={90 + i * 40} width="140" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {r.s.map((t, j) => <text key={j} x="112" y={90 + i * 40 + (r.s.length === 1 ? 21 : 15) + j * 11} textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{t}</text>)}
          {r.f.map((t, j) => <text key={j} x="196" y={104 + i * 40 + j * 11} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
          {r.b.map((t, j) => <text key={j} x="490" y={104 + i * 40 + j * 11} fill={COLORS.red} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="344" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" /> <text x="400" y="362" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE PATTERN UNDER THE MAP — ONE LINE SORTS EVERY CLAIMED CAPABILITY</text>
      <rect x="46" y="372" width="330" height="22" rx="4" fill={COLORS.emerald} /> <text x="211" y="386" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">READING → FLAGGING</text>
      <line x1="400" y1="368" x2="400" y2="400" stroke={COLORS.slate400} strokeWidth="1.4" strokeDasharray="4 3" />
      <rect x="424" y="372" width="330" height="22" rx="4" fill={COLORS.red} /> <text x="589" y="386" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">EVALUATING · DECIDING · CONCLUDING</text>
      <text x="211" y="408" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8">left of the line: genuine and growing competence</text>
      <text x="589" y="408" textAnchor="middle" fill={COLORS.red} fontSize="6.8">right of it: a demonstration that worked on well-behaved documents</text>
      <text x="400" y="426" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a procedure includes deciding what the results mean — and relevance and reliability are judgements a similarity score cannot make</text>
      <rect x="30" y="446" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="466" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AI COMPRESSES READING AND FLAGGING — IT DOES NOT PERFORM, EVALUATE OR CONCLUDE</text> <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">this one sorting rule filters most vendor conversations, and most internal enthusiasm, faster than any framework</text>
    </DiagramFrame>
  );
};
export const FullPopulationTestingDiagram = () => {
  const buys = [
    { h: 'coverage of the haystack', l: ['nothing excluded by the sample design — the rare', 'unusual item has at least been read by something'] },
    { h: 'better targeting', l: ['follow-up hours concentrate where the anomaly', 'ranking points, instead of spreading at random'] },
  ];
  const caveats = ['· a shallow pass over everything can be weaker', '  evidence than a deep test of a chosen sample', '· a flag is a question, not a finding — it supports', '  nothing until someone follows it to the source', '· follow-up to invoice, approval, contract and bank', '  entry still costs exactly what it always cost'];
  const flow = [
    { x: 46, w: 150, c: COLORS.amber, t: ['a flagged outlier', 'a statistical observation'] },
    { x: 230, w: 170, c: COLORS.amber, t: ['followed to the source', 'invoice · approval · contract · bank'] },
    { x: 434, w: 150, c: COLORS.amber, t: ['evaluated by a person', 'what does it mean here?'] },
    { x: 618, w: 136, c: COLORS.emerald, t: ['only now: evidence', 'able to support an opinion'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 464" caption="The constraint that made sampling necessary is gone in specific, bounded places — the headline is honest, and the caveats are part of it.">
      <defs><marker id="arrowAUa3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Sampling was a concession to the cost of reading — and that cost has moved</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nobody believed thirty items out of thirty thousand were the ideal evidence; reading everything was unaffordable</text>
      <rect x="30" y="56" width="740" height="108" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT CHANGED — AND WHAT THE OLD DISCIPLINE ALREADY KNEW</text>
      <text x="180" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">THEN — A SAMPLE, TESTED DEEPLY</text>
      {Array.from({ length: 80 }).map((_, i) => <rect key={i} x={60 + (i % 20) * 12} y={92 + Math.floor(i / 20) * 12} width="9" height="9" rx="1.5" fill={[7, 33, 58].includes(i) ? COLORS.blue : COLORS.slate200} />)}
      <text x="180" y="152" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">a defensible statement about a population, most of it unread</text>
      <line x1="400" y1="80" x2="400" y2="158" stroke={COLORS.slate300} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="580" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">NOW — EVERY ITEM READ BY SOMETHING</text>
      {Array.from({ length: 80 }).map((_, i) => <rect key={i} x={460 + (i % 20) * 12} y={92 + Math.floor(i / 20) * 12} width="9" height="9" rx="1.5" fill={COLORS.blueMid} />)}
      <text x="580" y="152" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">a pass at machine cost — but reading is not judgement</text>
      <rect x="30" y="174" width="360" height="130" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="174" width="360" height="18" rx="9" fill={COLORS.emerald} /> <text x="210" y="187" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT FULL POPULATION ACTUALLY BUYS</text>
      {buys.map((b, i) => (
        <g key={i}>
          <text x="44" y={206 + i * 36} fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{b.h}</text>
          {b.l.map((t, j) => <text key={j} x="44" y={216 + i * 36 + j * 10} fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <text x="44" y="284" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">neither benefit is a conclusion — both sit upstream</text>
      <text x="44" y="294" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">of the judgement work, which has not moved</text>
      <rect x="410" y="174" width="360" height="130" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="174" width="360" height="18" rx="9" fill={COLORS.red} /> <text x="590" y="187" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE CAVEATS THAT ARE PART OF THE CLAIM</text>
      {caveats.map((t, i) => <text key={i} x="424" y={206 + i * 11} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <text x="424" y="284" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">a coverage claim in planning deserves the same</text>
      <text x="424" y="294" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">scepticism as any other confident assertion</text>
      <rect x="30" y="314" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="332" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">TEN THOUSAND FLAGS IS NOT AN AUDIT — IT IS TEN THOUSAND DECISIONS ABOUT THE FOLLOW-UP BUDGET</text>
      {flow.map((f, i) => (
        <g key={i}>
          <rect x={f.x} y="344" width={f.w} height="34" rx="6" fill={COLORS.slate50} stroke={f.c} strokeWidth="1.4" /> <text x={f.x + f.w / 2} y="358" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{f.t[0]}</text> <text x={f.x + f.w / 2} y="370" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{f.t[1]}</text>
          {i < 3 && <line x1={f.x + f.w + 4} y1="361" x2={flow[i + 1].x - 4} y2="361" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowAUa3)" />}
        </g>
      ))}
      <text x="400" y="392" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the judgement work has not moved — it has been pointed at better places, and it still has to be budgeted, performed and documented</text>
      <rect x="30" y="410" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">MORE COVERAGE IS NOT MORE ASSURANCE IF THE TEST IS SHALLOW</text> <text x="400" y="447" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">assurance comes from what the auditor did about what was found, not from how much was scanned</text>
    </DiagramFrame>
  );
};
export const AuditExposureDiagram = () => {
  const readers = [
    { t: ['team review'], n: 'during fieldwork', w: 140 },
    { t: ['engagement quality', 'review'], n: 'before sign-off', w: 104 },
    { t: ['internal inspection'], n: 'perhaps, later', w: 68 },
    { t: ['regulator’s inspection'], n: 'two or three years on', w: 32 },
  ];
  const chips = ['precise figures', 'tidy cross-references', 'the cadence of a good memo', 'terminology used correctly'];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="The cues that once separated careful work from sloppy work are now the default register of the generator.">
      <defs><marker id="arrowAUa4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A written record built to be doubted, read by professional doubters, years later</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">model-drafted text and model-produced figures are arriving in the file that outlives everyone in the room</text>
      <rect x="30" y="54" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FILE’S AFTERLIFE — EACH READER BRINGS LESS CONTEXT AND LESS CHARITY</text>
      {readers.map((r, i) => (
        <g key={i}>
          <rect x={46 + i * 182} y="80" width="166" height="30" rx="6" fill={COLORS.slate50} stroke={i === 3 ? COLORS.red : COLORS.slate400} strokeWidth="1.3" />
          {r.t.map((t, j) => <text key={j} x={129 + i * 182} y={80 + (r.t.length === 1 ? 19 : 13) + j * 11} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{t}</text>)}
          <rect x={46 + i * 182} y="118" width={r.w} height="8" rx="2" fill={i > 1 ? COLORS.red : COLORS.blue} />
          <text x={46 + i * 182} y="138" fill={COLORS.slate500} fontSize="6.2">{r.n}</text>
          {i < 3 && <line x1={214 + i * 182} y1="95" x2={226 + i * 182} y2="95" stroke={COLORS.slate400} strokeWidth="1.3" markerEnd="url(#arrowAUa4)" />}
        </g>
      ))}
      <text x="46" y="152" fill={COLORS.slate500} fontSize="6.4">context and charity remaining →</text>
      <text x="754" y="152" textAnchor="end" fill={COLORS.red} fontSize="6.4">hindsight hardened into certainty, and the authors gone</text>
      <text x="400" y="164" textAnchor="middle" fill={COLORS.slate600} fontSize="7">each layer reads with less context and less charity than the last — inspection arrives on a delay that removes every author from the room</text>
      <rect x="30" y="182" width="360" height="148" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="182" width="360" height="18" rx="9" fill={COLORS.red} /> <text x="210" y="195" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">UNDER A SIGNATURE</text>
      <text x="44" y="214" fill={COLORS.slate600} fontSize="6.8">everything in the file sits under a signature</text>
      <text x="44" y="224" fill={COLORS.slate600} fontSize="6.8">asserting that the work supports the opinion</text>
      <text x="44" y="240" fill={COLORS.slate600} fontSize="6.8">· a figure a tool invented</text>
      <text x="44" y="251" fill={COLORS.slate600} fontSize="6.8">· a citation to a document that does not say it</text>
      <text x="44" y="262" fill={COLORS.slate600} fontSize="6.8">· a summary that dropped the one exception</text>
      <text x="44" y="278" fill={COLORS.red} fontSize="6.8" fontWeight="700">read later as evidence not obtained, work not</text>
      <text x="44" y="288" fill={COLORS.red} fontSize="6.8" fontWeight="700">done and reliance not justified — attributed</text>
      <text x="44" y="298" fill={COLORS.red} fontSize="6.8" fontWeight="700">to the people who signed</text>
      <text x="44" y="312" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the tool will not be in the room when the question is</text>
      <text x="44" y="322" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">asked, and no vendor agreement renames the file</text>
      <rect x="410" y="182" width="360" height="148" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="182" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="590" y="195" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FLUENCY READS AS CARE</text>
      <text x="424" y="212" fill={COLORS.slate600} fontSize="6.8">the signals an experienced reviewer reads as evidence of care:</text>
      {chips.map((t, i) => <g key={i}><rect x={424 + (i % 2) * 170} y={220 + Math.floor(i / 2) * 26} width="160" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" /><text x={504 + (i % 2) * 170} y={233 + Math.floor(i / 2) * 26} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text></g>)}
      <text x="424" y="282" fill={COLORS.slate600} fontSize="6.8">are exactly what a model produces by default, whether</text>
      <text x="424" y="292" fill={COLORS.slate600} fontSize="6.8">or not any care occurred — a fabricated number arrives</text>
      <text x="424" y="302" fill={COLORS.slate600} fontSize="6.8">with plausible precision, an invented citation formatted like a real one</text>
      <text x="424" y="316" fill={COLORS.red} fontSize="6.6" fontStyle="italic">the old heuristic — clean presentation suggests careful</text>
      <text x="424" y="326" fill={COLORS.red} fontSize="6.6" fontStyle="italic">work — fails on anything a model touched</text>
      <rect x="30" y="340" width="740" height="52" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="359" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8" fontWeight="700">WHAT LOOKED OBVIOUSLY FINE DURING FIELDWORK MUST STILL LOOK DEFENSIBLE TO A STRANGER</text>
      <text x="400" y="376" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">reading in a different economic climate, after the client has restated — elsewhere a fabricated figure is an embarrassment; here it sits under a signature</text>
      <rect x="30" y="402" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="422" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE DISTANCE BETWEEN AN EMBARRASSING MISTAKE AND A PROFESSIONAL FINDING IS THE SIGNATURE</text> <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">fluency is a property of the generator, not of the work — and review habits calibrated over whole careers quietly assume otherwise</text>
    </DiagramFrame>
  );
};
export const AuditPilotsDieDiagram = () => {
  const graves = [
    { h: ['CLIENT DATA ACCESS', 'NOBODY CLEARED'], l: ['a pilot planned around real', 'engagement files discovers,', 'months in, that engagement', 'terms, confidentiality duties and', 'the client’s own regulators stand', 'between the data and the tool'] },
    { h: ['METHODOLOGY APPROVAL', 'AFTER BUSY SEASON'], l: ['cleared in April, when nobody', 'will risk learning it in the one', 'period the firm actually works —', 'by the next busy season the', 'licence has lapsed and the', 'champion has moved on'] },
    { h: ['INSPECTION FEAR'], l: ['the partner’s asymmetry: saved', 'hours against defending a novel', 'approach to an inspector with no', 'precedent — a firm that has not', 'decided how to explain reliance', 'has decided against relying'] },
    { h: ['ANOTHER ENGAGEMENT’S', 'CHAOS'], l: ['a tool tuned on one engagement’s', 'documents meets different', 'systems, formats and scanned', 'contracts — the pilot’s results', 'were real, and they were', 'results about the pilot'] },
  ];
  const surv = [
    { h: 'A NAMED OWNER', l: ['one person answerable for the', 'tool’s behaviour, its approval', 'status and its results —', 'and currently in post'] },
    { h: 'A BOUNDED FIRST USE', l: ['one procedure, one document', 'type, one volunteer engagement', '— chosen so failure is cheap,', 'contained and informative'] },
    { h: 'SIGN-OFF BEFORE ROLLOUT', l: ['methodology and quality', 'involved while the answer could', 'still be no — not asked to bless', 'a fait accompli afterwards'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 434" caption="Plan the governance first — data access, approval timing, the inspection story and the transfer claim are the actual project.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Most pilots die of governance before the technology can disappoint anyone</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">audit firms have run enough pilots for the failure patterns to be recognisable — and none of them is technical</text>
      <rect x="30" y="54" width="740" height="176" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.red} /> <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE GRAVEYARD — FOUR RECOGNISABLE GRAVES</text>
      {graves.map((g, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="82" width="176" height="116" rx="10" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          {g.h.map((t, j) => <text key={j} x={130 + i * 182} y={96 + j * 10} textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">{t}</text>)}
          {g.l.map((t, j) => <text key={j} x={130 + i * 182} y={122 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <text x="400" y="216" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontStyle="italic">the shared cause: the pilot was planned as a technology project, and in an audit firm the binding constraints were never technical</text>
      <rect x="30" y="240" width="740" height="128" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="240" width="740" height="18" rx="9" fill={COLORS.emerald} /> <text x="400" y="253" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT THE SURVIVORS HAD — THREE UNGLAMOROUS FEATURES</text>
      {surv.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="268" width="222" height="68" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" /> <text x={157 + i * 240} y="282" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => <text key={j} x={157 + i * 240} y={294 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="354" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">none of this is technical, which is the point — adoption treated as an extension of how the firm already governs its work</text>
      <rect x="30" y="378" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="398" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SURVIVORS EXTENDED THE FIRM’S EXISTING GOVERNANCE INSTEAD OF WORKING AROUND IT</text> <text x="400" y="415" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">an unowned pilot dissolves the first time it produces a strange output and everyone assumes someone else is looking into it</text>
    </DiagramFrame>
  );
};
