
document.addEventListener('DOMContentLoaded', function () {
    const data = {
        items: [{ name: "Widget A", price: 19.99 }]
    };

     fetch('/api/invoice').then(r => r.json()).then(data => renderInvoice(data));

    renderInvoice(data);
});

function renderInvoice(data) {
    let total = 0;
    let rows = '';

    data.items.forEach(item => {
        total += item.price;
        rows += `<tr><td>${item.name}</td><td>$${item.price.toFixed(2)}</td></tr>`;
    });

    document.getElementById('invoice-container').innerHTML = `
        <table>
            <thead>
                <tr><th>Item</th><th>Price</th></tr>
            </thead>
            <tbody>${rows}</tbody>
            <tfoot>
                <tr><td>Total</td><td>$${total.toFixed(2)}</td></tr>
            </tfoot>
        </table>
    `;
}
 
