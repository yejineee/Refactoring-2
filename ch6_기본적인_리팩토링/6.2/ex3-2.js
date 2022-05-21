// EX 3. 한 번에 한 문장씩 옮기기

function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]); // ✨ 첫 번째 호출부를 본문으로 대체
  return lines;
}
