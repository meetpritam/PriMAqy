'use client';

import React, { useState } from 'react';
import { InquiryType, ContactInquiryPayload } from '@/types/inquiries';
import { Button } from '@/components/ui/Button';
import { MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { buildWhatsAppContactUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

const inquiryOptions: InquiryType[] = [
  'General Inquiry',
  'Business Partnership',
  'Product Partnership',
  'Investor Inquiry',
  'Career Application',
  'Media / Press',
  'Community',
];

interface InquiryFormProps {
  defaultInquiryType?: InquiryType;
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function InquiryForm({ defaultInquiryType = 'General Inquiry', className = '' }: InquiryFormProps) {
  const [formData, setFormData] = useState<ContactInquiryPayload>({
    name: '',
    email: '',
    organization: '',
    inquiryType: defaultInquiryType,
    investmentInterest: '',
    areaOfInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'opening' | 'success'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.inquiryType) {
      newErrors.subject = 'Please select an inquiry subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('opening');
    setStatusMessage('Opening WhatsApp…');

    const org = (formData.organization || '').trim();
    const subjectLine = org
      ? `${formData.inquiryType} — ${org}`
      : formData.inquiryType;

    const whatsappUrl = buildWhatsAppContactUrl({
      name: formData.name,
      email: formData.email,
      subject: subjectLine,
      message: formData.message,
    });

    // Safely trigger WhatsApp click-to-chat URL launch
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    trackEvent('inquiry_submitted', { type: formData.inquiryType });

    setTimeout(() => {
      setStatus('success');
      setStatusMessage('WhatsApp opened with your pre-filled inquiry. Press Send inside WhatsApp to complete.');
    }, 600);
  };

  const handleReset = () => {
    setStatus('idle');
    setStatusMessage('');
    setErrors({});
  };

  return (
    <div className={`rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-8 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.06)] backdrop-blur-xl ${className}`}>
      {status === 'success' ? (
        <div className="space-y-4 text-center py-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">WhatsApp Launcher Active</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {statusMessage}
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={handleReset} variant="outline" size="sm" className="w-full sm:w-auto">
              Submit Another Message
            </Button>
            <a
              href={buildWhatsAppContactUrl({
                name: formData.name,
                email: formData.email,
                subject: formData.inquiryType,
                message: formData.message,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 transition-all shadow-xs"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Re-open WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                autoComplete="name"
                required
                placeholder="Enter full name"
                className={`w-full rounded-xl border ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                } px-4 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
              />
              {errors.name && (
                <p className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                autoComplete="email"
                required
                placeholder="you@company.com"
                className={`w-full rounded-xl border ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                } px-4 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
              />
              {errors.email && (
                <p className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Organization Input */}
            <div className="space-y-1.5">
              <label htmlFor="contact-organization" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                Organization / Company
              </label>
              <input
                id="contact-organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                autoComplete="organization"
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Inquiry Category / Subject */}
            <div className="space-y-1.5">
              <label htmlFor="contact-inquiry-type" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                Subject Category <span className="text-red-500">*</span>
              </label>
              <select
                id="contact-inquiry-type"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => {
                  setFormData({ ...formData, inquiryType: e.target.value as InquiryType });
                  if (errors.subject) setErrors({ ...errors, subject: undefined });
                }}
                className={`w-full rounded-xl border ${
                  errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                } px-4 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
              >
                {inquiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>
          </div>

          {/* Conditional Investor Stage */}
          {formData.inquiryType === 'Investor Inquiry' && (
            <div className="space-y-1.5">
              <label htmlFor="contact-investment-interest" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                Investment Interest & Stage
              </label>
              <input
                id="contact-investment-interest"
                name="investmentInterest"
                type="text"
                value={formData.investmentInterest}
                onChange={(e) => setFormData({ ...formData, investmentInterest: e.target.value })}
                placeholder="e.g. Pre-Seed / Seed Exploration"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 min-h-[44px] text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          )}

          {/* Message Textarea */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              required
              placeholder="How can we assist you?"
              className={`w-full rounded-xl border ${
                errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
              } px-4 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
            />
            {errors.message && (
              <p className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="emerald"
              size="lg"
              disabled={status === 'opening'}
              className="w-full justify-center min-h-[48px] text-base font-bold shadow-md bg-emerald-600 hover:bg-emerald-700 text-white border-0"
            >
              {status === 'opening' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Opening WhatsApp…</span>
                </>
              ) : (
                <>
                  <MessageCircle className="h-5 w-5 fill-current" />
                  <span>Send via WhatsApp</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
