// Fortune Code Generator

 let quotes = [{
          quote: 'I am not a great programmer; I am just a good programmer with great habits.',
          author: '- Kent Beck'
      }, {
          quote: 'Talk is cheap. Show me the code.',
          author: '- Linus Torvalds'
      }, {
          quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
          author: '- Harold Abelson'
      }, {
          quote: 'Truth can only be found in one place: the code.',
          author: '- Robert C'
      }, {
          quote: 'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
          author: '- Muhammad Waseem'
      }, {
          quote: 'How you look at it is pretty much how you will see it',
          author: '- Steve Jobs'
      }, {
          quote: 'The most disastrous thing that you can ever learn is your first programming language.',
          author: '- Alan Kay'
      }, {
          quote: 'The most important property of a program is whether it accomplishes the intention of its user.',
          author: '- C.A.R. Hoare'
      }, {
          quote: 'I am committed to push my branch to the master.',
          author: '- Halgurd Hussein'
      }, {
          quote: 'Coding is not just code, that is a live thing to serve everyone!',
          author: '- Ming Son'
      },{
          quote: 'The purpose of our lives is to be happy.',
          author: '- Dalai Lama'
      },{
          quote: 'The unexamined life is not worth living.',
          author: '- Socrates'
      },{
          quote: 'The only impossible journey is the one you never begin.',
          author: '- Tony Robbins'
      },{
          quote: 'Do not despair of the mercy of Allah.',
          author: '- Al Quran'
      },{
          quote: 'Live for each second without hesitation.',
          author: '- Elton John'
      }, ];


      let btn = document.getElementById('btn-quote');
      let out1 = document.getElementById('quote');
      let out2 = document.getElementById('author')

      btn.addEventListener('click', function() {
          var random = Math.floor(Math.random() * quotes.length);
          console.log(random);
          quote.innerHTML = quotes[random].quote;
          author.innerHTML = quotes[random].author;
      })
