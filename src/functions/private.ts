const calc = (score: { speaker1: any; speaker2: any; }) => {
  const speaker1 = score.speaker1;
  const s1j1 = speaker1.judge1;
  const s1j2 = speaker1.judge2;
  const s1j3 = speaker1.judge3;
  const a =
    parseFloat(s1j1.f1) * 0.1 +
    parseFloat(s1j1.f2) * 0.1 +
    parseFloat(s1j1.f3) * 0.3 +
    parseFloat(s1j1.f4) * 0.2 +
    parseFloat(s1j1.f5) * 0.2 +
    parseFloat(s1j1.f6) * 0.1;
  const b =
    parseFloat(s1j2.f1) * 0.1 +
    parseFloat(s1j2.f2) * 0.1 +
    parseFloat(s1j2.f3) * 0.3 +
    parseFloat(s1j2.f4) * 0.2 +
    parseFloat(s1j2.f5) * 0.2 +
    parseFloat(s1j2.f6) * 0.1;
  const c =
    parseFloat(s1j3.f1) * 0.1 +
    parseFloat(s1j3.f2) * 0.1 +
    parseFloat(s1j3.f3) * 0.3 +
    parseFloat(s1j3.f4) * 0.2 +
    parseFloat(s1j3.f5) * 0.2 +
    parseFloat(s1j3.f6) * 0.1;
  const s1 = (a + b + c) / 3;

  const speaker2 = score.speaker2;
  const s2j1 = speaker2.judge1;
  const s2j2 = speaker2.judge2;
  const s2j3 = speaker2.judge3;
  const x =
    parseFloat(s2j1.f1) * 0.1 +
    parseFloat(s2j1.f2) * 0.1 +
    parseFloat(s2j1.f3) * 0.3 +
    parseFloat(s2j1.f4) * 0.2 +
    parseFloat(s2j1.f5) * 0.2 +
    parseFloat(s2j1.f6) * 0.1;
  const y =
    parseFloat(s2j2.f1) * 0.1 +
    parseFloat(s2j2.f2) * 0.1 +
    parseFloat(s2j2.f3) * 0.3 +
    parseFloat(s2j2.f4) * 0.2 +
    parseFloat(s2j2.f5) * 0.2 +
    parseFloat(s2j2.f6) * 0.1;
  const z =
    parseFloat(s2j3.f1) * 0.1 +
    parseFloat(s2j3.f2) * 0.1 +
    parseFloat(s2j3.f3) * 0.3 +
    parseFloat(s2j3.f4) * 0.2 +
    parseFloat(s2j3.f5) * 0.2 +
    parseFloat(s2j3.f6) * 0.1;
  const s2 = (x + y + z) / 3;

  return ((s1 + s2) / 2).toFixed(3);
};

export default calc;