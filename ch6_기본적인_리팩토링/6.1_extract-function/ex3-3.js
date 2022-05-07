// Ex3. 지역 변수의 값을 변경할 때
// - step 5: 추출한 코드의 원래 위치에서 함수를 호출한다.

function printOwning(invoice) {
  printBanner();

  // ✨ 추출한 함수를 호출하고, 반환값을 원래 변수에 저장한다.
  // 이 때 기존 let 변수를 const 변수로 바꿔준다.
  const outstanding = calculateOutstanding(invoice);
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
  let result = 0; // ✨ 반환값의 이름을 자신의 코딩 스타일에 맞춰 변경한다.
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
