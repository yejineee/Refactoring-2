function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  // 1. 할인율 계산
  const discount = Math.max(quantity - product.discountThreshold, 0)
  * product.basePrice * product.discountRate;
  // 2. 배송비 계산
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}
