import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);

let db = mongoose.connect(mongoURL, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
 console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
 console.log(error);
});

export default db;
