import sqlite3
import uuid


class MoviesModel:
    db = "movies.db"

    @staticmethod
    def initialize_database():
        # Create the movies table if it doesn't exist
        with sqlite3.connect(MoviesModel.db) as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS movies (
                    id TEXT PRIMARY KEY,
                    title TEXT,
                    genres TEXT
                )
            """
            )
            conn.commit()

    @staticmethod
    def get_all():
        MoviesModel.initialize_database()
        with sqlite3.connect(MoviesModel.db) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM movies")
            movies = cursor.fetchall()
        return movies

    @staticmethod
    def get_one(id: str):
        MoviesModel.initialize_database()
        with sqlite3.connect(MoviesModel.db) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM movies WHERE id=?", (id,))
            movie_found = cursor.fetchone()

        if movie_found:
            return movie_found, "Movie Found"
        else:
            return None, "Movie not found"

    @staticmethod
    def create(title: str, genresList: list[str]):
        try:
            MoviesModel.initialize_database()
            id = str(uuid.uuid4())
            genres = "|".join(genresList)
            with sqlite3.connect(MoviesModel.db) as conn:
                cursor = conn.cursor()
                cursor.execute(
                    "INSERT INTO movies VALUES (?, ?, ?)", (id, title, genres)
                )
                conn.commit()

        except Exception as e:
            return False, f"Something went wrong creating the movie: {str(e)}"
        return True, f"Movie created with id {id}"

    @staticmethod
    def edit(id: str, new_title: str, new_genresList: list[str]):
        try:
            MoviesModel.initialize_database()
            new_genres = "|".join(new_genresList)
            with sqlite3.connect(MoviesModel.db) as conn:
                cursor = conn.cursor()
                cursor.execute(
                    "UPDATE movies SET title=?, genres=? WHERE id=?",
                    (new_title, new_genres, id),
                )
                conn.commit()

        except Exception as e:
            return False, f"Something went wrong editing the movie: {str(e)}"
        return True, f"Movie with id {id} edited"

    @staticmethod
    def delete(id: str):
        try:
            MoviesModel.initialize_database()
            with sqlite3.connect(MoviesModel.db) as conn:
                cursor = conn.cursor()
                cursor.execute("DELETE FROM movies WHERE id=?", (id,))
                conn.commit()

        except Exception as e:
            return False, f"Something went wrong deleting the movie: {str(e)}"

        return True, f"Movie deleted"
    
    @staticmethod
    def add_dummy_movies():
        dummy_data = [
            {"title": "Dummy Movie 1", "genres": ["Action", "Adventure"]},
            {"title": "Dummy Movie 2", "genres": ["Comedy", "Drama"]},
            {"title": "Dummy Movie 3", "genres": ["Thriller", "Mystery"]},
            {"title": "Dummy Movie 4", "genres": ["Sci-Fi", "Fantasy"]},
            {"title": "Dummy Movie 5", "genres": ["Horror", "Suspense"]},
            {"title": "Dummy Movie 6", "genres": ["Romance", "Comedy"]},
            {"title": "Dummy Movie 7", "genres": ["Animation", "Family"]},
            {"title": "Dummy Movie 8", "genres": ["Documentary", "History"]},
            {"title": "Dummy Movie 9", "genres": ["Crime", "Action"]},
            {"title": "Dummy Movie 10", "genres": ["War", "Adventure"]}
        ]

        for data in dummy_data:
            title = data["title"]
            genres = data["genres"]
            success, message = MoviesModel.create(title, genres)
            if success:
                print(message)
            else:
                print(f"Error: {message}")
