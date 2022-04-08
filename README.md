# MCF assessment part 2 - Back-end

A metasearch engine for flights company, Flights Ltd, was greatly impressed by the frontend Single Page Application you have done. But the backend service you used were mock endpoints, and can’t be deployed to production. Now the company has engaged you again to write a **high-quality production backend service**

## Requirements
You are required to create following endpoints and design the corresponding data structure.


- Get cities

```http
  GET /api/v1/cities
```


- Search for flights

```http
  GET /api/v1/flights
```

| Query Params     | Type     | Required? | Description                                                                              | Default |
| :--------------- | :------- |:----------| :--------------------------------------------------------------------------------------- | :------ |
| `origin`         | `string` | Yes       | Origin city code                                                                         |         |
| `destination`    | `string` | Yes       | Destination city code                                                                    |         |
| `departure-date` | `string` | Yes       | Flight departure date in `YYYY-MM-DD` format                                             |         |
| `return-date`    | `string` | No        | Flight return date in `YYYY-MM-DD` format. Omit this field if search for **single trip** |         |
| `page`           | `number` | No        | Page number for pagination. Starts from `0`                                              | `0`     |
| `page-size`      | `number` | No        | Number of results to show per page                                                       | `10`    |

## Feel free to 
1. Make assumptions. Please state any hypotheses, resolution, and reasoning made.
2. Use any language or framework that you are confident and comfortable with (Eg. Node js, Golang, python)

