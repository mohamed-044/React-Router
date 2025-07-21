import { useParams } from 'react-router';
const Category = () => {
const { categorie } = useParams();
return (
<div>
<h1>Catégorie : {categorie}</h1>
</div>
);
};
export default Category;