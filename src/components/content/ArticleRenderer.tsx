import React from 'react';

interface ArticleRendererProps {
  content: string;
  className?: string;
}

export function ArticleRenderer({ content, className = '' }: ArticleRendererProps) {
  const paragraphs = content.split('\n\n');

  return (
    <div className={`prose max-w-none space-y-6 ${className}`}>
      {paragraphs.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-extrabold tracking-tight text-slate-900 pt-4">
              {trimmed.replace('### ', '')}
            </h3>
          );
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-extrabold tracking-tight text-slate-900 pt-6 border-t border-slate-200/90">
              {trimmed.replace('## ', '')}
            </h2>
          );
        }

        if (trimmed.startsWith('$$\n') || trimmed.startsWith('$$')) {
          const formula = trimmed.replace(/\$\$/g, '').trim();
          return (
            <div key={index} className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center font-mono text-sm text-slate-900 shadow-xs">
              {formula}
            </div>
          );
        }

        return (
          <p key={index} className="text-base leading-relaxed text-slate-700 font-normal">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
