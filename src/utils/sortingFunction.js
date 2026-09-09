function shuffleArray(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a random remaining element
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default shuffleArray