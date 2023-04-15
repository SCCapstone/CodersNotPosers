const MyCart = {
    items: [],
    addToCart: function(item, quantity = 1) {
      const exisitngItem = this.items.find(i=> i.item === item.item && i.price === item.price);
      if(exisitngItem) {
        exisitngItem.quantity += quantity;
        console.log("found item");
        console.log(this.getQuantityByName(item))
      } else {
      this.items.push({...item, quantity});
      console.log("item not found");
      ;
    }
  },
    removeItem: function(_item) {
      const index = this.items.findIndex((i) => i.item === _item.item);
      if (index > -1) {
        const quantity = this.items[index].quantity;
        if (quantity > 1) {
          this.items[index].quantity = quantity - 1;
        } else {
          this.items.splice(index, 1);
        }
      }
    },
    getItems: function() {
      return this.items;
    },
    getTotalPrice: function() {
      let totalPrice = 0;
      for (let i = 0; i < this.items.length; i++) {
        totalPrice += this.items[i].price *this.items[i].quantity;
      }
      return totalPrice;
    },
    clearCart: function() {
      this.items = [];
    },
    getQuantityByName: function(__item) {
      const _item = MyCart.items.find(i => i.item === __item.item);
      return _item ? _item.quantity : 0;
    }
  };
  
  export default MyCart;
  