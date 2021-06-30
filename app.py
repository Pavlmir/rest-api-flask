from flask import Flask, jsonify, request, render_template

# instantiate the app
app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True

tutorials = [
    {
        'title': 'Video #1. Intro',
        'description': 'GET, POST routes'
    },
    {
        'title': 'Video #2. More features',
        'description': 'PUT, DELETE routes'
    }
]


@app.route('/', methods=['GET'])
def start():
    return render_template('index.html', tutorials=tutorials)


@app.route('/tutorials', methods=['GET'])
def get_list():
    return jsonify(tutorials)


@app.route('/tutorials', methods=['POST'])
def update_list():
    name = request.form['name']
    phone = request.form['phone']
    email = request.form['email']
    message = request.form['message']
    tutorials.append({"name": name, "phone": phone, "email": email, "message": message})
    return render_template('index.html', tutorials=tutorials)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
