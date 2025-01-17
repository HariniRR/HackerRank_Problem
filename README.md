# Weather Finder using RestAPI

A REST API contains weather details of various cities. Given a city name, get the current temperature of the city.
To access the weather information, perform an HTTP GET request to:
`https://jsonmock.hackerrank.com/api/weather?name=<name>`

Where `<name>` is the city name to query. The name is not case-sensitive.
For example, a GET request to:`https://jsonmock.hackerrank.com/api/weather?name=Dallas`
Will return the weather information for Dallas.

### API Response
The response to a request is a JSON with the following 5 fields:
- `page`: the current page of the results.
- `per_page`: the maximum number of results returned per page.
- `total`: the total number of results.
- `total_pages`: the total number of pages with results.
- `data`: Either an empty array or an array of weather records as JSON objects. Return the data from the first record in the array. Each record has multiple properties, but only the following properties are needed for this question:
  - `name`: City name for which we have queried (STRING).
  - `weather`: Weather conditions of the city in the format "<temperature> degree" (STRING), where the temperature is an integer.

### Example of a Weather Record
  ```json
  {
    "name": "Dallas", 
    "weather": "12 degree",
    "status": [
      "Wind: 2Kmph",
      "Humidity: 5%"
    ]
  }
  ```

### Function Description

Complete the function getTemperature in the editor below.
get Temperature has the following parameter:
string name: the city name to query
Returns int: the value of the temperature in the 'weather' property (extract the integer value and return it)
### Constraints
It can be assumed that all requests will definitely have at lease one weather record in the response.
Input Format For Custom Testing
### Sample Case 0
Sample Input For Custom Testing
Dallas
### Sample Output
12
### Explanation
A query is made for Dallas and the temperature from the first record is returned. The first weather value is:
"weather":"12 degree"
We extract integer 12 from string "12 degree" and return it
