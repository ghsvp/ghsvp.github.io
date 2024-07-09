import smtplib
from email.mime.text import MIMEText

from firebase_admin import initialize_app
from firebase_functions import https_fn, options

initialize_app()

@https_fn.on_request(
    cors=options.CorsOptions(
        cors_origins=[r"ghsvp\.org"],
        cors_methods=["get", "post", "options"],
    )
)
def contact_us(req: https_fn.Request) -> https_fn.Response:
    if req.method != "POST" or req.headers["content-type"] != "application/json":
        return https_fn.Response(status=400)

    name = req.json["name"]
    sender_email = req.json["email"]
    message = req.json["message"]

    contact = ["meheksaha101@gmail.com", "cao2006721@gmail.com"]

    msg = MIMEText(message)
    msg["Subject"] = f"Contact from {name} ({sender_email})"
    msg["From"] = "cao2006721@gmail.com"
    msg["To"] = ", ".join(contact)

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login("cao2006721@gmail.com", "pyxqptrhnqqlolyu")
        server.sendmail("cao2006721@gmail.com", contact, msg.as_string())

    return https_fn.Response(status=200)
