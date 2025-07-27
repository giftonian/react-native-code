// Debounce -> SEARCHING?? => Cancel previous timer/api-call in case user interupts/type again
function debounce (fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId); // Cancel the last call
        timerId = setTimeout( () => {
            fn(...args)
        }, delay)
    }
}

const searchText = (query) => {
    console.log(`Searching for.... `, query)
}

const searchWithDebounce = debounce (searchText, 1000)

searchWithDebounce('H')
searchWithDebounce('Ha')
searchWithDebounce('Har')
searchWithDebounce('Hard')
searchWithDebounce('Hard ')
searchWithDebounce('Hard J')
searchWithDebounce('Hard JS')