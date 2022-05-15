let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

var randWho = who[Math.floor(Math.random()*who.length)]
var randAction = action[Math.floor(Math.random()*action.length)]
var randWhat = what[Math.floor(Math.random()*what.length)]
var randWhen = when[Math.floor(Math.random()*when.length)]

var randExcuse = function(){
    return ` ${randWho} ${randAction} ${randWhat} ${randWhen}`
};

function ask(){
    const correctAnswer = /[yY]es(s?)/;
    const question = prompt("Are you in trouble and need an excuse?");
        if(question.match(correctAnswer)){
            return 'Your excuse is:' + randExcuse();
        }
        else{
            return 'Good luck with your endeavours.';
        };
};

alert(ask());