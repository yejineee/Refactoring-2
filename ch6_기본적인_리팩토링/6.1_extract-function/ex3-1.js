// Ex3. 지역 변수의 값을 변경할 때
// - step 1 : 변수 선언문을 변수가 사용되는 코드 근처로 슬라이드한다.

function printOwning(invoice) {
  printBanner();

  // 미해결 채무(outstanding)을 계산한다.
  let outstanding = 0; // ✨ 맨 위에 있던 선언문을 이 위치로 이동
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate();

  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('--고객 채무--');
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
