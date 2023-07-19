ECMA - ES - spec for js : rules -   var x=10    - dynamic lang

ES1.0 - 1996 - ES5.0  : object based lang - Object 
ES6.0 : 18 new features: let, const  
JSX = component = ES6/ES7/ES 2022 

Babel  compiler/transpiler
babel.js  ES6/7  to ES5


calc.js
export function add(x,y){
    return x+y
}



app.js
import {add} from 'calc'
add(10,20)

2 ways:
  1. Stateful Class Component = SCC - Container - intelligent-responsbile for state - father/mother


  2. Stateless functional Component = SFC = Presentation , light-weight, reusable dumb comp. - Child
  Parent - Child relation   P: Children = Module = family

  :
  -----------------------------------------
  controlled vs uncontrolled
  Event in React
  Dynamic styles/thems
  Fragments
  Debugging with react-dev-tools   - profiling
  -----------------------------------------

Communication between components:
C -> P -> completed
P -> C  -Completed
P -> P ->
C -> C - completed
