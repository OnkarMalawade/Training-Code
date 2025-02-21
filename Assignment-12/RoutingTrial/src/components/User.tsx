import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const terms = searchParams.get("terms");
    return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold">User Page</h2>
      <p className="text-gray-700">User ID: {id}</p>
       <p className="text-gray-500">Referred by: {terms}</p>
    </div>
  );
}

export default User