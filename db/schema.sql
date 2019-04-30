DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT(11) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL, 
department_name VARCHAR(200) NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY (item_id)
)