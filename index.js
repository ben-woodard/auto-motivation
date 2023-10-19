
// intro phrase array of strings


const intros = ['Before 8am', 'This morning', 'Before 5pm',
    'After Dinner', 'After work', 'Before the sun comes up', 'Before work', 'Tomorrow'];

const midSentence = ['run 1 mile', 'drink 2 glasses of water',
    'do 20 pushups', 'stretch for 10 minutes',
    'walk for 30 minutes', 'walk for 30 minutes', 'prep your meals for tomorrow', 'do 50 jumping jacks'];

const endSentence = ['turn your phone off for 1 hour.', 'write down 10 things you are grateful for.',
    'call a loved one or famly member.', 'read a book for 30 minutes.',
    'spend an hour doing something you love.', 'write a journal entry for your goals this week.', 
    'write down your goals for this month.', 'send a text to someone you miss.'];


//generate random number to be index value

function genRandNum(num) {
    return Math.floor(Math.random() * num)
};

//nest functions with random idx to pull a statement above arrays. 
// interpolate together. 

   function getAdvice() {
    let advice = '';

    //generate random index for intro, midsentence, endsentence
    const genIntro = () => {
        let intro = [];
        let introIdx = genRandNum(intros.length);
        intro.push(intros[introIdx]);
        return intro;
    }

    const genMid = () => {
        let midSen = [];
        let midIdx = genRandNum(midSentence.length);
        midSen.push(midSentence[midIdx]);
        return midSen;
    }

    const genEnd = () => {
        let endSen = [];
        let endIdx = genRandNum(endSentence.length);
        endSen.push(endSentence[endIdx]);
        return endSen;
    }

    //interpolate and return values of sentence functions

    advice = `${genIntro()} ${genMid()} and ${genEnd()}`;
    return advice;
};

//generate random advice
console.log(getAdvice())