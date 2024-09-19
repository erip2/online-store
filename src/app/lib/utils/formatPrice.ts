const formatPrice = (price: Number): string => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export default formatPrice;
