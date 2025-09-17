// q1
const doubleValues = (arr) => {
    const newArr = arr.map(item => ({
      quantity: item.quantity * 2,
      price: item.price * 2,
    }));
    return newArr;
  };

// q2
const filterItems = (arr) => {
    const filteredArr = arr.filter(item => item.quantity > 2 && item.price > 300);
    return filteredArr;
  };

//q3
const calculateTotal = (arr) => {
    const totalValue = arr.reduce((accumulator, item) => {
      return accumulator + (item.quantity * item.price);
    }, 0);
    return totalValue;
  };