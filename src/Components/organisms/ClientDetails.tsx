import { useParams } from "react-router-dom";

interface Props {
  name?: string;
}

const ClientDetails = ({name}:Props) => {
  const params = useParams();
  console.log("params: ", params);
  return (
    <div>
      <h2>ClientDetails</h2>
      <h3>{params.clienteId}</h3>
    </div>
  );
};

export default ClientDetails;
