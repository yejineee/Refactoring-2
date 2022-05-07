// step 3. 첫 번째 단계와 두 번째 단계가 주고받을 중간 데이터 구조를 만든다.
// ✨ 중간 데이터 구조를 매개변수로 받음
function applyShipping(priceData, basePrice, shippingMethod, quantity, discount) {
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

function priceOrder(product, quantity, shippingMethod) {
  // 1. 상품가격 계산
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
  * product.basePrice * product.discountRate;

  // ✨ 중간 데이터 구조
  const priceData = {};

  // 2. 배송비 계산
  // ✨ 중간 데이터 구조를 인자로 넘김
  const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
  return price;
}
