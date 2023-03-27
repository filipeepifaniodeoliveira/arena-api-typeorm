import { Router } from 'express';
import { RoomController } from './controlers/RoomControllers';
import { RoomSubjectController } from './controlers/RoomSubjectControllers';
import { SubjectController } from './controlers/SubjectControllers';
import { VideoController } from './controlers/VideoControllers';

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/rooms', new RoomController().create);
routes.get('/rooms', new RoomController().list);
routes.post('/videos/:idRoom/create', new VideoController().create);
routes.post('/room/:idRoom/subject', new RoomSubjectController().roomSubject);

export default routes;