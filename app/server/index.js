import app from '../app';
import { PORT, MONGO_URI } from '../config';


console.log('MONGO_URI: ', MONGO_URI);
console.log('PORT: ', PORT);

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`Server running on port: ${PORT}`);
});
