@app
auth-with-sms

@http
get / # show secret if logged in otherwise redirect to login page
get /login # show a form to enter phone number; successful submission redirects to /login?pin 
post /login # send sms event and redirect to the pin form
post /logout # clear session and start over
post /pin # check pin and maybe login

@events
send-pin
