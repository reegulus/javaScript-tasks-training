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

    return (
        <div className={"lessonJs"}>
            <h2>Задачи на циклы while, for в JavaScript</h2>
        </div>
    )
}