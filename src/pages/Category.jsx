import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
const Category = () => {
  const { categorie } = useParams();
  const navigate = useNavigate();
      const handleLogin = () => {
      navigate('/');
      };
  return (
    <div>
      <h1>{categorie}</h1>
      <Button className="my-3" onClick={handleLogin}>Revenir a la page d'accueil</Button>
    </div>
  );
};
export default Category;