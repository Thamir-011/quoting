const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
    }
]

module.exports = quotes.map(q => {
    return {
        quote: q.quote,
        length: q.quote.length
    }
})