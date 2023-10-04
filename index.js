
// intro phrase array of strings

 
    const intros = ['Before 8am', 'This morning', 'This week', 
      'After Dinner', 'After work'];

    const midSentence = ['run 1 mile', 'drink 2 glasses of water',
                  'do 20 pushups','stretch for 10 minutes', 
                  'meditate for 10 minutes' ];
    

//generate random number to be index value
function genRandNum(num){
    return Math.floor(Math.random() * num)};

const genIntro = () =>{
    let intro = [];
    let introIdx = genRandNum(intros.length);
    intro.push(intros[introIdx]);
    return intro;
}

const genMid = () =>{
    let midSen = [];
    let midIdx = genRandNum(midSentence.length);
    midSen.push(midSentence[midIdx]);
    return midSen;
}    

const getAdvice = () =>{
    let advice = '';

    const genMid = () =>{
        let midSen = [];
        let midIdx = genRandNum(midSentence.length);
        midSen.push(midSentence[midIdx]);
        return midSen;
    }    
    
}
console.log(getAdvice())