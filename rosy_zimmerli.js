function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote);
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote("eat your vegetables!", logQuote);