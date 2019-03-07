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
    type enum('pending_first_second', 'pending_second_first','friends','block_first_second', 'block_second_first','block_both'),
    PRIMARY KEY(user_first_id, user_second_id)
);

--Create table for Posts and Messages

--Create table for Comments
