import React, { useState, useEffect } from 'react';
import { APIDomain } from '../utils/APIDomain';
import CreateResourceModal from '../components/resource/CreateResourceModal';
import EditResourceModal from '../components/resource/EditResourceModal';
import DeleteResourceModal from '../components/resource/DeleteResourceModal';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

interface Resource {
    _id: string;
    title: string;
    description: string;
    url: string;
    category: string;
    image: string;
    author: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

const Resource: React.FC = () => {
    const [resources, setResources] = useState<Resource[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchResources = async () => {
        try {
            const response = await fetch(`${APIDomain}/resource`);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch resources');
            }

            setResources(data.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResources();
    }, []);

    const handleCreate = () => {
        setIsCreateModalOpen(true);
    };

    const handleEdit = (resource: Resource) => {
        setSelectedResource(resource);
        setIsEditModalOpen(true);
    };

    const handleDelete = (resource: Resource) => {
        setSelectedResource(resource);
        setIsDeleteModalOpen(true);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Resource List</h2>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <div className="flex justify-end items-center mb-4">
                <button 
                    onClick={handleCreate} 
                    className="bg-gray-900 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create Resource
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resources.map((resource) => (
                    <div key={resource._id} className="bg-white rounded-lg shadow-md p-4">
                        <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-2">{resource.description}</p>
                        <p className="text-blue-500 mb-2">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.url}
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 mb-2">Category: {resource.category}</p>
                        <p className="text-sm text-gray-500 mb-2">Author: {resource.author}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {resource.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="bg-green-700 text-gray-700 px-2 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button 
                                onClick={() => handleEdit(resource)} 
                                className="text-yellow-500 hover:text-yellow-600 transition-colors p-1"
                                title="Edit resource"
                            >
                                <FiEdit size={20} />
                            </button>
                            <button 
                                onClick={() => handleDelete(resource)} 
                                className="text-red-500 hover:text-red-600 transition-colors p-1"
                                title="Delete resource"
                            >
                                <RiDeleteBinLine size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modals */}
            <CreateResourceModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSuccess={() => {
                    fetchResources();
                    setIsCreateModalOpen(false);
                }}
            />

            {selectedResource && (
                <>
                    <EditResourceModal
                        isOpen={isEditModalOpen}
                        onClose={() => {
                            setIsEditModalOpen(false);
                            setSelectedResource(null);
                        }}
                        onSuccess={() => {
                            fetchResources();
                            setIsEditModalOpen(false);
                            setSelectedResource(null);
                        }}
                        resource={selectedResource}
                    />

                    <DeleteResourceModal
                        isOpen={isDeleteModalOpen}
                        onClose={() => {
                            setIsDeleteModalOpen(false);
                            setSelectedResource(null);
                        }}
                        onSuccess={() => {
                            fetchResources();
                            setIsDeleteModalOpen(false);
                            setSelectedResource(null);
                        }}
                        resource={selectedResource}
                    />
                </>
            )}
        </div>
    );
};

export default Resource;