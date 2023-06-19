const btn = document.querySelector("#calculate");
const price = document.querySelector("#price");
const coupon = document.querySelector("#coupon");
const result = document.querySelector("#result");

const calculatePriceWithDiscount = () => {
  const vprice = Number(price.value);
  const vcoupon = coupon.value;
  let vdiscount;

  if(!vprice || !vcoupon){
    result.innerText = `Complete the form!`;
    return;
  }

  switch(vcoupon){
    case 'Coupon_Batman':
      vdiscount = 30;
      break;
    case 'Coupon_Flash':
      vdiscount = 15;
    default:
      result.innerText = `The "${vcoupon}" is not validated`;
      return;
  }

  const newPrice = (vprice * (100 - vdiscount)) / 100;
  result.innerText = `The new price with discount is ${newPrice}$`;

};

btn.addEventListener('click', calculatePriceWithDiscount);