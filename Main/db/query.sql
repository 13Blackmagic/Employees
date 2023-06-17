SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
```
I'm trying to get the movie name and the review for each movie. I'm getting the movie name but the review is null. I'm not sure what I'm doing wrong. I'm using SQLite3.

