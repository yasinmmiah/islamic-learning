import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { shapes } from '../../data/shapes';
import { useAuth } from '../../context/AuthContext';
import { ContentService } from '../../services/contentService';
import toast from 'react-hot-toast';

const ShapesAdminPage: React.FC = () => {
  const navigate = useNavigate();
  const { supabase } = useAuth();
  const [loading, setLoading] = useState(true);
  const [shapesData, setShapesData] = useState(shapes);
  const contentService = new ContentService(supabase);

  useEffect(() => {
    const loadShapes = async () => {
      try {
        const content = await contentService.getContent('shapes');
        if (content.length > 0) {
          setShapesData(content.map(item => item.data));
        }
      } catch (error) {
        console.error('Error loading shapes:', error);
        toast.error('Failed to load shapes');
      } finally {
        setLoading(false);
      }
    };

    loadShapes();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this shape?')) {
      try {
        await contentService.deleteContent('shapes', id);
        setShapesData(prev => prev.filter(shape => shape.id !== id));
        toast.success('Shape deleted successfully');
      } catch (error) {
        console.error('Error deleting shape:', error);
        toast.error('Failed to delete shape');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Shapes</h1>
        <button
          onClick={() => navigate('/admin/shapes/new')}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
        >
          <Plus size={20} />
          Add New Shape
        </button>
      </div>

      <div className="grid gap-6">
        {shapesData.map((shape) => (
          <div
            key={shape.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={shape.image}
                    alt={shape.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{shape.name}</h2>
                    <p className="text-[var(--neutral-600)]">{shape.arabicName}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/shapes/${shape.id}`)}
                    className="p-2 text-[var(--primary)] hover:bg-[var(--primary)]10 rounded-lg"
                    title="Edit"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(shape.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    title="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Transliteration:</strong> {shape.transliteration}</p>
                  <p><strong>Sides:</strong> {shape.sides}</p>
                </div>
                <div>
                  <p><strong>Description:</strong> {shape.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapesAdminPage;