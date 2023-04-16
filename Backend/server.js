const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const servicesRouter = require('./routes/serviceRouter');
const exampleRoute = require('./routes/exampleRoute');
const authRoutes = require('./routes/authRoutes');
const login = require('./routes/login');
const chatRouter = require('./routes/chatRouter');
const notifications= require('./routes/notifications')

const app = express();
const port = process.env.PORT || 3001;

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*', // Replace with your frontend origin for better security
  },
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 },
  })
);

// Routes
app.use('/example', exampleRoute);
app.use('/api/auth', authRoutes);
app.use('/api/auth', login);
app.use('/services', servicesRouter);
app.use('/chat', chatRouter);
app.use('/notifications', notifications);


// Socket.IO
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('joinChat', (data) => {
    const roomName = `${data.serviceId}_${data.seekerId}`;
    socket.join(roomName);
  });
  

  socket.on('sendMessage', (data) => {
    console.log("sending...." ,data)
    const { serviceId, seekerId, senderId, recipientId, message } = data;
    const roomName = `${serviceId}_${seekerId}`;
    // Broadcast the message to the recipient
    socket.to(roomName).emit('receiveMessage', data);
  });
  

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
