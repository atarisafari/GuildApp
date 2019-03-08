CREATE TABLE user_info
(
    user_id INT AUTO_INCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (user_id)
);


CREATE TABLE user_relationship
(
    user_first_id INT,
    user_second_id INT,
    type ENUM('pending_first_second', 'pending_second_first','friends','block_first_second', 'block_second_first','block_both') default NULL,
    PRIMARY KEY(user_first_id, user_second_id)
);

--Create table for Posts
CREATE TABLE post
(
    post_id INT AUTO_INCREMENT,
    user_id INT,
    content VARCHAR(2000) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    date_created DATE,
    time_created TIMESTAMP,
    PRIMARY KEY(post_id),
    FOREIGN KEY(user_id) REFERENCES user_info(user_id) ON DELETE CASCADE
);

--Create table for Comments
