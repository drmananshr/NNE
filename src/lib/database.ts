import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://doomtestcluster.shrzauy.mongodb.net/nne2026?authSource=%24external&authMechanism=MONGODB-X509';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Read the certificate file
    const certPath = path.join(process.cwd(), 'src/lib/X509-cert-5422824503814040467.pem');
    let tlsCertificateKeyFile;
    
    try {
      tlsCertificateKeyFile = fs.readFileSync(certPath);
    } catch (error) {
      console.error('Error reading certificate file:', error);
      throw new Error('Certificate file not found or cannot be read');
    }

    const opts = {
      bufferCommands: false,
      authSource: '$external',
      authMechanism: 'MONGODB-X509',
      tls: true,
      tlsCertificateKeyFile: tlsCertificateKeyFile,
    };

    // Clean URI without certificate path since we're passing it in options
    const cleanURI = 'mongodb+srv://doomtestcluster.shrzauy.mongodb.net/nne2026';
    
    cached.promise = mongoose.connect(cleanURI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;