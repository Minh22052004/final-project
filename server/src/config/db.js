import mongoose from 'mongoose';

// Hàm kết nối tới MongoDB Atlas
const connectDB = async () => {
  try {
    // await: chờ kết nối xong rồi mới chạy tiếp (kết nối qua mạng cần thời gian)
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Không có database thì server vô dụng -> dừng hẳn
  }
};

export default connectDB;