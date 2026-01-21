import { product } from './Data.tsx';

export default function Dataget() {
    const listItems = product.map(productName =>
         <li key={productName.id}>
            <h3>{productName.title}</h3>
            <h2>{productName.price}</h2>
            <h3>{productName.stock}</h3>
         </li>
    );

    return (
        <>
        <ol>{listItems}</ol>
        </>
    )
}