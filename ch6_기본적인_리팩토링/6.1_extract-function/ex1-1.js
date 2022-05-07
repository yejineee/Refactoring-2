// Ex1. 유효범위를 벗어나는 변수가 없을 때
// - 중첩함수로 만들어서, printOwning 함수의 지역 변수를 참조할 수 있도록 한다.

function printOwning(invoice) {
  let outstanding = 0;

  printBanner(); // ✨ 배너 출력 함수 호출

  // 미해결 채무(outstanding)을 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)를 기록한다.
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetails(); // ✨ 세부사항 출력 로직 호출

  function printBanner() { // ✨ 배너 출력 로직을 함수로 추출
    console.log('--고객 채무--');
  }

  function printDetails() { // ✨ 세부 사항 출력 로직을 함수로 추출
    // 세부사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
  }
}
