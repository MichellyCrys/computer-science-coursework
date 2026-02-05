for (let i = 1; i <= 10; i++) {
    const table = document.createElement("table");
  
    const header = document.createElement("tr");
    const th = document.createElement("th");
    th.colSpan = 2;
    th.innerText = `Produtos de ${i}`;
    header.appendChild(th);
    table.appendChild(header);
  
    for (let j = 1; j <= 10; j++) {
      const row = document.createElement("tr");
  
      const expressionCell = document.createElement("td");
      expressionCell.innerText = `${i}x${j}`;
  
      const resultCell = document.createElement("td");
      resultCell.innerText = i * j;
  
      row.appendChild(expressionCell);
      row.appendChild(resultCell);
  
      table.appendChild(row);
    }
  
    document.body.appendChild(table);
  }
  