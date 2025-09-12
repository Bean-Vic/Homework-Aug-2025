const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
        {
            'Student Name': 'John',
            Age: 19,
            Phone: '455 - 983 - 0903',
            Address: '123 Ave, San Francisco, CA, 94011',
        },
        {
            'Student Name': 'Alex',
            Age: 21,
            Phone: '455 - 983 - 0912',
            Address: '456 Rd, San Francisco, CA, 94012',
        },
        {
            'Student Name': 'Josh',
            Age: 22,
            Phone: '455 - 345 - 0912',
            Address: '789 Dr, Newark, CA, 94016',
        },
        {
            'Student Name': 'Matt',
            Age: 23,
            Phone: '321 - 345 - 0912',
            Address: '223 Dr, Sunnyvale, CA, 94016',
        },
    ],
};

const table = document.createElement('table');
table.border = '1';
table.style.borderSpacing = '0';
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const headerRow = document.createElement('tr');

tableInfo.tableHeader.forEach((headerText) => {
    const th = document.createElement('th');
    th.innerText = headerText;
    headerRow.appendChild(th);
});

tableInfo.tableContent.forEach((rowData) => {
    const row = document.createElement('tr');
    tableInfo.tableHeader.forEach((header) => {
        const td = document.createElement('td');
        td.innerText = rowData[header];
        row.appendChild(td);
    });
    tbody.appendChild(row);
});

thead.appendChild(headerRow);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
