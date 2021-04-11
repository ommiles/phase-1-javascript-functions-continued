// this is a function declaration
// uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity=`roller-skate`) {
    return(`This Saturday, I want to ${activity}!`)
}

// this is a function expression
// uses the default activity 'go to the office' when no arguments are passed
const mondayWork = function(activity=`go to the office`) {
    return(`This Monday, I will ${activity}.`)
}

// when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
let wrapAdjective = (wrapper=`*`) => {
    const innerFunction =  function(adjective=`special`) {
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
    return innerFunction;
} 

console.log(wrapAdjective(`||`)(`annoying`))
// => You are ||annoying||!