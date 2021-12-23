let computerPlay = function() {
    let options = [['Rock'], ['Paper'], ['Scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

