import React from "react";

export function TrafficLight() {
    return (
        <div>
            <UpdateLight/>
        </div>
    )
}

/*You're writing code to control your town's traffic lights. You need a function to handle each
change from green, to yellow, to red, and then to green again.
    Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
    For example, update_light('green') should return 'yellow'.*/

function UpdateLight(current) {
    switch (current) {
        case "green":
            return "yellow"
        case "yellow" :
            return "red"
        case "red" :
            return "green"

    }
    //your code here!
}

// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    const strLen = x.length
    const strRevers = Math.floor(strLen/2)

    for(let i = 0; i < strRevers; i++) {
        if(x[i] !==x[strLen - 1 - i]) {
            return false
        }
    }
    return isPalindrome(x)
    return isPalindrome(x)
    // your code here
}