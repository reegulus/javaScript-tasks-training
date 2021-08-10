import React from "react";

export function LessonNo2() {
    /*    Задача.
     Создайте переменную str и присвойте ей значение 'abcde'.
     Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
     */
    let str = 'abcde'
    console.log(str[0])
    console.log(str[1])
    console.log(str[2])
    console.log(str[3])
    console.log(str[4])

    return (
        <div className={"lessonJs"}>
            <h2>Задачи на основы языка JavaScript</h2>
        </div>
    )
}