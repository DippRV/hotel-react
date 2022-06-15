import {ClientConfig, Pool} from "pg";

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hotel-react',
    password: 'QQQ321123',
    port: 5432,
} as ClientConfig);