import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { SpaceSelector } from './components/discovery/SpaceSelector';
import { StyleQuiz } from './components/discovery/StyleQuiz';
import { AIMaterialFinder } from './components/ai/AIMaterialFinder';
import { RoomVisualizer } from './components/visualizer/RoomVisualizer';
import { ProductShowcase } from './components/products/ProductShowcase';
import { HorizontalProjects } from './components/projects/HorizontalProjects';
import { MaterialBoard } from './components/board/MaterialBoard';
import { AskBuildstar } from './components/ai/AskBuildstar';
import { ConsultationModal } from './components/contact/ConsultationModal';

import { Product, SpaceCategory, StylePreference } from './types';
import { BUILDSTAR_PRODUCTS } from './data/products';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [askAIOpen, setAskAIOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [visualizerProductId, setVisualizerProductId] = useState('prod-eng-oak');
  const [savedProducts, setSavedProducts] = useState<Product[]>(() => [
    BUILDSTAR_PRODUCTS[0],
    BUILDSTAR_PRODUCTS[2],
    BUILDSTAR_PRODUCTS[5]
  ]);

  // Section Observer for Nav high-lighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['spaces', 'style-quiz', 'ai-finder', 'visualizer', 'products', 'projects', 'material-board'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSpace = (space: SpaceCategory) => {
    const visualizerEl = document.getElementById('visualizer');
    if (visualizerEl) {
      visualizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStyleComplete = (pref: StylePreference) => {
    const aiEl = document.getElementById('ai-finder');
    if (aiEl) {
      aiEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisualizeProduct = (productId: string) => {
    setVisualizerProductId(productId);
    const visualizerEl = document.getElementById('visualizer');
    if (visualizerEl) {
      visualizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveToBoard = (product: Product) => {
    if (!savedProducts.some((p) => p.id === product.id)) {
      setSavedProducts((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromBoard = (productId: string) => {
    setSavedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-slate-100 font-body selection:bg-[#C5A059] selection:text-black">
      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* FIXED NAVIGATION */}
      <Navigation
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenAskAI={() => setAskAIOpen(true)}
        savedBoardCount={savedProducts.length}
        activeSection={activeSection}
      />

      {/* MAIN SECTIONS */}
      <main>
        <HeroSection
          onExploreClick={() => {
            document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onFindMaterialClick={() => {
            document.getElementById('ai-finder')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <SpaceSelector onSelectSpace={handleSelectSpace} />

        <StyleQuiz onComplete={handleStyleComplete} />

        <AIMaterialFinder onVisualizingProduct={handleVisualizeProduct} />

        <RoomVisualizer
          initialProductId={visualizerProductId}
          onSaveToBoard={handleSaveToBoard}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        <ProductShowcase
          onVisualizeProduct={handleVisualizeProduct}
          onConsult={() => setConsultationOpen(true)}
        />

        <HorizontalProjects
          onExploreMaterialCategory={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onConsult={() => setConsultationOpen(true)}
        />

        <MaterialBoard
          savedProducts={savedProducts}
          onRemoveProduct={handleRemoveFromBoard}
          onOpenConsultation={() => setConsultationOpen(true)}
          onAddMore={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* FOOTER */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* AI ASSISTANT DRAWER */}
      <AskBuildstar
        isOpen={askAIOpen}
        onClose={() => setAskAIOpen(false)}
        onVisualizeProduct={handleVisualizeProduct}
        onConsult={() => setConsultationOpen(true)}
      />

      {/* CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
