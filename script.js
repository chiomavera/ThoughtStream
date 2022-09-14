 //variables

 let btn = document.querySelector('#new-quote');
 let quote = document.querySelector('.quote');
 let person = document.querySelector('.person');

 const quotes = [
    {
        quote: '"Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. "',
        person: "Erik Pevernagie"
    },

    {
        quote: '"Act first, explain later."',
        person: "Dan Brown"
    },

    {
        quote: "Life would be a great deal easier if dead things had the decency to remain dead. ",
        person: "Doug MacLeod"
    },

    {
        quote: '"The best way to find yourself is to lose yourself in the service of others."',
        person: "Mahatma Gandhi"
    },

    {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
        person: "Albert Einstein"
    },

    {
        quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
        person: "Aristotle"
    },

    {
        quote: '"Your time is limited, so don\'t waste it living someone else\'s life."',
        person: "Steve Jobs"
    },

    {
        quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        person: "Benjamin Franklin"
    },

    {
        quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
        person: "Oprah Winfrey"
    },

    {
        quote: '"it does not matter how slowly you go as long as you do not stop."',
        person: "Confucius"
    },

    {
        quote: '"Our lives begin to end the day we become silent about things that matter."',
        person: "Martin Luther king, Jr."
    },

    {
        quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
        person: "Dalai Lama"
    },

    {
        quote: '"The Journey of a thousand miles begins with one step."',
        person: "lao Tzu"
    },


    {
        quote: '"But man is not made for defeat. A man can be destroyed but not defeated."',
        person: "Ernest Hemingway"
    },
    
    {
        quote: '"Let us sacrifice our today so that our children can have a better tomorrow."',
        person: "A. P. J. Abdul Kalam"
    },

    {
        quote: '"There is nothing permanent except change."',
        person: "Heraclitus"
    },

    {
        quote: '"The Journey of a thousand miles begins with one step."',
        person: "lao Tzu"
    },

    {
        quote: '"There is no charm equal to tenderness of heart."',
        person: "Jane Austen"
    },

    {
        quote: '"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."',
        person: "lao Tzu"
    },

    {
        quote: '"Learning never exhausts the mind."',
        person: "Leonardo da Vinci"
    },

    {
        quote: '"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."',
        person: "Francis of Assisi"
    },

    {
        quote: '"Life without love is like a tree without blossoms or fruit."',
        person: "Khalil Gibran"
    },

    {
        quote: '"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."',
        person: "William Blake"
    },

    {
        quote: '"Good judgment comes from experience, and a lot of that comes from bad judgment."',
        person: "Will Rogers"
    },

    {
        quote: '"Keep your face always toward the sunshine - and shadows will fall behind you."',
        person: "Walt Whitman"
    },

    {
        quote: '"The supreme art of war is to subdue the enemy without fighting."',
        person: "Sun Tzu"
    },

    
    {
        quote: '"Independence is happiness."',
        person: "Susan B. Anthony"
    },

    {
        quote: '"Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."',
        person: "Thomas Carlyle"
    },

    {
        quote: '"If you cannot do great things, do small things in a great way."',
        person: "Napoleon Hill"
    },

    {
        quote: '"It is far better to be alone, than to be in bad company."',
        person: "George Washington"
    },

    {
        quote: '"Work like you don\'t need the money. Love like you\'ve never been hurt. Dance like nobody\'s watching."',
        person: "Satchel Paige"
    },

    {
        quote: '"Love cures people - both the ones who give it and the ones who receive it."',
        person: "Karl A. Menninger"
    },

    {
        quote: '"Love has no age, no limit; and no death."',
        person: "John Galsworthy"
    },

    {
        quote: '"Happiness can exist only in acceptance."',
        person: "George Orwell"
    },

    {
        quote: '"Happiness can exist only in acceptance."',
        person: "George Orwell"
    },

    {
        quote: '"Being entirely honest with oneself is a good exercise."',
        person: "Sigmund Freud"
    },

    {
        quote: '"Keep your face always toward the sunshine - and shadows will fall behind you."',
        person: "Walt Whitman"
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

    {
        quote: '""',
        person: ""
    },

 ];

 function changeQuote(){
    let randomQuote = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomQuote].quote;
    person.innerText = quotes[randomQuote].person;

 }

 btn.addEventListener('click', changeQuote)
 