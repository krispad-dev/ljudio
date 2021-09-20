# Node-Postgres

## Använd $ och en siffra för placeholders (values) i query-strängen, i motsvarande antal som du har kolumner <br> Exempel: const sql = 'SELECT * FROM users WHERE id = $1'; <br> const { rows } = await db.query(sql, [ id ]);
***
## Använd "" runt kolumner som är camelCase i query-strängen
***
## STRING_AGG motsvarar GROUP_CONCAT 
***
## Data-setet från Postgres finns i propertyn rows <br> Exempel: <br> const sql = 'SELECT * FROM users'; <br> const { rows } = await db.query(sql); <br>alternativt <br> const data = await db.query(sql); <br> const rows = data.rows;
***