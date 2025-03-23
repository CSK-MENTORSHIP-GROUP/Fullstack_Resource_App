import { Hono } from 'hono';
import { resourceController } from '../controllers/resource.controller';

const router = new Hono();

// CRUD Routes
router.post('/', resourceController.createResource);
router.get('/', resourceController.getAllResources);
router.get('/:id', resourceController.getResourceById);
router.put('/:id', resourceController.updateResource);
router.delete('/:id', resourceController.deleteResource);

export default router;
