import express from 'express';
import conversation from './conversation.route';
const router = express.Router();

const defaultRoutes = [
    //   {
    //     path: '/user',
    //     route: user,
    //   } ,
    {
        path: '/conversation',
        route: conversation,
    },
    //   {
    //     path: '/message',
    //     route: message,
    //   }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
