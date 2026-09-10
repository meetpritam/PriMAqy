'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function NewsletterForm({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate secure submission API delay
    setTimeout(() => {
      setStatus('success');
      trackEvent('newsletter_signup', { emailDomain: email.split('@')[1] });
      setEmail('');
    }, 800);
  };

  return (
    <div className={className}>
      {status === 'success' ? (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 font-medium">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
          <p className="text-sm">
            Thank you for subscribing! We&apos;ve added you to our newsletter list.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <Button type="submit" variant="gradient" disabled={status === 'loading'} className="w-full sm:w-auto shrink-0 min-h-[44px]">
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </Button>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
