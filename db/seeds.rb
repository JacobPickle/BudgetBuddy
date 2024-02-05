# frozen_string_literal: true

grocery = StoreType.create(name: 'Grocery')
pet = StoreType.create(name: 'Pet')
fast_food = StoreType.create(name: 'Fast Food')

hyvee = Store.create(name: 'Hyvee', store_type: grocery)
aldi = Store.create(name: 'ALDI', store_type: grocery)
price_chopper = Store.create(name: 'Price Chopper', store_type: grocery)
petsmart = Store.create(name: 'Petsmart', store_type: pet)
target = Store.create(name: 'Target')
dollar_tree = Store.create(name: 'Dollar Tree')
tacobell = Store.create(name: 'Taco Bell', store_type: fast_food)
imos = Store.create(name: "Imo's", store_type: fast_food)

purch = Purchase.create(purchase_date: Date.current, total: 61.11, store: hyvee)
Item.create(name: 'Hamburger Buns', price: 2.19, purchase: purch)
Item.create(name: 'Bread', price: 1.99, purchase: purch)
Item.create(name: 'Water Flavoring', price: 2.99, purchase: purch)
Item.create(name: 'Roma Tomatoes', price: 1.42, purchase: purch)
Item.create(name: 'Pizza', price: 2.99, purchase: purch)
Item.create(name: 'Pizza', price: 2.99, purchase: purch)
Item.create(name: 'Pizza', price: 2.99, purchase: purch)
Item.create(name: 'Cheddar Cheese', price: 2.68, purchase: purch)
Item.create(name: 'Russet Potatoes', price: 2.74, purchase: purch)
Item.create(name: 'Tortillas', price: 3.99, purchase: purch)
Item.create(name: 'Bagels', price: 2.19, purchase: purch)
Item.create(name: 'Mini Pizza Dough', price: 2.97, purchase: purch)
Item.create(name: 'Buttermilk Biscuits', price: 3.29, purchase: purch)
Item.create(name: 'Flaky Biscuits', price: 3.29, purchase: purch)
Item.create(name: 'Sour Cream', price: 1.99, purchase: purch)
Item.create(name: 'Daybreak', price: 13.89, purchase: purch)
Item.create(name: '24pk Water', price: 3.49, purchase: purch)

purch = Purchase.create(purchase_date: 1.day.ago, total: 111.83, store: target)
Item.create(name: 'Shirts', price: 30.00, purchase: purch)
Item.create(name: 'Pop-Tarts', price: 3.99, purchase: purch)
Item.create(name: 'MarketPantry', price: 2.99, purchase: purch)
Item.create(name: 'Chobani', price: 2.69, purchase: purch)
Item.create(name: 'MRKT PNTRY', price: 3.99, purchase: purch)
Item.create(name: 'Poppi', price: 2.29, purchase: purch)
Item.create(name: 'Monster', price: 2.69, purchase: purch)
Item.create(name: 'Monste', price: 2.69, purchase: purch)
Item.create(name: 'GG Milk', price: 1.99, purchase: purch)
Item.create(name: 'GG Sauce', price: 1.69, purchase: purch)
Item.create(name: 'REALEMON', price: 2.39, purchase: purch)
Item.create(name: 'STONYFIELD Yogurt', price: 7.49, purchase: purch)
Item.create(name: 'Dove', price: 5.99, purchase: purch)
Item.create(name: 'HeroCsmetics', price: 6.99, purchase: purch)
Item.create(name: 'Olive & June', price: 7.49, purchase: purch)
Item.create(name: 'Cotton Comfort', price: 17.99, purchase: purch)

# Item.create(name: '', price: , purchase: purch)
# Worse examples past this point, need to be redone
purch = Purchase.create(purchase_date: 1.week.ago, total: 29.21, store: aldi)
Item.create(name: 'Burgers', price: 5.99, purchase: purch)
Item.create(name: 'Burger Buns', price: 2.99, purchase: purch)
Item.create(name: 'Frozen Fish', price: 2.99, purchase: purch)
Item.create(name: 'Frozen Chicken', price: 6.99, purchase: purch)
Item.create(name: 'Pizza', price: 7.60, purchase: purch)

purch = Purchase.create(purchase_date: 2.weeks.ago, total: 12.05, store: hyvee)
Item.create(name: 'Hotdogs', price: 3.99, purchase: purch)
Item.create(name: 'Buns', price: 1.99, purchase: purch)
Item.create(name: 'Soda', price: 1.99, purchase: purch)
Item.create(name: 'Yogurt', price: 2.99, purchase: purch)

purch = Purchase.create(purchase_date: 3.weeks.ago, total: 15.35, store: price_chopper)
Item.create(name: 'Orange Juice', price: 3.99, purchase: purch)
Item.create(name: 'Bread', price: 1.99, purchase: purch)
Item.create(name: 'Cheese Slices', price: 3.99, purchase: purch)
Item.create(name: 'Ramen', price: 3.99, purchase: purch)

purch = Purchase.create(purchase_date: 2.weeks.ago, total: 23.54, store: tacobell)
Item.create(name: 'tacos', price: 15.22, purchase: purch)
Item.create(name: 'tacos', price: 2.99, purchase: purch)

purch = Purchase.create(purchase_date: 2.weeks.ago, total: 42.84, store: petsmart)
Item.create(name: 'Dog Food', price: 39.22, purchase: purch)

purch = Purchase.create(purchase_date: Date.current, total: 23.54, store: imos)
Item.create(name: 'pizza', price: 21.23, purchase: purch)

purch = Purchase.create(purchase_date: 1.weeks.ago, total: 33.54, store: tacobell)
Item.create(name: 'tacos', price: 25.22, purchase: purch)
Item.create(name: 'tacos', price: 2.99, purchase: purch)