/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

let cook = new Map([
    ["Пицца", "Олег"],
    ["Суши", "Андрей"],
    ["Десерт", "Анна"]
]);
let dishes = new Map([
    ["Маргарита", "Пицца"],
    ["Пепперони", "Пицца"],
    ["Три сыра", "Пицца"],
    ["Филадельфия", "Суши"],
    ["Калифорния", "Суши"],
    ["Чизмаки", "Суши"],
    ["Сеякемаки", "Суши"],
    ["Тирамису", "Десерт"],
    ["Чизкейк", "Десерт"],
]);


class Client {
    constructor(name, order = []) {
        this.name = name;
        this.order = order;
    }

    newOrder(dish) {
        this.order.push(dish);
    }

    vivod() {
        let str = "Клиент " + this.name + ' заказал:';
        console.log(str);

        let quantity = {};
        for (let ord of this.order)
            quantity[ord] = 0;

        for (let ord of this.order)
            quantity[ord] = quantity[ord] + 1;

        for (let ord of new Set(this.order))
            if (dishes.get(ord) != undefined)
                console.log(dishes.get(ord) + ' "' + ord + '" - ' + quantity[ord] + ': готовит повар ' + cook.get(dishes.get(ord)));
            else
                console.log(ord + ' - Такого наименования не существует!')
    }
}


let cl1 = new Client('Иван');
cl1.newOrder("Маргарита");
cl1.newOrder("Пепперони");
cl1.newOrder("Пепперони");
cl1.newOrder("Чизкейк");
cl1.vivod();


let cl2 = new Client('Павел');
cl2.newOrder("Филадельфия");
cl2.newOrder("Филадельфия");
cl2.newOrder("Филадельфия");
cl2.newOrder("Филадельфия");
cl2.newOrder("Филадельфия");
cl2.newOrder("Калифорния");
cl2.newOrder("Калифорния");
cl2.newOrder("Калифорния");
cl2.newOrder("Тирамису");
cl2.newOrder("Тирамису");
cl2.newOrder("Трубочка с вареной сгущенкой");
cl2.vivod();






