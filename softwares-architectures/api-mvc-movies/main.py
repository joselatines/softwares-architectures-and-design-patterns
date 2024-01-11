from flask import Flask, jsonify, request

from controllers.movies import MoviesController

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello World! Go to -> /movies to see magic ✨"


@app.route("/movies", methods=["GET", "POST"])
def movies():
    if request.method == "GET":
        return MoviesController.get_all()
    elif request.method == "POST":
        return create_movie(request)
    else:
        return invalid_method_response()


@app.route("/movies/<id>", methods=["GET", "PUT", "DELETE"])
def movies_id(id):
    if request.method == "GET":
        return MoviesController.get_one(id)
    elif request.method == "PUT":
        return edit_movie(id, request)
    elif request.method == "DELETE":
        return MoviesController.delete(id)
    else:
        return invalid_method_response()


def create_movie(request):
    data = request.get_json()
    if "title" in data and "genres" in data:
        return MoviesController.create(data["title"], data["genres"])
    else:
        return jsonify({"error": "Title and genres are required fields"}), 400


def edit_movie(id, request):
    data = request.get_json()
    if "title" in data and "genres" in data:
        return MoviesController.edit(id, data["title"], data["genres"])
    else:
        return jsonify({"error": "Title and genres are required fields"}), 400


def invalid_method_response():
    return jsonify({"error": "Invalid method"}), 405


if __name__ == "__main__":
    app.run(debug=True)
