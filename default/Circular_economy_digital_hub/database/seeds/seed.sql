-- SQL commands to create initial data for the Circular Economy Digital Hub

-- Insert initial users
INSERT INTO users (username, email, password, created_at) VALUES
('admin', 'admin@example.com', 'hashed_password', NOW()),
('user1', 'user1@example.com', 'hashed_password', NOW()),
('user2', 'user2@example.com', 'hashed_password', NOW());

-- Insert initial products
INSERT INTO products (name, description, price, created_at) VALUES
('Product A', 'Description for Product A', 29.99, NOW()),
('Product B', 'Description for Product B', 49.99, NOW()),
('Product C', 'Description for Product C', 19.99, NOW());

-- Insert initial transactions
INSERT INTO transactions (user_id, product_id, transaction_date, amount) VALUES
(1, 1, NOW(), 29.99),
(2, 2, NOW(), 49.99),
(1, 3, NOW(), 19.99);