1.Create account
2.login
3.OTP
4.Photos home
5.document home
6.Business card home
7.Flyer home


###postman Link :https://go.postman.co/workspace/My-Workspace~c788f096-37f6-42e9-8915-26290453b3fd/collection/18198220-f305200b-b2a0-4ca2-b267-2352cb2d4a8a?action=share&creator=18198220


{"info":{"_postman_id":"f305200b-b2a0-4ca2-b267-2352cb2d4a8a","name":"flyiesTec","schema":"https://schema.getpostman.com/json/collection/v2.0.0/collection.json"},"item":[{"name":"createUser","id":"912c1d01-2372-4ba7-aac1-00ea96f8ec2a","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"login","id":"95279928-a5e1-438e-b623-4d7f2ca7da59","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"createOtp","id":"b9296d98-fa93-4ae3-872d-d1647c5b0b6a","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"createphoto","id":"d1da9a9c-9be9-4f5a-840d-868f146a0a14","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"getphoto","id":"d650bc07-8523-4751-8ae5-38db809123e0","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"createbus","id":"9e9deee9-4cc1-43d9-b235-54ac6226d144","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"getbus","id":"9a20d275-edc0-4214-93b7-09c06f92f758","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"createdoc","id":"abac7b28-3b92-448f-9e88-6f00f3eec596","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"getdoc","id":"9f0a524f-2d29-421b-aa26-5d5b6a9a2b2f","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"createflyer","id":"5c0ad471-7c5e-46ed-a8a5-2ff4efb9545d","request":{"method":"GET","header":[],"url":null},"response":[]},{"name":"getflyer","id":"9632477f-8758-4a57-9a04-be6f5d005b71","request":{"method":"GET","header":[],"url":null},"response":[]}]}


##createuser

{
    "enterName": "irshad",
     "enterEmail": "irshadahmadmir2017@gmail.com", 
     "password":"dfg123456"
     
}


##login

{
    "email":"irshadahmadmir2017@gmail.com",
    "password":"dfg123456"
}

##cretaeotp

{
    "otp":
}

##createphoto

{
    "title":"classic",
    "highquality":"1400dpi",
    "customSize":"jpeg",
    "price":"10"
}


##getPhoto

get resuest :  http://localhost:3000/getphoto

document, business, flyer same it is photo apis

