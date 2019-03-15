# API WRITEUP

In Progress

### Signup
##### /php/signup.php

*Expects*

  {
    "username": "example",
    "password": "example"
  }

*Returns*

On Success: 

  {
    "error": ""
  }
 
Otherwise, returns some error message

### Login
##### /php/login.php
*Expects*

  {
    "username": "example",
    "password": "example"
  }
  
*Returns*

On Success:
  {
    "token": (some JWT),
    "error": ""
  }

Token is a Json Web Token which you will use for further API requests. 
When decoded the body of the token will contain the following:     

{
  "username" : $username,
  "displayname" : $displayName,
  "user_id" : $id
  "profile_pic_url": $url
 }
  
Otherwise, returns some error message and no token

To test JWT on your own, https://jwt.io/ is great. 

*From this point on, all API requests mentioned will require a valid JSON Web Token which will be validated. 
Therefore all further JSON packages sent to the API must include a "token": (some token) field. *
