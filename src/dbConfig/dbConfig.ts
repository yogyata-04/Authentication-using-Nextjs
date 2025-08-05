import mongoose from 'mongoose';

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!); // exclamation mark - is a TypeScript "non-null assertion operator" — it tells TypeScript: “I promise this value is not null or undefined — trust me.”
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully')
        })
        connection.on('error',(err)=>{
            console.log('MongoDB connected error. Make sure that MongoDB is running' + err);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }
}