--Signup
INSERT INTO user_info (username, password) 
VALUES(?, ?);

--Update Display Name and profile pic
UPDATE user_info
SET display_name  = ?, profile_pic_url = ?
WHERE user_info.user_id  = ?;

--Login
SELECT * 
FROM user_info 
WHERE username=? and password=?;

--Add Post
INSERT INTO posts (user_id,content,image_url,date_created,time_created) 
VALUES( ?, ?, ?, ?, ?, LEFT( ?, 32) );

--Delete Post
DELETE FROM posts
WHERE posts.post_id = ?;

--Check if post has been liked by user
  --If no time is finded then post not liked
SELECT time_created 
FROM likes
WHERE likes.post_id = ? AND likes.user_id = ?;

--Like Post
INSERT INTO likes 
VALUES(post_id, user_id, time_created);

--Unlike Post
DELETE FROM likes
WHERE likes.post_id = ? AND likes.user_id = ?;

--Add Comment on Post


--Delete Comment on Post


--Edit Comment on Post

--Changing a relationship with a friend will be done the same but with different input for Add, Delete and Block
  --Add Friend
INSERT INTO ()

  --Delete Friend


  --Block Friend


--Fetch ALL Post


--Fetch ALL Comments from a Post


--We might add groups or blocks for specific posts


--WARNING NEXT COMAND IS TO ERRASE ALL CONTENT IN THE DATABASE
DROP TABLE *;
