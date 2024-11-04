// const express = require( 'express' );
// const mysql = require( 'mysql' );
// const cors = require( 'cors' );
// // const { default: userEvent } = require( '@testing-library/user-event' );


// const app = express();
// app.use( ( cors() ) );
// const bd = mysql.createConnection( {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"crud:"
// })
// app.post( 'LogIn', ( req, res ) =>
// {
//     const sql = "SELECR * FROM LogIn WHERE username = ? AND password = ?";
//     const values = [
//         req.body.email,
//         req.body.password
//     ]
//     bd.query( sql, [ values ], ( err, data ) =>
//     {
//         if ( err ) return res.json( "login failed" );
//         return res.json( data );
//     })
// })

// app.listen( 8081, () =>
// {
//     console.log( "Listening..." );
// })