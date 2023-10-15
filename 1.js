"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicollections = [
    { title: "Миллион алых роз", artist: "Алла Пугачева", year: 1975 },
    { title: "Погода в доме", artist: "Лариса Долина", year: 2000 },
    { title: "Детство", artist: "Шатунов", year: 2000 },
    { title: "Белые розы", artist: "Шатунов", year: 2005 },
    { title: "Детский дом", artist: "Шатунов", year: 2023 },
];

class Library {
    constructor(musicollections) {
        this.musicollections = musicollections;
    }

    *[Symbol.iterator]() {

        for (const musicollection of this.musicollections) {
            yield musicollection;
        }
    }
}

const library = new Library(musicollections);

for (let str of library) {
    console.log(str);
}
