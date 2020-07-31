export default function getRandomNumbers(capacity) {
    var limit = capacity,
    amount = capacity,
    lower_bound = 0,
    upper_bound = 99,
    unique_random_numbers = []

    if  (amount > limit) limit = amount

    while (unique_random_numbers.length < limit) {
        var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
        if (unique_random_numbers.indexOf(random_number) === -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number )
        }
    }

    return unique_random_numbers
}