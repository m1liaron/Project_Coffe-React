import { useParams } from 'react-router-dom';

const CoffeeDetails = () => {
   const { id } = useParams();
   // Fetch coffee data by id from your data source
   return (
      <div>
         <h2>Coffee Details of {id}</h2>
         // Render coffee details here
      </div>
   );
}

export default CoffeeDetails;