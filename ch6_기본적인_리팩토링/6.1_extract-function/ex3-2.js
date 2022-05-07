// Ex3. 지역 변수의 값을 변경할 때
// - step 2: 추출할 코드를 새로운 함수로 복사한다.

function printOwning(invoice) {
  printBanner();

  // 미해결 채무(outstanding)을 계산한다.
  let outstanding = 0;
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

function calculateOutstanding(invoice) {
  // ✨ 추출할 코드 복사
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  // ✨ 수정된 값 반환
  // outstanding이라는 변수가 이 함수 밖에서 사용되므로, outstanding을 반환한다.
  return outstanding;
}
