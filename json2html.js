// json2html.js

export default function json2html(data) {
    // Start the table and add the data-user attribute
    let tableHtml = '<table data-user="aish08003@gmail.com">';
  
    // Add the table header
    tableHtml += `
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
    `;
  
    // Loop through the array of data to generate the table rows
    data.forEach(item => {
      tableHtml += '<tr>';
      tableHtml += `<td>${item.Name}</td>`;
      tableHtml += `<td>${item.Age}</td>`;
      tableHtml += item.Gender ? `<td>${item.Gender}</td>` : '<td></td>';
      tableHtml += '</tr>';
    });
  
    // Close the table body and table tags
    tableHtml += '</tbody></table>';
  
    // Return the complete HTML table as a string
    return tableHtml;
  }
  
