import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


  export const connection = await open({
      filename: './solar_system.db',
      driver: sqlite3.Database
    })

    export default connection;