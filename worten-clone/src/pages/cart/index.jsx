import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useCartContext();
  const { removeCart } = useCartContext();
  return (
    <div className="container mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
      {cart.items.length === 0 ? (
        <p className="text-gray-600">O carrinho está vazio</p>
      ) : (
        <>
        <p className="text-gray-600">Total: €{cart.total}</p>
          <ul className="border rounded-lg p-4 bg-gray-50">
            {cart.items.map((item, key) => (
              
              <li
              key={`cart-item-${item.id}-key${key}`}
              className="flex justify-between items-center p-2 border-b last:border-none"
              >
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-600">€ {item.price}</span>
                <span className="text-gray-600">x {item.quantity}</span>
                <span className="text-gray-600">€ {item.price * item.quantity}</span>
                
                <button onClick= {() =>{removeCart(item.id)} }className="text-red-600 hover:text-red-800">
                  Excluir
                </button>
              </li>
            ))}
          </ul>
          </>
      )}
    </div>
  );
}