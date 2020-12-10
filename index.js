const express=require("express")
const cors=require('cors')
const app=express();
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

app.use(cors())
app.use(express.json())

const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:'Test Open API',
            version:'1.0.0',
            description:'Testing Open Api',
            contact:{
                name:'sarath',
               
        },
        servers:["http://localhost:3000"]
    }
    },
    apis:["index.js"]
}
/**
* @swagger
* definitions:
*  User:
*   type: object
*   properties:
*    name:
*     type: string
*     description: name of the employee
*     example: 'Jaya'
*    date_of_joining:
*     type: string
*     description: date of joining of the employee
*     example: '2020-08-30'
*    email:
*     type: string
*     description: email of the employee
*     example: 'jaya@w.com'
 
*/
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /users/{id}:
 *  post:
 *   summary: user
 *   description: users one
*   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#/definitions/User"
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: failure
 */


/**
 * @swagger
 * /getusers:
 *  get:
 *   summary: user
 *   description: users one
 *   operationId: findbystatus
 *   produces:
 *   - application/json
 *   parameters:
 *   - in: query
 *     name: status
 *     required: true
 *     description: status of the employee
 *     schema:
 *       type: string
 *       enum: [available,unavailable]
 *       default: available
 *     collectionFormat: multi
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: failure
 */


 

app.post("/users/:id",function(req,res)
{ console.log(req.params)
    if(req.body.name==="sarath")
    res.status(200).json({"message":"sarath"});
    else{
        res.status(500).json({"message":"Invalid Name"}); 
    }
})

app.get("/getusers",function(req,res)
{ console.log(req.query)
    if(req.body.name==="sarath")
    res.status(200).json({"message":"sarath"});
    else{
        res.status(500).json({"message":"Invalid Name"}); 
    }
})



app.listen(3000,console.log("server running"))
