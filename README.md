# How to Run the API Server

Follow these steps to get the API server up and running:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/lawkunchi/rest-api-server](https://github.com/lawkunchi/rest-api-server)
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd server
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   npm run dev
   ```
   The server will be accessible at [http://localhost:3000/](http://localhost:3000/).


# How to Run the Client

Follow these steps to get the client up and running:

1. **Navigate to the Project Directory**:
   ```bash
   cd client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project directory and specify the base URL of the API server:
   ```bash
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. **Start the Client**:
   ```bash
   npm run dev
   ```
   After running the above command, the application will be accessible in your browser at [http://localhost:5173/](http://localhost:5173/).

