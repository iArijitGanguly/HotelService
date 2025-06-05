import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
}

type DBConfig = {
    DB_HOST: string
    DB_USER: string
    DB_PASSWORD: string
    DB_NAME: string
}

dotenv.config();

export const serverConfig: ServerConfig =  {
    PORT: Number(process.env.PORT) || 3000
};

export const dbConfig: DBConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'test_db'
};