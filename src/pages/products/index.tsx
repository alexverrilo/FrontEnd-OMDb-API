import { useEffect, useState } from "react";
import api from "../../services/api";

interface IProduct {
    Title: string;
    Year: string;
    imbID: string;
    type: string;
    Poster: string;
}

const Products = () => {
    const [products, setproducts] = useState<IProduct[]>([]);

    const loadingProducts = async () => {
        const results = await api.get(`/?apikey=925eba28&s=spider`);
        setproducts(results.data.Search);
    };

    useEffect(() => {
        loadingProducts();
    }, []);

    return (
            <>
                <h1>Produtos</h1>
                <ul>
                    {products.map(p => {
                        return(
                            <li>
                                <img src={p.Poster} />
                                {p.Title}
                            </li>
                        );
                    })}
                </ul>
            </>
    );
}

export default Products;