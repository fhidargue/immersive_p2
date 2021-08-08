export const getProducts = (categoryUrl, query) => {
  const newProducts = getProductsByCategory(categoryUrl);
  const productPromise = new Promise((res) => {
    setTimeout(() => {
      const filteredProducts = newProducts.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      res(filteredProducts);
    }, 2000);
  });
  return productPromise;
};

export const getProductsByCategory = (categoryUrl) => {
  const inventory = JSON.parse(localStorage.getItem("inventory"));
  let result = [];
  if (categoryUrl === "all") {
    result = inventory
      .map((item) => {
        return item.products || [];
      })
      .flat();
  } else {
    const newProducts = inventory.find((item) => {
      return item.url === categoryUrl;
    });
    if (newProducts && newProducts.products) {
      result = newProducts.products;
    } else {
      result = [];
    }
  }
  return result;
};

export const getProduct = (productUrl) => {
  const productPromise = new Promise((res) => {
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    let result = [];
    result = inventory
      .map((item) => {
        return item.products || [];
      })
      .flat()
      .find((item) => {
        return item.url === productUrl;
      });
    res(result);
  });
  return productPromise;
};

const CART_KEY = "cart";

export const getStoredCart = () => {
  const storedCartJson = localStorage.getItem(CART_KEY) || "";
  let storedCart;
  try {
    storedCart = JSON.parse(storedCartJson);
  } catch (e) {
    storedCart = null;
  }

  if (!Array.isArray(storedCart)) {
    storedCart = [];
  }

  return storedCart;
};

const CART_TOTAL_KEY = "cartTotal";

export const getStoredTotal = () => {
  const storedTotalData = localStorage.getItem(CART_TOTAL_KEY) || 0;
  let storedTotal;
  try {
    storedTotal = storedTotalData;
  } catch (e) {
    storedTotal = 0;
  }

  return storedTotal;
};

export const roundAccurately = (number, decimalPlaces) => {
  let newNumber = Number(
    Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces
  );
  return newNumber;
};
