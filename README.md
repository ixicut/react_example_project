# React CRUD Example Project
This is an example project that demonstrates how to implement CRUD (Create, Read, Update, Delete) operations using React, json-server, and a node.js server using the "express" and "mysql" libraries.

## Prerequisites
Before running this project, you must have the following software installed on your system:

* Node.js (version 14 or later)
* MySQL (version 5.7 or later)

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project root directory.
2. Install dependencies by running the following command:

``` npm install ```

4. Start json-server by running the following command:

``` npm run json-server ```

5. Start the node.js server by running the following command:

``` npm run server ```

6. Open your browser and navigate to [http://localhost:3000](#heading-1) to view the React application.
## Usage
This React application allows you to perform CRUD operations on a product inventory. You can create new products, view existing products, update product information, and delete products.

To create a new product, click the "Add Product" button on the product list page. Fill in the product information on the form and click "Add Product" to create the new product.

To view a product's details or update its information, click the "Edit" in the product list.

To delete a product, click the "Delete" button on the product detail page.

## API Endpoints
The node.js server provides the following API endpoints:

* GET /products - Retrieves a list of all products.
* GET /products/:id - Retrieves a single product by ID.
* POST /products - Creates a new product.
* PUT /products/:id - Updates an existing product by ID.
* DELETE /products/:id - Deletes an existing product by ID.
## Credits
This project was created by ixicut. It is licensed under the MIT License.