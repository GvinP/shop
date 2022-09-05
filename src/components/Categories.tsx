import styled from "styled-components";
import { CategoryItem } from "./CategoryItem";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    "flex-direction": "column",
    "padding": "0px",
  })}
`;

export type CategoryItemType = {
  id: string;
  title: string;
  image: string;
};

const categories: CategoryItemType[] = [
  {
    id: "1",
    title: "WOMEN'S TOPS",
    image: "https://lp2.hm.com/hmgoepprod?set=source[/61/24/61242cccd8d103f58491ecf4ab9d28d602b86408.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: "2",
    title: "WOMEN'S PANTS",
    image: "https://lp2.hm.com/hmgoepprod?set=source[/76/69/76691293431bb3be5f2a3e4c7d17272fe52cadcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: "3",
    title: "CARDIGANS & SWEATERS",
    image: "https://lp2.hm.com/hmgoepprod?set=source[/48/b3/48b3cec8d978b45892af4cf8b3b9c6039b98698a.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
];

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  );
};
