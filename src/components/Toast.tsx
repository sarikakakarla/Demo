import React from 'react';
import { CheckCircle, AlertTriangle, Info, XCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => {
        let icon = <Info size={20} className="text-cyan-400" />;
        let toastClass = 'toast-info';

        if (toast.type === 'success') {
          icon = <CheckCircle size={20} style={{ color: '#10B981' }} />;
          toastClass = 'toast-success';
        } else if (toast.type === 'warning') {
          icon = <AlertTriangle size={20} style={{ color: '#F59E0B' }} />;
          toastClass = 'toast-warning';
        } else if (toast.type === 'error') {
          icon = <XCircle size={20} style={{ color: '#F43F5E' }} />;
          toastClass = 'toast-error';
        }

        return (
          <div key={toast.id} className={`toast ${toastClass}`}>
            <div style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '2px' }}>
                {toast.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{toast.message}</div>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              style={{
                background: 'transparent',
                color: '#64748B',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
