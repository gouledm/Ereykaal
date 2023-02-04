from flask import Flask

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["tgfdgdfgfd", "test2", "test3"]}

if __name__ == "__main__":oh ho
    app.run(debug=True)