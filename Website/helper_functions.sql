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
WHERE posts.post_id = ? and post.user_id = ?;

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
INSERT INTO comments
VALUES(comment_id , user_id , post_id, content, time_created);

--Delete Comment on Post
DELETE FROM comments
WHERE comments.user_id = ? AND comments.post_id = ? AND comments.comment_id = ?;

--Edit Comment on Post //time_created  Should NOT be changed to allow sorting comments
UPDATE comments
SET content = ?
WHERE comments.user_id = ? AND comments.post_id = ? AND comments.comment_id = ?;

--Changing a relationship with a friend will be done the same but with different input for Add, Delete and Block
  --We need to pass username of second person and get his/her user_id to make the conection
SELECT user_id
FROM user_info
WHERE user_info.username = ?;

    --Add Friend //user_first_id < user_second_id
INSERT INTO user_relationship
VALUES(user_first_id, user_second_id, type );

    --Delete Friend
DELETE FROM user_relationship
WHERE user_first_id = ? AND user_second_id = ?;

    --Block Friend
UPDATE user_relationship
SET type = ?
WHERE user_first_id = ? AND user_second_id = ?;

--Fetch ALL Friends
SELECT user_first_id, user_second_id --friend's id could be any of this 2 and alternating 
FROM user_relationship
WHERE (user_first_id = ? or user_second_id = ?) AND type = 'friends'; --Both user's id are the person looking for his friends

--Fetch friend basic info //This is server side
SELECT username, display_name, profile_pic_url 
FROM user_info
WHERE user_id = ?; --This user id is the friends id 

--Fetch 1 Post from a Friend // But it can be any number of posts
SELECT *
FROM posts
WHERE user_id = ? 
ORDER  BY time_created DESC
LIMIT 1;

--Fetch ALL Comments from a Post
SELECT *
FROM comments
WHERE user_id = ? 
ORDER  BY time_created DESC
LIMIT 10;

--We might add groups or blocks for specific posts


--WARNING NEXT COMAND IS TO ERRASE ALL CONTENT IN THE DATABASE
DROP TABLE *;
