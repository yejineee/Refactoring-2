// Ex3. 지역 변수의 값을 변경할 때

function printOwning(invoice) {
  let outstanding = 0;

  printBanner();

  // 미해결 채무(outstanding)을 계산한다.
  // 👀 이 for문 코드를 함수로 추출할 것이다. outstanding이라는 지역변수를 변경하고 있다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)를 기록한다.
  recordDueDate(); // ✨ 마감일 설정 로직을 함수로 추출

  // 세부사항 출력
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

function recordDueDate(invoice) { // ✨ 객체인 invoice 지역변수를 매개변수로 받아서, 값을 변경
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
