interface ProductPageProps {
    name:String;
    price: number;
}
export default function Product({name, price}:ProductPageProps) {
    return (
        <div>
        <p>(name) - (price)</p>
        </div>
    )
}