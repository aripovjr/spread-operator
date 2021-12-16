//Spread Operator
//Allows an iterable to spread or expand individually inside reciever
//helps to split into single items and copy them

const hello = 'hello from the other side'
const split = [...hello]
console.log(split)

const maleNames = ['Murad', 'Talib', 'Bilal']
const femaleNames = ['Kamilla', 'Muslima', 'Diora']
const me = 'Aripov'

const merge = [me, ...maleNames, ...femaleNames]
console.log(merge)

//lets create a new variable
//and assigne another value to the index 0 of new variable

//const all = merge
//all[0] = 'Jasur'
//console.log(all)

//now you see above we could change first value of array
//let's see our old array 'merge'
//console.log(merge)
//yes it impacts on initial array as well
//it mutated first array

//but
const allNames = [...merge]
allNames[0] = 'Jasur'
console.log(allNames)
console.log(merge)
// now it changed only index 0 which is first value
//so spread operator really useful

//another way of using spread operator
//with objects

const person = {
    name: 'Jasur',
    job: 'Frontend Developer'
}
const newPerson = {
    ...person, 
    city: 'Lodz',
    phone: 17171717
}
console.log(person)
console.log(newPerson)

//let's make some sample with DOM
const skills = document.querySelectorAll('h1')
const frontend = document.querySelector('#frontend')

const text = [...skills].map(skill => `<span>${skill.textContent}</span>`).join(' / ')
console.log(text)
frontend.innerHTML = text

//so we have already seen some helpful samples 
//how about spread operator as a function argument?

const info = ['Jasur', 'Aripov']

const intorduce = (name, surname) =>{
    console.log(`Hey, I'm ${name} ${surname}`)
}

//intorduce(info[0], info[1])
//really you think that's cool

intorduce(...info)
//that's cool, simple, beautiful, clear