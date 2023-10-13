function receivesAFunction(callback) {
    console.log('before the callback');
    callback();
    console.log('after the callback');
  }

function returnsANamedFunction() {
    return function namedFunction() {
      console.log('I am a named function');
    }

}

function returnsAnAnonymousFunction() {
    return function() {
      console.log('hey there');
    }
  }