import {Pool} from 'pg';
import conn from '../config/.env';

const connectionString = conn ;

const db = new Pool({ connectionString });

export default db; 