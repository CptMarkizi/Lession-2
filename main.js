// console.log('Info')
// alert('Hello World')
// alert('Hello World 2') // Они будут появляться по-очереди 

// var a; // устаревший вариант создания переменной
// let b; // современный вариант создания переменной
// const myBirthDay = '29.07.1997' // константа - неизменная переменная 
// // myBirthDay = 11.11.1111 // та самая попытка изменения, что выдаст ошибку
// console.log(myBirthDay) // константа введена БЕЗ ковычек

let MyBirthDay = '29.07.1997'
// MyBirthDay = '11.11.1111' // та самая попытка изменения, установленная выше переменной (больший вес)
console.log(MyBirthDay) // изменная переменная

// let text = 'Text'
// text = 123
// console.log(text)

// Первый тип данных - числовой

// console.log(Infinity) // число, превышающее какое-либо значение. Можно получить прописав напрямую infinity, либо поделить на ноль
// console.log('bukvy' * 12) // Можно получить прописав напрямую, либо при нерешаемой математической задаче (Тут я умножаю буквы на число)

// Второй тип данных - Bigint
// Это огромное число, которое не помещается в JS. В криптографии используется 


// let a = 999999999999999999999999999999999999n // Здесь важно расположение переменной - она ниже заданного числа
// console.log(a)
// console.log(1)
// console.log('bukvy' * 12)
// console.log(Infinity)

// Третий тип данных - строчный (Строка, string)

// let strl = "CHECK" // между двойными и одинарными разницы нет
// let strl2 = 'CHECK2'
// let strl3 = `CHECK3 ${strl2}` // в наклонные кавычки можно запихать переменные после знака доллара, или выражения, или ещё что-либо (тут мы выводим заданную переменную CHECK2)

// console.log(strl) 
// console.log(strl2)
// console.log(strl3)

// Четвёртый тип данных - логический тип данных (BOOLean) (Проверка правда или ложь)

// let DotCheck = true
// let DotUnCheck = false 
// // let a = 4<1
// console.log(a)

// Пятый тип данных - null

// let nuller = null // можно получить только прописав напрямую
// console.log(nuller) 

// Шестой тип данных - undifined 
// Когда переменная банально не задана или теряется, например

// let a;
// console.log(a)

// Седьмой тип данных - Обьекты
// Это мы разберём позже, наверное

// Восьмой тип данных - оператор typeof
// typeof(x)
// typeof x 

// console.log(typeof undefined) // показывает в консоли, что это тип данных ундефаинд
// console.log(typeof 0) // показывает в консоли, что это цифра и т.д
// console.log(typeof 1100n)
// console.log(typeof  'cat')
// console.log(typeof false)
// console.log(typeof Symbol ('id'))
// console.log(typeof null)

document.getElementById('first').innerHTML ='<h1>Что-то добавленное</h1>'

// ДОМАШНЕЕ ЗАДАНИЕ:

console.log(7)
console.log('Добро ' + 'пожаловать ' + 'на ' + 'курс, ' + 'Роман')
// alert('19.04.2023')
document.getElementById('one').innerHTML ='<h1>Hello, World!</h1>'

console.log(typeof undefined) // показывает в консоли, что это тип данных ундефаинд
console.log(typeof 1) // показывает в консоли, что это цифра и т.д
console.log(typeof 1200n)
console.log(typeof  'cat')
console.log(typeof false)
console.log(typeof Symbol ('id'))
console.log(typeof null)