import {Pool} from 'pg';

const connectionString = 'postgres://zbhmciyg:78UCfUOS6UArQGJ3oddcJENxtcEZYnwY@tuffi.db.elephantsql.com/zbhmciyg';

const db = new Pool({ connectionString });

export default db; 