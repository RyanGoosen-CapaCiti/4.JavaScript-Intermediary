/* server.js */

const cors = require('cors');

const next = require('next');

const Pusher = require('pusher');

const express = require('express');

const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();

const Sentiment = require('sentiment');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;

const app = next({ dev });

const handler = app.getRequestHandler();

const sentiment = new Sentiment();

// Ensure that your pusher credentials are properly set in the .env file

// Using the specified variables

const pusher = new Pusher({

  appId: process.env.PUSHER_APP_ID,

  key: process.env.PUSHER_APP_KEY,

  secret: process.env.PUSHER_APP_SECRET,

  cluster: process.env.PUSHER_APP_CLUSTER,

  encrypted: true

});

app.prepare()

  .then(() => {

    const server = express();

    server.use(cors());

    server.use(bodyParser.json());

    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('*', (req, res) => {

      return handler(req, res);

    });

    server.listen(port, err => {

      if (err) throw err;

      console.log();

    });

  })

  .catch(ex => {

    console.error(ex.stack);

    process.exit(1);

  });

  require('dotenv').config({ path: '.env' });

    const express = require('express');

    const bodyParser = require('body-parser');

    const cors = require('cors');

    const Chatkit = require('@pusher/chatkit-server');

    const dateFns = require('date-fns');

    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const chatHistory = { messages: [] };  

   server.post('/message', (req, res, next) => {

     const { user = null, message = '', timestamp = +new Date } = req.body;

     const sentimentScore = sentiment.analyze(message).score;    

     const chat = { user, message, timestamp, sentiment: sentimentScore };    

     chatHistory.messages.push(chat);

     pusher.trigger('chat-room', 'new-message', { chat });

   });

   server.post('/messages', (req, res, next) => {

     res.json({ ...chatHistory, status: 'success' });

   });  



    const app = express(``);

    const chatkit = new Chatkit.default({

      instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,

      key: process.env.CHATKIT_SECRET_KEY,

    });

    app.use(cors());

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/users', (req, res) => {

      const { username } = req.body;

      chatkit

        .createUser({

          id: username,

          name: username,

        })

        .then(() => {

          res.sendStatus(201);

        })

        .catch(err => {

          if (err.error === 'services/chatkit/user_already_exists') {

            console.log();

            res.sendStatus(200);

          } else {

            res.status(err.status).json(err);

          }

        });

    });

    app.post('/transcript', (req, res) => {

      const { roomId, email, name } = req.body;

      chatkit.fetchMultipartMessages({

        roomId,

        limit: 100,

      })

        .then(messages => {

          const t = constructTranscript(messages); 

          const msg = {

            to: email,

            from: 'noreply@fictionalservice.com',

            subject: 'Chat transcript',

            html: `

              <p>Dear ${name},</p> 

              <p>Thank you for taking the time to chat with us today. Below is a copy of your chat transcript for future reference.</p>

              <p><strong>Chat ${dateFns.format(new Date(), 'DD/MM/YYYY HH:mm')}</strong></p>

              <ul>

                ${t.join('')}

              </ul>

              <p>Thank you,</p>

              <p>Customer Care</p>

            `,

          }; 

          return sgMail.send(msg)

        })

        .then(() => {

          res.send("Success!");

        })

        .catch((err) => {

          console.error(err);

          res.status(500).send("An error occured");

        });

    }); 

    function constructTranscript(messages) {

        return messages.reverse().map(message => {

          return `

            <li className="message">

              <div>

                <span>[${dateFns.format(message.created_at, 'DD/MM/YYYY HH:mm')}]</span>

                <strong className="user-id">${message.user_id}:</strong>

                <span className="message-text">${message.parts[0].content}</span>

              </div>

            </li>

        });

    }

    app.set('port', process.env.PORT || 5200);

    const server = app.listen(app.get('port'), () => {

      console.log();

    });

