// const mongoose = require('mongoose');
// type connectType={
//   isConnected:boolean
// }
// const connection:connectType ={
//   isConnected:false
// }

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('Connected!');
//     connection.isConnected = true;
//   } catch (error:any) {
//     console.error('Error connecting to database:', error.message);
//     throw error;
//   }
// }

// export default dbConnect;