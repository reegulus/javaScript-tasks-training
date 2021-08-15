import React from "react";

export function LessonNo5() {
    // Задача 1. Выведите столбец чисел от 1 до 50.
    /* let i = 0
     while (i < 50) {
         // document.write(i + '<br>')
         i++
         console.log(i)
     }*/

    // Задача 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
    let i
    let arr = [1, 2, 3, 4, 5]
    for (i = 0; i <= arr.length; i++) {
        console.log(i)
    }

    // Задача 3. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
    let result = 1
    for (i = 0; i < arr.length; i++) {
        result = result * arr[i]
    }
    console.log(result)

    // Задача 4. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
    let obj = {
        'Минск': 'Беларусь',
        'Москва': 'Россия',
        'Киев': 'Украина'
    }

    for (let key in obj) {
        console.log (key)
        console.log (obj[key])
        console.log (key + ' - это ' + obj[key])
    }

    // Задача 5. Выведите столбец чисел от 1 до 100.
/*while(i < 100) {
        i++
    console.log(i)
}

    for(i=0; i <= 100; i++) {
        console.log(i)
    }*/

    // Задача 6. Выведите столбец четных чисел в промежутке от 0 до 100.
    for (i=0; i <= 100; i+=2) {
        result = result + i
        console.log(result)
    }

    // Задача 7. С помощью цикла найдите сумму чисел от 1 до 100.

    for (i=0; i <= 100; i++) {
        console.log(i)
    }
    return (
        <div className={"lessonJs"}>
            <h2>Задачи на циклы while, for в JavaScript</h2>
        </div>
    )
}