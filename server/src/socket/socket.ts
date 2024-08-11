import { Server, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';

export default class HandleSocket {
    static async InitiateSocketIo(server: HttpServer) {
        const io = new Server(server, {
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'], // Specify allowed methods if needed
            }
        });

        io.on('connection', (socket: Socket) => {
            console.log('Socket connected successfully');
            console.log(socket.id, 'Socket');

            // Handle additional socket events here, e.g., message, disconnect
            socket.on('disconnect', () => {
                console.log('Socket disconnected');
            });
        });
    }
}
