import React from "react";

export function LessonNo2() {
    /*    Задача 1.
     Создайте переменную str и присвойте ей значение 'abcde'.
     Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
     */
    let str = 'abcde'
    console.log(str[0], [1], [2], [3], [4])

    // Задача 2. Напишите скрипт, который считает количество секунд в часе, сутках.
    let secondClock = 60 * 60
    let clockDay = 60 * 60 * 24
    console.log('Количество секунд в часе ' + secondClock)
    console.log('Количество секунд в сутках ' + clockDay)
    return (
        <div className={"lessonJs"}>
            <h2>Задачи на основы языка JavaScript</h2>
        </div>
    )
}