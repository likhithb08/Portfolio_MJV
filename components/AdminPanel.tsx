
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, ProjectSchema } from '../types';
import { store } from '../lib/store';
import { X, Plus, Trash2, Link, Save } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
  onUpdate: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    client: '',
    url: '',
    results: '',
    type: 'direct',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSave = () => {
    const projectData = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: Date.now(),
      tags: formData.tags || []
    } as Project;

    const result = ProjectSchema.safeParse(projectData);
    if (!result.success) {
      setErrors(result.error.errors.map(e => e.message));
      return;
    }

    store.saveProject(result.data);
    onUpdate();
    setFormData({ title: '', client: '', url: '', results: '', type: 'direct', tags: [] });
    setErrors([]);
    alert("Project Vault Updated Successfully.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
    >
      <div className="w-full max-w-2xl glass p-8 rounded-[32px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-syne">Project Vault</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X /></button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40 tracking-widest font-bold">Project Title</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-purple-500 transition-colors outline-none" 
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40 tracking-widest font-bold">Client</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-purple-500 transition-colors outline-none" 
                value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase text-white/40 tracking-widest font-bold">Media URL (IG Reel or Direct MP4)</label>
            <div className="relative">
              <Link className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pl-10 focus:border-purple-500 transition-colors outline-none" 
                placeholder="https://..."
                value={formData.url} onChange={e => {
                  const url = e.target.value;
                  const type = url.includes('instagram.com') ? 'instagram' : 'direct';
                  setFormData({...formData, url, type});
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40 tracking-widest font-bold">Results (e.g. 1.2M Views)</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-purple-500 transition-colors outline-none" 
                value={formData.results} onChange={e => setFormData({...formData, results: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40 tracking-widest font-bold">Tags</label>
              <div className="flex gap-2">
                <input 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 focus:border-purple-500 transition-colors outline-none" 
                  value={tagInput} onChange={e => setTagInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && tagInput) {
                      setFormData({...formData, tags: [...(formData.tags || []), tagInput]});
                      setTagInput('');
                    }
                  }}
                />
                <button 
                  onClick={() => { if(tagInput) { setFormData({...formData, tags: [...(formData.tags||[]), tagInput]}); setTagInput(''); } }}
                  className="bg-white/10 p-3 rounded-xl hover:bg-white/20"
                ><Plus className="w-4 h-4"/></button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags?.map(t => (
                  <span key={t} className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    {t} <button onClick={() => setFormData({...formData, tags: formData.tags?.filter(tag => tag !== t)})}><X className="w-3 h-3"/></button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-sm">
              {errors.map((e, i) => <div key={i}>• {e}</div>)}
            </div>
          )}

          <button 
            onClick={handleSave}
            className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white transition-all shadow-xl"
          >
            <Save className="w-5 h-5" /> Push to Production
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
