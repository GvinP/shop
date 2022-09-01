import styled from "styled-components";
import { Product } from "./Product";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export type ProductType = {
    id: string
    image: string
}

const products: ProductType[] = [
    {
        id: '1',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/9b/c8/9bc85710f3147f4e95a3e1a1b0cd03d896a4ce47.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '2',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/73/96/7396c80c890ffe29a77899194a2ffcdd1356a660.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '3',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/05/a5/05a5cf6e2af504a9b68b2841b596d03b28f1015a.jpg],origin[dam],category[ladies_licence],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '4',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/11/87/11871559c6c65d3712d9a1f8e58cab2d185557d9.jpg],origin[dam],category[ladies_basics_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '5',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/9b/e19b98a57d5af484f57feb66ad2de4fe2e4082c9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '6',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/08/5b0844a216aa8b341936e5a200a13171a67c64c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '7',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/80/4d80c5cac8cfba96c9736814a70132878f7b17fa.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '8',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/3c/6c/3c6c596372cafc44b88395e072415151f27f9432.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '9',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/b1/53/b153fac39d8f92f29c4f872bcb5eb6a8c298ce94.jpg],origin[dam],category[ladies_basics_tops_vests],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
    {
        id: '10',
        image: 'https://lp2.hm.com/hmgoepprod?set=source[/45/3f/453f1abb74853216d936e2fabc8a571f47e01e8b.jpg],origin[dam],category[ladies_tops_printed_tshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
    },
]

export const Products = () => {
  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
