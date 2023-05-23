function saturdayFun(activity = 'roller-skate') {
   return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
   return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string='*') {
   const param1 = "You are"
   return function (param2 = "special")
{
   return `${param1} ${string}${param2}${string}!`;
}
}