# API WRITEUP

In Progress

### Table of Contents
1. [ Signup ](#signup)
2. [ Login ](#login)
3. [ Add Post ](#addpost)
4. [ Delete Post ](#deletepost)


<a name="signup"></a>
### Signup
##### /php/signup.php

*Expects*
  ```
  {
    "username": "example",
    "password": "example"
  }
  ```
*Returns*

On Success: 

  ```
  {
    "error": ""
  }
  ```
Otherwise, returns some error message

<a name="login"></a>
### Login
##### /php/login.php
*Expects*
  ```
  {
    "username": "example",
    "password": "example"
  }
  ```
*Returns*

On Success:
  ```
  {
    "token": (some JWT),
    "error": ""
  }
  ```
Token is a Json Web Token which you will use for further API requests. 
When decoded the body of the token will contain the following:     
```
{
  "username" : $username,
  "displayname" : $displayName,
  "user_id" : $id
  "profile_pic_url": $url
 }
 ```
Otherwise, returns some error message and no token

To test JWT on your own, https://jwt.io/ is great. 

*From this point on, all API requests mentioned will require a valid JSON Web Token which will be validated. Therefore all further JSON packages sent to the API must include a "token": (some token) field.*

<a name="addpost"></a>
### Add Post
##### /php/addPost.php

*Expects*
  ```
  {  
    "token": "example",
    "content": "example",
    "image_url": "example",
    "timestamp": "example"
  }
  ```
  *Returns*
  
  On Success:
  ```
  {  
    "error": "",
    "post_id": "example"
  }
  ```
  
  Errors:
  
   ```
  {  
    "error": "Invalid User"
  }
  ```
  
   ```
  {  
    "error": "Invalid token"
  }
  ```
  
<a name="deletepost"></a>
### Delete Post
##### /php/deletePost.php

*Expects* 

```
{
  "token": "example",
  "post_id": "example
}
```

*Returns*

On Success:
```
{
  "user_id": "example"
}
```


Errors:
  
   ```
  {  
    "error": "Invalid User"
  }
  ```
  
   ```
  {  
    "error": "Invalid token"
  }
  ```
