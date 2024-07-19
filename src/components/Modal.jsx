import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ width = 30, title, children, open, onClose }) {
  
  useEffect(() => {
    const handlePressEsc = e => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.addEventListener('keydown', handlePressEsc);
    return () => document.removeEventListener('keydown', handlePressEsc);
  }, [onClose]);

  return (
    <>
      {open &&
        createPortal(
          <>
            <div className="fixed inset-0 z-30"></div>
            <div className="fixed inset-0 z-40" onMouseDown={onClose}>
              <div className="flex justify-center items-center min-h-screen">
                <div
                  className="backdrop-blur-md bg-black pb-5 bg-opacity-30 border border-slate-600 rounded-lg shadow-lg"
                  style={{ width: `${width}rem` }}
                  onMouseDown={e => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center pt-9 pb-4">
                    <button className="invisible">&#10005;</button>
                    <h5 className="text-4xl font-bold">
                      {title}
                    </h5>
                    <button className="invisible">&#10005;</button>
                  </div>
                  <div className="p-4">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.getElementById('modal')
        )
      }
    </>
  );
}
