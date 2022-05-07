// step 6 : 첫 번째 단계 코드를 함수로 추출 & 중간 데이터 구조 반환

// 2. 배송비 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  // ✨ 변수 인라인하기
  return priceData.basePrice - priceData.discount + shippingCost;
}

// ✨ 첫 번째 단계를 함수로 추출 & 중간 데이터 구조 반환
// 1. 상품가격 계산
function calculatePriceData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
  * product.basePrice * product.discountRate;

  return { // ✨ 변수 인라인하기
    basePrice,
    quantity,
    discount,
  };
}

function priceOrder(product, quantity, shippingMethod) {
  // ✨ 변수 인라인하기
  return applyShipping(calculatePriceData(product, quantity), shippingMethod);
}
