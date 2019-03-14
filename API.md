#API WRITEUP

In Progress

#Signup.php

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

#Login.php

*Expects*

  {
    "username": "example",
    "password": "example"
  }
  
*Returns*

On Success:
  {
    "token": (  
                Will return a Json Web Token which you will use for further API requests. 
                When decoded the body of the token will contain the following:                
                {
                  "username" : $username,
                  "displayname" : $displayName,
                  "user_id" : $id
                  "profile_pic_url": $url
                }
             ),
    "error": ""
  }
  
Otherwise, returns some error message and no token
