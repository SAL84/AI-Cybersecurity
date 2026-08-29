import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import auM1 from './au-m1';
import auM2 from './au-m2';
import auM3 from './au-m3';
import auM4 from './au-m4';

const aiAudit: Course = {
  id: 'ai-audit',
  title: 'AI for Audit',
  subtitle: 'Where AI sits in audit work and in the numbers being audited — scepticism, evidence and the file when a model is involved on either side. Orientation, not audit guidance.',
  glossary: CORE_GLOSSARY,
  modules: [auM1, auM2, auM3, auM4],
};

export default aiAudit;
