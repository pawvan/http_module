
---

# http_module

This project is a **high-performance custom HTTP server module** written in JavaScript. It implements core HTTP functionalities including handling HTTP requests, responses, routing, middleware support, static file handling, and more. This project is designed to demonstrate the creation and operation of a basic web server, providing a useful utility for developers working with raw HTTP in Node.js.

## 🚀 Features

- **Complete HTTP Server Implementation**:
  - Create an HTTP server that can handle incoming requests and send responses.
  - Handle different HTTP methods (GET, POST, etc.) and manage the response.
  - Middleware support for logging, authentication, request body parsing, etc.
  - Static file handling and caching.

- **Modular Architecture**:
  - The project is divided into small, reusable modules for core HTTP logic, middleware, routing, static file handling, and utilities.

- **Planned Enhancements**:
  - Advanced routing, improved static file handling, and more robust features.

## 🏗️ Project Structure

The project is organized into the following directories:

```
my-http-server/
├── src/
│   ├── core/                            # Core server logic
│   │   ├── HTTPServer.js                # Core HTTP server implementation
│   │   ├── HTTPRequest.js               # Handles HTTP requests
│   │   ├── HTTPResponse.js              # Handles HTTP responses
│   │   ├── SocketHandler.js             # Manages socket connections
│   │   └── Connection.js                # Manages individual client connections
│   ├── middleware/                      # Middleware functions
│   │   ├── LoggerMiddleware.js          # Logs request information
│   │   ├── BodyParserMiddleware.js      # Parses request body
│   │   └── AuthMiddleware.js            # Handles authentication
│   ├── routing/                         # Routing logic
│   │   ├── Router.js                    # Router for handling routes
│   │   └── Route.js                     # Defines individual routes
│   ├── static/                          # Static file serving
│   │   ├── StaticFileHandler.js         # Serves static files
│   │   └── StaticCache.js               # Caching for static files
│   ├── config/                          # Configuration files
│   │   └── config.js                    # Server configuration
│   ├── utils/                           # Helper utilities
│   │   ├── Logger.js                    # Logging utility
│   │   └── Utils.js                     # Miscellaneous utility functions
│   ├── server.js                        # Entry point for the HTTP server
├── public/                              # Public directory for static files
│   ├── index.html
│   └── about.html
├── test/                                # Unit tests for various modules
│   ├── core/
│   │   ├── HTTPServer.test.js
│   │   ├── HTTPRequest.test.js
│   │   └── HTTPResponse.test.js
│   ├── middleware/
│   │   ├── LoggerMiddleware.test.js
│   │   └── BodyParserMiddleware.test.js
│   ├── routing/
│   │   └── Router.test.js
│   ├── static/
│   │   └── StaticFileHandler.test.js
│   └── utils/
│       └── Logger.test.js
├── config/
│   └── serverConfig.js                 # Configuration for the server
├── .gitignore
├── package.json                         # Project dependencies and scripts
├── README.md                            # Project documentation
├── LICENSE
├── .env
└── node_modules/
```

## 🛠️ Installation

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** (Node Package Manager)

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawvan/http_module.git
   cd http_module
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Test the setup**:
   Ensure everything is set up correctly by running:
   ```bash
   node src/server.js
   ```

## ⚙️ Usage

### Running the Server

To start the server, simply run the following command:

```bash
node src/server.js
```

This will start your custom HTTP server, which will listen on the default port (or a port defined in your configuration).

### Example of HTTP Server Usage

The server is designed to handle routes and serve static files. Here's a simple example of how to define a route and log incoming requests.

**Logger Middleware Example**:

```js
import { LoggerMiddleware } from './middleware/LoggerMiddleware';

const server = new HTTPServer();

// Use logger middleware to log requests
server.use(LoggerMiddleware);

// Define a simple route
server.route('GET', '/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to My Custom HTTP Server!</h1>');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Example Test

The project includes unit tests to ensure core functionality works as expected. To run the tests, use the following command:

```bash
npm test
```

Example of a unit test for the `LoggerMiddleware`:

```js
import { LoggerMiddleware } from '../src/middleware/LoggerMiddleware';

test('LoggerMiddleware logs requests', () => {
  const req = { method: 'GET', url: '/' };
  const res = {};
  const next = jest.fn();

  LoggerMiddleware.handle(req, res, next);
  
  expect(next).toHaveBeenCalled();
});
```

## 🎯 Roadmap

1. **Enhancements**:
   - Improve support for routing with dynamic parameters.
   - Optimize static file handling and implement better caching mechanisms.
   
2. **Security**:
   - Improve authentication middleware to handle JWTs or OAuth tokens.
   - Add HTTPS support for secure communication.

3. **Performance**:
   - Implement HTTP/2 support for better performance with multiplexing.

## 🤝 Contributing

Contributions are welcome! If you want to contribute to this project, please fork the repository, make your changes, and create a pull request.

### How to Contribute

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a new Pull Request.

Please ensure that your code follows the existing style, includes unit tests, and does not break the build.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📚 Resources

- **HTTP Protocol**: [Wikipedia - HTTP](https://en.wikipedia.org/wiki/HTTP)
- **Middleware in Node.js**: [Express.js Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- **Node.js Documentation**: [Node.js HTTP Module](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)

## **Contact**

If you have any questions or feedback about this project, feel free to reach out:

- **Email**: pawanpediredla@gmail.com
- **GitHub**: [github.com/pawvan/http_module](https://github.com/pawvan/http_module)

---

