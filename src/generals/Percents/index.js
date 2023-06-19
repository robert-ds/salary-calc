const btn = document.querySelector("#calculate");
const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const result = document.querySelector("#result");

const calculatePriceWithDiscount = () => {
  const vprice = Number(price.value);
  const vdiscount = Number(discount.value);

  if(!vprice || 0){
    result.innerText = `Not exists value of price, please insert it`;
  }else if(!vdiscount || 0){
    result.innerText = `Not exists value of discount, please insert it`;
  }else if(vdiscount >= 100) {
    result.innerText = `Discount not >= 100`;
  }else{
    const newPrice = (vprice * (100 - vdiscount)) / 100;
    result.innerText = `The new price with discount is ${newPrice}$`;
  }

};

  btn.addEventListener('click', calculatePriceWithDiscount);