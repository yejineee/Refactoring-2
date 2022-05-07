/**
 * step 1. 두 번째 단계인 배송비 계산 부분을 함수로 추출
 */
function applyShipping(basePrice, shippingMethod, quantity, discount) {
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
  // 2. 배송비 계산
  const price = applyShipping(basePrice, shippingMethod, quantity, discount);
  return price;
}
