# frozen_string_literal: true

hyvee = Store.create(name: 'Hyvee')
aldi = Store.create(name: 'ALDI')
price_chopper = Store.create(name: 'Price Chopper')
Store.create(name: 'Petsmart')
Store.create(name: 'Target')
Store.create(name: 'Dollar Tree')
Store.create(name: 'Taco Bell')
Store.create(name: "Imo's")

purch = Purchase.create(purchase_date: Date.current, total: 44.99, store: hyvee)
Item.create(name: 'Hotdogs', price: 3.99, purchase: purch)
Item.create(name: 'Buns', price: 1.99, purchase: purch)
Item.create(name: 'Toasted ravioli', price: 3.99, purchase: purch)
Item.create(name: 'Ketchup', price: 3.99, purchase: purch)

purch = Purchase.create(purchase_date: 1.week.ago, total: 33.33, store: aldi)
Item.create(name: 'Burgers', price: 5.99, purchase: purch)
Item.create(name: 'Burger Buns', price: 2.99, purchase: purch)
Item.create(name: 'Frozen Fish', price: 2.99, purchase: purch)

purch = Purchase.create(purchase_date: 2.weeks.ago, total: 25.45, store: hyvee)
Item.create(name: 'Hotdogs', price: 3.99, purchase: purch)
Item.create(name: 'Buns', price: 1.99, purchase: purch)
Item.create(name: 'Soda', price: 1.99, purchase: purch)
Item.create(name: 'Yogurt', price: 2.99, purchase: purch)

purch = Purchase.create(purchase_date: 3.weeks.ago, total: 16.99, store: price_chopper)
Item.create(name: 'Orange Juice', price: 3.99, purchase: purch)
Item.create(name: 'Bread', price: 1.99, purchase: purch)
Item.create(name: 'Cheese Slices', price: 3.99, purchase: purch)
Item.create(name: 'Ramen', price: 3.99, purchase: purch)
