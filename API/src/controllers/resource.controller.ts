import { Context } from 'hono';
import Resource, { IResource } from '../models/resource.model';

export const resourceController = {
  // Create a new resource
  async createResource(c: Context) {
    try {
      const body = await c.req.json();
      const resource = new Resource(body);
      await resource.save();
      return c.json({ success: true, data: resource }, 201);
    } catch (error: any) {
      return c.json({ success: false, error: error.message }, 400);
    }
  },

  // Get all resources
  async getAllResources(c: Context) {
    try {
      const resources = await Resource.find();
      return c.json({ success: true, data: resources });
    } catch (error: any) {
      return c.json({ success: false, error: error.message }, 500);
    }
  },

  // Get a single resource by ID
  async getResourceById(c: Context) {
    try {
      const { id } = c.req.param();
      const resource = await Resource.findById(id);
      if (!resource) {
        return c.json({ success: false, message: 'Resource not found' }, 404);
      }
      return c.json({ success: true, data: resource });
    } catch (error: any) {
      return c.json({ success: false, error: error.message }, 500);
    }
  },

  // Update a resource
  async updateResource(c: Context) {
    try {
      const { id } = c.req.param();
      const body = await c.req.json();
      const resource = await Resource.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true, runValidators: true }
      );
      if (!resource) {
        return c.json({ success: false, message: 'Resource not found' }, 404);
      }
      return c.json({ success: true, data: resource });
    } catch (error: any) {
      return c.json({ success: false, error: error.message }, 400);
    }
  },

  // Delete a resource
  async deleteResource(c: Context) {
    try {
      const { id } = c.req.param();
      const resource = await Resource.findByIdAndDelete(id);
      if (!resource) {
        return c.json({ success: false, message: 'Resource not found' }, 404);
      }
      return c.json({ success: true, message: 'Resource deleted successfully' });
    } catch (error: any) {
      return c.json({ success: false, error: error.message }, 500);
    }
  }
};
