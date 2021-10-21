const quotes = [
    {
        quote: ".إن أي نجاح لا‌ يتحقق إلا‌ بفشل الآخرين هو في حقيقته هزيمة ترتدي ثياب النصر",
    },
    {
        quote: ".في بعض الأحيان، الاستمرار، فقط الاستمرار ولا شيء آخر، إنجاز فوق قُدرة البشر",
    }
]

module.exports = quotes.map(q => {
    return {
        quote: q.quote,
        length: q.quote.length
    }
})