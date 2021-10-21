# Quoting
Quoting is a random quotations API.

## Get a random quote by language

```sh
GET /random/?:lang
```


#### Supported languages 
- Arabic 
- English 

#### example

```
GET /random/english
```

#### response

```json
{
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "length": "89"
}
```

## Usage
```javascript
fetch("https://quoting--api.herokuapp.com/random/english")
 .then(res => res.json())
 .then(data => {
     console.log(`"${data.quote}"`)
 })
```