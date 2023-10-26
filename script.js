const object = cartObj();

let totalOrder = "";
let totalPrice = 0;
let priceOfDelivery = 9000;

for (const key in object) {
    totalOrder+= ` ${key} ${object[key].info}`;
    totalPrice+= object[key].price;
}

console.log(`Sizning buyurtmangiz: ${totalOrder} | Yetkazib berish narxi: ${priceOfDelivery} | Umumiy summa: ${totalPrice + priceOfDelivery}`);