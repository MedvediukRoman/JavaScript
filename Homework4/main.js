function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let element of currencyValues){
        if(element.currency === exchangeCurrency){
            return sumUAH / element.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:42},{currency:'EUR',value:50}],'USD'))