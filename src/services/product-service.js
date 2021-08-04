export const getProducts = (categoryUrl, query) => {
  const newProducts = getProductsByCategory(categoryUrl);
  const productPromise = new Promise((res) => {
    setTimeout(() => {
      const filteredProducts = newProducts.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      res(filteredProducts);
    }, 1500);
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
