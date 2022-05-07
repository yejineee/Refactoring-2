// step 5
// 1. applyShipping에 전달되는 매개변수 중, 첫 번째 단계를 수행하는 코드에서 사용되는 것 확인하기
// 2. 중간 데이터 구조로 옮기기
// 3. 매개변수에서 제거하기

// ✨ 첫 번째 단계에서 사용되는 코드는 priceData로 옮김 & 인자에서 제거
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}

function priceOrder(product, quantity, shippingMethod) {
  // 1. 상품가격 계산
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
  * product.basePrice * product.discountRate;

  // ✨ 첫 번째 단계에서 사용되는 basePrice, quantity, discount를 중간 데이터 구조로 옮김
  const priceData = {
    basePrice,
    quantity,
    discount,
  };

  // 2. 배송비 계산
  const price = applyShipping(priceData, shippingMethod);
  return price;
}
