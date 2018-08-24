const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40
  };
  
  function Cashier(name, products) {
    this.name = name;
    this.productDatabase = products;
    this.customerMoney = 0;
    this.countTotalPrice = function(order) {
      let price = 0;
      for (let item in order) {
        price += order[item] * this.productDatabase[item];
      }
      return price;
    };
    this.getCustomerMoney = function(money) {
      this.customerMoney = money;
    };
    this.countChange = function(totalPrice) {
      return this.customerMoney >= totalPrice ? this.customerMoney - totalPrice : null;
    };
    this.onSuccess = function(change) {
      console.log('Спасибо за покупку, ваша сдача '+change); 
    };
    this.onError = function(change) {
      console.log('Очень жаль, вам не хватает денег на покупки'); 
    };
    this.reset = function() {
      this.customerMoney = 0;
    };
    return this;
  }
  
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  const mango = new Cashier("Mango", products);
  
  console.log(mango.name); 
  console.log(mango.productDatabase); 
  console.log(mango.customerMoney); 
  
  const totalPrice = mango.countTotalPrice(order);
  console.log(totalPrice); 
  
  mango.getCustomerMoney(300);
  console.log(mango.customerMoney); 
  const change = mango.countChange(totalPrice);
  
  console.log(change); 

  if (change !== null) {
    mango.onSuccess(change); 
  } else {
    mango.onError(); 
  }
  mango.reset();
  console.log(mango.customerMoney); 
  