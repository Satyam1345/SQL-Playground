export const predefinedQueries = [
    {
      id: 1,
      title: "List all Customers",
      query: "SELECT * FROM Customers;",
    },
    {
      id: 2,
      title: "Top 5 Products by Price",
      query: "SELECT ProductName, UnitPrice FROM Products ORDER BY UnitPrice DESC LIMIT 5;",
    },
    {
      id: 3,
      title: "Orders made by a specific Customer (e.g., ALFKI)",
      query: "SELECT * FROM Orders WHERE CustomerID = 'ALFKI';",
    },
    {
      id: 4,
      title: "Employee Names and their Territories",
      query: `
        SELECT Employees.FirstName, Employees.LastName, Territories.TerritoryDescription
        FROM Employees
        JOIN EmployeeTerritories ON Employees.EmployeeID = EmployeeTerritories.EmployeeID
        JOIN Territories ON EmployeeTerritories.TerritoryID = Territories.TerritoryID;`,
    },
    {
      id: 5,
      title: "Products and their Suppliers",
      query: `
        SELECT Products.ProductName, Suppliers.CompanyName
        FROM Products
        JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;`,
    },
    {
      id: 6,
      title: "Total Orders per Customer",
      query: `
        SELECT Customers.CustomerID, Customers.CompanyName, COUNT(Orders.OrderID) AS TotalOrders
        FROM Customers
        JOIN Orders ON Customers.CustomerID = Orders.CustomerID
        GROUP BY Customers.CustomerID, Customers.CompanyName
        ORDER BY TotalOrders DESC;`,
    },
    {
      id: 7,
      title: "Average Order Price per Customer",
      query: `
        SELECT Customers.CustomerID, Customers.CompanyName, AVG(OrderDetails.UnitPrice * OrderDetails.Quantity) AS AvgOrderPrice
        FROM Customers
        JOIN Orders ON Customers.CustomerID = Orders.CustomerID
        JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
        GROUP BY Customers.CustomerID, Customers.CompanyName;`,
    },
    {
      id: 8,
      title: "Employees who handled more than 100 orders",
      query: `
        SELECT Employees.FirstName, Employees.LastName, COUNT(Orders.OrderID) AS TotalOrders
        FROM Employees
        JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
        GROUP BY Employees.EmployeeID
        HAVING TotalOrders > 100;`,
    },
    {
      id: 9,
      title: "Products that are low on stock",
      query: `
        SELECT ProductName, UnitsInStock
        FROM Products
        WHERE UnitsInStock < 10;`,
    },
    {
      id: 10,
      title: "Total Revenue by Category",
      query: `
        SELECT Categories.CategoryName, SUM(OrderDetails.UnitPrice * OrderDetails.Quantity) AS TotalRevenue
        FROM Categories
        JOIN Products ON Categories.CategoryID = Products.CategoryID
        JOIN OrderDetails ON Products.ProductID = OrderDetails.ProductID
        GROUP BY Categories.CategoryName
        ORDER BY TotalRevenue DESC;`,
    },
  ];
  