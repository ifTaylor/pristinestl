from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import json
import os

app = Flask(__name__)


# Configure Flask-Mail for sending emails
LOCAL = False
if LOCAL:
    with open('../mail.config.json') as mail_config:
        config_data = json.load(mail_config)
    app.config.update(config_data)

else:
    app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.environ.get('MAIL_PORT')
    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
    print(app.config['MAIL_USERNAME'])
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS')
    app.config['SENDER_EMAIL'] = os.environ.get('SENDER_EMAIL')

mail = Mail(app)


@app.route('/api/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.get_json()
            print(f'NEW CONTACT REQUEST: \n {data}')
            name = data['name']
            phone = data['phone'] if data['phone'] else ''
            email = data['email']
            message = data['message']

            if not name or not name:
                return jsonify({"error": "Missing required fields"}), 400

            if name == "TestAPI":
                print(f'{name} received.')
                return jsonify({"test": name + " received."}), 200

            sender_email = app.config['SENDER_EMAIL']

            msg = Message(
                f'Website Contact Request from {name}',
                sender=sender_email,
                recipients=[sender_email]
            )
            msg.body = f"Name: {name}\nPhone: {phone}\nEmail: {email}\nMessage: {message}"
            mail.send(msg)

            return 'Email sent successfully'
        except Exception as e:
            print(e)
            return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run()
