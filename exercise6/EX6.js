var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift()
console.log("task 1: " + array)

array.sort()
console.log("task 2: " + array)

array.push("Kiwi")
console.log("task 3: " + array)

array.shift()
// splice also would've worked
console.log("task 4: " + array)

array.reverse()
console.log("task 5: " + array)


// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1])
// access "Oranges".