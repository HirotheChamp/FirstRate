const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${
            process.env.MONGO_PASSWORD
        }@cluster0.qthjh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
    } catch (err) {
        console.log(err);
    }

}

module.exports = connectDB;