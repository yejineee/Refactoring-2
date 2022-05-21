// EX 3. 한 번에 한 문장씩 옮기기

function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]); // ✨ 첫 번째 호출부를 본문으로 대체
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(['location', aCustomer.location]);
}
