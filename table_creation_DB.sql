CREATE TABLE user_info
(
    user_id INT AUTO_INCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (user_id)
);


CREATE TABLE user_relationship
(
    user_first_id INT NOT NULL,
    user_second_id INT NOT NULL,
    type ENUM('pending_first_second', 'pending_second_first','friends','block_first_second', 'block_second_first','block_both') default NULL,
    PRIMARY KEY(user_first_id, user_second_id)
);


CREATE TABLE posts
(
    post_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    content VARCHAR(2000) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    date_created DATE NOT NULL,
    time_created TIMESTAMP NOT NULL,
    PRIMARY KEY(post_id),
    FOREIGN KEY(user_id) REFERENCES user_info(user_id) ON DELETE CASCADE
);

CREATE TABLE comments
(
    comment_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    content VARCHAR(1000),
    date_created DATE NOT NULL,
    time_created TIMESTAMP NOT NULL,
    PRIMARY KEY(comment_id),
    FOREIGN KEY(user_id) REFERENCES user_info(user_id) ON DELETE CASCADE,
    FOREIGN KEY(post_id) REFERENCES posts(post_id) ON DELETE CASCADE 
 );
 
 CREATE TABLE likes
 (
    like_id INT AUTO_INCREMENT
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY(like_id),
    FOREIGN KEY(post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES user_info(user_id) ON DELETE CASCADE   
  );
