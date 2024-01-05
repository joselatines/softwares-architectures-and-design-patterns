from flask import jsonify

from models.movies import MoviesModel


class MoviesController:
    @staticmethod
    def get_all():
        movies = MoviesModel.get_all()
        return jsonify(movies)

    @staticmethod
    def get_one(id: str):
        movie_found, msg = MoviesModel.get_one(id)
        return (
            jsonify({"movie": movie_found, "message": msg})
            if movie_found
            else jsonify({"error": msg})
        )

    @staticmethod
    def create(title: str, genresList: list[str]):
        if not title or not genresList:
            return jsonify({"error": "Title and genre list are required fields"})

        movie_created, msg = MoviesModel.create(title, genresList)
        return jsonify({"message": msg}) if movie_created else jsonify({"error": msg})

    @staticmethod
    def edit(id: str, new_title: str, new_genresList: list[str]):
        movie, msg = MoviesModel.get_one(id)

        if not movie:
            return jsonify({"error": msg})

        movie_edited, msg = MoviesModel.edit(id, new_title, new_genresList)
        return jsonify({"message": msg}) if movie_edited else jsonify({"error": msg})

    @staticmethod
    def delete(id: str):
        movie_exists, msg = MoviesModel.get_one(id)

        if not movie_exists:
            return jsonify({"error": msg})

        movie_deleted, msg = MoviesModel.delete(id)
        return jsonify({"message": msg}) if movie_deleted else jsonify({"error": msg})
