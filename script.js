// script.js

// Obtém referência ao formulário
const orderForm = document.getElementById('order-form');

// Manipula o evento de envio do formulário
orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos do formulário
  const pizzaType = document.getElementById('pizza-type').value;
  const pizzaSize = document.querySelector('input[name="pizza-size"]:checked').value;
  const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(checkbox => checkbox.value);
  const deliveryAddress = document.getElementById('delivery-address').value;
  const paymentMethod = document.getElementById('payment-method').value;

  // Realiza o processamento do pedido (lógica do back-end)

  // Exibe uma mensagem de sucesso
  alert('Pedido realizado com sucesso!');

  // Limpa os campos do formulário
  orderForm.reset();
});
