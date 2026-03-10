
import React, { useState, useRef } from 'react';
import { editCarImage, animateCarVideo } from '../services/gemini';

interface AILabProps {
  apiKeySelected: boolean;
  onSelectKey: () => void;
}

const AILab: React.FC<AILabProps> = ({ apiKeySelected, onSelectKey }) => {
  const [image, setImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'video'>('edit');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setEditedImage(null);
        setVideoUrl(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    try {
      const result = await editCarImage(image, prompt);
      setEditedImage(result);
    } catch (err) {
      alert("Failed to edit image. Ensure you have a valid API key.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnimate = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const result = await animateCarVideo(image, prompt || "Cinematic car movement", '16:9');
      setVideoUrl(result);
    } catch (err) {
      alert("Failed to generate video. Ensure you have a valid billing-enabled API key.");
    } finally {
      setLoading(false);
    }
  };

  if (!apiKeySelected) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-900/20 text-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter">AI LAB ACCESS</h1>
          <p className="text-zinc-400">Our innovative car visualization tools require a paid API key for generation. Please select your key to continue.</p>
          <button 
            onClick={onSelectKey}
            className="bg-red-800 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full w-full transition-transform hover:scale-105"
          >
            Select API Key
          </button>
          <p className="text-xs text-zinc-600">
            Learn about <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">Gemini API billing</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black italic mb-4 tracking-tighter">GERMAN HAUS <span className="text-red-700 uppercase">AI LAB</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Visualize your dream modifications. Use Gemini 2.5 and Veo to edit or animate your German car photos instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Controls Column */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 h-min space-y-8">
            <div>
              <label className="block text-sm font-bold text-zinc-500 mb-4 uppercase tracking-widest">1. Upload Car Photo</label>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-40 border-2 border-dashed border-zinc-700 hover:border-red-800 rounded-xl flex flex-col items-center justify-center gap-3 text-zinc-500 hover:text-red-600 transition-all bg-black/40"
              >
                {image ? (
                  <img src={image} className="h-full w-full object-cover rounded-xl" alt="Preview" />
                ) : (
                  <>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    <span className="font-bold">Select Image</span>
                  </>
                )}
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden accept="image/*" />
            </div>

            <div>
              <div className="flex bg-black rounded-lg p-1 mb-6 border border-zinc-800">
                <button 
                  onClick={() => setActiveTab('edit')}
                  className={`flex-1 py-2 rounded-md font-bold transition-all ${activeTab === 'edit' ? 'bg-red-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                >
                  Edit Image
                </button>
                <button 
                  onClick={() => setActiveTab('video')}
                  className={`flex-1 py-2 rounded-md font-bold transition-all ${activeTab === 'video' ? 'bg-red-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                >
                  Animate (Veo)
                </button>
              </div>

              <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">
                {activeTab === 'edit' ? '2. Transformation Prompt' : '2. Animation Style'}
              </label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={activeTab === 'edit' ? "e.g. 'Add a retro filter', 'Change color to matte red', 'Remove the background'" : "e.g. 'Cinematic drone shot flying over', 'Sunset lighting with lens flare'"}
                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:ring-1 focus:ring-red-800 outline-none h-32 resize-none mb-6"
              />

              <button 
                onClick={activeTab === 'edit' ? handleEdit : handleAnimate}
                disabled={loading || !image}
                className="w-full bg-red-800 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-3 uppercase italic tracking-tighter"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  activeTab === 'edit' ? 'Apply Edit' : 'Generate Video'
                )}
              </button>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800 p-4 aspect-video flex items-center justify-center overflow-hidden">
              {!image && !loading && (
                <div className="text-zinc-600 text-center">
                  <p className="font-bold text-xl uppercase tracking-widest mb-2 opacity-20">Preview Output</p>
                  <p className="text-sm">Waiting for upload...</p>
                </div>
              )}
              
              {loading && (
                <div className="text-center space-y-6 p-8">
                  <div className="w-16 h-16 border-4 border-red-800/20 border-t-red-700 rounded-full animate-spin mx-auto"></div>
                  <div className="animate-pulse space-y-2">
                    <p className="text-red-700 font-bold uppercase tracking-widest">Powering Up Neurons</p>
                    <p className="text-zinc-500 text-sm">Gemini is re-imagining your vehicle...</p>
                  </div>
                </div>
              )}

              {!loading && activeTab === 'edit' && editedImage && (
                <img src={editedImage} className="w-full h-full object-contain rounded-lg" alt="Edited result" />
              )}

              {!loading && activeTab === 'video' && videoUrl && (
                <video src={videoUrl} controls autoPlay loop className="w-full h-full object-contain rounded-lg shadow-2xl" />
              )}
              
              {!loading && image && !editedImage && !videoUrl && (
                <div className="relative group w-full h-full">
                  <img src={image} className="w-full h-full object-contain rounded-lg opacity-40" alt="Base" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-white font-black italic text-2xl uppercase tracking-tighter shadow-xl">Original Image Uploaded</p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h4 className="text-red-700 font-bold mb-2 text-sm uppercase">Tips for Image Editing</h4>
                <ul className="text-xs text-zinc-500 space-y-2">
                  <li>• Use clear, high-res side shots</li>
                  <li>• "Make the car midnight blue"</li>
                  <li>• "Replace rims with performance style"</li>
                  <li>• "Add rainy aesthetic to background"</li>
                </ul>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h4 className="text-red-700 font-bold mb-2 text-sm uppercase">Tips for Veo Video</h4>
                <ul className="text-xs text-zinc-500 space-y-2">
                  <li>• "Slow cinematic roll forward"</li>
                  <li>• "Hyper-lapse clouds above car"</li>
                  <li>• "Headlights turning on slowly"</li>
                  <li>• "Dramatic engine vibration"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;
