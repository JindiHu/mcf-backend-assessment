# MCF assessment part 2 - Back-end

A metasearch engine for flights company, Flights Ltd, was greatly impressed by the frontend Single Page Application you have done. But the backend service you used were mock endpoints, and can’t be deployed to production. Now the company has engaged you again to write a **high-quality production backend service**

## Requirements
You are required to create following RESTful API endpoints


### Get cities
- Endpoint
```http
  GET /api/v1/cities
  Example -> http://localhost:3001/api/cities
```

<details>
  <summary>Sample of output for cities</summary>

  ```javascript
  {
      "data": {
          "total": 2,
          "result": [
              {
                  "code": "SIN",
                  "name": "Singapore",
                  "country": "Singapore"
              },
              {
                  "code": "SYD",
                  "name": "Sydney",
                  "country": "Australia"
              }
          ]
      }
  }
  ```
</details>



### Search for flights
- Endpoint
```http
  GET /api/v1/flights
  Example -> http://localhost:3001/api/flights?origin=SIN&destination=SYD&departure-date=2022-03-11&return-date=2022-03-16&page=0&page-size=10
```
| Query Params     | Type     | Required? | Description                                                                              | Default |
| :--------------- | :------- |:----------| :--------------------------------------------------------------------------------------- | :------ |
| `origin`         | `string` | Yes       | Origin city code                                                                         |         |
| `destination`    | `string` | Yes       | Destination city code                                                                    |         |
| `departure-date` | `string` | Yes       | Flight departure date in `YYYY-MM-DD` format                                             |         |
| `return-date`    | `string` | No        | Flight return date in `YYYY-MM-DD` format. Omit this field if search for **single trip** |         |
| `page`           | `number` | No        | Page number for pagination. Starts from `0`                                              | `0`     |
| `page-size`      | `number` | No        | Number of results to show per page                                                       | `10`    |


<details>
  <summary>Sample of output for one-way flights</summary>

  ```javascript
  {
      "data": {
          "total": 2,
          "result": [
              {
                  "id": 2,
                  "iata": "SQ",
                  "flightNo": "SQ-318",
                  "price": {
                      "amount": 1057,
                      "currency": "SGD"
                  },
                  "from": {
                      "code": "SIN",
                      "name": "Singapore",
                      "country": "Singapore"
                  },
                  "to": {
                      "code": "SYD",
                      "name": "Sydney",
                      "country": "Australia"
                  },
                  "time": {
                      "departure": "2022-04-10T21:50:00+08:00",
                      "arrival": "2022-04-11T12:40:00+08:00",
                      "duration": "14h50m"
                  }
              },
              {
                  "id": 32,
                  "iata": "QF",
                  "flightNo": "QF-563",
                  "price": {
                      "amount": 242,
                      "currency": "SGD"
                  },
                  "from": {
                      "code": "SIN",
                      "name": "Singapore",
                      "country": "Singapore"
                  },
                  "to": {
                      "code": "SYD",
                      "name": "Sydney",
                      "country": "Australia"
                  },
                  "time": {
                      "departure": "2022-04-10T16:30:00+08:00",
                      "arrival": "2022-04-11T02:35:00+08:00",
                      "duration": "10h5m"
                  }
              }
          ]
      }
  }
```
</details>


<details>
  <summary>Sample of output for round trip flights</summary>

  ```javascript
  {
      "data": {
          "total": 2,
          "result": [
              {
                  "departingFlight": {
                      "id": 2,
                      "iata": "SQ",
                      "flightNo": "SQ-318",
                      "price": {
                          "amount": 1057,
                          "currency": "SGD"
                      },
                      "from": {
                          "code": "SIN",
                          "name": "Singapore",
                          "country": "Singapore"
                      },
                      "to": {
                          "code": "SYD",
                          "name": "Sydney",
                          "country": "Australia"
                      },
                      "time": {
                          "departure": "2022-04-10T21:50:00+08:00",
                          "arrival": "2022-04-11T12:40:00+08:00",
                          "duration": "14h50m"
                      }
                  },
                  "returningFlight": {
                      "id": 10,
                      "iata": "SQ",
                      "flightNo": "SQ-548",
                      "price": {
                          "amount": 623,
                          "currency": "SGD"
                      },
                      "from": {
                          "code": "SYD",
                          "name": "Sydney",
                          "country": "Australia"
                      },
                      "to": {
                          "code": "SIN",
                          "name": "Singapore",
                          "country": "Singapore"
                      },
                      "time": {
                          "departure": "2022-04-17T23:20:00+08:00",
                          "arrival": "2022-04-18T13:20:00+08:00",
                          "duration": "14h0m"
                      }
                  }
              },
              {
                  "departingFlight": {
                      "id": 2,
                      "iata": "SQ",
                      "flightNo": "SQ-318",
                      "price": {
                          "amount": 1057,
                          "currency": "SGD"
                      },
                      "from": {
                          "code": "SIN",
                          "name": "Singapore",
                          "country": "Singapore"
                      },
                      "to": {
                          "code": "SYD",
                          "name": "Sydney",
                          "country": "Australia"
                      },
                      "time": {
                          "departure": "2022-04-10T21:50:00+08:00",
                          "arrival": "2022-04-11T12:40:00+08:00",
                          "duration": "14h50m"
                      }
                  },
                  "returningFlight": {
                      "id": 789,
                      "iata": "SQ",
                      "flightNo": "SQ-725",
                      "price": {
                          "amount": 565,
                          "currency": "SGD"
                      },
                      "from": {
                          "code": "SYD",
                          "name": "Sydney",
                          "country": "Australia"
                      },
                      "to": {
                          "code": "SIN",
                          "name": "Singapore",
                          "country": "Singapore"
                      },
                      "time": {
                          "departure": "2022-04-17T05:50:00+08:00",
                          "arrival": "2022-04-17T20:40:00+08:00",
                          "duration": "14h50m"
                      }
                  }
              }
          ]
      }
  }
  ```
</details>


## Feel free to 
1. Make assumptions. Please state any hypotheses, resolution, and reasoning made.
2. Use any language or framework that you are confident and comfortable with (Eg. Node js, Golang, python)

