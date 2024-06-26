# hasil-studi-mj

isi repositori ini adalah bentuk kemandirian agar tidak bergantung kepada forlap dikti

# Express.js API Server

A simple API server built with Express.js and Axios.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Running the Server

Start the server with the following command:

```bash
node server.js
```

The server will run on vercel `https://hasil-studi-mj.vercel.app/`.

### API Endpoints

#### GET /api/data

Fetches data from an external API and returns it in JSON format.

**Request**:
```http
GET /api/data
```

**Response**:
```json
{
    // JSON data from external API
}
```

### Fetching Data with JavaScript

To fetch and display the data from the API in a web page, you can use the following JavaScript code. This code fetches the data from the API and populates the HTML elements with the corresponding data.
```
https://mjmokhtar.netlify.app/hasil-studi
```

### CORS Configuration

The server is configured to allow Cross-Origin Resource Sharing (CORS) for all origins. The following headers are set:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept`

### Error Handling

If there is an error while fetching data from the external API, the server responds with a status code 500 and a message 'Error fetching data'.

### Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and Node.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
