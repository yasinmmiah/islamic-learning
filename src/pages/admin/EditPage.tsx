import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ContentService } from '../../services/contentService';
import toast from 'react-hot-toast';

interface EditPageProps {
  resourceType: 'arabic' | 'english' | 'numbers' | 'colors' | 'names' | 'duas';
}

const EditPage: React.FC<EditPageProps> = ({ resourceType }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { supabase } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const contentService = new ContentService(supabase);
  const isNew = id === 'new';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isNew) {
          // Set default template based on resource type
          let template: any = {};

          switch (resourceType) {
            case 'duas':
              template = {
                id: '',
                title: '',
                arabicText: '',
                transliteration: '',
                translation: '',
                category: 'Daily',
                occasion: '',
                audio: ''
              };
              break;

            case 'arabic':
              template = {
                id: '',
                position: 0,
                letter: '',
                name: '',
                englishName: '',
                transliteration: '',
                example: {
                  word: '',
                  transliteration: '',
                  meaning: '',
                  audio: ''
                },
                audio: ''
              };
              break;

            case 'english':
              template = {
                id: '',
                position: 0,
                letter: '',
                name: '',
                example: {
                  word: '',
                  image: '',
                  audio: ''
                },
                audio: ''
              };
              break;

            case 'numbers':
              template = {
                id: '',
                number: '',
                arabicNumber: '',
                name: '',
                arabicName: '',
                audio: '',
                arabicAudio: ''
              };
              break;

            case 'colors':
              template = {
                id: '',
                name: '',
                arabicName: '',
                transliteration: '',
                hexCode: '',
                example: {
                  word: '',
                  transliteration: '',
                  meaning: '',
                  image: '',
                  audio: ''
                },
                audio: ''
              };
              break;

            case 'names':
              template = {
                id: '',
                number: 0,
                name: '',
                arabicName: '',
                transliteration: '',
                meaning: '',
                explanation: '',
                audio: ''
              };
              break;
          }

          setData(template);
          setLoading(false);
          return;
        }

        // First try to get from Supabase
        const content = await contentService.getContentItem(resourceType, id!);
        
        if (content) {
          setData(content.data);
        } else {
          // If not in Supabase, get from static data
          let staticData;
          
          switch (resourceType) {
            case 'arabic':
              const { arabicAlphabet } = await import('../../data/arabicAlphabet');
              staticData = arabicAlphabet.find(letter => letter.id === id);
              break;
            case 'english':
              const { englishAlphabet } = await import('../../data/englishAlphabet');
              staticData = englishAlphabet.find(letter => letter.id === id);
              break;
            case 'numbers':
              const { numbers } = await import('../../data/numbers');
              staticData = numbers.find(num => num.id === id);
              break;
            case 'colors':
              const { colors } = await import('../../data/colors');
              staticData = colors.find(color => color.id === id);
              break;
            case 'names':
              const { allahNames } = await import('../../data/allahNames');
              staticData = allahNames.find(name => name.id === id);
              break;
            case 'duas':
              const { duas } = await import('../../data/duas');
              staticData = duas.find(dua => dua.id === id);
              break;
          }

          if (!staticData && !isNew) {
            toast.error('Item not found');
            navigate(`/admin/${resourceType}`);
            return;
          }
          setData(staticData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, resourceType, isNew, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isNew) {
        // Generate ID for new items
        const newId = data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 
                     data.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 
                     `${resourceType}-${Date.now()}`;
        data.id = newId;
      }

      await contentService.updateContent(resourceType, data.id, data);
      toast.success(isNew ? 'Created successfully' : 'Updated successfully');
      navigate(`/admin/${resourceType}`);
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  const updateNestedValue = (path: string[], value: any) => {
    setData(prevData => {
      const newData = { ...prevData };
      let current = newData;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const renderField = (key: string, value: any, path: string[] = []) => {
    if (key === 'created_at' || key === 'updated_at') {
      return null;
    }

    // Handle nested objects
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return (
        <div key={key} className="border rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
          </h3>
          {Object.entries(value).map(([subKey, subValue]) => 
            renderField(subKey, subValue, [...path, key])
          )}
        </div>
      );
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return (
        <div key={key} className="border rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
          </h3>
          {value.map((item, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newValue = [...value];
                  newValue[index] = e.target.value;
                  updateNestedValue([...path, key], newValue);
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const newValue = [...value, ''];
              updateNestedValue([...path, key], newValue);
            }}
            className="mt-2 px-4 py-2 bg-[var(--primary)]10 text-[var(--primary)] rounded-lg hover:bg-[var(--primary)]20"
          >
            Add Item
          </button>
        </div>
      );
    }

    // Special handling for specific field types
    const isArabicField = key.includes('arabic') || 
                         (key === 'name' && resourceType === 'arabic');
    
    const isColorField = key === 'hexCode';
    const isNumberField = key === 'number' || key === 'position';
    
    const fullPath = [...path, key];
    
    return (
      <div key={key} className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor={fullPath.join('.')}>
          {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
        </label>
        {isColorField ? (
          <input
            type="color"
            id={fullPath.join('.')}
            value={value as string}
            onChange={(e) => updateNestedValue(fullPath, e.target.value)}
            className="w-full h-10 px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
        ) : isNumberField ? (
          <input
            type="number"
            id={fullPath.join('.')}
            value={value as string}
            onChange={(e) => updateNestedValue(fullPath, e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
        ) : (
          <input
            type="text"
            id={fullPath.join('.')}
            value={value as string}
            onChange={(e) => updateNestedValue(fullPath, e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
              isArabicField ? 'text-right rtl' : ''
            }`}
            dir={isArabicField ? 'rtl' : 'ltr'}
          />
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isNew ? 'Add New' : 'Edit'} {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
        {Object.entries(data || {}).map(([key, value]) => renderField(key, value))}

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] disabled:opacity-50"
          >
            {loading ? 'Saving...' : (isNew ? 'Create' : 'Save Changes')}
          </button>
          
          <button
            type="button"
            onClick={() => navigate(`/admin/${resourceType}`)}
            className="px-6 py-2 bg-[var(--neutral-200)] text-[var(--neutral-700)] rounded-lg hover:bg-[var(--neutral-300)]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;