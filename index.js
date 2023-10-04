
// intro phrase array of strings

const phrases = {
    intros : ['By 5pm', 'This morning', 'This week', 
  'After Dinner', 'Before work']
};

const midSentence = []

function genRandNum(num){
    return Math.floor(Math.random() * num)};

const genIntro = () =>{
    let intro = [];
    let introIdx = genRandNum(intros.length);
    intro.push(intros[introIdx]);
    return intro;
}
console.log(genIntro());